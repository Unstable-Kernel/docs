import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://unstable-kernel.github.io/docs',
  integrations: [
    starlight({
      title: 'Kernel',
      description: 'Autonomous Intelligence Coordination Engine',
      social: {
        github: 'https://github.com/Unstable-Kernel/kernel',
      },
      sidebar: [
        { label: 'Vision', link: '/vision/' },
        { label: 'How It Works', link: '/how-it-works/' },
        {
          label: 'Experiments',
          items: [
            { label: 'Flocking', link: '/experiments/flocking/' },
            { label: 'Pheromone Paths', link: '/experiments/pheromone/' },
            { label: 'Ecosystem', link: '/experiments/ecosystem/' },
            { label: 'Mycelium', link: '/experiments/mycelium/' },
          ],
        },
        { label: 'Theory', link: '/theory/' },
        { label: 'Roadmap', link: '/roadmap/' },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
  ],
});
