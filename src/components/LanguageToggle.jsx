import React from 'react'

const LanguageToggle = ({ lang, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      aria-label={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
      className="fixed top-4 right-4 z-20 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-colors shadow-lg border border-white/40 text-white font-medium px-4 py-2 rounded-full"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}

export default LanguageToggle
