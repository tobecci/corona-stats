<template>
  <div>
    <v-card>
      <v-parallax
    height="300"
    src="/18.jpg"
    >
    <div class="d-flex flex-row  justify-space-between">
      <div class="display-1 ">Technology</div>
      <div class="">
      </div>
    </div>
  </v-parallax>
    </v-card>

    <div class="d-flex flex-row flex-wrap justify-space-around ma-5">

      <v-card max-width="400" flat>
        <v-card-title>
          Technology
        </v-card-title>
        <v-card-text>
         Through our partnerships with leading HR technology companies our technology service offering is in two streams; where we provide technology as a service or as a product by implementing the relevant technology to help improve your processes.
         <p class="my-1">1. Technology as a Service:</p>
         <p>We run a bureau service where we use our technology to provide an outsourced payroll service to our clients.</p>
        </v-card-text>
      </v-card>

      <v-card max-width="400" flat>
        <v-card-text>
         <ul>
            <li> Payroll service</li>
            <li> Electronic payment and collection service</li>
            <li>HRGIS for mapping and manpower planning</li>
            <li>Human Resource analytics</li>
          </ul>
         <p class="my-1">2. Technology as a product :</p>
         <p>We act as partners and representatives to notable technology companies to deploy their technology to optimize internal processes such as;</p>
         <ul>
            <li> Payroll</li>
            <li> Human Resource information System</li>
          </ul>
        </v-card-text>
      </v-card>

      

      <v-card max-width="400" flat class="pa-5 align-center">
        <v-img
        src="/12.jpg"
        >
          
        </v-img>
      </v-card>      
    </div>

  </div>
</template>

<script>
  export default {
    name: 'Technology',

    data: () => ({
              
    }),
  }
</script>
