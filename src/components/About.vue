<template>
  <div>
    <v-card>
      <v-parallax
    height="300"
    src="/15.jpg"
  >
    <div class="d-flex flex-row  justify-space-between">
      <div class="display-1 ">About Us</div>
      <div class="">
      </div>
    </div>
  </v-parallax>
    </v-card>
      
      <div>
        <v-card class="mt-5 pa-5">
          <div class="display-1">Who We Are And What We Do?</div>
          <v-divider class="my-2"></v-divider>

          <div class="d-flex flex-row flex-wrap justify-space-around">
              <v-card max-width="500" class="ma-3 pa-3" flat>
                <v-card-title>
                    OUR FIRM
                </v-card-title>

                <v-card-text>
                  We are a firm of professional advisers committed to building people and sustainable organizations in Africa.

                  We have a team of highly talented, innovative and client oriented consultants led by some of Nigeria’s leading Organisation and Human Resource Management experts.

                  SPEED Consulting is dedicated to the task of helping clients build and manage their organization human resources more effectively as well as delivering high value training programmes. We work with Associate Consultants with diverse backgrounds and other complementary firms to meet clients specialized needs
                </v-card-text>
              </v-card>

              <v-card max-width="500" class="ma-3 pa-3" flat>
                <v-card-title>
                    OUR VALUES
                </v-card-title>

                <v-card-text>
                  <p class="ma-1">People – People are the reason we are in business</p>
                  <p class="ma-1">Integrity – We shall do the right thing always</p>
                  <p class="ma-1">Innovation – Seeking new ways to do things better</p>
                  <p class="ma-1">Responsiveness – Respond to the changing needs</p>
                  <p class="ma-1">Speed – Timely execution of assignments.</p>
                  <p class="ma-1">Excellence – Employ the highest standards in our work</p>
                  <p class="ma-1">Teamwork– Winning by what each joint supplies</p>

                </v-card-text>
              </v-card>

              <v-card flat max-width="400" class="ma-3 pa-3">
                <v-card-title>
                    VISION
                </v-card-title>
                <v-card-text>
                  Vision To build a world class professional services firm to serve the African market.
                </v-card-text>
              </v-card>


              <v-card max-width="400" class="ma-3 pa-3" flat>
                <v-card-title>
                    MISSION
                </v-card-title>

                <v-card-text>
                  Mission To provide efficient Human Resource solutions and build the people that builds the organization
                </v-card-text>
              </v-card>

               <v-card max-width="900" class="ma-3 pa-1" flat>
                <v-card-title>
                    LEADERSHIP
                </v-card-title>

                <v-card-text>
                    Ibem Kalu IDIKA is a strong visionary and business leader. He is a global Human Resource and Organization Development Expert, an international Speaker and Author. He is the founder and Chief Executive Officer of SPEED Consulting Limited.
                    He has 20 years hands on experience in Human Resources profession spanning through Public Sector, ICT, Telecoms, Courier Services, Power Utility, Consulting, and Real Estate.
                    He has served as Human Resource Leader and Consultant in some notable Nigerian companies such as Port Harcourt Electricity Distribution Company, Afribank Estate Co Ltd, as Head Human Resources and Admin, Maple Group, as Group Human Resources Manager, SystemSpecs as Human Resources Manager. Leading Edge Consulting and SCG Consulting as Senior Human Resource Consultant. His work include among others, the development and implementation of several successful Human resource interventions as well as the turnaround of some leading brands in Nigeria.
                    In 2017 he helped develop a competency matrix for critical roles in Nigeria’s Electricity Distribution sector and has personally trained Human Resources professionals who are leading the function in several industries. In February 2020, he was recognized by the World HRD Congress as one of the 501 global human resource leaders.
                </v-card-text>
              </v-card>

               <v-card max-width="200" class="ma-3 pa-3" flat>
                  <v-img
                    src="/8.jpeg"
                  >
                    
                  </v-img>
                  <div class="subtitle">IBEM IDIKA</div>
                  <div>Chief Executive Officer</div>
              </v-card>

               <v-card class="ma-3 pa-1" flat>
               
                <v-card-text>
                    He is a graduate of Geography from University of Nigeria, Nsukka and has also attended several trainings locally and overseas. He is an Associate of the Chartered Institute of Personnel Management and Member, Nigerian institute for Training and Development, Society for Corporate Governance and Institute of Directors of Nigeria.
                </v-card-text>
              </v-card>
          </div>
      </v-card>
      </div>

        <v-parallax
    height="300"
    src="/16.jpg"
  >
    <v-container fill-height class="d-flex flex-row justify-center">
        <div class="d-flex flex-column align-center">
          <div class="display-2 ma-2">Have an inquiry?</div>
          <!-- <div class="ma-2">View our blog for more information</div> -->
          <v-btn class="ma-2" large="" min-width="150" :to="`/contact`">Contact Us</v-btn>
        </div>
    </v-container>
  </v-parallax>

  </div>
</template>

<script>
  export default {
    name: 'About',

    data: () => ({

      
    }),
  }
</script>
