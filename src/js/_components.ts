export default async () => {
  try {
    // Gallery
    const imageGalleryEls = [...document.querySelectorAll<HTMLElement>('.js-imageGallery')];
    if (imageGalleryEls) {
      const {default: imageGallery} = await import('../../templates/_components/gallery/images')
      imageGallery.init(imageGalleryEls)
    }

    // swiperHolder
    const swiperHolderEls = [...document.querySelectorAll<HTMLElement>('.js-swiperHolder')];
    if (swiperHolderEls) {
      const {default: swiperHolder} = await import('../../templates/_components/slider/swiperHolder')
      swiperHolder.init(swiperHolderEls)
    }

    // Image Grid Calculated
    const imageGridCalculatedEls = [...document.querySelectorAll<HTMLElement>('.js-imageGridCalculated')];
    if (imageGridCalculatedEls) {
      const {default: imagesCalculated} = await import('../../templates/_components/grid/imagesCalculated')
      imagesCalculated.init(imageGridCalculatedEls)
    }

    // Navigation Main
    const navigationMainEl = document.querySelector<HTMLElement>('.js-navigationMain');
    if (navigationMainEl) {
      const {default: imagesCalculated} = await import('../../templates/_components/navigation/navigationMain')
      imagesCalculated.init(navigationMainEl)
    }
  } catch (e) {
    console.error(e)
  }
};

