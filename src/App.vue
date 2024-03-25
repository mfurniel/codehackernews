<template>
  <v-app>
    <v-main>
      <TopBar title="CODE HACKERS NEWS" />
      <HomePage :hits="newsData.hits" :isLoading="isLoading" :urlOption="urlOption" />
    </v-main>
    <FooterOptions @numberPage="pageController" @filterUrl="urlController" :totalPages="pages" />
  </v-app>
</template>

<script>

import moment from 'moment';

import newsService from '@/services/newsService';

import HomePage from './components/HomePage.vue';
import TopBar from './components/TopBar.vue';
import FooterOptions from './components/FooterOptions.vue';


export default {
  name: 'App',
  components: {
    HomePage,
    TopBar,
    FooterOptions
  },
  data: () => ({
    indexPage: 1,
    urlOption: false,
    pages: null,
    hitsPerPage: 15,
    newsData: { hits: [] },
    isLoading: true,
  }),
  watch: {
    hitsPerPage(newhitsPerPage, oldhitsPerPage) {
      if (newhitsPerPage !== oldhitsPerPage) {
        this.fetchData();
        this.pages = this.newsData.nbPages;
      }
    },
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const pageIndex = this.indexPage - 1;
      newsService.fetchNews(pageIndex, this.hitsPerPage)
        .then(response => {
          this.newsData = response.data;
          if (this.pages === null) {
            this.pages = this.newsData.nbPages;
          }
          this.newsData.hits.forEach((element) => {
            element.created_at = moment(element.created_at).format('DD/MM/YYYY HH:mm');
          });
          if (!this.urlOption) {
            this.newsData.hits = this.newsData.hits.filter((element) => element.story_url);
          }
          this.isLoading = false;
        })
        .catch(error => {
          console.error('Error:', error);
          this.isLoading = false;
        });
    },
    pageController(number) {
      this.indexPage = number;
      this.fetchData();
    },
    urlController(value) {
      this.urlOption = value;
    }
  },
};

</script>
