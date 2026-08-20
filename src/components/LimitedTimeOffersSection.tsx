import React from 'react';
import { useStore } from '../store/useStore';
import { Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';

export const LimitedTimeOffersSection: React.FC = () => {
  const { products, storefrontSections } = useStore();
  const sectionConfig = storefrontSections.find(s => s.id === 'limited-offers');

  if (sectionConfig && !sectionConfig.enabled) {
    return null;
  }

  const title = sectionConfig?.title || 'Limited-Time Offers';
  const subtitle = sectionConfig?.subtitle || 'Flash deals ending soon — grab them before the timer expires';
  const badge = sectionConfig?.badge || 'ENDING SOON';
  const itemLimit = sectionConfig?.itemLimit || 4;

  // Filter products that have discounts or match config
  let limitedProducts = products
    .filter(p => (p.discountPrice && p.discountPrice < p.price) || p.featured)
    .slice(0, itemLimit);

  if (limitedProducts.length === 0) {
    limitedProducts = products.slice(0, itemLimit);
  }

  return (
    <section id="limited-offers" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto bg-transparent scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-rose-400">
              <Clock className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-red-500/10 border border-red-500/30 text-rose-400">
              {badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-[-0.03em] leading-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            {subtitle}
          </p>
        </div>

        <a
          href="#deals"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#fcb800] transition-colors"
        >
          <span>View All Deals</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {limitedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default LimitedTimeOffersSection;
