import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function SectionWrapper({ id, children, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      style={{ padding: 'var(--space-section) 1.5rem' }}
      className={className}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>{children}</div>
    </motion.section>
  );
}
