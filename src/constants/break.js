export const BREAK_POINT = {
  BREAK_POINT_MOBILE: 360,
  BREAK_POINT_MOBILE_MIN: 360,
  BREAK_POINT_MOBILE_MAX: 767,
  BREAK_POINT_TABLET: 768,
  BREAK_POINT_TABLET_MIN: 768,
  BREAK_POINT_TABLET_MAX: 1439,
  BREAK_POINT_DESKTOP: 1440,
};

export const BREAK_POINT_DEVICE = {
  mobile: `(min-width: ${BREAK_POINT.BREAK_POINT_MOBILE_MIN}px) and (max-width: ${BREAK_POINT.BREAK_POINT_MOBILE_MAX}px)`,
  tablet: `(min-width: ${BREAK_POINT.BREAK_POINT_TABLET_MIN}px) and (max-width: ${BREAK_POINT.BREAK_POINT_TABLET_MAX}px)`,
  desktop: `(min-width: ${BREAK_POINT.BREAK_POINT_DESKTOP}px)`,
};
