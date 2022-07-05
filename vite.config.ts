import { defineConfig, normalizePath  } from 'vite'
import vue from '@vitejs/plugin-vue'
import path  from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { createHtmlPlugin } from 'vite-plugin-html'
import setting from './src/settings.ts'
import viteSvgIcons from 'vite-plugin-svg-icons'


// 全局 scss 文件的路径
// 用 normalizePath 解决 window 下的路径问题
const variablePath = normalizePath(path.resolve('./src/styles/variables.scss'));

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    //fix "path" module issue
    'process.platform': null,
    'process.version': null,
  },
  resolve: {
    alias: {  // 这里就是需要配置resolve里的别名
      "@": path.join(__dirname, "./src"), // path记得引入
      // 'vue': 'vue/dist/vue.esm-bundler.js' // 定义vue的别名，如果使用其他的插件，可能会用到别名
    },
  },
  // css 相关的配置
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData 的内容会在每个 scss 文件的开头自动注入
        additionalData: `@import "${variablePath}";`
      }
    }
  },
  build: {
    minify: 'terser',
    brotliSize: false,
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 5000,
    //remote console.log in prod
    terserOptions: {
      //detail to look https://terser.org/docs/api-reference#compress-options
      compress: {
        drop_console: false,
        pure_funcs: ['console.log', 'console.info'],
        drop_debugger: true
      }
    },
    //build assets Separate
    assetsDir: 'static/assets',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    viteSvgIcons({
      // config svg dir that can config multi
      iconDirs: [path.resolve(process.cwd(), 'src/icons/common'), path.resolve(process.cwd(), 'src/icons/nav-bar')],
      // appoint svg icon using mode
      symbolId: 'icon-[dir]-[name]'
    }),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        'vue-router',
      ],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: './auto-import.d.ts' //auto generation auto-imports.d.ts file
    }),
    // auto config of index.html title
    createHtmlPlugin({
      inject: {
        // Inject data into ejs template
        data: {
          title: setting.title
        }
      }
    })
  ]
})
