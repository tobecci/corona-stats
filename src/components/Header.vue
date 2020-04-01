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
              <v-icon class="ma-2" v-text="item.icon"></v-icon>
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
       <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
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
      { name: "Contact" , icon: "mdi-phone", path:"/contact" },

    ],
    icons: [
      {name: "mdi-twitter",link:"http://twitter.com/codeweeb"},
      {name: "mdi-linkedin",link:"https://www.linkedin.com/in/tochukwu-ojinaka-a85689184/"},
      {name: "mdi-github",link:"http://github.com/codeweeb"},
    ]
  }),
}
</script>
