export default function PageHeader({ title, subtitle, backgroundImage }) {
  return (
    <section className="relative h-96 overflow-hidden">
      {backgroundImage && (
        <>
          <div className="absolute inset-0">
            <img src={backgroundImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">{title}</h1>
          {subtitle && <p className="text-xl text-gray-200 text-pretty leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    </section>
  )
}
