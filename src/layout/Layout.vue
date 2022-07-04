<template>
    <!-- layout:{{ useUserStoreVal.name }},{{reftest}} -->
    <div  class="layout-wrapper">
    <!--left side-->
    <Sidebar  class="sidebar-container" />
    <!--right container-->
    <div class="main-container">
      <Navbar />
      <TagsView />
      <AppMain />
    </div>
  </div>
</template>
<script lang="ts">
/*设置默认的名字*/
export default {
  name: 'Layout'
}
</script>
<script setup lang="ts">
import { Sidebar, Navbar, AppMain, TagsView } from './components'
import { useUserStore } from '@/store/user'

const useUserStoreVal = useUserStore()

const reftest = ref(123)
</script>


<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: $sideBarWidth;
  position: relative;
}
.sidebar-container {
  transition: width 0.28s;
  width: $sideBarWidth !important;
  background-color: $menuBg;
  height: 100%;
  position: fixed;
  font-size: 0;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}
.closeSidebar {
  .sidebar-container {
    width: 54px !important;
  }
  .main-container {
    margin-left: 54px !important;
  }
}
.hideSidebar {
  .sidebar-container {
    width: 0 !important;
  }
  .main-container {
    margin-left: 0;
  }
}
</style>


