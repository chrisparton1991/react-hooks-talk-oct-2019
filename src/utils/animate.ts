function doAnimate(durationMs: number, update: (progress: number) => void) {
  return new Promise(resolve => {
    const start = Date.now();

    const step = () => {
      const progress = Math.min(1, (Date.now() - start) / durationMs);
      update(progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    };

    step();
  });
}

export const animate = doAnimate;
