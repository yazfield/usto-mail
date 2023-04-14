<template>
  <aside>
    <h1><router-link to="/" class="contrast">USTO mail</router-link></h1>
    <ul>
      <li>
        <router-link
          class="router-link"
          role="button"
          to="/"
          activeClass="active"
          :class="route.name === 'inbox' ? 'contrast' : 'secondary'"
          >Inbox</router-link
        >
      </li>
      <li>
        <router-link
          class="router-link"
          role="button"
          to="/archive"
          activeClass="active"
          :class="route.name === 'archive' ? 'contrast' : 'secondary'"
          >Archive</router-link
        >
      </li>
    </ul>
  </aside>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>
<style lang="scss" scoped>
aside {
  min-width: 240px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  padding: 0 16px;
}
h1 {
  margin: 10px 0;
  a {
    text-decoration: none;
  }
}
.router-link {
  width: 100%;
  margin: 0;
  padding: 5px 24px;
  text-align: left;
  border-radius: 20px;
  font-size: 14px;
  &.active {
    font-weight: bold;
  }
}
ul,
li {
  margin: 0;
  padding: 0;
}
</style>
