<template>
  <ul class="actions">
    <li><button class="secondary" @click="handleDelete">Delete</button></li>
  </ul>
</template>
<script setup lang="ts">
const emit = defineEmits(['delete'])
const handleDelete = () => {
  emit('delete')
}
</script>
<style scoped lang="scss">
.actions {
  margin: 0 24px;
  margin-top: -32px;
  li {
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: end;
    button {
      width: 48px;
      font-size: 12px;
      padding: 2px;
    }
  }
}
</style>
