import type { Variants } from 'framer-motion';

// Cubic bezier tuples — typed as 4-tuples so Framer Motion accepts them
type CB = [number, number, number, number];

export const ease: CB = [0.16, 1, 0.3, 1];      // power3.out feel
export const easeExpo: CB = [0.19, 1.0, 0.22, 1.0]; // expo.out feel

// ── Entrance variants ──

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1.1, ease } }
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } }
};

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } }
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease } }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease } }
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.08, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.4, ease } }
};

export const rotateInX: Variants = {
  hidden: { opacity: 0, rotateX: 6, y: 40 },
  visible: { opacity: 1, rotateX: 0, y: 0, transition: { duration: 1.2, ease } }
};

export const diagonalIn: Variants = {
  hidden: { opacity: 0, x: -40, y: 30 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease } }
};

export const diagonalInRight: Variants = {
  hidden: { opacity: 0, x: 40, y: 30 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.9, ease } }
};

export const buttonIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } }
};

// ── Stagger orchestration ──

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } }
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
};

// ── Viewport settings ──
export const viewportOnce = { once: true, margin: '-80px 0px' } as const;
