import { useCallback, useRef} from 'react';

type CallbackFunction = (args?: any) => void;

export default function useDebounce(callback: CallbackFunction, delay: number): CallbackFunction {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return useCallback((args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(args);
    }, delay);
  }, [callback, delay]);
}