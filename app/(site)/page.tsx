import React from 'react';
import Markdoc from '@markdoc/markdoc';
import { reader } from '../reader';
import { markdocConfig } from '../../keystatic.config';

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
    <div className="h-full relative overflow-hidden flex flex-col">
      <div className="absolute inset-0 bg-white/92" />
      <div className="relative overflow-y-auto flex-1 p-8 prose prose-slate max-w-none">
        {petitionContent ?? <p className="text-slate-500">Obsah petice se načítá…</p>}
      </div>
    </div>
  );
}
