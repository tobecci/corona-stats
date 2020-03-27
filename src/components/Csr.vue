<template>
  <div>
    <v-card>
      <v-parallax
    height="300"
    src="/21.jpg"
    >
    <div class="d-flex flex-row  justify-space-between">
      <div class="display-1 ">CSR</div>
      <div class="">
      </div>
    </div>
  </v-parallax>
    </v-card>

          <div class="d-flex flex-row flex-wrap justify-space-around ma-5">

 <v-card max-width="400" flat class="pa-5 align-center">
        <v-img
        src="/14.jpg"
        >
          
        </v-img>
      </v-card>    
      <v-card max-width="600" flat>
        <v-card-title>
          Corporate Social Responsibility
        </v-card-title>
        <v-card-text>SPEED Consulting is a socially responsible corporate citizen and we try to live up to it through our CSR programmes.
We partner with communities, local government authorities and nongovernmental organizations to drive several initiatives geared towards making social impact in the communities that we serve. The initiatives are usually driven by events, give-away, conferences, workshops, campaigns and sponsorship programmes.        </v-card-text>
      </v-card>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Csr',

    data: () => ({
              
    }),
  }
</script>
