<template>
  <div class="archive-view">
    <h3>Archive</h3>
    <EmailTable :emails="emails" />
  </div>
</template>
<script setup lang="ts">
import EmailTable from '@/components/EmailTable/EmailTable.vue'
import { getArchive } from '@/api/emails'

const emails = await getArchive()
</script>
