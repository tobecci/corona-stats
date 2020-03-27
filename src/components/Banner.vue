<template>
  <div>
     <v-card :color="bannerColor">
      <v-parallax
    height="300"
    :src="image"
    >
    <div class="d-flex flex-row  justify-space-between">
      <div class="display-1 black--text">{{ name }}</div>
      <div class="">
      </div>
    </div>
  </v-parallax>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Banner',

    data: () => ({
        name: "",
        image: "",
        bannerColor: "",
    }),
    directives : {
    name: {
    bind(el, binding){
    console.log(el,binding);
    }
  },
  image: {
    bind(el, binding){
    console.log(el,binding);
    }
    },
      bannercolor : {
    bind(el, binding){
    console.log(el,binding);
    }
    }

    }
  }
</script>
