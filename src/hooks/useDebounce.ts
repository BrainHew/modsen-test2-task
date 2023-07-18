import { useCallback, useRef } from "react";

type CallbackFunction = () => void;

export default function useDebounce(callback: CallbackFunction, delay: number): CallbackFunction {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debouncedCallback = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  return debouncedCallback;
};