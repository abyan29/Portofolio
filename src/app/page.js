import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20 py-10">
      
      <section 
      id="home" 
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24 min-h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Hai, Saya <span className="text-indigo-400">Abyan Dampang</span>
          </h1>
            <h2 className='text-3xl'>Saya Backend developer</h2>

            <div className="pt-2">
              <a 
                href="https://github.com/abyan29"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-750 text-white font-medium rounded-xl text-sm transition border border-white/15 hover:border-indigo-500/50 shadow-lg shadow-black/20 group">
              
                <svg 
                  className="size-5 text-gray-400 group-hover:text-white transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>

                <span>Kunjungi GitHub</span>
              </a>
            </div>
      </section>

      <section id="project" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-gradient-to-r from-indigo-800/60 to-indigo-800/20 border border-white/5 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold mb-4">Project Saya</h2>
        <div className="grid md:grid-cols-2 gap-4">
          
        </div>
        </div>
      </section>

      <section id="tentang" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-4">Tentang Saya</h2>
        <p className="text-gray-400">
          Saya adalah mahasiswa Informatika yang berfokus pada web development
        </p>
      </section>

      <section id="contact" className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 scroll-mt-24 py-16'>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-wide text-white">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-600">Me</span>
          </h2>
        </div>

        {/* bagian kiri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
              Let's Work Together
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              I am always open to discussions about new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <div className="bg-gray-800/20 border border-white/5 p-6 md:p-8 rounded-2xl relative overflow-hidden backdrop-blur-sm">

            <div className="absolute -bottom-10 -right-10 size-32 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-6 tracking-wide text-center md:text-left">
              Quick Message
            </h3>

            <form className="space-y-4">
              <div>
                <input type="text"  placeholder="Your Name" className="w-full bg-gray-800/40 border border-white/10 hover:border-white/20 focus:border-yellow-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition" required/>
              </div>

              <div>
                <textarea 
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-gray-800/40 border border-white/10 hover:border-white/20 focus:border-yellow-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition resize-none"
                  required></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 font-medium text-sm rounded-xl text-black bg-gradient-to-r from-indigo-200 via-indigo-400 to-indigo-500 hover:from-yellow-300 hover:via-yellow-500 hover:to-yellow-600 shadow-lg shadow-yellow-500/10 hover:shadow-yellow-500/20 active:scale-[0.98] transition font-semibold tracking-wide border border-yellow-300/20">
                Send Message
              </button>
            </form>

          </div>

        </div>
      </section>

    </div>
  );
}