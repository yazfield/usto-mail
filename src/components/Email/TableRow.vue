<template>
  <tr :class="['email__row', { 'email__row--selected': selected }]" @click="goto(email.id)">
    <td @click.stop="() => false">
      <input type="checkbox" v-model="selected" @change="handleSelectionChange" />
    </td>
    <td class="email__from">{{ email.from }}</td>
    <td class="email__body">
      <strong>{{ email.body.slice(0, 100) }}...</strong>
    </td>
    <td>{{ email.sentAt }}</td>
  </tr>
</template>
<script setup lang="ts">
import type { Email } from '@/api/emails'
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps<{
  email: Email
}>()
const emit = defineEmits(['select'])
const selected = ref(false)

const handleSelectionChange = () => {
  emit('select', { selected: selected.value, id: props.email.id })
}

const goto = (id: number) => {
  router.push(`/emails/${id}`)
  return false
}
</script>
<style scoped lang="scss">
.email__row {
  cursor: pointer;
  &:hover:not(.email__row--selected) {
    background-color: var(--primary);
  }
  &--selected {
    background-color: var(--secondary) !important;
  }
}
</style>
