import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from './reader';
import { markdocConfig } from '../keystatic.config';
import { Navbar } from './components/Navbar';
import { BackgroundLayout } from './components/BackgroundLayout';
import { EPETITION_URL } from './config';

export default async function Homepage() {
  const entry = await reader.collections.content.read('petice');

  let petitionContent: React.ReactNode = null;
  if (entry) {
    const { node } = await entry.content();
    const errors = Markdoc.validate(node, markdocConfig);
    if (!errors.length) {
      const renderable = Markdoc.transform(node, markdocConfig);
      petitionContent = Markdoc.renderers.react(renderable, React);
    }
  }

  return (
    <BackgroundLayout>
      {/* <Navbar /> */}
      <main className="flex h-screen ">

        {/* Right 30% — glass CTA panel */}
        <div className="flex-[3] flex flex-col justify-center items-center text-white px-8 py-12 ">
          {/* <div className="bg-white/88 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center flex flex-col gap-6 "> */}
            <h2 className="text-3xl text-black/90 font-bold leading-tight">
              Podepište petici
            </h2>
            <p className="text-center text-black/90 leading-relaxed">
              Přidejte svůj hlas k ostatním obyvatelům Žižkova vrchu. Vaše podpora je
              klíčová pro zachování přírodního rázu Srnčího dolu pro nás i pro budoucí
              generace.
            </p>
            <a
              href={EPETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-slate-800 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-white/90 transition-colors text-center"
            >
              Podepsat petici
            </a>
            <p className="text-black/60 text-sm text-center">
              Petice je vedena prostřednictvím oficiální služby ePetice.
            </p>
          </div>

        {/* </div> */}
        {/* Left 70% — paper card with petition text */}
        <div className="flex-[7] bg-white/88  shadow-xl overflow-hidden flex flex-col">
          <div className="overflow-y-auto flex-1 p-8 prose prose-slate max-w-none">
            {petitionContent ?? <p className="text-slate-500">Obsah petice se načítá…</p>}
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}
