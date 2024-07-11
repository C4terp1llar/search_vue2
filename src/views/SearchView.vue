<template>
  <v-container class="main-container justify-center d-flex flex-column">
    <h1 class="align-self-center">Найдите нужного игрока</h1>
    <p class="pa-3 align-self-center">Ниже в поле ввода Вы можете ввести никнейм нужного Вам игрока</p>
    <v-autocomplete
        outlined
        v-model="selectedPlayer"
        :items="isSearchQuerySatisfiedByLength ? filteredPlayers : []"
        item-value="id"
        item-text="nickname"
        label="Найти игрока"
        append-icon=""
        prepend-icon="mdi-account-search"
        :search-input.sync="searchQuery"
        :menu-props="{ maxHeight: 'auto' }"
        @change="handleSelect"
        :hide-no-data="!isSearchQuerySatisfiedByLength"
    >
      <!--  Решил добавить кастомный no-data, тк по дефолту "no data available"    -->
      <template v-slot:no-data>
        <div class="no-data pa-3 error--text">
          Игрок не найден
        </div>
      </template>
    </v-autocomplete>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'SearchView',
  data() {
    return {
      searchQuery: "",
      selectedPlayer: null,
    };
  },
  computed: {
    ...mapGetters(['getAllPlayers']),
    filteredPlayers() {
      const query = this.searchQuery.toLowerCase().trim(); //чистим пробелы + нижний регистр

      const filteredArray = this.getAllPlayers.filter(player =>
          player.nickname.toLowerCase().includes(query) //фильтруем массив игроков по нику из квери пользователя (переб приведением - нижний регистр)
      );

      return filteredArray.slice(0, 10);
    },
    isSearchQuerySatisfiedByLength() {
      return this.searchQuery && this.searchQuery.length >= 3; // ищем совпадения, только если длина больше 3 (вынес в отдельный компьютед, вместо хардкода с тернарником)
    }
  },
  methods: {
    handleSelect(playerId) {
      if (playerId) {
        this.$router.push({ name: 'profile', params: { id: playerId } }); // пушим на динамич стр с параметром айди
      }
    }
  },
};
</script>

<style scoped lang="scss">

</style>
