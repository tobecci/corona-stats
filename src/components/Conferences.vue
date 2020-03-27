<template>
  <div>
    <v-card>
      <v-parallax
    height="300"
    src="/20.jpg"
    >
    <div class="d-flex flex-row  justify-space-between">
      <div class="display-1 ">Conferences</div>
      <div class="">
      </div>
    </div>
  </v-parallax>
    </v-card>
      
          <div class="d-flex flex-row flex-wrap justify-space-around ma-5">

      <v-card max-width="800" flat>
        <v-card-title>
          Conferences
        </v-card-title>
        <v-card-text>SPEED Conferences organize industry based conferences which bring together tought leaders, experts, industry leaders and the general Nigerian Business community.
The conferences are characterized by insightful discussions, debates and symposium aimed at addressing issues, charting the next course as well as influence public policy development.
<p>Our flagship conferences;</p>
         <ul>
            <li>1. Nigeria Employment Conference</li>
            <li>2. HR and Technology conference</li>
            <li>3. HR and Finance Conference</li>
            <li>4. Nigeria Education conference</li>
          </ul>
        </v-card-text>
      </v-card>


      

      <v-card max-width="400" flat class="pa-5 align-center">
        <v-img
        src="/14.jpg"
        >
          
        </v-img>
      </v-card>      
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Conferences',

    data: () => ({
              
    }),
  }
</script>
