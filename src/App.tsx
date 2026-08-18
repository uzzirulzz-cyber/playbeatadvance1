import React, { useMemo, useState, useEffect } from 'react';
import { useStore } from './store/useStore';
import { Navbar } from './components/Navbar';
import { HeroSectionPremium } from './components/HeroSectionPremium';
import { FeaturedCategoriesPremium } from './components/FeaturedCategoriesPremium';
import { SmartProjectorsSection } from './components/SmartProjectorsSection';
import { DealsSection } from './components/DealsSection';
import { LimitedTimeOffersSection } from './components/LimitedTimeOffersSection';
import { TrendingProductsSection } from './components/TrendingProductsSection';
import { BestSellersSection } from './components/BestSellersSection';
import { CategoryFilterBar } from './components/CategoryFilterBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistModal } from './components/WishlistModal';
import { OrderLookupModal } from './components/OrderLookupModal';
import { CustomerDashboard } from './components/CustomerDashboard';
import { AuthModal } from './components/AuthModal';
import { InvoiceModal } from './components/InvoiceModal';
import { VendorStudio } from './components/VendorStudio';
import { AffiliateHub } from './components/AffiliateHub';
import { AdminConsole } from './components/AdminConsole';
import { LiveSupportAssistant } from './components/LiveSupportAssistant';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { ThemeSectionManager } from './components/ThemeSectionManager';
import { Footer } from './components/Footer';
import { Sparkles, AlertCircle } from 'lucide-react';

export function App() {
  const {
    activeView,
    products,
    selectedCategory,
    selectedType,
    sortBy,
    searchQuery,
    setSelectedCategory,
    setSelectedType,
    setSearchQuery
  } = useStore();

  const [sectionConfig, setSectionConfig] = useState({
    smartProjectors: true,
    heroSpotlight: true,
    dealsSection: true,
    categoryFilter: true,
    trendingSection: true,
    bestSellersSection: true,
    limitedOffers: true,
    trustBadges: true,
  });

  useEffect(() => {
    const loadConfig = () => {
      const saved = localStorage.getItem('playbeat_sections_config');
      if (saved) {
        try {
          setSectionConfig(prev => ({ ...prev, ...JSON.parse(saved) }));
        } catch (e) {}
      }
    };
    loadConfig();

    const handleUpdate = () => loadConfig();
    window.addEventListener('sections_updated', handleUpdate);
    return () => window.removeEventListener('sections_updated', handleUpdate);
  }, []);

  // Filtered & Sorted products pipeline
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category match
      if (selectedCategory !== 'all' && product.category?.slug !== selectedCategory && product.category?.id !== selectedCategory) {
        return false;
      }

      // Type match
      if (selectedType !== 'ALL' && product.type !== selectedType) {
        return false;
      }

      // Search match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = product.title?.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription?.toLowerCase().includes(query) || product.description?.toLowerCase().includes(query);
        const matchesTags = product.tags?.some(t => t.toLowerCase().includes(query));
        const matchesCat = product.category?.name?.toLowerCase().includes(query);
        const matchesVendor = product.vendor?.storeName?.toLowerCase().includes(query);
        if (!matchesTitle && !matchesDesc && !matchesTags && !matchesCat && !matchesVendor) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const priceA = a.discountPrice ?? a.price;
      const priceB = b.discountPrice ?? b.price;

      if (sortBy === 'price_asc') return priceA - priceB;
      if (sortBy === 'price_desc') return priceB - priceA;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      // default 'popular'
      return b.salesCount - a.salesCount;
    });
  }, [products, selectedCategory, selectedType, searchQuery, sortBy]);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Top Main Navigation */}
      <Navbar />

      {/* Main Viewport Router */}
      <main className="flex-1 w-full">
        {activeView === 'storefront' && (
          <div>
            {/* Dynamic Hero Showcase */}
            {sectionConfig.heroSpotlight && (
              <div id="hero">
                <HeroSectionPremium />
              </div>
            )}

            {/* Featured Categories Exploration */}
            <div id="categories">
              <FeaturedCategoriesPremium />
            </div>

            {/* Pinned Smart Projectors Showcase Section */}
            {sectionConfig.smartProjectors && (
              <div id="projectors" className="max-w-7xl mx-auto px-4 sm:px-6">
                <SmartProjectorsSection />
              </div>
            )}

            {/* Flash Deals Countdown Banner */}
            {sectionConfig.dealsSection && (
              <div id="deals">
                <DealsSection />
              </div>
            )}

            {/* Limited Time Offers Flash Grid */}
            {sectionConfig.limitedOffers && (
              <div id="limited-offers">
                <LimitedTimeOffersSection />
              </div>
            )}

            {/* Trending Products Grid */}
            {sectionConfig.trendingSection && (
              <div id="trending">
                <TrendingProductsSection />
              </div>
            )}

            {/* Best Sellers Grid */}
            {sectionConfig.bestSellersSection && (
              <div id="bestsellers">
                <BestSellersSection />
              </div>
            )}

            {/* Full Marketplace Catalog Grid & Filter Bar */}
            <div id="products" className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
              
              {/* Category Slider & Filter Bar */}
              {sectionConfig.categoryFilter && (
                <CategoryFilterBar />
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center space-y-3 p-8 rounded-3xl bg-white border border-[#ece3d6] shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#fff7e6] border border-[#e4d3a7] flex items-center justify-center mx-auto text-[#d7a53a]">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-black text-lg text-[#10233d]">No products found matching your criteria</h3>
                  <p className="text-xs text-[#58687c] max-w-sm mx-auto">
                    Try adjusting your search terms, changing the category filter, or resetting all filters.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedType('ALL');
                      setSearchQuery('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#d7a53a] hover:bg-[#c9952a] text-[#10233d] font-bold text-xs cursor-pointer shadow-md"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {activeView === 'vendor' && <VendorStudio />}
        {activeView === 'affiliate' && <AffiliateHub />}
        {activeView === 'admin' && <AdminConsole />}
      </main>

      {/* Global Modals, Drawers & Overlays */}
      <ProductDetailModal />
      <CartDrawer />
      <WishlistModal />
      <OrderLookupModal />
      <CustomerDashboard />
      <AuthModal />
      <InvoiceModal />
      <LiveSupportAssistant />
      <WhatsAppFloatingButton />
      <ThemeSectionManager />

      {/* Modern Footer */}
      <Footer />
    </div>
  );
}

export default App;
