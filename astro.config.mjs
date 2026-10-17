import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

/**
 * GitHub Pages project site → https://ryantjx.github.io/cmfas-exams/
 *
 * `base` must match the repository name and is used by every internal link the
 * generator writes. If this is ever served from a user/org root site or a custom
 * domain, set `base` to '/' and `site` to that origin.
 */
export default defineConfig({
  site: 'https://ryantjx.github.io',
  base: '/cmfas-exams',
  trailingSlash: 'always',
  integrations: [
    starlight({
      title: 'CMFAS Exams',
      description:
        'Study guides, chapter quizzes, daily quizzes and mock exams for RES 12B, FMRP and CM-SIP.',
      logo: undefined,
      social: undefined,
      lastUpdated: false,
      pagination: true,
      pagefind: true,
      customCss: ['./src/styles/custom.css'],
      // Sidebar groups are defined per exam; chapter pages nest underneath
      // "Study guide" automatically via each page's `sidebar.order`.
      sidebar: [
        { label: 'Home', link: '/' },
        { label: 'Study plan', link: '/study-plan/' },
        ...['cmsip', 'fmrp', 'res12b'].map((id) => {
          const label = { cmsip: 'CM-SIP', fmrp: 'FMRP', res12b: 'RES 12B' }[id];
          return {
            label,
            items: [
              { label: 'Overview', link: `/${id}/overview/` },
              {
                label: 'Study guide',
                items: [{ label: 'Introduction', link: `/${id}/guide/`, attrs: { class: 'guide-root' } }],
              },
              {
                label: 'Practice',
                items: [
                  { label: 'Chapter quiz', link: `/${id}/practice/chapter/` },
                  { label: 'Daily quiz', link: `/${id}/practice/daily/` },
                  { label: 'Mock exam', link: `/${id}/practice/mock/` },
                ],
              },
              { label: 'Downloads', link: `/${id}/downloads/` },
            ],
          };
        }),
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'noindex',
          },
        },
      ],
    }),
    react(),
  ],
});
