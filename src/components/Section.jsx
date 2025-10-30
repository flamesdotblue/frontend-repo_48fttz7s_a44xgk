import React from 'react'
import SectionItem from './SectionItem'

const Section = ({ id, title, items, gradient }) => {
  return (
    <section id={id} className="relative min-h-screen w-full py-20 md:py-28">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: gradient,
        }}
      />

      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="mb-12 md:mb-16">
          <h2 className="text-white drop-shadow-2xl font-semibold leading-tight" style={{ fontSize: '3.5rem' }}>
            {title}
          </h2>
        </div>

        <div className="space-y-16 md:space-y-20">
          {items.map((item, idx) => (
            <SectionItem key={idx} title={item.title} subtitle={item.subtitle} image={item.image} />
          ))}
        </div>
      </div>

      {/* Soft vignette edges */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10" />
    </section>
  )
}

export default Section
