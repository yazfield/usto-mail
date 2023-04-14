<template>
  <div class="email-table">
    <table>
      <tr v-for="email of currentPageEmails" :key="email.id">
        <td><input type="checkbox" /></td>
        <td>{{ email.from }}</td>
        <td>{{ email.body }}</td>
        <td>{{ email.sentAt }}</td>
      </tr>
    </table>
  </div>
  <ul class="email__pagination">
    <li><button class="secondary outline" @click="navigate(0)">0</button></li>
    <li><button class="secondary outline" @click="navigate(1)">1</button></li>
  </ul>
</template>
<script setup lang="ts">
import type { Email } from '@/api/emails'
import { computed, ref } from 'vue'

const props = defineProps<{
  emails: Email[]
}>()

const PER_PAGE = 5
let currentPage = ref(0)
let totalPages = computed(() => Math.floor(props.emails.length / PER_PAGE))
const currentPageEmails = computed(() => {
  const currentEmails = props.emails.slice(
    currentPage.value * PER_PAGE,
    (currentPage.value + 1) * PER_PAGE
  )
  return currentEmails
}) // 5 (PER_PAGE) elements

const navigate = (page: number) => {
  if (page < 0) return
  if (page >= totalPages.value) return
  currentPage.value = page
}
</script>

<style scoped>
.email__pagination {
  display: flex;
  justify-content: center;
  margin-top: 24px;
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 300px;
  justify-content: space-between;
}
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
</style>
