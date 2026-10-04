import cover from './image/cover.jpg';

const slug = 'XpoBlock';

export const featureBannerData = {
  title: 'Build High-Performance Websites with XpoBlock',
  description: 'Transform your WordPress editor with 11+ ultra-fast, motion-ready blocks including Interactive Before/After, Audio Waveform Player, Parallax Scroll Story, Smooth Marquee, and Dynamic Pricing Tables.',
  primaryBtnText: '+ Add New Page',
  secondaryBtnText: 'Explore All 11 Blocks',
  videoBtnText: 'Watch Video Demo',
  youtubeVideoId: '',
  coverImage: cover,
  isVideo: false,
};

export const changelogData = [
  {
    version: 'v1.0.0',
    date: '5 October 2026',
    badge: 'Initial Stable Release',
    badgeType: 'stable',
    summary: 'First official stable release of XpoBlock. Featuring 11+ high-performance Gutenberg blocks.',
    categories: [
      {
        name: '✨ New Features',
        type: 'feat',
        items: ['Introduced 11 high-performance Gutenberg blocks (Before/After Slider, Accordion, Audio Player, Pricing Table, Action Button, Newsletter, Marquee Slider, Scroll Story, Table of Contents, QR Code Generator).'],
      },
    ],
  }
];

export const dashboardInfo = info => {
  const { version, adminUrl, isPro, activeBlocks, availableBlocks, wpVersion, phpVersion } = info;

  return {
    adminUrl,
    slug,
    version,
    isPro,
    wpVersion,
    phpVersion,
    activeBlocks,
    availableBlocks,
    featureBanner: featureBannerData,
    changelog: changelogData,
    media: {
      // logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    },
  };
};
