import { useEffect, useRef } from "react";

import { IFetchBooksParams } from "./useSearch";

// eslint-disable-next-line no-unused-vars
type CallbackFunction = (params: IFetchBooksParams) => Promise<void>;

function useDebounce(
  callback: CallbackFunction,
  delay: number,
): CallbackFunction {
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  function debouncedFunction(params: IFetchBooksParams): Promise<void> {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    return new Promise<void>((resolve) => {
      timer.current = setTimeout(() => {
        resolve(callback(params));
      }, delay);
    });
  }

  return debouncedFunction;
}

export default useDebounce;
