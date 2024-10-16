import { ref, onUnmounted, type Ref, watch } from "vue";

interface UseCountdown {
  timeLeft: Ref<number>;
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export function useCountdown(seconds: Ref<number>): UseCountdown {
  const timeLeft = ref(Math.round(seconds.value));
  let interval: ReturnType<typeof setInterval>;

  watch(seconds, (newV) => {
    stop();
    timeLeft.value = newV;
  });

  onUnmounted(() => {
    stop();
  });

  // Functions
  const start = () => {
    interval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value -= 1;
      } else {
        clearInterval(interval);
      }
    }, 1000);
  };

  const stop = () => {
    clearInterval(interval);
  };

  const reset = () => {
    timeLeft.value = seconds.value;
  };
  // Functions END

  return { timeLeft, start, stop, reset };
}
