import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "3D Graphics with OpenGL - Basic Theory",
  description: "3D Graphics with OpenGL - Basic Theory article",
  base: "/3D_graphics_with_opengl_basic_theory/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sagedemage/3D_graphics_with_opengl_basic_theory' }
    ]
  }
})
