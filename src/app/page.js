import Link from 'next/link';

export default function Home() {
const shapes = Array.from({ length: 50 }, () => {
  const types = ['triangle', 'circle', 'square', 'cross'];
  const type = types[Math.floor(Math.random() * types.length)];

  const colorMap = {
    triangle: 'text-emerald-400',
    circle: 'text-red-400',
    square: 'text-pink-400',
    cross: 'text-sky-400',
  };

  return {
    type,
    color: colorMap[type],
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: [
      'w-10 h-10',
      'w-12 h-12',
      'w-14 h-14',
      'w-16 h-16',
    ][Math.floor(Math.random() * 4)],
  };
});

  return (
    <div className="space-y-20 py-10 relative min-h-screen overflow-hidden">
      {/* Background Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {shapes.map((shape, index) => (
          <div
            key={index}
            className={`animate-float-shape ${shape.color}`}
            style={{
              left: shape.left,
              animationDelay: shape.delay,
              animationDuration: shape.duration,
            }}
          >
            {/* Bentuk Lingkaran */}
            {shape.type === 'circle' && (
              <div
                className={`${shape.size} border-[3px] rounded-full border-red-400`}
              ></div>
            )}
            
            {/* Bentuk Kotak */}
            {shape.type === 'square' && (
              <div
                className={`${shape.size} border-[3px] rounded-md border-pink-400`}
              ></div>
            )}
            
            {/* Bentuk Segitiga Bolong */}
            {shape.type === 'triangle' && (
              <svg
                className={`${shape.size} text-emerald-400`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3L2 21h20L12 3z"
                />
              </svg>
            )}
            
            {/* Bentuk Silang */}
            {shape.type === 'cross' && (
              <svg
                className={`${shape.size} text-sky-400`}
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Home Section */}
     <section 
        id="home" 
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24 min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center space-y-4"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold text-white">
          Hai, Saya <span className="text-indigo-400">Abyan Dampang</span>
        </h1>
        <h2 className='text-3xl font-bold text-gray-200'>Backend Developer</h2>
        <h2 className='text-xl text-gray-400'>Paling jago soal web dev</h2>
 
        <div className="pt-2">
          <a 
            href="https://github.com/abyan29"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-750 text-white font-medium rounded-xl text-sm transition border border-white/15 hover:border-indigo-500/50 shadow-lg shadow-black/20 group"
          >
            <svg className="size-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Kunjungi GitHub</span>
          </a>
        </div>
      </section>

      {/* Project Section */}
      <section id="project" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-r from-indigo-800/60 to-indigo-800/20 border border-white/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-4 text-white">Project Saya</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* Tempat card list project kamu */}
          </div>
        </div>
      </section>

      {/* Tentang Section */}
      <section id="tentang" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4 text-white">Tentang Saya</h2>
        <p className="text-gray-400">
          Saya adalah mahasiswa Informatika yang berfokus pada web development.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24 py-16'>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Bagian Kiri */}
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Let's Work Together
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              I am always open to discussions about new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-4 pt-4 text-sm md:text-base">
              <div className="flex items-center gap-4 text-gray-300">
                <svg className="size-5 text-indigo-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a href="mailto:byan6703@gmail.com" className="hover:text-indigo-400 transition">
                  byan6703@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-300">
                <svg className="size-5 text-indigo-500 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.904-11.91 11.904-2.01 0-3.991-.51-5.751-1.486L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.631 2.02 14.167.993 11.543.993c-5.444 0-9.87 4.372-9.874 9.802-.001 1.742.469 3.442 1.357 4.954l-.994 3.633 3.734-.979zm11.17-6.858c-.3-.15-1.77-.874-2.046-.975-.276-.101-.476-.15-.676.15-.199.3-.776.975-.951 1.174-.175.199-.349.224-.649.075-1.25-.623-2.101-1.093-2.938-2.528-.22-.377.22-.35.63-1.169.06-.113.03-.213-.015-.313-.045-.1-.433-1.044-.593-1.432-.157-.379-.315-.328-.433-.334-.112-.005-.24-.006-.369-.006-.13 0-.34.049-.517.244-.178.195-.679.663-.679 1.617s.693 1.874.79 2.008c.097.133 1.363 2.081 3.299 2.917.461.199.82.319 1.1.411.464.148.887.127 1.22.078.373-.055 1.77-.723 2.022-1.423.252-.7.252-1.3.176-1.424-.075-.124-.275-.199-.575-.349z"/>
                </svg>
                <a href="https://wa.me/6281212158200" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">+62 81212158200</a>
              </div>
            </div>
          </div>

          {/* Bagian Kanan / Form */}
          <div className="bg-gray-800/20 border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute -bottom-10 -right-10 size-32 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-6 tracking-wide text-center md:text-left">
              Quick Message
            </h3>

            <form className="space-y-4">
              <div>
                <input type="text" placeholder="Your Name" className="w-full bg-gray-800/40 border border-white/10 hover:border-white/20 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition" required/>
              </div>

              <div>
                <textarea 
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-gray-800/40 border border-white/10 hover:border-white/20 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 font-semibold text-sm rounded-xl text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 active:scale-[0.98] transition tracking-wide border border-indigo-400/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}