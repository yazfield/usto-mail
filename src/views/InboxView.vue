<template>
  <div class="inbox-view">
    <h3>Inbox</h3>
    <EmailTable :emails="emails" />
  </div>
</template>

<script setup lang="ts">
import EmailTable from '../components/EmailTable/EmailTable.vue'
import { getInbox } from '@/api/emails'

const emails = await getInbox()
</script>
