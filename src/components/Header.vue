<template>
  <div>
    <v-container>
        <v-app-bar
          app
          dense
          >
        <div class="d-flex align-center">
          <!-- <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo.jpg"
            transition="scale-transition"
            width="200"
          /> -->
          <div class="font-weight-bold">COVID19 STATS</div>
        </div>

          <div class="ml-5">
              <v-btn
              v-for="item in menuItems" 
              :key="item.name"
              depressed
              small=""
              :to="item.path"
              color="transparent"
              class="pa-1 ma-2 hidden-sm-and-down text-capitalize"
              >
              {{ item.name }}
              </v-btn>
          </div>
        <v-spacer></v-spacer>

        <div class="mx-4 hidden-sm-and-down">
          <v-btn 
          v-for="icon in icons" 
          :key="icon.name" 
          depressed
          small
          color="transparent"
          :href="icon.link"
          class=""
          >
            <v-icon>{{  icon.name }}</v-icon>
          </v-btn>
        </div>

        <v-btn
        @click="drawer = !drawer"
        class="hidden-lg-and-up"
        color="transparent"
        depressed=""
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
  </v-container>

    <v-navigation-drawer
    dark
    v-model="drawer"
    temporary=""
    app
    class="pa-3"
    right=""
    >
      <v-list class=" pa-2 d-flex flex-column justify-center align-start">
      <v-list-item 
      v-for="item in menuItems" 
      :key="item.name"
      :to="item.path"
      >
        <v-list-item-content>
            {{ item.name }}
        </v-list-item-content>
      </v-list-item>

    </v-list>
    </v-navigation-drawer>
  </div>
 </template>

<script>
export default {
  name: 'Header',
  
  data: () => ({
    drawer: false,
    menuItems:[
      { name: "Home", icon: "mdi-home", path:"/" },
      { name: "Global", icon: "mdi-home", path:"/global" },
      { name: "About" , path:"/about" },
      { name: "Contact" , path:"/contact" },

    ],
    icons: [
      {name: "mdi-facebook",link:"http://facebook.com/speedadvisors"},
      {name: "mdi-twitter",link:"http://twitter.com/speedadvisors"},
      {name: "mdi-instagram",link:"http://instagram.com/speed.consulting"},
      {name: "mdi-linkedin",link:"http://linkedin.com/company/speed-consulting-limited"},
    ]
  }),
}
</script>
