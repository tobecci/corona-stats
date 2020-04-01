<template>
  <v-app>
    <app-header></app-header>
    <v-content class="pt-8">
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
window.location.href="https://codeweeb.github.io/corona-stats/home";
export default {
  name: 'App',

  components: {
    'app-header': Header,
    'app-footer': Footer,
  },

  data: () => ({
    //
  }),
};
</script>
