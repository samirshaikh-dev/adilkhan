export function hasMedia(entry) {
  if (!entry) {
    return false;
  }

  if (Array.isArray(entry)) {
    return entry.length > 0 && entry.every((item) => item?.src);
  }

  return Boolean(entry.src);
}
