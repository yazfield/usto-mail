<template>
  <aside class="sidebar">
    <h1>USTO mail</h1>
    <ul>
      <li><RouterLink to="/">Inbox</RouterLink></li>
      <li><RouterLink to="/archive">Archive</RouterLink></li>
    </ul>
  </aside>
</template>

<style scoped>
aside {
  min-width: 240px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--secondary);
  padding: 0 16px;
}
h1 {
  margin: 10px 0;
}
h1 a {
  text-decoration: none;
}

.router-link {
  width: 100%;
  margin: 0;
  padding: 5px 24px;
  text-align: left;
  border-radius: 20px;
  font-size: 14px;
}
.router-linik.active {
  font-weight: bold;
}

ul,
li {
  margin: 0;
  padding: 0;
}
</style>
