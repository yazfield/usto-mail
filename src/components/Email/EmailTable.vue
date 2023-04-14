<script setup lang="ts">
import type { Email } from '@/api/emails'
import { defineProps, computed, ref, watch } from 'vue'
import TableRow from './TableRow.vue'
import TableActions from './TableActions.vue'
import TablePagination from './TablePagination.vue'

const props = defineProps<{
  emails: Email[]
}>()

const localEmails = ref<Email[]>([])
watch(
  () => props.emails,
  (emails) => {
    localEmails.value = emails
  },
  { immediate: true }
)

const PER_PAGE = 10

const currentPage = ref(0)

const currentPageEmails = computed(() => {
  return localEmails.value.slice(
    currentPage.value * PER_PAGE,
    currentPage.value * PER_PAGE + PER_PAGE
  )
})

const totalPages = computed(() => {
  return Math.ceil(localEmails.value.length / PER_PAGE)
})

const selection = ref<number[]>([])

const handleRowSelection = (payload: { selected: boolean; id: number }) => {
  const email = localEmails.value.find((email) => email.id === payload.id)
  if (!email) {
    return
  }
  if (payload.selected) {
    selection.value.push(email.id)
  } else {
    selection.value = selection.value.filter((id) => id !== email.id)
  }
}

const handleDeleteSelection = () => {
  localEmails.value = localEmails.value.filter((email) => !selection.value.includes(email.id))
  selection.value = []
}

const handlePagination = (page: number) => {
  currentPage.value = page
}
</script>

<template>
  <div class="email">
    <TableActions v-show="selection.length" @delete="handleDeleteSelection" />
    <table role="grid">
      <tbody>
        <TableRow
          v-for="email of currentPageEmails"
          :email="email"
          @select="handleRowSelection"
          :key="email.id"
        />
      </tbody>
    </table>
    <TablePagination
      :current-page="currentPage"
      :total-pages="totalPages"
      @navigate="handlePagination"
    />
  </div>
</template>

<style scoped lang="scss">
.email__from {
  max-width: 260px;
}
.email__body {
  max-width: 500px;
}

tr {
  height: 70px;
}
table {
  margin-bottom: 16px;
}
</style>
