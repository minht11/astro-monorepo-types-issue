import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
// import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
	output: 'hybrid',
	adapter: node({
		mode: 'standalone',
	}),
	integrations: [
		// tailwind(),
		vue(),
	],
	vite: {
		ssr: {
			noExternal: ['@astrojs/prism'],
		},
	},
})
