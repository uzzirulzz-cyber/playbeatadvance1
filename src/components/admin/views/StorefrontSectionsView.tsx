import React, { useState } from 'react';
import { useStore } from '../../../store/useStore';
import { StorefrontSection } from '../../../data/defaultSections';
import { 
  Layers, 
  Plus, 
  Edit3, 
  Trash2, 
  ArrowUp, 
  ArrowDown, 
  Eye, 
  EyeOff, 
  RotateCcw, 
  Check, 
  X, 
  Sparkles, 
  Clock, 
  Flame, 
  TrendingUp, 
  Crown, 
  Zap, 
  Gift, 
  Tv, 
  Key, 
  Tag, 
  Sliders, 
  Layout, 
  CheckCircle2, 
  ExternalLink,
  Navigation
} from 'lucide-react';

export const StorefrontSectionsView: React.FC = () => {
  const { 
    storefrontSections, 
    toggleStorefrontSection, 
    toggleNavbarSection, 
    updateStorefrontSection, 
    addStorefrontSection, 
    deleteStorefrontSection, 
    reorderStorefrontSections, 
    resetStorefrontSections,
    products,
    setActiveView
  } = useStore();

  const [editingSection, setEditingSection] = useState<StorefrontSection | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [saveSuccessMessage, setSaveSuccessMessage] = useState('');

  // New section form state
  const [newSectionForm, setNewSectionForm] = useState<Omit<StorefrontSection, 'id'>>({
    title: '',
    subtitle: '',
    badge: 'HOT DEAL',
    icon: 'Sparkles',
    enabled: true,
    showInNavbar: true,
    navbarLabel: '',
    accentColor: 'yellow',
    order: storefrontSections.length + 1,
    layout: 'grid',
    productFilter: 'deals_only',
    itemLimit: 4,
    countdownHours: 24,
    customProductIds: []
  });

  const availableIcons = [
    { id: 'Clock', label: 'Clock / Timer', icon: Clock },
    { id: 'Flame', label: 'Flame / Hot', icon: Flame },
    { id: 'TrendingUp', label: 'Trending', icon: TrendingUp },
    { id: 'Crown', label: 'Crown / Best Seller', icon: Crown },
    { id: 'Sparkles', label: 'Sparkles / AI', icon: Sparkles },
    { id: 'Zap', label: 'Zap / Flash', icon: Zap },
    { id: 'Gift', label: 'Gift / Cards', icon: Gift },
    { id: 'Tv', label: 'TV / IPTV', icon: Tv },
    { id: 'Key', label: 'Key / Software', icon: Key },
    { id: 'Tag', label: 'Tag / Discount', icon: Tag },
  ];

  const accentColors = [
    { id: 'yellow', name: 'Martfury Yellow', border: 'border-yellow-400', bg: 'bg-yellow-400 text-slate-950' },
    { id: 'red', name: 'Crimson Red', border: 'border-red-500', bg: 'bg-red-500 text-white' },
    { id: 'purple', name: 'Neon Purple', border: 'border-purple-500', bg: 'bg-purple-500 text-white' },
    { id: 'emerald', name: 'Emerald Green', border: 'border-emerald-500', bg: 'bg-emerald-500 text-white' },
    { id: 'blue', name: 'Cyber Blue', border: 'border-blue-500', bg: 'bg-blue-500 text-white' },
    { id: 'orange', name: 'Vibrant Orange', border: 'border-orange-500', bg: 'bg-orange-500 text-white' },
  ];

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSection) return;

    updateStorefrontSection(editingSection.id, {
      title: editingSection.title.trim(),
      subtitle: editingSection.subtitle.trim(),
      badge: editingSection.badge.trim(),
      icon: editingSection.icon,
      accentColor: editingSection.accentColor,
      itemLimit: Number(editingSection.itemLimit) || 4,
      countdownHours: editingSection.countdownHours ? Number(editingSection.countdownHours) : undefined,
      productFilter: editingSection.productFilter,
      customProductIds: editingSection.customProductIds,
      showInNavbar: editingSection.showInNavbar,
      navbarLabel: editingSection.navbarLabel.trim() || editingSection.title.trim()
    });

    setEditingSection(null);
    setSaveSuccessMessage(`Section "${editingSection.title}" successfully updated!`);
    setTimeout(() => setSaveSuccessMessage(''), 3000);
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSectionForm.title.trim()) return;

    addStorefrontSection({
      ...newSectionForm,
      title: newSectionForm.title.trim(),
      subtitle: newSectionForm.subtitle.trim(),
      badge: newSectionForm.badge.trim(),
      navbarLabel: newSectionForm.navbarLabel.trim() || newSectionForm.title.trim()
    });

    setIsAddingNew(false);
    setNewSectionForm({
      title: '',
      subtitle: '',
      badge: 'HOT DEAL',
      icon: 'Sparkles',
      enabled: true,
      showInNavbar: true,
      navbarLabel: '',
      accentColor: 'yellow',
      order: storefrontSections.length + 2,
      layout: 'grid',
      productFilter: 'deals_only',
      itemLimit: 4,
      countdownHours: 24,
      customProductIds: []
    });

    setSaveSuccessMessage('New promotional section created and added to storefront & navigation!');
    setTimeout(() => setSaveSuccessMessage(''), 3000);
  };

  return (
    <div className="space-y-6">
      {/* View Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#0b1120] border border-slate-800 rounded-3xl p-6 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-gradient-to-r from-[#0a1730] to-[#142d56] text-[#fcb800] border border-slate-700/60">
              <Layers className="w-5 h-5" />
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-white">
              Storefront & Navigation Sections
            </h1>
          </div>
          <p className="text-xs text-slate-400 max-w-2xl">
            Edit, modify, switch on/off, reorder, add, or delete promotional storefront sections (Limited-Time Offers, Flash Deals, Trending This Week, Best Sellers, & Custom campaigns) and sync them with the Navbar.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveView('storefront')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#fcb800]" />
            <span>View Live Store</span>
          </button>

          <button
            onClick={resetStorefrontSections}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white text-xs font-bold transition-colors cursor-pointer"
            title="Reset all sections to factory default"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <button
            onClick={() => setIsAddingNew(true)}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0a1730] via-[#112850] to-[#1a386b] hover:from-[#0d1e3d] hover:to-[#224480] text-white border border-slate-700/60 font-black text-xs shadow-lg shadow-black/40 transition-transform active:scale-95 cursor-pointer"
          >
            <Plus className="w-4 h-4 text-[#fcb800]" />
            <span>Add New Section</span>
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {saveSuccessMessage && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{saveSuccessMessage}</span>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-3">
        {storefrontSections.map((sec, index) => {
          const isFirst = index === 0;
          const isLast = index === storefrontSections.length - 1;

          return (
            <div
              key={sec.id}
              className={`p-5 rounded-2xl border transition-all ${
                sec.enabled 
                  ? 'bg-[#0b1120] border-slate-800 shadow-lg' 
                  : 'bg-[#070b14]/60 border-slate-800/50 opacity-60'
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                
                {/* Left section info */}
                <div className="flex items-start gap-3.5 min-w-0">
                  {/* Reorder Up/Down */}
                  <div className="flex flex-col gap-1 shrink-0 pt-0.5">
                    <button
                      disabled={isFirst}
                      onClick={() => reorderStorefrontSections(index, index - 1)}
                      className={`p-1 rounded-lg border text-slate-400 ${
                        isFirst 
                          ? 'opacity-20 cursor-not-allowed border-transparent' 
                          : 'hover:text-white hover:bg-slate-800 border-slate-700 cursor-pointer'
                      }`}
                      title="Move Up"
                    >
                      <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      disabled={isLast}
                      onClick={() => reorderStorefrontSections(index, index + 1)}
                      className={`p-1 rounded-lg border text-slate-400 ${
                        isLast 
                          ? 'opacity-20 cursor-not-allowed border-transparent' 
                          : 'hover:text-white hover:bg-slate-800 border-slate-700 cursor-pointer'
                      }`}
                      title="Move Down"
                    >
                      <ArrowDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Section Details */}
                  <div className="space-y-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-black text-white truncate">
                        {sec.title}
                      </span>

                      {sec.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-yellow-400/10 text-[#fcb800] border border-yellow-400/30">
                          {sec.badge}
                        </span>
                      )}

                      {sec.isCustom && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-purple-500/10 text-purple-400 border border-purple-500/30">
                          Custom Section
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 line-clamp-1">
                      {sec.subtitle || 'No subtitle provided'}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span>Products: <strong className="text-slate-200">{sec.itemLimit} max</strong></span>
                      <span>•</span>
                      <span>Filter: <strong className="text-slate-200">{sec.productFilter.replace('_', ' ')}</strong></span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3 h-3 text-[#fcb800]" />
                        <span>Navbar: <strong className={sec.showInNavbar ? 'text-emerald-400' : 'text-slate-500'}>{sec.showInNavbar ? `Enabled ("${sec.navbarLabel || sec.title}")` : 'Disabled'}</strong></span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right controls */}
                <div className="flex flex-wrap items-center gap-2.5 shrink-0 pt-2 lg:pt-0">
                  {/* Navbar switch */}
                  <button
                    onClick={() => toggleNavbarSection(sec.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                      sec.showInNavbar
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                        : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                    title="Toggle display in top Navbar"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>{sec.showInNavbar ? 'In Navbar' : 'Hidden from Nav'}</span>
                  </button>

                  {/* Storefront switch */}
                  <button
                    onClick={() => toggleStorefrontSection(sec.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                      sec.enabled
                        ? 'bg-yellow-400/10 border-yellow-400/30 text-[#fcb800] hover:bg-yellow-400/20'
                        : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {sec.enabled ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                    <span>{sec.enabled ? 'Enabled' : 'Disabled'}</span>
                  </button>

                  {/* Edit button */}
                  <button
                    onClick={() => setEditingSection({ ...sec })}
                    className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
                    title="Edit & Modify Section"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  {/* Delete button (for custom or allow deleting) */}
                  {sec.isCustom && (
                    <button
                      onClick={() => deleteStorefrontSection(sec.id)}
                      className="p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-rose-400 border border-red-500/30 transition-colors cursor-pointer"
                      title="Delete Custom Section"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Edit Section Modal */}
      {editingSection && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0b1120] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Edit3 className="w-5 h-5 text-[#fcb800]" />
                <h2 className="text-lg font-black text-white">
                  Edit Section: {editingSection.title}
                </h2>
              </div>
              <button
                onClick={() => setEditingSection(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleEditSave} className="space-y-4 text-xs">
              
              {/* Title & Navbar Label */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Section Title *</label>
                  <input
                    type="text"
                    required
                    value={editingSection.title}
                    onChange={e => setEditingSection({ ...editingSection, title: e.target.value })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Navbar Label (Short)</label>
                  <input
                    type="text"
                    value={editingSection.navbarLabel || ''}
                    placeholder="Defaults to section title"
                    onChange={e => setEditingSection({ ...editingSection, navbarLabel: e.target.value })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  />
                </div>
              </div>

              {/* Subtitle */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-bold">Subtitle / Description</label>
                <input
                  type="text"
                  value={editingSection.subtitle}
                  onChange={e => setEditingSection({ ...editingSection, subtitle: e.target.value })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                />
              </div>

              {/* Badge & Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Badge Text</label>
                  <input
                    type="text"
                    value={editingSection.badge}
                    placeholder="e.g. FLASH SALE, ENDING SOON, #1 RANKED"
                    onChange={e => setEditingSection({ ...editingSection, badge: e.target.value })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Accent Color</label>
                  <select
                    value={editingSection.accentColor}
                    onChange={e => setEditingSection({ ...editingSection, accentColor: e.target.value as any })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  >
                    {accentColors.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Product Filtering & Item Limit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Product Filter Mode</label>
                  <select
                    value={editingSection.productFilter}
                    onChange={e => setEditingSection({ ...editingSection, productFilter: e.target.value as any })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  >
                    <option value="deals_only">Discounts & Flash Deals</option>
                    <option value="high_sales">Best Selling (Highest Orders)</option>
                    <option value="high_rating">Top Rated (Trending)</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="all">All Products</option>
                    <option value="custom_ids">Manual Picked Products</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Max Products Displayed</label>
                  <select
                    value={editingSection.itemLimit}
                    onChange={e => setEditingSection({ ...editingSection, itemLimit: Number(e.target.value) })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  >
                    <option value={4}>4 Products (Standard Row)</option>
                    <option value={6}>6 Products</option>
                    <option value={8}>8 Products (2 Rows)</option>
                    <option value={12}>12 Products</option>
                    <option value={16}>16 Products</option>
                  </select>
                </div>
              </div>

              {/* Countdown Timer (if relevant) */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-bold">Countdown Timer Initial Hours (Optional)</label>
                <input
                  type="number"
                  value={editingSection.countdownHours || 24}
                  min={1}
                  max={720}
                  onChange={e => setEditingSection({ ...editingSection, countdownHours: Number(e.target.value) })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                />
              </div>

              {/* Toggles */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#070b14] border border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingSection.enabled}
                    onChange={e => setEditingSection({ ...editingSection, enabled: e.target.checked })}
                    className="w-4 h-4 text-[#fcb800] rounded"
                  />
                  <span className="text-white font-bold">Show on Storefront</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingSection.showInNavbar}
                    onChange={e => setEditingSection({ ...editingSection, showInNavbar: e.target.checked })}
                    className="w-4 h-4 text-[#fcb800] rounded"
                  />
                  <span className="text-white font-bold">Show in Top Navigation Bar</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingSection(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0a1730] via-[#112850] to-[#1a386b] hover:from-[#0d1e3d] hover:to-[#224480] text-white border border-slate-700/60 font-black"
                >
                  Save Section Changes
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

      {/* Add New Section Modal */}
      {isAddingNew && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#0b1120] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Plus className="w-5 h-5 text-[#fcb800]" />
                <h2 className="text-lg font-black text-white">
                  Add New Promotional Section
                </h2>
              </div>
              <button
                onClick={() => setIsAddingNew(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4 text-xs">
              
              {/* Title & Navbar Label */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Section Title *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Weekend Mega Sale, Eid Special"
                    value={newSectionForm.title}
                    onChange={e => setNewSectionForm({ ...newSectionForm, title: e.target.value })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Navbar Label (Short)</label>
                  <input
                    type="text"
                    placeholder="Defaults to section title"
                    value={newSectionForm.navbarLabel}
                    onChange={e => setNewSectionForm({ ...newSectionForm, navbarLabel: e.target.value })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  />
                </div>
              </div>

              {/* Subtitle */}
              <div className="space-y-1.5">
                <label className="text-slate-300 font-bold">Subtitle / Description</label>
                <input
                  type="text"
                  placeholder="e.g. Hand-picked software deals and hardware vouchers"
                  value={newSectionForm.subtitle}
                  onChange={e => setNewSectionForm({ ...newSectionForm, subtitle: e.target.value })}
                  className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                />
              </div>

              {/* Badge & Color */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Badge Text</label>
                  <input
                    type="text"
                    placeholder="e.g. MEGA DEAL, 40% OFF"
                    value={newSectionForm.badge}
                    onChange={e => setNewSectionForm({ ...newSectionForm, badge: e.target.value })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Accent Color</label>
                  <select
                    value={newSectionForm.accentColor}
                    onChange={e => setNewSectionForm({ ...newSectionForm, accentColor: e.target.value as any })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  >
                    {accentColors.map(c => (
                      <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filter & Item Limit */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Product Filter Mode</label>
                  <select
                    value={newSectionForm.productFilter}
                    onChange={e => setNewSectionForm({ ...newSectionForm, productFilter: e.target.value as any })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  >
                    <option value="deals_only">Discounts & Flash Deals</option>
                    <option value="high_sales">Best Selling (Highest Orders)</option>
                    <option value="high_rating">Top Rated (Trending)</option>
                    <option value="newest">Newest Arrivals</option>
                    <option value="all">All Products</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-300 font-bold">Max Products Displayed</label>
                  <select
                    value={newSectionForm.itemLimit}
                    onChange={e => setNewSectionForm({ ...newSectionForm, itemLimit: Number(e.target.value) })}
                    className="w-full bg-[#070b14] border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#fcb800]"
                  >
                    <option value={4}>4 Products (Standard Row)</option>
                    <option value={6}>6 Products</option>
                    <option value={8}>8 Products (2 Rows)</option>
                    <option value={12}>12 Products</option>
                  </select>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#070b14] border border-slate-800">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newSectionForm.enabled}
                    onChange={e => setNewSectionForm({ ...newSectionForm, enabled: e.target.checked })}
                    className="w-4 h-4 text-[#fcb800] rounded"
                  />
                  <span className="text-white font-bold">Show on Storefront</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newSectionForm.showInNavbar}
                    onChange={e => setNewSectionForm({ ...newSectionForm, showInNavbar: e.target.checked })}
                    className="w-4 h-4 text-[#fcb800] rounded"
                  />
                  <span className="text-white font-bold">Show in Top Navigation Bar</span>
                </label>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddingNew(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#0a1730] via-[#112850] to-[#1a386b] hover:from-[#0d1e3d] hover:to-[#224480] text-white border border-slate-700/60 font-black"
                >
                  Create & Publish Section
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </div>
  );
};
