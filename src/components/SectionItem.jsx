import React, { useEffect, useRef, useState } from 'react'

const SectionItem = ({ title, subtitle, image }) => {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="backdrop-blur-xl bg-white/80 dark:bg-white/70 rounded-2xl p-6 md:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-transform duration-300 hover:-translate-y-1">
        <h3 className="text-2xl md:text-[2rem] font-semibold text-gray-900 drop-shadow-sm">{title}</h3>
        <p className="mt-3 text-[1.1rem] text-gray-700">{subtitle}</p>
      </div>
      <div className="h-[260px] md:h-[400px] w-full overflow-hidden rounded-2xl shadow-xl border border-white/30">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-105 hover:brightness-110"
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default SectionItem
