import React, { useMemo } from 'react';
import { useStore } from '../store/useStore';
import { Star, TrendingUp, Zap } from 'lucide-react';
import { ProductCard } from './ProductCard';

interface TrendingProduct {
  product: any;
  trendScore: number;
  priceChange: number;
}

export const TrendingProductsSection: React.FC = () => {
  const { products, storefrontSections } = useStore();
  const sectionConfig = storefrontSections.find(s => s.id === 'trending');

  if (sectionConfig && !sectionConfig.enabled) {
    return null;
  }

  const title = sectionConfig?.title || 'Trending This Week';
  const subtitle = sectionConfig?.subtitle || 'Featured by buyers & climbing the verified digital charts';
  const badge = sectionConfig?.badge || 'TRENDING';
  const itemLimit = sectionConfig?.itemLimit || 8;

  const trendingProducts = useMemo(() => {
    return products
      .map(product => {
        const trendScore = 
          (product.salesCount * 0.4) + 
          (product.rating * 20) + 
          (product.reviewCount * 0.8);
        
        const priceChange = (Math.random() - 0.5) * 20;
        
        return { product, trendScore, priceChange };
      })
      .sort((a, b) => b.trendScore - a.trendScore)
      .slice(0, itemLimit);
  }, [products, itemLimit]);

  return (
    <section id="trending" className="py-12 px-4 sm:px-6 max-w-7xl mx-auto bg-transparent scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-500/10 border border-purple-500/30 text-purple-400">
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
          href="#products"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-[#fcb800] transition-colors"
        >
          <span>View All</span>
          <span>→</span>
        </a>
      </div>

      {/* Trending Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {trendingProducts.map(({ product, priceChange }) => (
          <div key={product.id} className="relative group">
            {/* Trending Badge */}
            <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-[#FFD21F] to-[#FFC400] px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
              <Zap className="w-3.5 h-3.5 text-[#0B1F3A]" />
              <span className="text-xs font-black text-[#0B1F3A]">TRENDING</span>
            </div>

            {/* Price Change Indicator */}
            {priceChange > 0 && (
              <div className="absolute top-3 left-3 z-10 bg-red-500/90 px-2.5 py-1 rounded-lg flex items-center gap-1">
                <span className="text-xs font-bold text-white">
                  {priceChange > 0 ? '+' : ''}{priceChange.toFixed(0)}%
                </span>
              </div>
            )}

            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Carousel Info */}
      <div className="mt-8 p-4 rounded-2xl bg-[#0B1F3A]/80 border border-[#FFD21F]/20 flex items-center gap-3">
        <Star className="w-5 h-5 text-[#FFD21F] fill-[#FFD21F] shrink-0" />
        <p className="text-xs text-slate-200">
          🔥 <span className="font-bold text-white">New Trending Badge:</span> These products are being purchased frequently and loved by our community. Limited stock available.
        </p>
      </div>
    </section>
  );
};

export default TrendingProductsSection;
