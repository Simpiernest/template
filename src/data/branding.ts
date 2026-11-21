export const brandingConfig = { name: 'Shopfinity', primary: '#004c29' };
type AnimationPreferences = {
 hero: { entrance: 'fade-up' | 'none'; carousel: 'crossfade' | 'none'; autoplay: boolean; interval: number };
 productCards: { hover: 'lift-zoom' | 'none'; quickView: boolean; wishlistAnimation: boolean };
 scroll: { effect: 'fade-up' | 'none'; stagger: number; once: boolean };
 navigation: { dropdown: 'fade-slide' | 'none'; mobileMenu: 'slide-left' | 'none' };
 cart: { drawer: 'slide-right' | 'none'; addFeedback: 'scale-check' | 'none' };
 pageTransition: 'fade' | 'none';
};
export const animationConfig: AnimationPreferences = {
  hero: { entrance: 'fade-up', carousel: 'crossfade', autoplay: true, interval: 6000 },
  productCards: { hover: 'lift-zoom', quickView: true, wishlistAnimation: true },
  scroll: { effect: 'fade-up', stagger: 0.08, once: true },
  navigation: { dropdown: 'fade-slide', mobileMenu: 'slide-left' },
  cart: { drawer: 'slide-right', addFeedback: 'scale-check' },
  pageTransition: 'fade',
};
