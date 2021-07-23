import React from 'react';
import { MyReactMemoProps } from './interface';

const MyReactMemo: React.FC<MyReactMemoProps> = ({ name, address }) => {
  console.log('MyReactMemo render');
  return (
    <>
      <h1>My React Memo</h1>
      <h2>Name: {name}</h2>
      <h3>City: {address.city}</h3>
      <h3>State: {address.state}</h3>
    </>
  );
};

export default React.memo<MyReactMemoProps>(MyReactMemo, (prevProps, nextProps) => {
  return prevProps.name === nextProps.name &&
    prevProps.address.city === nextProps.address.city &&
    prevProps.address.state === nextProps.address.state;
});