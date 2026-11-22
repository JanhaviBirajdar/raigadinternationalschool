import { useEffect } from 'react';

const BASE_URL = 'https://www.raigadinternationalschool.com';
const DEFAULT_IMAGE = `${BASE_URL}/school_building.png`;
const SITE_NAME = 'Raigad International School';

/**
 * useSEO — sets document title, meta description, Open Graph, Twitter Card,
 * and optionally injects a JSON-LD <script> for structured data.
 *
 * @param {Object} options
 * @param {string} options.title        - Page <title>
 * @param {string} options.description  - Meta description (≤ 160 chars)
 * @param {string} [options.canonical]  - Canonical URL path, e.g. "/about"
 * @param {string} [options.image]      - Absolute OG image URL
 * @param {Object} [options.jsonLd]     - JSON-LD structured data object
 */
const useSEO = ({ title, description, canonical = '/', image = DEFAULT_IMAGE, jsonLd = null }) => {
  useEffect(() => {
    // ----- Title -----
    document.title = title;

    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const attr = selector.match(/\[(.+?)=/)?.[1] || 'name';
        const val = selector.match(/="(.+?)"/)?.[1] || '';
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ----- Description -----
    setMeta('meta[name="description"]', description);

    // ----- Canonical -----
    setLink('canonical', `${BASE_URL}${canonical}`);

    // ----- Open Graph -----
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', `${BASE_URL}${canonical}`);
    setMeta('meta[property="og:image"]', image);

    // ----- Twitter Card -----
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', image);

    // ----- JSON-LD -----
    const SCRIPT_ID = 'page-jsonld';
    let scriptEl = document.getElementById(SCRIPT_ID);
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = SCRIPT_ID;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Reset to defaults on unmount (optional, prevents stale meta on nav)
      document.title = `${SITE_NAME} | Nurturing Young Minds. Building Bright Futures.`;
    };
  }, [title, description, canonical, image, jsonLd]);
};

export default useSEO;

