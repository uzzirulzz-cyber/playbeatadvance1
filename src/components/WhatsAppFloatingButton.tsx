import React, { useState } from 'react';
import { MessageCircle, X, Send, Zap, MessageSquare, SendHorizontal, Copy, Check, ExternalLink } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'wechat' | 'telegram'>('whatsapp');
  const [message, setMessage] = useState('');
  const [copiedWeChat, setCopiedWeChat] = useState(false);

  const whatsappNumber = '+923321029333';
  const cleanPhone = '923321029333';
  const whatsappHandle = '@playbeat1';
  const wechatHandle = '@playbeatdigital';
  const telegramHandle = '@playbeatdigital';
  const telegramLink = 'https://t.me/playbeatdigital';

  const quickMessages = [
    'Hi! I want to order a Smart 4K Projector with warranty.',
    'Is the Magcubic HY300 PRO available in stock?',
    'I want to purchase a Windows 11 Pro / Office 2024 license key.',
    'Need instant help with payment / JazzCash / EasyPaisa checkout.'
  ];

  const handleSendWhatsApp = (text?: string) => {
    const query = encodeURIComponent(text || message || 'Hi PlayBeat Digital, I need assistance with an order.');
    window.open(`https://wa.me/${cleanPhone}?text=${query}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const handleCopyWeChat = () => {
    navigator.clipboard.writeText('playbeatdigital');
    setCopiedWeChat(true);
    setTimeout(() => setCopiedWeChat(false), 3000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-2xl bg-[#0b1120] border border-slate-700 shadow-2xl shadow-black/90 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-600 animate-pulse" />
              </div>
              <div>
                <h4 className="text-sm font-bold flex items-center gap-1.5">
                  <span>PlayBeat Support Desk</span>
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-ping" />
                  <span>Online 24/7 Priority Desk</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Social Channels Selector Tabs */}
          <div className="grid grid-cols-3 bg-slate-900 border-b border-slate-800 text-xs font-bold">
            <button
              onClick={() => setActiveChannel('whatsapp')}
              className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-b-2 ${
                activeChannel === 'whatsapp'
                  ? 'border-emerald-400 text-emerald-400 bg-emerald-950/30'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={() => setActiveChannel('telegram')}
              className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-b-2 ${
                activeChannel === 'telegram'
                  ? 'border-sky-400 text-sky-400 bg-sky-950/30'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <SendHorizontal className="w-3.5 h-3.5" />
              <span>Telegram</span>
            </button>

            <button
              onClick={() => setActiveChannel('wechat')}
              className={`py-2.5 px-2 flex items-center justify-center gap-1.5 transition-colors cursor-pointer border-b-2 ${
                activeChannel === 'wechat'
                  ? 'border-green-400 text-green-400 bg-green-950/30'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WeChat</span>
            </button>
          </div>

          {/* Body Content depending on tab */}
          <div className="p-4 space-y-3 bg-[#070b14]">
            {activeChannel === 'whatsapp' && (
              <>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  👋 Welcome to <strong className="text-white">PlayBeat Digital</strong>! Chat directly on WhatsApp <strong className="text-emerald-400 font-mono">{whatsappHandle}</strong> ({whatsappNumber}).
                </div>

                {/* Quick Prompts */}
                <div className="space-y-1.5">
                  <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Quick Inquiries:</div>
                  {quickMessages.map((msg, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendWhatsApp(msg)}
                      className="w-full text-left p-2 rounded-lg bg-slate-900/80 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-300 hover:text-emerald-300 transition-all cursor-pointer truncate"
                    >
                      {msg}
                    </button>
                  ))}
                </div>

                {/* Custom Input */}
                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendWhatsApp()}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                  />
                  <button
                    onClick={() => handleSendWhatsApp()}
                    className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-all cursor-pointer shrink-0 shadow-lg shadow-emerald-950/50"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </>
            )}

            {activeChannel === 'telegram' && (
              <div className="space-y-3 py-2 text-center">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <SendHorizontal className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-black text-sm text-white">Telegram Official Channel & Bot</h5>
                  <p className="text-xs text-slate-400">
                    Connect with our priority concierge on Telegram: <strong className="text-sky-400 font-mono">{telegramHandle}</strong>
                  </p>
                </div>
                <a
                  href={telegramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Telegram ({telegramHandle})</span>
                </a>
              </div>
            )}

            {activeChannel === 'wechat' && (
              <div className="space-y-3 py-2 text-center">
                <div className="w-12 h-12 mx-auto rounded-2xl bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h5 className="font-black text-sm text-white">WeChat Official Support</h5>
                  <p className="text-xs text-slate-400">
                    Add our official WeChat ID for instant digital licenses & projector inquiries.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
                  <div className="text-left">
                    <span className="text-[10px] text-slate-400 block font-bold uppercase">WeChat ID:</span>
                    <span className="text-sm font-mono font-black text-green-400">{wechatHandle}</span>
                  </div>
                  <button
                    onClick={handleCopyWeChat}
                    className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copiedWeChat ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedWeChat ? 'Copied!' : 'Copy ID'}</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer badge */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400">
              <Zap className="w-3 h-3" />
              playbeat.digital Official
            </span>
            <span>24/7 Verified Support</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/40 transition-all duration-300 cursor-pointer active:scale-95 border border-emerald-400/30"
        title="Chat on WhatsApp @playbeat1 / Telegram / WeChat @playbeatdigital"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300 border border-emerald-700" />
        </span>
        
        <MessageCircle className="w-5 h-5 fill-white shrink-0" />
        <span className="font-semibold tracking-wide">Contact Us</span>
      </button>
    </div>
  );
};
