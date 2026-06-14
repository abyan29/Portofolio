"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import "./globals.css";

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Project', href: '/project' },
  { name: 'Tentang', href: '/tentang' },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const currentNav = navigation.find((item) => item.href === pathname);
  const pageTitle = currentNav ? currentNav.name : 'Dashboard';

  return (
    <html lang="id" className="h-full bg-gray-900">
      <body className="h-full text-white antialiased">
        <div className="min-h-full flex flex-col">
          
          {/* NAVBAR GLOBAL */}
          <Disclosure as="nav" className="bg-gray-800/50 border-b border-white/5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                
                <div className="flex items-center">
                <div className="shrink-0 flex items-center gap-2.5">
                  <img 
                    src="/fire.svg" 
                    alt="Logo Portfolio" 
                    className="size-6 w-auto h-6 object-contain" 
                  />
                  <span className="font-bold text-indigo-400 tracking-wider">
                    PORTFOLIO
                  </span>
                </div>

                  {/* Desktop Menu */}
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => {
                        const isCurrent = pathname === item.href;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            aria-current={isCurrent ? 'page' : undefined}
                            className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                              isCurrent
                                ? 'bg-gray-950/50 text-white'
                                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                            }`}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="-mr-2 flex md:hidden">
                  <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
                    <span className="absolute -inset-0.5" />
                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                  </DisclosureButton>
                </div>

              </div>
            </div>

            {/* Mobile Menu Panel */}
            <DisclosurePanel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navigation.map((item) => {
                  const isCurrent = pathname === item.href;
                  return (
                    <DisclosureButton
                      key={item.name}
                      as={Link}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        isCurrent 
                          ? 'bg-gray-950/50 text-white' 
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </DisclosureButton>
                  );
                })}
              </div>
            </DisclosurePanel>
          </Disclosure>

          {/* HEADER DINAMIS */}
          <header className="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">{pageTitle}</h1>
            </div>
          </header>

          {/* KONTEN UTAMA */}
          <main className="flex-grow">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
              {children} 
            </div>
          </main>

        </div>
      </body>
    </html>
  );
}