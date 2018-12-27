<template>
  <div id="nav-bar">
    <div class="nav-bar__logo">
      <router-link to="/" exact class="button-back">
        <button class="btn btn-light">
          <i class="fas fa-chevron-left"></i> Voltar
        </button>
      </router-link>
      <router-link to="/" exact>
        <img src="@/assets/goomer.png">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
body {
  padding-top: 85px;
}
#nav-bar {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #158ad0;
  z-index: 1;
}
.nav-bar__logo img {
  max-width: 180px;
  height: auto;
}
.button-back {
  position: absolute;
  left: 30px;
  top: 15px;
  transition: 0.5s ease-in-out;
}
.btn.btn-light {
  color: #158ad0;
}
.button-back.router-link-exact-active {
  top: -100px;
}
</style>
