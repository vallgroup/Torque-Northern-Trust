import { useEffect, useRef } from "react";

// Taken from https://overreacted.io/making-setinterval-declarative-with-react-hooks/

export function useInterval(callback, delay, condition) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      // checking to see if condition is met then clearing interval so interval stops
      if (condition) {
        clearInterval(id);
      }
      return () => clearInterval(id);
    }
  }, [delay, condition]);
}
