<template>
  <div class="row justify-content-md-center">
    <div class="col-md-4" v-for="(item, index) in items" :key="index">
      <div class="card" @click="navigateToMenu(item.id)" :class="{pointer: item.id}">
        <div class="card-img-wrapper">
          <div
            v-if="item.image"
            class="card-img"
            :style="{ backgroundImage: 'url(' + item.image + ')' }"
          ></div>
          <div v-else class="card-img card-no-img"></div>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ item.name}}</h5>
          <p v-if="item.address" class="card-text">{{ item.address }}</p>
          <p
            v-if="item.price"
            class="card-text"
          >{{ item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}</p>
          <button v-if="!item.restaurantId" class="btn btn-primary">Ver Cardápio</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    items: Array
  },
  methods: {
    navigateToMenu(id) {
      if (id) {
        this.$router.push(`/restaurant/${id}`)
      }
    }
  }
}
</script>

<style>
.card {
  overflow: hidden;
  margin-bottom: 20px;
}
.pointer {
  cursor: pointer;
}
.card:hover .card-img {
  transform: scale(1.2) rotate(3deg);
}
.card-img-wrapper {
  position: relative;
  width: 100%;
  min-height: 190px;
  overflow: hidden;
  background-image: url('https://loading.io/spinners/typing/lg.-text-entering-comment-loader.gif');
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: center;
}
.card-img {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: 0.3s ease-in-out;
}
.card-no-img {
  background-image: url('https://cdn11.bigcommerce.com/s-auu4kfi2d9/stencil/59606710-d544-0136-1d6e-61fd63e82e44/e/74686f40-d544-0136-c2c6-0df18b975cb0/icons/icon-no-image.svg');
}
</style>
