<template>
  <div class="navigation-bar">
    <ul class="navigation-links">
      <li class="navigation-link">
        <RouterLink to="/" active-class="active">Home</RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink to="/about" active-class="active">About</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.navigation-bar {
  color: whitesmoke;
  text-transform: uppercase;
}

.navigation-links {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

.navigation-link a {
  color: white;
  text-underline-offset: 0.4rem;
  text-decoration: none;
}

.navigation-link a.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
