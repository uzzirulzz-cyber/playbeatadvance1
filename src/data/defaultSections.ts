export interface StorefrontSection {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: 'Clock' | 'Flame' | 'TrendingUp' | 'Crown' | 'Sparkles' | 'Zap' | 'Gift' | 'Tv' | 'Key' | 'Tag';
  enabled: boolean;
  showInNavbar: boolean;
  navbarLabel: string;
  accentColor: 'yellow' | 'red' | 'purple' | 'blue' | 'emerald' | 'orange';
  order: number;
  layout: 'countdown_cards' | 'deal_banner' | 'grid' | 'ranked_cards';
  productFilter: 'all' | 'deals_only' | 'high_sales' | 'high_rating' | 'newest' | 'custom_ids';
  customProductIds?: string[];
  itemLimit: number;
  countdownHours?: number;
  isCustom?: boolean;
}

export const DEFAULT_STOREFRONT_SECTIONS: StorefrontSection[] = [
  {
    id: 'limited-offers',
    title: 'Limited-Time Offers',
    subtitle: 'High-discount premium passes & hardware before the countdown hits zero',
    badge: 'ENDING SOON',
    icon: 'Clock',
    enabled: true,
    showInNavbar: true,
    navbarLabel: 'Limited-Time Offers',
    accentColor: 'red',
    order: 1,
    layout: 'countdown_cards',
    productFilter: 'deals_only',
    itemLimit: 4,
    countdownHours: 24,
    isCustom: false
  },
  {
    id: 'deals',
    title: 'Flash Deals & Special Offers',
    subtitle: 'Exclusive daily flash price drops on verified digital goods & cinema gear',
    badge: 'UP TO 50% OFF',
    icon: 'Flame',
    enabled: true,
    showInNavbar: true,
    navbarLabel: 'Flash Deals & Special Offers',
    accentColor: 'yellow',
    order: 2,
    layout: 'deal_banner',
    productFilter: 'deals_only',
    itemLimit: 4,
    countdownHours: 14,
    isCustom: false
  },
  {
    id: 'trending',
    title: 'Trending This Week',
    subtitle: 'Most reviewed & trending products climbing the verified charts',
    badge: 'HOT & VIRAL',
    icon: 'TrendingUp',
    enabled: true,
    showInNavbar: true,
    navbarLabel: 'Trending This Week',
    accentColor: 'purple',
    order: 3,
    layout: 'grid',
    productFilter: 'high_rating',
    itemLimit: 8,
    isCustom: false
  },
  {
    id: 'bestsellers',
    title: 'Best Sellers',
    subtitle: 'Top-ranked products voted by thousands of verified customers',
    badge: 'TOP RANKED',
    icon: 'Crown',
    enabled: true,
    showInNavbar: true,
    navbarLabel: 'Best Sellers',
    accentColor: 'yellow',
    order: 4,
    layout: 'ranked_cards',
    productFilter: 'high_sales',
    itemLimit: 8,
    isCustom: false
  }
];
