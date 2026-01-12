/**
 * Builder.io Fusion Test Page
 * Testing Elementor template conversion
 */

import { Suspense } from "react";

// Test component - Elementor Button converted
function TestButton() {
  return (
    <button
      className="
        group relative inline-flex items-center justify-center gap-3
        rounded-[4px] border px-[3.75rem] py-[1.5rem]
        text-base font-normal leading-[120%] text-white
        transition-all duration-500 ease-in-out

        border-[#FF005B]
        bg-[#FF005B]/30
        shadow-[0px_17px_34px_0px_rgba(255,0,91,0.20)]
        backdrop-blur-[27px]

        hover:-translate-y-1
        hover:bg-[#FF005B]/60
        hover:shadow-[0px_0px_34px_0px_rgba(255,0,91,0.50)]

        focus:scale-[0.98]
        focus:shadow-[0px_4px_54px_0px_#FF005B]

        sm:px-8 sm:py-6

        /* Animação customizada via className inline */
        [&_svg]:transition-transform [&_svg]:duration-500
        [&_svg]:group-hover:[animation:arrow-slide_1s_infinite]
      "
      style={{
        animationName: 'arrow-slide',
        animationDuration: '1s',
        animationIterationCount: 'infinite'
      }}
    >
      <span className="relative z-10">Clique aqui</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="relative z-10 drop-shadow-[0px_0px_24px_#FF005B]"
      >
        <path
          d="M14.5148 4.5148L13.6239 5.4057L17.5882 9.37006H0V10.63H17.5882L13.6239 14.5943L14.5148 15.4852L20 9.99999L14.5148 4.5148Z"
          fill="#FF005B"
        />
      </svg>
    </button>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 font-sans">
      <style>{`
        @keyframes arrow-slide {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(5px); }
        }
      `}</style>

      <main className="flex w-full max-w-3xl flex-col items-center gap-12 py-16 px-8 text-center">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">
            Builder.io Fusion Test
          </h1>
          <p className="text-lg text-slate-400">
            Domínio Lucrativo - Elementor Template Conversion
          </p>
        </div>

        {/* Test Component */}
        <div className="space-y-6">
          <p className="text-slate-300">
            Elementor Button Widget (tpl_00abe46) → TailwindCSS
          </p>
          <Suspense fallback={<div className="text-white">Loading...</div>}>
            <TestButton />
          </Suspense>
        </div>

        {/* Info Cards */}
        <div className="grid w-full gap-4 text-left sm:grid-cols-2">
          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="font-semibold text-green-400">✓ Preservado</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Cor #FF005B (pink)</li>
              <li>• Background 30% opacidade</li>
              <li>• Hover: elevação 5px</li>
              <li>• Animação da seta</li>
              <li>• Backdrop blur</li>
            </ul>
          </div>

          <div className="rounded-lg bg-slate-800 p-6">
            <h3 className="font-semibold text-blue-400">ℹ️ Stack</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>• Next.js 16 (App Router)</li>
              <li>• TypeScript</li>
              <li>• TailwindCSS v4</li>
              <li>• 752 templates para converter</li>
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="rounded-lg bg-slate-800/50 p-6 text-left">
          <h3 className="font-semibold text-white">Próximos Passos</h3>
          <ol className="mt-3 space-y-2 text-sm text-slate-300">
            <li>1. Conectar este repo ao Builder.io Fusion ✅</li>
            <li>2. Testar conversão via AI prompt</li>
            <li>3. Comparar resultado com manual</li>
            <li>4. Decidir abordagem para 752 templates</li>
          </ol>
        </div>

        <a
          href="https://github.com/MafraAiDev/builder-test-dl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 underline hover:text-slate-300"
        >
          View on GitHub →
        </a>
      </main>
    </div>
  );
}
