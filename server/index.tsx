import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Route, StaticRouter, Switch } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import serialize from 'serialize-javascript';
import AboutPage from '../src/components/AboutPage';
import HomePage from '../src/components/HomePage';
import { anotherMiddleware } from '../src/store/middleware/anotherMiddleware';
import { customMiddleware } from '../src/store/middleware/customMiddleware';
import { rootReducer } from '../src/store/reducers/rootReducer';

const app = express();

const htmlFile = path.join(__dirname, '../build/index.html')
const htmlContent = fs.readFileSync(htmlFile, { encoding: 'utf-8' });
const initialState = {
  users: ['Richard', 'Konstantin'],
  fruits: ['apple', 'avocado oho', '</script><script>window.confirm()</script>']
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(customMiddleware, anotherMiddleware))
);

app.use('/public', express.static('build'))

app.get('*', (req, res) => {
  const reactComponentsString = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}>
        <Switch>
          <Route component={AboutPage} path="/about" />
          <Route component={HomePage} path="/" />
        </Switch>
      </StaticRouter>
    </Provider>
  );

  res.send(
    htmlContent
      .replace(
        '<div id="root"></div>',
        `<div id="root">${reactComponentsString}</div>`
      )
      .replace(
        'window.initialState=null',
        `window.initialState=${serialize(initialState)}`
      )
  );
});

app.listen(7777);