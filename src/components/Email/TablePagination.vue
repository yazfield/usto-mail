<template>
  <ol class="email__pagination">
    <li>
      <button
        :disabled="currentPage === 0"
        class="secondary outline"
        @click="navigate(currentPage - 1)"
      >
        &lt;
      </button>
    </li>
    <li v-for="page in paginationLinks" :key="page.value">
      <button v-if="page.type === 'link'" class="secondary outline" @click="navigate(page.value)">
        {{ page.value + 1 }}
      </button>
      <span v-else>{{ page.value + 1 }}</span>
    </li>
    <li>
      <button
        :disabled="currentPage === totalPages - 1"
        class="secondary outline"
        @click="navigate(currentPage + 1)"
      >
        &gt;
      </button>
    </li>
  </ol>
</template>
<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps<{
  currentPage: number
  totalPages: number
}>()
const emit = defineEmits(['navigate'])
const navigate = (page: number) => {
  emit('navigate', page)
}

const MAX_PAGINATION_LINKS = 4

const paginationLinks = computed(() => {
  const links = []
  let numLinks = MAX_PAGINATION_LINKS
  let i = Math.max(0, props.currentPage - MAX_PAGINATION_LINKS / 2)
  while (i < props.currentPage && numLinks > 0) {
    links.push({ type: 'link', value: i })
    i++
    numLinks--
  }
  links.push({ type: 'current', value: props.currentPage })
  i = props.currentPage + 1
  while (numLinks > 0 && i < props.totalPages) {
    links.push({ type: 'link', value: i })
    i++
    numLinks--
  }
  return links
})
</script>
<style scoped lang="scss">
.email__pagination {
  display: flex;
  justify-content: center;
  margin-top: 24px;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 300px;
  justify-content: space-between;
  li {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    padding: 4px;
    width: 28px;
    height: 28px;
    font-size: 12px;
    margin: 0;
  }
  span {
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
