export default function GradientTitleH1({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h1
      className={`bg-gradient-title-light bg-clip-text font-digisarvenaz text-xl font-bold text-transparent dark:bg-gradient-title-dark xs:text-2xl md:text-4xl xl:text-5xl ${className}`}
    >
      {text}
    </h1>
  );
}
