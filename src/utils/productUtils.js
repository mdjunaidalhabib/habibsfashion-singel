export const slugify = (text = "") =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

export const getProductShareLink = (productSlug) => {
  const base = window.location.origin + window.location.pathname;
  return `${base}#products?product=${productSlug}`;
};
