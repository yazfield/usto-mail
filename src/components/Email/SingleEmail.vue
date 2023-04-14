<script setup lang="ts">
import type { Email } from '@/api/emails'

defineProps<{
  email: Email
}>()
const formatEmailBody = (body: string) => {
  return body
    .split(/\n/g)
    .map((line) => `<p>${line}</p>`)
    .join('')
}
</script>

<template>
  <article>
    <header>
      <h5>
        {{ email.subject }} <mark>{{ email.archived ? 'archived' : 'inbox' }}</mark>
      </h5>
      <blockquote>
        <footer>
          <cite>from: {{ email.from }}</cite>
        </footer>
        <footer v-if="email.cc && email.cc.length">
          <cite>cc: {{ email.cc.join(', ') }}</cite>
        </footer>
      </blockquote>
    </header>
    <div class="content" v-html="formatEmailBody(email.body)"></div>
  </article>
</template>

<style scoped lang="scss">
article {
  margin: 0;
}
header {
  margin-bottom: 0;
  padding-top: 16px;
  padding-bottom: 14px;
}
h5 {
  margin: 0;
  vertical-align: middle;
  mark {
    font-size: 12px;
    margin-left: 8px;
  }
}
.content {
  padding-top: 24px;
  max-width: 80%;
  margin-left: 48px;
}
blockquote {
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  margin-top: 8px;
  footer {
    margin: 0;
  }
  cite {
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
