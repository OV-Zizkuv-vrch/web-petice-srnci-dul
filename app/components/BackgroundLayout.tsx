import type { ReactNode } from 'react';

export function BackgroundLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        // backgroundImage: "url('/images/bg-main.jpg')",
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      {children}
    </div>
  );
}
