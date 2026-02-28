import Link from 'next/link';
import { PLANS } from '@/types';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center px-8 py-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">🦷 DentVoice</span>
        </div>
        <div className="flex gap-4">
          <Link href="/login" className="px-4 py-2 rounded-lg hover:bg-white/10 transition">Zaloguj się</Link>
          <Link href="/register" className="px-4 py-2 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">Wypróbuj za darmo</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center px-8 py-20 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">Automatyczna recepcja głosowa dla Twojego gabinetu</h1>
        <p className="text-xl text-blue-100 mb-10">DentVoice odbiera telefony 24/7, umawia wizyty i podsumowuje rozmowy za pomocą AI. Zadbaj o pacjentów, nawet gdy jesteś zajęty.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/register" className="px-8 py-4 bg-white text-blue-900 rounded-xl font-bold text-lg hover:bg-blue-50 transition shadow-lg">Zacznij za darmo</Link>
          <a href="#jak-dziala" className="px-8 py-4 border border-white/30 rounded-xl font-semibold text-lg hover:bg-white/10 transition">Jak to działa?</a>
        </div>
      </section>

      {/* Features */}
      <section id="jak-dziala" className="bg-white/5 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Jak działa DentVoice?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📞', title: 'Odbiera telefony', desc: 'AI agent głosowy odbiera wszystkie połączenia do Twojej kliniki, 24 godziny na dobę, 7 dni w tygodniu.' },
              { icon: '📅', title: 'Umawia wizyty', desc: 'Inteligentny asystent rozumie potrzeby pacjenta i pomaga umówić odpowiednią wizytę.' },
              { icon: '🧠', title: 'Podsumowuje AI', desc: 'Po każdej rozmowie otrzymujesz zwięzłe podsumowanie wygenerowane przez GPT-4.' },
            ].map((f, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-blue-100">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Cennik</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(PLANS).map(([key, plan]) => (
              <div key={key} className={`bg-white/10 rounded-2xl p-8 ${key === 'pro' ? 'ring-2 ring-yellow-400' : ''}`}>
                {key === 'pro' && <div className="text-yellow-400 font-bold text-sm mb-2">⭐ NAJPOPULARNIEJSZY</div>}
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-3xl font-bold text-blue-200 mb-6">{plan.priceLabel}</p>
                <ul className="space-y-2 mb-8">
                  {plan.features.map((f, i) => <li key={i} className="flex items-center gap-2"><span className="text-green-400">✓</span>{f}</li>)}
                </ul>
                <Link href="/register" className="block text-center py-3 bg-white text-blue-900 rounded-xl font-bold hover:bg-blue-50 transition">Wybierz plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="text-center py-12 px-8 bg-blue-950/50">
        <p className="text-blue-200 mb-4">© 2025 DentVoice. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </main>
  );
            }
