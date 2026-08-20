import { Product, Category, Coupon, NotificationItem, User } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  { id: 'cat-all', name: 'All Products', slug: 'all', description: 'Browse our entire verified digital catalogue & hardware', icon: 'Grid', color: '#6366f1', productCount: 30 },
  { id: 'cat-software', name: 'Software & OS Licenses', slug: 'software-licenses', description: 'Official Windows 11 Pro, Office 2024, Adobe CC & IDM Lifetime', icon: 'KeyRound', color: '#f59e0b', productCount: 6 },
  { id: 'cat-gamekeys', name: 'Game Keys & CDKeys', slug: 'game-keys', description: 'Steam CDKeys, GTA V, Cyberpunk 2077, EA FC 25 & Black Myth Wukong', icon: 'Gamepad2', color: '#f97316', productCount: 5 },
  { id: 'cat-giftcards', name: 'Gift Cards & Wallets', slug: 'gift-cards', description: 'Instant vouchers for Steam $50, PlayStation PSN, Xbox & Apple iTunes', icon: 'Gift', color: '#ef4444', productCount: 5 },
  { id: 'cat-topups', name: 'Game Direct Top-Ups', slug: 'game-topups', description: 'PUBG Mobile UC, Free Fire Diamonds, Valorant VP & Roblox Robux', icon: 'Zap', color: '#eab308', productCount: 4 },
  { id: 'cat-ai', name: 'AI Tools & SaaS', slug: 'ai-tools', description: 'ChatGPT Plus GPT-4o, Claude 3.7 Sonnet Pro, Midjourney & Cursor AI', icon: 'Sparkles', color: '#10b981', productCount: 4 },
  { id: 'cat-streaming', name: 'Streaming & 4K IPTV', slug: 'streaming', description: '18,000+ Ch 4K IPTV, Netflix UHD, Spotify Premium & YouTube Premium', icon: 'Tv', color: '#ec4899', productCount: 4 },
  { id: 'cat-accounts', name: 'Accounts & Memberships', slug: 'accounts-memberships', description: 'Discord Nitro 1-Yr, Telegram Premium & Modded Gaming Accounts', icon: 'ShieldCheck', color: '#8b5cf6', productCount: 3 },
  { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', description: 'Magcubic HY300 Pro, HY300Pro Plus, HM103-A & HY320 4K Cinema Models', icon: 'Projector', color: '#fcb800', productCount: 8 }
];

export const INITIAL_PRODUCTS: Product[] = [
  // =================================================================
  // 1. SOFTWARE & OS LICENSES (With 10% Retail Markup Applied)
  // =================================================================
  {
    id: 'prod-soft-win11-pro',
    title: 'Windows 11 Pro Lifetime Retail License Key',
    slug: 'windows-11-pro-lifetime-retail-license-key',
    shortDescription: 'Official Microsoft Windows 11 Professional 64-bit lifetime activation key with direct online validation.',
    description: 'Activate your PC permanently with an official genuine Microsoft Windows 11 Pro license key. Enjoy BitLocker encryption, Remote Desktop, Hyper-V virtualization, Windows Sandbox, and full Microsoft security updates for life.',
    type: 'SOFTWARE_LICENSE',
    status: 'PUBLISHED',
    price: 3080, // 2800 + 10% markup = 3080
    discountPrice: 2850,
    costPrice: 1500,
    profit: 1580,
    currency: 'PKR',
    sku: 'MS-WIN11-PRO-RETAIL',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0284c7', '#0369a1'],
      icon: 'KeyRound'
    },
    tags: ['Windows 11 Pro', 'Microsoft', 'Lifetime License', 'Retail Key', 'Instant Delivery'],
    licenseType: 'Perpetual Lifetime 1 PC Retail License',
    version: 'Windows 11 Pro (23H2 / 24H2)',
    featured: true,
    rating: 4.98,
    reviewCount: 312,
    salesCount: 1450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-software', name: 'Software & OS Licenses', slug: 'software-licenses', icon: 'KeyRound', color: '#f59e0b' },
    sourceUrl: 'https://playbeat.digital/products/windows-11-pro-lifetime-retail-license-key',
    specs: {
      'Platform': 'Microsoft Windows 11 Pro (64-Bit)',
      'Activation Type': 'Online Direct Microsoft Activation',
      'Validity': 'Lifetime Perpetual (1 PC)',
      'Language': 'Multilingual Global Support',
      'Updates': 'Full Lifetime Windows Security Updates'
    },
    features: [
      'Instant digital key delivery via WhatsApp & Email vault',
      'BitLocker drive encryption & advanced data security',
      'Remote Desktop host & client access',
      'Windows Sandbox and Hyper-V virtualization support'
    ],
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-soft-office2024',
    title: 'Microsoft Office 2024 Professional Plus Lifetime Key',
    slug: 'microsoft-office-2024-professional-plus-lifetime-key',
    shortDescription: 'Permanent offline activation for Word, Excel, PowerPoint, Outlook, Access & Publisher 2024.',
    description: 'The latest standalone Microsoft Office 2024 suite. Includes the full suite of desktop productivity apps with permanent one-time activation. No recurring monthly subscriptions.',
    type: 'SOFTWARE_LICENSE',
    status: 'PUBLISHED',
    price: 4399, // 3999 + 10% = 4399
    discountPrice: 3990,
    costPrice: 2200,
    profit: 2199,
    currency: 'PKR',
    sku: 'MS-OFFICE-2024-PROPLUS',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1000&q=80',
      colors: ['#ea580c', '#c2410c'],
      icon: 'KeyRound'
    },
    tags: ['Office 2024', 'Word', 'Excel', 'PowerPoint', 'Lifetime Activation'],
    licenseType: 'Lifetime 1 PC Perpetual Key',
    version: 'Office 2024 Professional Plus',
    featured: true,
    rating: 4.96,
    reviewCount: 245,
    salesCount: 1180,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-software', name: 'Software & OS Licenses', slug: 'software-licenses', icon: 'KeyRound', color: '#f59e0b' },
    sourceUrl: 'https://playbeat.digital/products/microsoft-office-2024-professional-plus-lifetime-key',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-soft-adobe-cc',
    title: 'Adobe Creative Cloud All Apps 1-Year Subscription',
    slug: 'adobe-creative-cloud-all-apps-1-year-subscription',
    shortDescription: 'Official Adobe account upgrade with Photoshop, Illustrator, Premiere Pro, After Effects & 100GB Cloud.',
    description: 'Get full genuine access to 20+ Adobe creative applications including Photoshop 2025 with Generative AI Fill, Illustrator, Premiere Pro, After Effects, Lightroom, and Acrobat Pro.',
    type: 'SOFTWARE_LICENSE',
    status: 'PUBLISHED',
    price: 20899, // 18999 + 10% = 20899
    discountPrice: 19500,
    costPrice: 14500,
    profit: 6399,
    currency: 'PKR',
    sku: 'ADOBE-CC-ALL-APPS-1YR',
    stock: 20,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=80',
      colors: ['#ef4444', '#b91c1c'],
      icon: 'KeyRound'
    },
    tags: ['Adobe Creative Cloud', 'Photoshop', 'Premiere Pro', 'Firefly AI', '1 Year'],
    licenseType: '1-Year Direct Adobe Account Activation',
    version: 'Adobe CC 2025 Latest',
    featured: true,
    rating: 4.95,
    reviewCount: 168,
    salesCount: 480,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-software', name: 'Software & OS Licenses', slug: 'software-licenses', icon: 'KeyRound', color: '#f59e0b' },
    sourceUrl: 'https://playbeat.digital/products/adobe-creative-cloud-all-apps-1-year-subscription',
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-soft-idm-lifetime',
    title: 'Internet Download Manager (IDM) Lifetime License (1 PC)',
    slug: 'internet-download-manager-idm-lifetime-license',
    shortDescription: 'Official Tonec IDM lifetime activation key with unlimited updates and maximum 5x download acceleration.',
    description: 'Boost your download speeds up to 500% with the genuine Internet Download Manager lifetime license. Automatic resume capability, browser extension integration, and high-speed multi-threaded acceleration.',
    type: 'SOFTWARE_LICENSE',
    status: 'PUBLISHED',
    price: 3630, // 3300 + 10% = 3630
    discountPrice: 3450,
    costPrice: 2000,
    profit: 1630,
    currency: 'PKR',
    sku: 'IDM-LIFETIME-OFFICIAL-1PC',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80',
      colors: ['#3b82f6', '#1d4ed8'],
      icon: 'KeyRound'
    },
    tags: ['IDM', 'Download Manager', 'Lifetime', 'Official Key', 'Fast Downloads'],
    licenseType: 'Official Lifetime Retail License',
    version: 'IDM v6.42 Latest',
    featured: true,
    rating: 4.97,
    reviewCount: 189,
    salesCount: 940,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-software', name: 'Software & OS Licenses', slug: 'software-licenses', icon: 'KeyRound', color: '#f59e0b' },
    sourceUrl: 'https://playbeat.digital/products/internet-download-manager-idm-lifetime-license',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-soft-nordvpn-2yr',
    title: 'NordVPN Complete Security 2-Year Private Account',
    slug: 'nordvpn-complete-security-2-year-private-account',
    shortDescription: 'Ultra-fast global VPN servers, Threat Protection anti-malware, NordPass password manager & 1TB Cloud storage.',
    description: 'Protect all your devices with industry-leading NordVPN encryption. Connect up to 10 devices simultaneously with dedicated high-speed servers in 111 countries.',
    type: 'SOFTWARE_LICENSE',
    status: 'PUBLISHED',
    price: 7699, // 6999 + 10% = 7699
    discountPrice: 7200,
    costPrice: 4500,
    profit: 3199,
    currency: 'PKR',
    sku: 'NORDVPN-2YR-ULTRA-SEC',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0284c7', '#0369a1'],
      icon: 'ShieldCheck'
    },
    tags: ['NordVPN', 'VPN', 'Online Privacy', '2 Years', 'High Speed'],
    licenseType: '2-Year Direct Premium Subscription',
    version: 'NordVPN 2025 Edition',
    featured: false,
    rating: 4.94,
    reviewCount: 112,
    salesCount: 530,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-software', name: 'Software & OS Licenses', slug: 'software-licenses', icon: 'KeyRound', color: '#f59e0b' },
    sourceUrl: 'https://playbeat.digital/products/nordvpn-complete-security-2-year-private-account',
    deliveryType: 'ACCOUNT_INVITE'
  },

  // =================================================================
  // 2. GAME KEYS & CDKEYS (With 10% Retail Markup Applied)
  // =================================================================
  {
    id: 'prod-game-gtav',
    title: 'Grand Theft Auto V: Premium Edition (PC Rockstar / Steam Key)',
    slug: 'grand-theft-auto-v-premium-edition-pc-key',
    shortDescription: 'Full GTA V story mode + GTA Online with Criminal Enterprise Starter Pack ($1,000,000 bonus cash).',
    description: 'Experience Los Santos and Blaine County in full 4K 60FPS. Includes complete Story Mode, instant access to Grand Theft Auto Online, and the Criminal Enterprise Starter Pack with $10,000,000 worth of properties, vehicles, and weapons.',
    type: 'GAME',
    status: 'PUBLISHED',
    price: 5499, // 4999 + 10% = 5499
    discountPrice: 5100,
    costPrice: 3500,
    profit: 1999,
    currency: 'PKR',
    sku: 'ROCKSTAR-GTAV-PREMIUM',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
      colors: ['#f59e0b', '#b45309'],
      icon: 'Gamepad2'
    },
    tags: ['GTA V', 'Rockstar Games', 'GTA Online', 'PC Game Key', 'Instant Key'],
    licenseType: 'Global Digital Redeemable Key',
    version: 'Premium Edition',
    featured: true,
    rating: 4.98,
    reviewCount: 520,
    salesCount: 2450,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-gamekeys', name: 'Game Keys & CDKeys', slug: 'game-keys', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital/products/grand-theft-auto-v-premium-edition-pc-key',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-game-cyberpunk2077',
    title: 'Cyberpunk 2077: Ultimate Edition (PC Steam / GOG Key)',
    slug: 'cyberpunk-2077-ultimate-edition-pc-key',
    shortDescription: 'Complete Cyberpunk 2077 base game + Phantom Liberty spy-thriller expansion with Ray Tracing Overdrive.',
    description: 'Immerse yourself into Night City with high-octane cybernetic action. Contains the complete base story and the acclaimed Phantom Liberty DLC starring Idris Elba.',
    type: 'GAME',
    status: 'PUBLISHED',
    price: 9899, // 8999 + 10% = 9899
    discountPrice: 9200,
    costPrice: 6800,
    profit: 3099,
    currency: 'PKR',
    sku: 'CDPR-CYBERPUNK-ULTIMATE',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80',
      colors: ['#eab308', '#ca8a04'],
      icon: 'Gamepad2'
    },
    tags: ['Cyberpunk 2077', 'Phantom Liberty', 'Steam Key', 'Ray Tracing', 'RPG'],
    licenseType: 'Global Digital PC Key',
    version: 'Ultimate Edition v2.2',
    featured: true,
    rating: 4.96,
    reviewCount: 280,
    salesCount: 1340,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-gamekeys', name: 'Game Keys & CDKeys', slug: 'game-keys', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital/products/cyberpunk-2077-ultimate-edition-pc-key',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-game-blackmyth',
    title: 'Black Myth: Wukong (PC Steam Global Key)',
    slug: 'black-myth-wukong-pc-steam-global-key',
    shortDescription: 'Journey through Chinese mythology in the blockbuster action RPG with breathtaking Unreal Engine 5 graphics.',
    description: 'Step into the shoes of the Destined One in this critically acclaimed mythic journey. Master diverse staff techniques, spells, and transformations in high-action combat.',
    type: 'GAME',
    status: 'PUBLISHED',
    price: 13750, // 12500 + 10% = 13750
    discountPrice: 12999,
    costPrice: 9800,
    profit: 3950,
    currency: 'PKR',
    sku: 'GAME-WUKONG-STEAM-GLOBAL',
    stock: 35,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
      colors: ['#78350f', '#451a03'],
      icon: 'Gamepad2'
    },
    tags: ['Black Myth Wukong', 'Steam Key', 'Action RPG', 'Unreal Engine 5', 'Mythology'],
    licenseType: 'Official Steam Global CDKey',
    version: 'Standard Global Edition',
    featured: true,
    rating: 4.99,
    reviewCount: 410,
    salesCount: 1680,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-gamekeys', name: 'Game Keys & CDKeys', slug: 'game-keys', icon: 'Gamepad2', color: '#f97316' },
    sourceUrl: 'https://playbeat.digital/products/black-myth-wukong-pc-steam-global-key',
    deliveryType: 'INSTANT_KEY'
  },

  // =================================================================
  // 3. GAMING GIFT CARDS & WALLETS (With 10% Retail Markup Applied)
  // =================================================================
  {
    id: 'prod-gc-steam-50',
    title: 'Steam Wallet Gift Card $50 USD (Global / US Currency)',
    slug: 'steam-wallet-gift-card-50-usd',
    shortDescription: 'Instant $50 USD Steam balance code to buy any PC game, DLC, in-game items, and community market passes.',
    description: 'Add $50 directly to your Steam account balance. Automatically converts to your local account currency on redemption if outside the US.',
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 15180, // 13800 + 10% = 15180
    discountPrice: 14600,
    costPrice: 12000,
    profit: 3180,
    currency: 'PKR',
    sku: 'STEAM-WALLET-50USD-GLOBAL',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1612287233207-69500ec75487?auto=format&fit=crop&w=1000&q=80',
      colors: ['#1e293b', '#0f172a'],
      icon: 'Gift'
    },
    tags: ['Steam Card', 'Steam Wallet', '$50 USD', 'PC Gaming', 'Instant Code'],
    licenseType: 'Instant $50 USD Redeemable Voucher',
    version: 'Valve Official Digital Code',
    featured: true,
    rating: 4.99,
    reviewCount: 389,
    salesCount: 2950,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards & Wallets', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital/products/steam-wallet-gift-card-50-usd',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-gc-psn-50',
    title: 'PlayStation Network (PSN) $50 USD Card (US Store)',
    slug: 'playstation-network-psn-50-usd-gift-card',
    shortDescription: 'Instant $50 USD wallet code for PlayStation 5 and PlayStation 4 digital games and PS Plus.',
    description: 'Top up your PlayStation Network wallet instantly. Download full PS5 and PS4 games, DLC add-ons, EA Sports FC points, Call of Duty points, and PlayStation Plus subscriptions.',
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 15180, // 13800 + 10% = 15180
    discountPrice: 14500,
    costPrice: 11800,
    profit: 3380,
    currency: 'PKR',
    sku: 'PSN-WALLET-50USD-DIGITAL',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0284c7', '#0369a1'],
      icon: 'Gift'
    },
    tags: ['PlayStation', 'PSN Card', 'PS5', 'PS4', 'PS Plus', '$50 USD'],
    licenseType: 'Instant $50 USD Digital Redeem Code',
    version: 'Sony Official PlayStation Code',
    featured: true,
    rating: 4.98,
    reviewCount: 220,
    salesCount: 1040,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards & Wallets', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital/products/playstation-network-psn-50-usd-gift-card',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-gc-xbox-gamepass',
    title: 'Xbox Game Pass Ultimate 3-Months Global Subscription Key',
    slug: 'xbox-game-pass-ultimate-3-months-key',
    shortDescription: 'Play 400+ high-quality console & PC games, Xbox Cloud Gaming & EA Play membership included.',
    description: 'Get instant access to day-one blockbuster releases like Call of Duty, Indiana Jones, Halo, and Forza Horizon on both Windows PC and Xbox consoles.',
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 9350, // 8500 + 10% = 9350
    discountPrice: 8900,
    costPrice: 6500,
    profit: 2850,
    currency: 'PKR',
    sku: 'XBOX-GPU-3MO-GLOBAL',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=1000&q=80',
      colors: ['#16a34a', '#15803d'],
      icon: 'Gift'
    },
    tags: ['Xbox', 'Game Pass Ultimate', 'Cloud Gaming', 'EA Play', '3 Months'],
    licenseType: '3 Months Global Digital Code',
    version: 'Ultimate Edition',
    featured: true,
    rating: 4.97,
    reviewCount: 195,
    salesCount: 1150,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards & Wallets', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital/products/xbox-game-pass-ultimate-3-months-key',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-gc-apple-25',
    title: 'Apple iTunes & App Store Gift Card $25 USD (US Account)',
    slug: 'apple-itunes-gift-card-25-usd',
    shortDescription: 'Instant $25 USD Apple balance for apps, iCloud+ storage, games, movies, and Apple Music.',
    description: 'Add $25 to your US Apple ID balance. Can be used for in-app purchases, Roblox, PUBG, Apple Music, iCloud+ storage upgrades, and App Store purchases.',
    type: 'GIFT_CARD',
    status: 'PUBLISHED',
    price: 7590, // 6900 + 10% = 7590
    discountPrice: 7200,
    costPrice: 5800,
    profit: 1790,
    currency: 'PKR',
    sku: 'APPLE-GC-25USD-DIGITAL',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?auto=format&fit=crop&w=1000&q=80',
      colors: ['#64748b', '#475569'],
      icon: 'Gift'
    },
    tags: ['Apple Gift Card', 'iTunes', 'App Store', 'iCloud+', 'US Account'],
    licenseType: 'Instant $25 USD Digital Redeem Code',
    version: 'Apple Official Digital Code',
    featured: false,
    rating: 4.97,
    reviewCount: 175,
    salesCount: 890,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-giftcards', name: 'Gift Cards & Wallets', slug: 'gift-cards', icon: 'Gift', color: '#ef4444' },
    sourceUrl: 'https://playbeat.digital/products/apple-itunes-gift-card-25-usd',
    deliveryType: 'INSTANT_KEY'
  },

  // =================================================================
  // 4. GAME DIRECT TOP-UPS & CURRENCIES (With 10% Markup Applied)
  // =================================================================
  {
    id: 'prod-game-pubg-uc',
    title: 'PUBG Mobile 660 + 60 UC Top-Up (Direct Player ID Recharge)',
    slug: 'pubg-mobile-660-60-uc-topup',
    shortDescription: 'Instant Unknown Cash (UC) direct recharge to your PUBG Mobile Character ID in seconds.',
    description: 'Purchase Royale Pass, mythic weapon skins, lucky crates, and vehicle upgrades instantly. Directly credited to your PUBG Mobile Account via official API.',
    type: 'DIRECT_TOPUP',
    status: 'PUBLISHED',
    price: 3135, // 2850 + 10% = 3135
    discountPrice: 2990,
    costPrice: 2350,
    profit: 785,
    currency: 'PKR',
    sku: 'PUBG-UC-720-DIRECT',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1000&q=80',
      colors: ['#eab308', '#ca8a04'],
      icon: 'Gamepad2'
    },
    tags: ['PUBG Mobile', 'UC Top-Up', 'Royale Pass', 'Instant Delivery', 'Midasbuy'],
    licenseType: 'Instant Player ID Direct Top-Up',
    version: 'Global / Pakistan Server',
    featured: true,
    rating: 4.97,
    reviewCount: 680,
    salesCount: 3890,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-topups', name: 'Game Direct Top-Ups', slug: 'game-topups', icon: 'Zap', color: '#eab308' },
    sourceUrl: 'https://playbeat.digital/products/pubg-mobile-660-60-uc-topup',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-game-freefire-dia',
    title: 'Free Fire 1080 + 108 Diamonds Top-Up (Player ID Direct)',
    slug: 'free-fire-1080-108-diamonds-topup',
    shortDescription: 'Instant Free Fire diamonds recharge to your Garena Player ID in 30 seconds.',
    description: 'Unlock elite passes, legendary gun skins, evo weapon crates, and character bundles. 100% official direct Garena top-up with zero risk to your account.',
    type: 'DIRECT_TOPUP',
    status: 'PUBLISHED',
    price: 3025, // 2750 + 10% = 3025
    discountPrice: 2890,
    costPrice: 2250,
    profit: 775,
    currency: 'PKR',
    sku: 'FF-DIAMONDS-1188-DIRECT',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1000&q=80',
      colors: ['#f97316', '#ea580c'],
      icon: 'Gamepad2'
    },
    tags: ['Free Fire', 'Diamonds', 'Garena Top-Up', 'Player ID', 'Instant Delivery'],
    licenseType: 'Instant Player ID Direct Top-Up',
    version: 'Free Fire Max / Global',
    featured: true,
    rating: 4.96,
    reviewCount: 490,
    salesCount: 2750,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-topups', name: 'Game Direct Top-Ups', slug: 'game-topups', icon: 'Zap', color: '#eab308' },
    sourceUrl: 'https://playbeat.digital/products/free-fire-1080-108-diamonds-topup',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-game-valorant-vp',
    title: 'Valorant 2050 VP Riot Points (Global Digital Code)',
    slug: 'valorant-2050-vp-riot-points-code',
    shortDescription: 'Official Riot Games prepaid gift code for instant Valorant Points in AP / EU / Global accounts.',
    description: 'Get weapon skins, the battle pass, and radiant points in Valorant. Redeemable directly inside the Valorant in-game store.',
    type: 'DIRECT_TOPUP',
    status: 'PUBLISHED',
    price: 6380, // 5800 + 10% = 6380
    discountPrice: 6100,
    costPrice: 4800,
    profit: 1580,
    currency: 'PKR',
    sku: 'VALORANT-2050-VP-GLOBAL',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1000&q=80',
      colors: ['#ef4444', '#dc2626'],
      icon: 'Gamepad2'
    },
    tags: ['Valorant', 'VP Points', 'Riot Games', 'Battle Pass', 'Digital Code'],
    licenseType: 'Instant Digital Voucher Code',
    version: 'Global Redeemable',
    featured: true,
    rating: 4.95,
    reviewCount: 230,
    salesCount: 1120,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-topups', name: 'Game Direct Top-Ups', slug: 'game-topups', icon: 'Zap', color: '#eab308' },
    sourceUrl: 'https://playbeat.digital/products/valorant-2050-vp-riot-points-code',
    deliveryType: 'INSTANT_KEY'
  },

  // =================================================================
  // 5. AI TOOLS & SAAS SUBSCRIPTIONS (With 10% Retail Markup)
  // =================================================================
  {
    id: 'prod-ai-chatgpt-plus',
    title: 'ChatGPT Plus (GPT-4o & GPT-5 Ready) 1-Month Private Access',
    slug: 'chatgpt-plus-gpt4o-1-month-private-access',
    shortDescription: 'Direct 1-month private access with GPT-4o, DALL-E 3, Advanced Voice Mode & Custom GPTs.',
    description: 'Experience OpenAI state-of-the-art AI without token limits. Includes priority access during peak hours, GPT-4o multimodal vision, Advanced Voice live conversational mode, real-time web browsing, and custom GPT builder.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 6049, // 5499 + 10% = 6049
    discountPrice: 5690,
    costPrice: 4200,
    profit: 1849,
    currency: 'PKR',
    sku: 'OPENAI-GPT4O-PLUS-1MO',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1000&q=80',
      colors: ['#10b981', '#059669'],
      icon: 'Sparkles'
    },
    tags: ['ChatGPT Plus', 'GPT-4o', 'OpenAI', 'Voice Mode', 'DALL-E 3'],
    licenseType: '1-Month Private Premium Access',
    version: 'GPT-4o Latest',
    featured: true,
    rating: 4.99,
    reviewCount: 410,
    salesCount: 1980,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools & SaaS', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital/products/chatgpt-plus-gpt4o-1-month-private-access',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-ai-claude-pro',
    title: 'Claude 3.7 Sonnet / Pro 1-Month High-Capacity Access',
    slug: 'claude-3-7-sonnet-pro-1-month-access',
    shortDescription: 'Anthropic Claude Pro with 200K token context window, advanced reasoning & coding intelligence.',
    description: 'Supercharge your programming, research, and analysis with Claude 3.7 Sonnet Pro. 5x higher usage capacity, priority access during peak periods, and massive document analysis.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 6049, // 5499 + 10% = 6049
    discountPrice: 5690,
    costPrice: 4200,
    profit: 1849,
    currency: 'PKR',
    sku: 'ANTHROPIC-CLAUDE-PRO-1MO',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      colors: ['#d97706', '#b45309'],
      icon: 'Sparkles'
    },
    tags: ['Claude 3.7 Sonnet', 'Claude Pro', 'Anthropic', 'Coding AI', '200K Context'],
    licenseType: '1-Month Private Premium Access',
    version: 'Claude 3.7 Sonnet',
    featured: true,
    rating: 4.97,
    reviewCount: 194,
    salesCount: 870,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools & SaaS', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital/products/claude-3-7-sonnet-pro-1-month-access',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-ai-cursor-pro',
    title: 'Cursor Pro AI Code Editor 1-Year Developer Key',
    slug: 'cursor-pro-ai-code-editor-1-year-developer-key',
    shortDescription: 'Unlimited fast Claude 3.7 & GPT-4o autocomplete, full codebase chat & terminal agent.',
    description: 'The world fastest AI code editor built on VS Code. With Cursor Pro, get 500 fast premium requests per month, unlimited slow requests, full codebase indexing, multi-file edits, and instant bug fixes.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 35199, // 31999 + 10% = 35199
    discountPrice: 33500,
    costPrice: 25000,
    profit: 10199,
    currency: 'PKR',
    sku: 'CURSOR-PRO-1YR-DEV',
    stock: 12,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
      colors: ['#3b82f6', '#1d4ed8'],
      icon: 'Sparkles'
    },
    tags: ['Cursor Pro', 'AI Code Editor', 'Claude 3.7', 'Developer Key', '1 Year'],
    licenseType: '1-Year Official Developer License',
    version: 'Cursor Pro 2025',
    featured: true,
    rating: 4.99,
    reviewCount: 140,
    salesCount: 420,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools & SaaS', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital/products/cursor-pro-ai-code-editor-1-year-developer-key',
    deliveryType: 'ACCOUNT_INVITE'
  },
  {
    id: 'prod-ai-canva-pro',
    title: 'Canva Pro Lifetime / 1-Year Educational Brand Kit Access',
    slug: 'canva-pro-lifetime-brand-kit-access',
    shortDescription: 'Unlock 100M+ premium stock photos, 1-click background remover, Magic Studio AI & brand palettes.',
    description: 'Full genuine Canva Pro team invitation. Access millions of vector assets, transparent PNG exports, animations, and Magic Resizing tools.',
    type: 'AI_TOOL',
    status: 'PUBLISHED',
    price: 2420, // 2200 + 10% = 2420
    discountPrice: 2199,
    costPrice: 1200,
    profit: 1220,
    currency: 'PKR',
    sku: 'CANVA-PRO-LIFETIME-TEAM',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80',
      colors: ['#06b6d4', '#0891b2'],
      icon: 'Sparkles'
    },
    tags: ['Canva Pro', 'Graphic Design', 'Magic Studio', 'Background Remover', 'Brand Kit'],
    licenseType: 'Direct Email Team Invitation',
    version: 'Canva Pro 2025',
    featured: false,
    rating: 4.96,
    reviewCount: 290,
    salesCount: 1480,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-ai', name: 'AI Tools & SaaS', slug: 'ai-tools', icon: 'Sparkles', color: '#10b981' },
    sourceUrl: 'https://playbeat.digital/products/canva-pro-lifetime-brand-kit-access',
    deliveryType: 'ACCOUNT_INVITE'
  },

  // =================================================================
  // 6. STREAMING & 4K IPTV (With 10% Retail Markup Applied)
  // =================================================================
  {
    id: 'prod-stream-iptv-12mo',
    title: 'Premium IPTV 12 Months 4K Ultra HD (18,000+ Channels & Live Sports)',
    slug: 'premium-iptv-12-months-4k-ultra-hd',
    shortDescription: '18,000+ Live HD/4K channels, PSL, IPL, Premier League, Champions League, UFC & 60,000+ VOD Movies.',
    description: 'Top-rated IPTV service with 99.9% uptime, anti-freeze technology, and ultra-fast servers. Works on Android Smart Projectors, Smart TV, Firestick, iOS, Windows, and Mag boxes.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 7699, // 6999 + 10% = 7699
    discountPrice: 7200,
    costPrice: 4200,
    profit: 3499,
    currency: 'PKR',
    sku: 'IPTV-PREMIUM-12MO-4K',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=1000&q=80',
      colors: ['#6366f1', '#4338ca'],
      icon: 'Tv'
    },
    tags: ['IPTV', 'Live Sports', 'PSL', 'Premier League', '4K Channels', '12 Months'],
    licenseType: '12 Months M3U / Xtream Codes Login',
    version: 'IPTV Ultra Server v5',
    featured: true,
    rating: 4.94,
    reviewCount: 380,
    salesCount: 1850,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Streaming & 4K IPTV', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital/products/premium-iptv-12-months-4k-ultra-hd',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-stream-netflix-4k',
    title: 'Netflix Premium 4K UHD 1-Screen Private Profile (1-Year Pass)',
    slug: 'netflix-premium-4k-uhd-1-year-pass',
    shortDescription: 'Official Ultra HD 4K Dolby Atmos streaming on 1 private PIN-locked screen for 12 months.',
    description: 'Enjoy unlimited movies and TV series in stunning 4K HDR quality with spatial audio. Private personal profile with custom PIN lock.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 5489, // 4990 + 10% = 5489
    discountPrice: 4999,
    costPrice: 3200,
    profit: 2289,
    currency: 'PKR',
    sku: 'NETFLIX-4K-UHD-1YR-PIN',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1000&q=80',
      colors: ['#dc2626', '#991b1b'],
      icon: 'Tv'
    },
    tags: ['Netflix', '4K UHD', 'Dolby Vision', 'Private Profile', '1 Year'],
    licenseType: '1-Year Dedicated Account PIN Profile',
    version: 'Netflix Premium 4K',
    featured: true,
    rating: 4.98,
    reviewCount: 420,
    salesCount: 2150,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Streaming & 4K IPTV', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital/products/netflix-premium-4k-uhd-1-year-pass',
    deliveryType: 'INSTANT_KEY'
  },
  {
    id: 'prod-stream-spotify-1yr',
    title: 'Spotify Premium 1-Year Individual Subscription Pass',
    slug: 'spotify-premium-1-year-individual-pass',
    shortDescription: 'Ad-free high-fidelity music streaming, offline song downloads & unlimited skips on your own email.',
    description: 'Upgrade your personal Spotify account to Spotify Premium for a full 365 days. Keep all your existing playlists and liked tracks intact.',
    type: 'STREAMING',
    status: 'PUBLISHED',
    price: 4389, // 3990 + 10% = 4389
    discountPrice: 3950,
    costPrice: 2400,
    profit: 1989,
    currency: 'PKR',
    sku: 'SPOTIFY-PREMIUM-1YR-INDIV',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?auto=format&fit=crop&w=1000&q=80',
      colors: ['#22c55e', '#16a34a'],
      icon: 'Tv'
    },
    tags: ['Spotify', 'Music Streaming', 'Lossless Audio', 'Offline Downloads', '1 Year'],
    licenseType: '1-Year Direct Spotify Premium Activation',
    version: 'Spotify HiFi 2025',
    featured: false,
    rating: 4.95,
    reviewCount: 310,
    salesCount: 1640,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-streaming', name: 'Streaming & 4K IPTV', slug: 'streaming', icon: 'Tv', color: '#ec4899' },
    sourceUrl: 'https://playbeat.digital/products/spotify-premium-1-year-individual-pass',
    deliveryType: 'ACCOUNT_INVITE'
  },

  // =================================================================
  // 7. ACCOUNTS & GAMING MEMBERSHIPS (With 10% Retail Markup)
  // =================================================================
  {
    id: 'prod-acc-discord-nitro',
    title: 'Discord Nitro 1-Year + 2 Server Boosts (Global Activation)',
    slug: 'discord-nitro-1-year-with-2-server-boosts',
    shortDescription: 'Custom emojis, 500MB uploads, HD 4K 60FPS video streaming, profile banners & 2 free server boosts.',
    description: 'Level up your Discord experience with full Nitro benefits. Use animated emotes everywhere, stream games in 1080P 60FPS, and customize your profile badges.',
    type: 'MEMBERSHIP',
    status: 'PUBLISHED',
    price: 8250, // 7500 + 10% = 8250
    discountPrice: 7800,
    costPrice: 5200,
    profit: 3050,
    currency: 'PKR',
    sku: 'DISCORD-NITRO-1YR-2BOOST',
    stock: -1,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
      colors: ['#6366f1', '#4f46e5'],
      icon: 'ShieldCheck'
    },
    tags: ['Discord Nitro', 'Server Boost', 'Custom Emojis', 'HD Streaming', '1 Year'],
    licenseType: '1-Year Official Redeemable Nitro Link',
    version: 'Nitro Full Tier',
    featured: true,
    rating: 4.97,
    reviewCount: 165,
    salesCount: 890,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-accounts', name: 'Accounts & Memberships', slug: 'accounts-memberships', icon: 'ShieldCheck', color: '#8b5cf6' },
    sourceUrl: 'https://playbeat.digital/products/discord-nitro-1-year-with-2-server-boosts',
    deliveryType: 'INSTANT_KEY'
  },

  // =================================================================
  // 8. SMART 4K CINEMA PROJECTORS (PlayBeat Official Lineup + 10% Markup)
  // =================================================================
  {
    id: 'prod-proj-hy300-pro',
    title: 'Magcubic HY300 PR / Pro Smart Projector',
    slug: 'magcubic-hy300-pro-smart-projector',
    shortDescription: 'Native 720P / 1080P 4K Decoded Android 11 Smart Projector with 180° rotatable swivel stand & Dual WiFi 6.',
    description: 'The iconic Magcubic HY300 PRO delivers versatile ceiling and wall projection with its 180-degree flexible rotation bracket. Running smooth Android 11 with built-in YouTube, Netflix, and Prime Video. Features auto keystone correction, dual-band WiFi 6, and built-in Hi-Fi chamber audio.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 24750, // 22500 + 10% = 24750
    discountPrice: 23500,
    costPrice: 18500,
    profit: 6250,
    currency: 'PKR',
    sku: 'MAGCUBIC-HY300-PRO',
    stock: 35,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['Magcubic', 'HY300 Pro', 'Smart Projector', 'Android 11', '180 Rotation', 'WiFi 6'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY300 PRO (2026 Edition)',
    featured: true,
    rating: 4.9,
    reviewCount: 184,
    salesCount: 820,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://playbeat.digital/products/magcubic-hy300-pro-smart-projector',
    specs: {
      'Model': 'Magcubic HY300 PRO',
      'Resolution': 'Native 1280x720P (4K Ultra HD Decoding)',
      'Brightness': '260 ANSI Lumens',
      'OS': 'Android 11.0 with Google Play Store',
      'Projection Angle': '180° Free Swivel Rotation',
      'Audio': '5W Hi-Fi Chamber Stereo Speaker',
      'Connectivity': 'Dual-Band WiFi 6 (2.4G/5.8G), Bluetooth 5.0, HDMI, USB'
    },
    features: [
      '180° Flexible projection angle for instant ceiling cinema',
      'Auto-keystone vertical correction in real-time',
      'Pre-installed YouTube, Netflix, Disney+, and browser',
      'Ultra low noise cooling fan (<25dB operating sound)',
      'Includes smart Bluetooth remote, HDMI cable & power cord'
    ],
    deliveryType: 'PHYSICAL_COURIER',
    reviews: [
      { id: 'r-hy1', rating: 5, title: 'Unbeatable value for money', comment: 'Ceiling projection is a game changer in bedroom. Fast delivery via TCS.', verified: true, createdAt: '2 days ago', authorName: 'Zubair Shah', helpfulCount: 38 },
      { id: 'r-hy2', rating: 5, title: 'Colors are super vibrant', comment: 'Connected to WiFi 6 smoothly. Runs Netflix with zero lag.', verified: true, createdAt: '5 days ago', authorName: 'Ayesha Siddiqui', helpfulCount: 19 }
    ]
  },
  {
    id: 'prod-proj-hy300pro-plus',
    title: 'Magcubic HY300Pro Plus Smart Projector',
    slug: 'magcubic-hy300pro-plus-smart-projector',
    shortDescription: 'High-performance edition with 300 ANSI lumens, electric motorized remote focus & 4K decoding chip.',
    description: 'Engineered for power users, the Magcubic HY300Pro Plus features precision motorized focus via remote control, upgraded 300 ANSI lumens LED light source, sealed dust-resistant optics, and rapid dual-band wireless throughput.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 29150, // 26500 + 10% = 29150
    discountPrice: 27500,
    costPrice: 21500,
    profit: 7650,
    currency: 'PKR',
    sku: 'MAGCUBIC-HY300PRO-PLUS',
    stock: 28,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['Magcubic', 'HY300Pro Plus', 'Electric Focus', '4K Decoding', '300 ANSI'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY300Pro Plus Flagship',
    featured: true,
    rating: 4.94,
    reviewCount: 132,
    salesCount: 650,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://playbeat.digital/products/magcubic-hy300pro-plus-smart-projector',
    specs: {
      'Model': 'Magcubic HY300Pro Plus',
      'Resolution': '1080P Decoded / 4K Playback Support',
      'Brightness': '300 ANSI Lumens',
      'Focus': 'Electric Remote-Controlled Motorized Focus',
      'OS': 'Android 11.0 Smart UI',
      'Port Array': 'HDMI 2.0, USB 2.0, 3.5mm AUX Audio'
    },
    features: [
      'Electric one-touch remote focus adjustment',
      'Sealed dust-resistant optical glass assembly',
      'Support for Bluetooth 5.2 headphones & home theater soundbars',
      'Rapid screen casting from iPhone, Android and Windows PC'
    ],
    deliveryType: 'PHYSICAL_COURIER'
  },
  {
    id: 'prod-proj-hm103a',
    title: 'HM103-A Ultra-Bright Smart Cinema Projector',
    slug: 'hm103-a-ultra-bright-smart-projector',
    shortDescription: 'Native 1080P Full HD 650 ANSI Lumens home theater with instant 1-second AI auto-focus & dual chamber acoustic drivers.',
    description: 'Top-tier home theater immersion. The HM103-A packs 650 ANSI lumens of bright luminosity with instant 1-second laser autofocus and omnidirectional obstacle avoidance. Projects giant 200-inch screens effortlessly with deep contrast.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 42900, // 39000 + 10% = 42900
    discountPrice: 40500,
    costPrice: 32000,
    profit: 10900,
    currency: 'PKR',
    sku: 'HM103-A-ULTRA',
    stock: 14,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HM103-A', '650 ANSI', 'AI Auto Focus', 'Native 1080P', '200 Inch'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HM103-A Flagship',
    featured: true,
    rating: 4.97,
    reviewCount: 96,
    salesCount: 410,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://playbeat.digital/products/hm103-a-ultra-bright-smart-projector',
    specs: {
      'Model': 'HM103-A Ultra',
      'Resolution': 'Native 1920x1080P Full HD (8K Decoded)',
      'Brightness': '650 ANSI Lumens True Optical Output',
      'Focus': 'Instant 1-Second AI Laser Auto-Focus',
      'Audio': 'Dual 10W Bass Chamber Speakers',
      'OS': 'Android 11 Home Theater OS'
    },
    features: [
      'True 650 ANSI luminosity for daytime clarity',
      'Laser AI autofocus and auto keystone 4-point calibration',
      'Dual 10W stereo acoustic chamber with Dolby Decoding',
      'Low latency game mode (under 18ms response)'
    ],
    deliveryType: 'PHYSICAL_COURIER'
  },
  {
    id: 'prod-proj-hcs350-pro',
    title: 'HCS350 Pro Home Cinema 4K Smart Projector',
    slug: 'hcs350-pro-home-cinema-4k-projector',
    shortDescription: 'Cinematic 500 ANSI Lumens Android 11 multimedia projector with high-speed WiFi 6 & HDR10+ enhancement.',
    description: 'Designed for movies, sports, and live gaming tournaments. The HCS350 Pro brings 500 ANSI lumens, HDR10+ dynamic range expansion, and a robust aluminum alloy internal chassis.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 36850, // 33500 + 10% = 36850
    discountPrice: 34900,
    costPrice: 27000,
    profit: 9850,
    currency: 'PKR',
    sku: 'HCS350-PRO-4K',
    stock: 18,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HCS350 Pro', '500 ANSI', 'HDR10+', 'Android 11', 'Home Cinema'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HCS350 Pro',
    featured: false,
    rating: 4.88,
    reviewCount: 74,
    salesCount: 320,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://playbeat.digital/products/hcs350-pro-home-cinema-4k-projector',
    specs: {
      'Model': 'HCS350 Pro',
      'Resolution': 'Native 1080P (4K Ultra HD Decoded)',
      'Brightness': '500 ANSI Lumens',
      'OS': 'Android 11 OS',
      'Audio': '8W Enhanced Driver'
    },
    features: [
      'HDR10+ High Dynamic Range color reproduction',
      'Dual-frequency 2.4G + 5.8G WiFi 6 connectivity',
      'Screen mirroring for iOS AirPlay and Android Miracast'
    ],
    deliveryType: 'PHYSICAL_COURIER'
  },
  {
    id: 'prod-proj-hy7-battery',
    title: 'HY7 Portable Battery Smart Projector',
    slug: 'hy7-portable-battery-smart-projector',
    shortDescription: 'Built-in 8,000mAh rechargeable lithium battery with up to 3 hours cordless outdoor cinema projection.',
    description: 'The ultimate travel and camping companion. The HY7 features a built-in 8,000mAh battery providing up to 3 hours of wire-free video playback anywhere.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 38500, // 35000 + 10% = 38500
    discountPrice: 36500,
    costPrice: 28500,
    profit: 10000,
    currency: 'PKR',
    sku: 'HY7-BATTERY-PORTABLE',
    stock: 12,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0f172a', '#1e293b'],
      icon: 'BatteryCharging'
    },
    tags: ['HY7', 'Battery Projector', '8000mAh', 'Portable', 'Outdoor Cinema'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HY7 Battery 2026',
    featured: true,
    rating: 4.92,
    reviewCount: 88,
    salesCount: 290,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://playbeat.digital/products/hy7-portable-battery-smart-projector',
    specs: {
      'Model': 'HY7 Battery Edition',
      'Battery Capacity': '8,000mAh Lithium Battery (2.5 - 3 Hours Playback)',
      'Brightness': '320 ANSI Lumens',
      'Resolution': '1080P HD Decoded',
      'Portability': 'Compact 1.1kg travel cylinder body'
    },
    features: [
      'Cordless freedom with 8,000mAh built-in power reserve',
      'Supports power bank emergency charging via USB-C',
      'Built-in dual speakers with Bluetooth speaker mode'
    ],
    deliveryType: 'PHYSICAL_COURIER'
  },
  {
    id: 'prod-proj-ht23',
    title: 'HT23 Ultra-Short Throw Laser Cinema Projector',
    slug: 'ht23-ultra-short-throw-laser-cinema-projector',
    shortDescription: '150-inch projection from just 12 inches away with 800 ANSI lumens, ALPD Laser engine & Harman tuned audio.',
    description: 'Experience true luxury laser cinema. The HT23 Ultra-Short Throw (UST) laser projector casts gigantic 120-150 inch screens placed right against the wall.',
    type: 'HARDWARE',
    status: 'PUBLISHED',
    price: 93500, // 85000 + 10% = 93500
    discountPrice: 89900,
    costPrice: 72000,
    profit: 21500,
    currency: 'PKR',
    sku: 'HT23-UST-LASER-800',
    stock: 6,
    cover: {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1595769816263-9b910be24d5f?auto=format&fit=crop&w=1000&q=80',
      colors: ['#0f172a', '#1e293b'],
      icon: 'Projector'
    },
    tags: ['HT23', 'Ultra Short Throw', 'UST Laser', '800 ANSI', 'Harman Audio'],
    licenseType: '1-Year Official Replacement Warranty',
    version: 'HT23 Laser Ultra',
    featured: true,
    rating: 4.99,
    reviewCount: 42,
    salesCount: 110,
    vendor: { id: 'v-playbeat', storeName: 'PlayBeat Digital Official', slug: 'playbeat-official', verified: true, rating: 4.99, salesCount: 8900 },
    category: { id: 'cat-projectors', name: 'Smart 4K Projectors', slug: 'smart-projectors', icon: 'Projector', color: '#fcb800' },
    sourceUrl: 'https://playbeat.digital/products/ht23-ultra-short-throw-laser-cinema-projector',
    specs: {
      'Model': 'HT23 Ultra-Short Throw Laser',
      'Projection Distance': '0.23:1 Ultra-Short Throw Ratio',
      'Brightness': '800 ANSI Lumens True Laser Output',
      'Resolution': 'Native 1080P Full HD with 4K UHD Decoding',
      'Audio': 'Dual 15W Harman Kardon Tuned Drivers'
    },
    features: [
      'Zero glare ultra-short throw placed directly under your screen',
      'ALPD laser optical engine with 30,000-hour diode life',
      'MEMC motion compensation for crystal clear 120Hz football & cricket'
    ],
    deliveryType: 'PHYSICAL_COURIER'
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  { id: 'c-playbeat10', code: 'PLAYBEAT10', discountPercent: 10, minSpendPKR: 2000, description: '10% discount on all digital keys and software' },
  { id: 'c-playbeat5', code: 'PLAYBEAT5', discountPercent: 5, minSpendPKR: 15000, description: '5% off on smart projectors' },
  { id: 'c-flashsale', code: 'FLASH20', discountPercent: 20, minSpendPKR: 5000, description: '20% off on flash deal items' }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', title: 'Order Verified', message: 'Magcubic HY300 PRO parcel dispatched via TCS Express #TCS-892182', type: 'ORDER', createdAt: '10m ago', read: false },
  { id: 'n2', title: 'Catalog Updated', message: 'PlayBeat Digital catalogue refreshed with 10% retail margin pricing structure.', type: 'SYSTEM', createdAt: '1h ago', read: false }
];

export const DEMO_USER: User = {
  id: 'u-admin-1',
  name: 'PlayBeat Super Admin',
  email: 'admin@playbeat.digital',
  role: 'ADMIN',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  balancePKR: 245000
};

export const INITIAL_USERS: User[] = [
  DEMO_USER,
  {
    id: 'u-cust-1',
    name: 'Hamza Khan',
    email: 'hamza.k@gmail.com',
    role: 'CUSTOMER',
    balancePKR: 12000
  },
  {
    id: 'u-cust-2',
    name: 'Ali Raza',
    email: 'ali.raza@yahoo.com',
    role: 'CUSTOMER',
    balancePKR: 4500
  }
];
