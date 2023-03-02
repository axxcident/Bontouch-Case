<template>
  <!-- Breadcrumb Navigation -->
  <nav class="breadcrumb">
    <p>använd .this$router för att lägga navigation {{ $route.params }}</p>
    <RouterLink to="/">HomeView</RouterLink>
    <RouterLink to="/user/:id">UserView</RouterLink>
    <RouterLink to="/user/:id/album/:nr">AlbumView</RouterLink>
  </nav>
  <RouterView></RouterView>
</template>

<script>
import { RouterView, RouterLink } from 'vue-router'
export default {

}
</script>
