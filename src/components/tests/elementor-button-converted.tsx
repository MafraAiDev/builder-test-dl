/**
 * Elementor Button Widget - Convertido para Next.js + TailwindCSS
 *
 * Template original: tpl_00abe46.json (Elementor)
 * Convertido por: Opus 4.5
 * Data: 2026-01-12
 *
 * Estilos originais preservados:
 * - Cor primária: #FF005B (pink)
 * - Background transparente com 30% opacidade
 * - Hover: elevação 5px + animação do ícone
 */

import { ButtonHTMLAttributes, forwardRef } from "react"

interface ElementorButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
  variant?: "primary" | "secondary"
}

export const ElementorButton = forwardRef<HTMLButtonElement, ElementorButtonProps>(
  ({ text = "Clique aqui", variant = "primary", className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          group relative
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-[4px]
          border
          px-6 py-6
          text-base
          font-normal
          leading-[120%]
          transition-all
          duration-500
          ease-in-out

          /* Primary variant - #FF005B pink */
          ${variant === "primary" ? `
            border-[#FF005B]
            text-white
            bg-[#FF005B]/30
            shadow-[0px_17px_34px_0px_rgba(255,0,91,0.20)]
            backdrop-blur-[27px]

            /* Hover effects */
            hover:-translate-y-1
            hover:bg-[#FF005B]/60
            hover:shadow-[0px_0px_34px_0px_rgba(255,0,91,0.50)]

            /* Focus effect */
            focus:scale-[0.98]
            focus:shadow-[0px_4px_54px_0px_#FF005B,0px_0px_14px_0px_#FF005B_inset]
          ` : ""}

          /* Mobile padding */
          sm:px-8 sm:py-6

          ${className}
        `}
        {...props}
      >
        {/* Text */}
        <span className="relative z-10">{text}</span>

        {/* Arrow Icon - anima no hover */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="
            relative z-10
            drop-shadow-[0px_0px_24px_#FF005B]
            transition-transform
            duration-500

            /* Animação no hover: desliza para direita infinitamente */
            group-hover:animate-[arrow-slide_1s_infinite]
          "
        >
          <path
            d="M14.5148 4.5148L13.6239 5.4057L17.5882 9.37006H0V10.63H17.5882L13.6239 14.5943L14.5148 15.4852L20 9.99999L14.5148 4.5148Z"
            fill="#FF005B"
          />
        </svg>
      </button>
    )
  }
)

ElementorButton.displayName = "ElementorButton"

/**
 * Adicionar este keyframe ao tailwind.config.ts:
 *
 * module.exports = {
 *   theme: {
 *     extend: {
 *       keyframes: {
 *         'arrow-slide': {
 *           '0%, 100%': { transform: 'translateX(0px)' },
 *           '50%': { transform: 'translateX(5px)' },
 *         }
 *       }
 *     }
 *   }
 * }
 */
