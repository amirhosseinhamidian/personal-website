export default function GradientTitleH2({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2
      className={`w-fit bg-gradient-title-light bg-clip-text font-digisarvenaz text-2xl font-bold text-transparent dark:bg-gradient-title-dark xs:text-3xl lg:text-4xl xl:text-5xl ${className}`}
    >
      {text}
    </h2>
  );
}
