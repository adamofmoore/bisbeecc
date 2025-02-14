import { breakpoints } from "@/mixins/breakpoints";
import { useWindowDimensions } from "./useWindowDimensions";

export const useBreakpoints = () => {
  const { innerWidth } = useWindowDimensions();

  return {
    isMobileTiny: innerWidth < breakpoints.mobileTiny, // max-width
    isMobile: innerWidth < breakpoints.mobile, // max-width
    isMobileLandscape: innerWidth < breakpoints.mobileLandscape, // max-width
    isTablet: innerWidth >= breakpoints.tablet,
    isTabletLarge: innerWidth >= breakpoints.tabletLarge,
    isDesktop: innerWidth >= breakpoints.desktop,
    isDesktopLarge: innerWidth >= breakpoints.desktopLarge,
    isDesktopExtraLarge: innerWidth >= breakpoints.desktopExtraLarge,
  };
};
