<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
const route = useRoute()
</script>

<template>
  <main class="main">
    <Sidebar />
    <section class="content">
      <RouterView v-slot="{ Component }">
        <template v-if="Component">
          <Transition mode="out-in">
            <KeepAlive>
              <Suspense>
                <template #default>
                  <component :is="Component" :key="route.path"></component>
                </template>
                <template #fallback
                  ><div aria-busy="true" class="loading">Loading...</div></template
                >
              </Suspense>
            </KeepAlive>
          </Transition>
        </template>
      </RouterView>
    </section>
  </main>
</template>
<style scoped>
.main {
  display: flex;
}
.content {
  display: flex;
  width: 100%;
  margin: 0;
}
.loading {
  justify-self: center;
  align-self: center;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
