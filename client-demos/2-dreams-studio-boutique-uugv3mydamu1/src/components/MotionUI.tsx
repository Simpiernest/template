'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion, animate } from 'motion/react';
import { usePathname } from 'next/navigation';
import { animationConfig as config } from '@/data/branding';

export function ScrollReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const preference = useReducedMotion();
  const reduced = preference || config.scroll.effect === 'none';
  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: config.scroll.once, amount: .15 }} transition={{ duration: reduced ? 0 : .6, delay: reduced ? 0 : delay, ease: 'easeOut' }}>{children}</motion.div>;
}

export function MotionPage({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const preference = useReducedMotion();
  const reduced = preference || config.scroll.effect === 'none';
  useEffect(() => {
    document.documentElement.dataset.cardHover = config.productCards.hover;
    document.documentElement.dataset.wishlistMotion = String(config.productCards.wishlistAnimation);
    document.documentElement.dataset.heroEntrance = config.hero.entrance;
    document.documentElement.dataset.dropdownMotion = config.navigation.dropdown;
    document.documentElement.dataset.cartFeedback = config.cart.addFeedback;
    if (reduced) return;
    const controls: ReturnType<typeof animate>[] = [];
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target as HTMLElement;
      const index = Array.from(el.parentElement?.children || []).indexOf(el);
      const sideways = el.classList.contains('promo-banner');
      controls.push(animate(el, { opacity: [0, 1], transform: [sideways ? `translateX(${index % 2 ? 24 : -24}px)` : el.closest('.benefits') ? 'scale(.94)' : 'translateY(30px)', 'none'] }, { duration: .6, delay: Math.min(index, 6) * config.scroll.stagger, ease: 'easeOut' }));
      if (config.scroll.once) observer.unobserve(el);
    }), { threshold: .15 });
    document.querySelectorAll('.category, .promo-banner, .benefits>div, .review-row article, .newsletter, footer').forEach(el => observer.observe(el));
    return () => { observer.disconnect(); controls.forEach(c => c.stop()); };
  }, [path, reduced]);
  return <motion.main key={path} initial={preference || config.pageTransition === 'none' ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: preference ? 0 : .25 }}>{children}</motion.main>;
}

export function Overlay({ children, close, label, drawer = false }: { children: React.ReactNode; close: () => void; label: string; drawer?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const preference = useReducedMotion();
  const reduced = preference || (drawer && config.cart.drawer === 'none');
  useEffect(() => {
    const previous = document.activeElement as HTMLElement;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    ref.current?.focus();
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key !== 'Tab') return;
      const nodes = Array.from(ref.current?.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input, select, [tabindex="0"]') || []);
      const first = nodes[0], last = nodes[nodes.length - 1];
      if (!first) { e.preventDefault(); return; }
      if (e.shiftKey && (document.activeElement === first || document.activeElement === ref.current)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && (document.activeElement === last || document.activeElement === ref.current)) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', key);
    return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', key); previous?.focus(); };
  }, [close]);
  return <motion.div className="shopping-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .2 }} onClick={close}><motion.div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-label={label} className={drawer ? 'cart-drawer-panel' : 'quick-view-panel'} initial={reduced ? false : drawer ? { x: '100%' } : { y: 20, scale: .98 }} animate={{ x: 0, y: 0, scale: 1 }} exit={drawer ? { x: reduced ? 0 : '100%' } : { opacity: 0 }} transition={{ duration: reduced ? 0 : drawer ? .35 : .25, ease: 'easeOut' }} onClick={e => e.stopPropagation()}>{children}</motion.div></motion.div>;
}
