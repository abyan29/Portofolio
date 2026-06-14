import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      
      <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-800/20 border border-white/5 rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Hai, Saya <span className="text-indigo-400">Abyan Dampang</span>
          </h1>
            <h2 className='text-3xl'>Saya Backend developer</h2>
        </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4">Project Saya</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {/* ... isi list card/kartu project kamu ... */}
        </div>
      </section>

      <section id="tentang" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4">Tentang Saya</h2>
        <p className="text-gray-400">
          Saya adalah mahasiswa Informatika yang berfokus pada web development...
        </p>
      </section>

    </div>
  );
}