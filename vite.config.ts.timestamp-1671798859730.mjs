// vite.config.ts
import { defineConfig } from "file:///D:/Program%20Files/code%20test/%E4%B8%A5%E9%80%89%E9%A1%B9%E7%9B%AE/tw-yanxuan/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Program%20Files/code%20test/%E4%B8%A5%E9%80%89%E9%A1%B9%E7%9B%AE/tw-yanxuan/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///D:/Program%20Files/code%20test/%E4%B8%A5%E9%80%89%E9%A1%B9%E7%9B%AE/tw-yanxuan/node_modules/unplugin-vue-components/dist/vite.mjs";
import { VantResolver } from "file:///D:/Program%20Files/code%20test/%E4%B8%A5%E9%80%89%E9%A1%B9%E7%9B%AE/tw-yanxuan/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\Program Files\\code test\\\u4E25\u9009\u9879\u76EE\\tw-yanxuan";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    })
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://backend-api-01.newbee.ltd",
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9ncmFtIEZpbGVzXFxcXGNvZGUgdGVzdFxcXFxcdTRFMjVcdTkwMDlcdTk4NzlcdTc2RUVcXFxcdHcteWFueHVhblwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxjb2RlIHRlc3RcXFxcXHU0RTI1XHU5MDA5XHU5ODc5XHU3NkVFXFxcXHR3LXlhbnh1YW5cXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1Byb2dyYW0lMjBGaWxlcy9jb2RlJTIwdGVzdC8lRTQlQjglQTUlRTklODAlODklRTklQTElQjklRTclOUIlQUUvdHcteWFueHVhbi92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHsgVmFudFJlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOlwiLi9cIixcclxuICBwbHVnaW5zOiBbdnVlKCksXHJcbiAgICBDb21wb25lbnRzKHtcclxuICAgICAgcmVzb2x2ZXJzOiBbVmFudFJlc29sdmVyKCldXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwcm94eToge1xyXG4gICAgICBcIi9hcGlcIjoge1xyXG4gICAgICAgIHRhcmdldDogXCJodHRwOi8vYmFja2VuZC1hcGktMDEubmV3YmVlLmx0ZFwiLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjp0cnVlLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwnLi9zcmMnKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4VixTQUFTLG9CQUFvQjtBQUMzWCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQUs7QUFBQSxFQUNMLFNBQVM7QUFBQSxJQUFDLElBQUk7QUFBQSxJQUNaLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxhQUFhLENBQUM7QUFBQSxJQUM1QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsY0FBYTtBQUFBLE1BQ2Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSSxLQUFLLFFBQVEsa0NBQVUsT0FBTztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
