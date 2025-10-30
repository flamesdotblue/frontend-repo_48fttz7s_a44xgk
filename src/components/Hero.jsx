import React from 'react'
import Spline from '@splinetool/react-spline'

const Hero = ({ title }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for contrast over the Spline scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

      {/* Centered Title */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-5xl">
          <h1 className="text-white drop-shadow-2xl font-semibold leading-tight" style={{ fontSize: '5rem' }}>
            {title}
          </h1>
          <p className="mt-6 text-white/80 text-lg">
            Barcelona: arte, modernismo y mar Mediterráneo
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
