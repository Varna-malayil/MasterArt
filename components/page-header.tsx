interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
      {backgroundImage ? (
        <>
          <div
            className="absolute inset-0 bg-repeat opacity-50"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundRepeat: "repeat",
              backgroundSize: "auto",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/20" />
      )}

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
