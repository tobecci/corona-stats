<template>
 <v-card>
    <v-footer
      class="pa-0"
    >
      <v-card
        flat
        tile
        width="100%"
        class="text-center pa-5"
        color="#F5F5F5"
      >
        <!-- footer text -->
        <v-row>
                    <v-col cols="12">
              <!-- <v-card-text class="pa-5">
                  <div class="display-1">About</div>
                  Just an app to display statistical data about the current state of the corona pandemic
              </v-card-text> -->
        <div class="">
        <v-btn 
        v-for="icon in icons" 
        :key="icon.name" 
        depressed
        small
        color="transparent"
        :href="icon.link"
        class="ma-2"
        >
          <v-icon>{{  icon.name }}</v-icon>
        </v-btn>
      </div>
          </v-col>
          
          <!-- <v-col cols="12" lg="4" md="4">
              <v-card-text class="pa-5">
                  <div class="display-1">About</div>
                  Just an app to display statistical data about the current state of the corona pandemic
              </v-card-text>
        <div class="">
        <v-btn 
        v-for="icon in icons" 
        :key="icon.name" 
        depressed
        small
        color="transparent"
        :href="icon.link"
        class="ma-2"
        >
          <v-icon>{{  icon.name }}</v-icon>
        </v-btn>
      </div>
          </v-col> -->
          <!-- <v-col cols="12" lg="4" md="4">
              <v-card-text class="pa-5">
                  <div class="display-1">Contact</div>
                  <div>We are open on weekdays 9:00AM to 5:00PM</div>
                  <div class="ma-3"> <v-icon>mdi-map-marker</v-icon> Address: Vinland</div>
                  <div class="ma-3"> <v-icon>mdi-phone</v-icon> Phone: </div>
                  <div class="ma-3"> <v-icon>mdi-email</v-icon> Email: </div>
              </v-card-text>
          </v-col> -->
          <!-- <v-col cols="12" lg="4" md="4">
              <v-card-text class="pa-5">
                  <div class="display-1">Subscribe</div>
                  <div>subscribe to our email newsletter</div>
                  <div>
                    <v-form class="pa-5">
                      <v-text-field
                      outlined=""
                      placeholder="Enter your email"
                      type="email"
                      prepend-inner-icon="mdi-email"
                      ></v-text-field>
                      <v-btn type="submit">Subscribe</v-btn>
                    </v-form>
                  </div>
              </v-card-text>
          </v-col> -->
        </v-row>

        <v-divider></v-divider>

        <v-card-text class="">
         Copyright © {{ new Date().getFullYear() }} — <strong>Corona Stats</strong>
        </v-card-text>
      </v-card>
    </v-footer>

  </v-card>
</template>

<script>
export default {
  name: 'Footer',
  
  data: () => ({
     icons: [
      {name: "mdi-twitter",link:"http://twitter.com/codeweeb"},
      {name: "mdi-linkedin",link:"https://www.linkedin.com/in/tochukwu-ojinaka-a85689184/"},
      {name: "mdi-github",link:"http://github.com/codeweeb"},
    ]
  }),
};
</script>
