<template>
  <v-container fluid>
    <div class="homePageContainer">
      <div v-if="isLoading && !hits.length">Cargando...</div>
      <ul class="unstyledList" v-else-if="hits.length">
        <li v-for="item in filteredHits" :key="item.objectID">
          <CardNews :title="item.story_title" :author="item.author" :created_at="item.created_at" :url="item.story_url"
            :tags="item._tags" :text="item.comment_text" />
        </li>
      </ul>
      <div v-else>{{ $t('no_news_message') }}</div>
    </div>
  </v-container>
</template>


<script>
import CardNews from './CardNews.vue';

export default {
  name: 'HomePage',
  props: {
    hits: Array,
    isLoading: Boolean,
    urlOption: Boolean
  },
  components: {
    CardNews
  },
  computed: {
    filteredHits() {
      return this.urlOption
        ? this.hits
        : this.hits.filter(item => item.story_url);
    }
  },
}
</script>

<style>
.homePageContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1vh 15vw 0 15vw;
}

li {
  padding: 5px 3px 2px 2px;
}

.unstyledList {
  list-style-type: none;
  margin: 0;
  padding: 0 !important;
}
</style>