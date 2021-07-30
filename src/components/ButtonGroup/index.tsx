import React from 'react';
import { ButtonProps } from '../Button/interface';
import { ButtonGroupProps, ButtonGroupState } from './interface';
import './style.css';

class ButtonGroup extends React.Component<ButtonGroupProps, ButtonGroupState> {
  render() {
    const { children, direction, selected, onClick } = this.props;
    const actualOnClick = onClick ? onClick : () => {};
    const actualDirection = direction ? direction : 'row';

    return (
      <div className={`button-group ${actualDirection}`}>
        {
          React.Children.map(children as React.ReactElement<ButtonProps>[], (child, index) => {
            return React.isValidElement(child)
              ? React.cloneElement(child, {
                className: `button-group-btn ${selected === index ? 'selected' : ''}`,
                onClick: () => {
                  console.log('child override index:', index);
                  actualOnClick(index)
                },
              })
              : child;
          })
        }
      </div>
    )
  }
}

export default ButtonGroup;