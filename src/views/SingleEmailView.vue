<script setup lang="ts">
import { useRoute } from 'vue-router'
import SingleEmail from '@/components/Email/SingleEmail.vue'
import { getEmail } from '@/api/emails'

const route = useRoute()
const email = await getEmail(parseInt(route.params.id as string))
</script>

<template>
  <div class="single-email-view">
    <SingleEmail v-if="email" :email="email" />
  </div>
</template>
