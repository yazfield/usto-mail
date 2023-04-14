<script setup lang="ts">
import EmailTable from '../components/Email/EmailTable.vue'
import { getArchive } from '@/api/emails'
const emails = await getArchive()
</script>

<template>
  <div class="email-table-view">
    <h3>Archive</h3>
    <EmailTable :emails="emails" />
  </div>
</template>
<style scoped>
.email-table-view {
  width: 100%;
}
h3 {
  margin: 4px 24px;
}
</style>
