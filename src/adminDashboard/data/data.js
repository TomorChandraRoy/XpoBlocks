import cover from './image/cover.png';

const slug = 'guten builder blocks';

export const featureBannerData = {
  title: 'Build High-Performance Websites with Gutenberg Block Suite',
  description: 'Transform your WordPress editor with 11+ ultra-fast, motion-ready blocks including Interactive Before/After, Audio Waveform Player, Parallax Scroll Story, Smooth Marquee, and Dynamic Pricing Tables.',
  primaryBtnText: '+ Add New Page',
  secondaryBtnText: 'Explore All 11 Blocks',
  videoBtnText: 'Watch Video Demo',
  youtubeVideoId: 'https://www.youtube.com/watch?v=2O7oDm1FaPU&list=RD2O7oDm1FaPU&start_radio=1',
  coverImage: cover,
  isVideo: true,
};

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
    media: {
      // logo: `https://ps.w.org/${slug}/assets/icon-128x128.png`,
    },
  };
};
