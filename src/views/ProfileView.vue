<template>
  <v-container class="main-container d-flex flex-column justify-center" v-if="player">
    <div class="d-flex mb-4">
      <router-link to="/" >Поиск</router-link>
      <v-icon class="pl-3 pr-3">mdi-arrow-right-bold</v-icon>
      <router-link :to="'/' + player.id" >{{ player.nickname }}</router-link>
    </div>
    <h1 class="align-self-center">Профиль игрока</h1>
    <v-card v-if="player">
      <v-card-title>{{ player.nickname }}</v-card-title>
      <v-card-text>
        <p>ID: {{ player.id }}</p>
        <p>Уровень: {{ player.level }}</p>
        <p>Очки: {{ player.score }}</p>
      </v-card-text>
    </v-card>
  </v-container>
  <v-alert v-else type="error" class="mt-4">
    Игрок не найден
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['getPlayerById']),
    player() {
      const id = parseInt(this.$route.params.id, 10); // парсим в инт айди профиля, чтобы потом в гетере искать по массиву
      return this.getPlayerById(id);
    }
  }
};
</script>

<style scoped>

</style>
