<template>
  <div>
    <v-app-bar dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    title: String
  }
}
</script>