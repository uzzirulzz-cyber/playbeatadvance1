import React, { useMemo } from 'react';
import { useStore } from '../store/useStore';
import { StorefrontSection } from '../data/defaultSections';
import { 
  Clock, 
  Flame, 
  TrendingUp, 
  Crown, 
  Sparkles, 
  Zap, 
  Gift, 
  Tv, 
  Key, 
  Tag,
  ArrowRight
} from 'lucide-react';
import { ProductCard } from './ProductCard';

interface DynamicCustomSectionProps {
  section: StorefrontSection;
}

export const DynamicCustomSection: React.FC<DynamicCustomSectionProps> = ({ section }) => {
  const { products } = useStore();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return Clock;
      case 'Flame': return Flame;
      case 'TrendingUp': return TrendingUp;
      case 'Crown': return Crown;
      case 'Zap': return Zap;
      case 'Gift': return Gift;
      case 'Tv': return Tv;
      case 'Key': return Key;
      case 'Tag': return Tag;
      default: return Sparkles;
    }
  };

  const getAccentStyles = (color: string) => {
    switch (color) {
      case 'red':
        return {
          badgeBg: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
          iconBg: 'bg-rose-500/20 text-rose-400',
          border: 'border-rose-500/20',
          glow: 'from-rose-500/10'
        };
      case 'purple':
        return {
          badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
          iconBg: 'bg-purple-500/20 text-purple-400',
          border: 'border-purple-500/20',
          glow: 'from-purple-500/10'
        };
      case 'emerald':
        return {
          badgeBg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          iconBg: 'bg-emerald-500/20 text-emerald-400',
          border: 'border-emerald-500/20',
          glow: 'from-emerald-500/10'
        };
      case 'blue':
        return {
          badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
          iconBg: 'bg-blue-500/20 text-blue-400',
          border: 'border-blue-500/20',
          glow: 'from-blue-500/10'
        };
      case 'orange':
        return {
          badgeBg: 'bg-orange-500/10 border-orange-500/30 text-orange-400',
          iconBg: 'bg-orange-500/20 text-orange-400',
          border: 'border-orange-500/20',
          glow: 'from-orange-500/10'
        };
      default: // yellow
        return {
          badgeBg: 'bg-yellow-500/10 border-yellow-500/30 text-[#fcb800]',
          iconBg: 'bg-yellow-500/20 text-[#fcb800]',
          border: 'border-yellow-500/20',
          glow: 'from-yellow-500/10'
        };
    }
  };

  const filteredItems = useMemo(() => {
    let list = [...products];

    if (section.productFilter === 'custom_ids' && section.customProductIds && section.customProductIds.length > 0) {
      list = list.filter(p => section.customProductIds?.includes(p.id));
    } else if (section.productFilter === 'deals_only') {
      list = list.filter(p => (p.discountPrice && p.discountPrice < p.price) || p.featured);
    } else if (section.productFilter === 'high_sales') {
      list = list.sort((a, b) => b.salesCount - a.salesCount);
    } else if (section.productFilter === 'high_rating') {
      list = list.sort((a, b) => b.rating - a.rating);
    } else if (section.productFilter === 'newest') {
      list = list.sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());
    }

    return list.slice(0, section.itemLimit || 8);
  }, [products, section]);

  if (!section.enabled || filteredItems.length === 0) return null;

  const Icon = getIcon(section.icon);
  const styles = getAccentStyles(section.accentColor);

  return (
    <section id={section.id} className="py-12 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <div className={`p-2 rounded-xl border ${styles.iconBg} ${styles.border}`}>
              <Icon className="w-4 h-4" />
            </div>
            {section.badge && (
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider border ${styles.badgeBg}`}>
                {section.badge}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {section.title}
          </h2>
          {section.subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
              {section.subtitle}
            </p>
          )}
        </div>

        <a
          href="#products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#fcb800] transition-colors"
        >
          <span>Explore All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {filteredItems.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
