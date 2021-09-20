import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T): T => {
  const previousValue = useRef<T>(value);

  useEffect(() => {
    previousValue.current = value;
  });

  return previousValue.current;
};