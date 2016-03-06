export const NAV_NEXT = 'nav_next';
export const NAV_PREVIOUS = 'nav_previous';

export function next() {
  return { type: NAV_NEXT };
}

export function previous() {
  return { type: NAV_PREVIOUS };
}
