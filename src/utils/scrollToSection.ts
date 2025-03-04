export const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (!section) return;

  const targetPosition = section.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const duration = 1200; // کل زمان انیمیشن (1.2 ثانیه)

  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const animation = (currentTime: number) => {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // مقدار بین 0 و 1

    const easedProgress = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * easedProgress);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};
