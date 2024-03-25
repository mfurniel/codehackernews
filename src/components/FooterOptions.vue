<template>
  <v-footer app class="footerContainer">
    <v-switch v-model="filterWithUrl" :label="$t('showStoriesWithoutUrl')" class="urlSwitch" />

    <div class="containerPagination">
      <v-pagination v-model="page" :length="totalPages" :total-visible="7"></v-pagination>
    </div>

  </v-footer>
</template>

<script>
export default {
  name: 'FooterOptions',
  props: {
    totalPages: Number,
  },
  data() {
    return {
      page: 1,
      filterWithUrl: false,
    };
  },
  watch: {
    page(newPage) {
      this.$emit('numberPage', newPage);
    },
    filterWithUrl(changeValue) {
      this.$emit('filterUrl', changeValue);
    }
  },
};
</script>

<style>
.footerContainer {
  align-items: center;
  display: flex;
  height: 8vh;
  justify-content: center;
}

.urlSwitch {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-60%);
}

.urlSwitch .v-label {
  color: black;
  font-size: large;
}

@media (max-width: 970px) {
  .containerPagination {
    width: 100%;
  }

  .footerContainer {
    flex-direction: column;
    height: auto;
  }

  .urlSwitch {
    position: static;
    transform: none;
  }
}
</style>