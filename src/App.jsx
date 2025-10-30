import React, { useMemo, useState } from 'react'
import Hero from './components/Hero'
import LanguageToggle from './components/LanguageToggle'
import Section from './components/Section'

function App() {
  const [lang, setLang] = useState('es')
  const t = useMemo(
    () => ({
      es: {
        title: 'Turismo a Barcelona',
        sections: {
          food: 'Comida',
          culture: 'Cultura',
          landmarks: 'Monumentos',
          festivals: 'Festivales',
          sports: 'Deportes',
        },
        content: {
          food: [
            {
              title: 'Paella',
              subtitle:
                'Arroz con mariscos o carne, cocinado con azafrán y servido caliente. — Clásico español.',
              image:
                'https://images.unsplash.com/photo-1565195162883-385b216ae93d?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Tapas',
              subtitle:
                'Pequeñas porciones como patatas bravas o jamón, ideales para compartir.',
              image:
                'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Crema Catalana',
              subtitle:
                'Postre típico con base de crema y azúcar caramelizado encima.',
              image:
                'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          culture: [
            {
              title: 'Arquitectura modernista',
              subtitle:
                'Inspirada por Gaudí, combina arte, color y formas naturales únicas.',
              image:
                'https://images.unsplash.com/photo-1545060894-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Idioma catalán',
              subtitle:
                'Lengua cooficial junto al español, símbolo de identidad regional.',
              image:
                'https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Vida callejera',
              subtitle:
                'Música, arte y cafés animan las calles día y noche.',
              image:
                'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          landmarks: [
            {
              title: 'Sagrada Familia',
              subtitle:
                'Basílica inacabada de Gaudí, ícono de Barcelona y maravilla arquitectónica.',
              image:
                'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Parc Güell',
              subtitle:
                'Parque colorido lleno de mosaicos, esculturas y vistas panorámicas.',
              image:
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'La Rambla',
              subtitle:
                'Famoso paseo lleno de tiendas, artistas callejeros y vida local.',
              image:
                'https://images.unsplash.com/photo-1526404428533-381b5ad3a0d1?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          festivals: [
            {
              title: 'La Mercè',
              subtitle:
                'Gran fiesta de la ciudad con desfiles, fuegos y conciertos.',
              image:
                'https://images.unsplash.com/photo-1492683962492-deef0ec456c7?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Sant Jordi',
              subtitle:
                'Día del libro y la rosa, símbolo del amor y la cultura.',
              image:
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Carnaval de Sitges',
              subtitle:
                'Desfiles coloridos y trajes vibrantes cerca de Barcelona.',
              image:
                'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          sports: [
            {
              title: 'Fútbol (FC Barcelona)',
              subtitle:
                'Pasión local; el Camp Nou es el estadio más icónico.',
              image:
                'https://images.unsplash.com/photo-1547956123-1b33adf4a7e6?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Ciclismo',
              subtitle:
                'Muy popular por su clima, paisajes y rutas de montaña.',
              image:
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Vela',
              subtitle:
                'Actividad común en la costa mediterránea, perfecta para amantes del mar.',
              image:
                'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop',
            },
          ],
        },
      },
      en: {
        title: 'Tourism in Barcelona',
        sections: {
          food: 'Food',
          culture: 'Culture',
          landmarks: 'Landmarks',
          festivals: 'Festivals',
          sports: 'Sports',
        },
        content: {
          food: [
            {
              title: 'Paella',
              subtitle:
                'Rice dish with seafood or meat, cooked with saffron — a Spanish classic.',
              image:
                'https://images.unsplash.com/photo-1565195162883-385b216ae93d?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Tapas',
              subtitle:
                'Small dishes like patatas bravas or ham, perfect for sharing with friends.',
              image:
                'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Crema Catalana',
              subtitle:
                'Traditional dessert with creamy custard base and caramelized sugar topping.',
              image:
                'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          culture: [
            {
              title: 'Modernist architecture',
              subtitle:
                'Gaudí-inspired design blending art, color, and unique natural forms.',
              image:
                'https://images.unsplash.com/photo-1545060894-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Catalan language',
              subtitle:
                'Co-official with Spanish and a symbol of strong regional identity.',
              image:
                'https://images.unsplash.com/photo-1542641728-6ca359b085f4?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Street life',
              subtitle:
                'Music, art, and lively cafés bring the city to life day and night.',
              image:
                'https://images.unsplash.com/photo-1498654200943-1088dd4438ae?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          landmarks: [
            {
              title: 'Sagrada Familia',
              subtitle:
                "Gaudí's unfinished basilica — an architectural wonder and city symbol.",
              image:
                'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Park Güell',
              subtitle:
                'Colorful park filled with mosaics, sculptures, and panoramic views.',
              image:
                'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'La Rambla',
              subtitle:
                'Famous boulevard with shops, street performers, and local energy.',
              image:
                'https://images.unsplash.com/photo-1526404428533-381b5ad3a0d1?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          festivals: [
            {
              title: 'La Mercè',
              subtitle:
                "City's biggest festival with parades, fireworks, and music events.",
              image:
                'https://images.unsplash.com/photo-1492683962492-deef0ec456c7?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Sant Jordi',
              subtitle:
                'Book and rose day — a celebration of love and culture in Catalonia.',
              image:
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Sitges Carnival',
              subtitle:
                'Colorful parades and vibrant costumes in the nearby town of Sitges.',
              image:
                'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1600&auto=format&fit=crop',
            },
          ],
          sports: [
            {
              title: 'Football (FC Barcelona)',
              subtitle: 'Local passion; Camp Nou is the most iconic stadium.',
              image:
                'https://images.unsplash.com/photo-1547956123-1b33adf4a7e6?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Cycling',
              subtitle:
                'Popular for its weather, scenery, and mountain biking routes.',
              image:
                'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop',
            },
            {
              title: 'Sailing',
              subtitle:
                'Common on the Mediterranean coast — perfect for sea lovers.',
              image:
                'https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1600&auto=format&fit=crop',
            },
          ],
        },
      },
    }),
    []
  )

  const gradients = {
    food: 'linear-gradient(135deg, #FFD194, #D1913C)',
    culture: 'linear-gradient(135deg, #A18CD1, #FBC2EB)',
    landmarks: 'linear-gradient(135deg, #89F7FE, #66A6FF)',
    festivals: 'linear-gradient(135deg, #F6D365, #FDA085)',
    sports: 'linear-gradient(135deg, #84FAB0, #8FD3F4)',
  }

  const current = t[lang]

  return (
    <div className="min-h-screen w-full font-inter text-white">
      <LanguageToggle lang={lang} onToggle={() => setLang((v) => (v === 'es' ? 'en' : 'es'))} />

      <Hero title={current.title} />

      <main>
        <Section
          id="food"
          title={`🍴 ${current.sections.food}`}
          items={current.content.food}
          gradient={gradients.food}
        />
        <Section
          id="culture"
          title={`🎭 ${current.sections.culture}`}
          items={current.content.culture}
          gradient={gradients.culture}
        />
        <Section
          id="landmarks"
          title={`🏛️ ${current.sections.landmarks}`}
          items={current.content.landmarks}
          gradient={gradients.landmarks}
        />
        <Section
          id="festivals"
          title={`🎉 ${current.sections.festivals}`}
          items={current.content.festivals}
          gradient={gradients.festivals}
        />
        <Section
          id="sports"
          title={`⚽ ${current.sections.sports}`}
          items={current.content.sports}
          gradient={gradients.sports}
        />
      </main>

      <footer className="bg-black text-white/70 text-sm py-10 text-center">
        <p>
          {lang === 'es'
            ? 'Inspirado por la vibrante cultura de Barcelona. Imágenes de Unsplash.'
            : 'Inspired by Barcelona’s vibrant culture. Images from Unsplash.'}
        </p>
      </footer>
    </div>
  )
}

export default App
