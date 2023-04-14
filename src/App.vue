<script setup lang="ts">
import { useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()
</script>

<template>
  <div class="app">
    <Sidebar />
    <main class="content">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <KeepAlive>
            <Suspense>
              <component :is="Component" :key="route.fullPath"></component>
              <template #fallback><span aria-busy="true">wait for data...</span></template>
            </Suspense>
          </KeepAlive>
        </template>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  width: 100%;
  margin: 0;
}
.content div {
  width: 100%;
  margin: 0;
}
</style>
