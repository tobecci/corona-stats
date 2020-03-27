<template>
  <div>
    <v-card>
      <v-parallax
    height="300"
    src="/22.jpg"
    >
    <div class="d-flex flex-row  justify-space-between">
      <div class="display-1 ">Contact</div>
      <div class="">
      </div>
    </div>
  </v-parallax>
    </v-card>

              <div class="d-flex flex-row flex-wrap-reverse justify-space-around ma-5 mt-10">

           <v-card min-width="400" class="py-3 px-10" flat>
            <v-card-title width="100%">
              <div class="display-1 mx-auto">Fill the form</div>
            </v-card-title>
                <v-form ref="contact">
                <v-text-field 
                placeholder="your name" 
                outlined 
                required
                :rules="validationRules.nameRules"
                v-model="formValues.name"
                ></v-text-field>
                <v-text-field 
                placeholder="Your Email" 
                outlined 
                required 
                v-model="formValues.email"
                 :rules="validationRules.emailRules"
                ></v-text-field>
                <v-text-field 
                placeholder="Subject" 
                outlined 
                v-model="formValues.subject"
                ></v-text-field>
                <v-textarea placeholder="Your Message" outlined v-model="formValues.message"></v-textarea>
                <v-btn
                color="red"
                class="mb-4"
                @click="submit"
                >submit</v-btn>
                </v-form>
          </v-card>

      <v-card max-width="600" class="pa-12 mt-5">
        <v-card-title>
          <div class="display-2 my-2">How Can We Help?</div>
        </v-card-title>

         <v-card-title>
          <div class="display-1 my-4">We’d love to hear from you</div>
        </v-card-title>

        <v-card-text>
          Whether you have a question about features, services, pricing, need a demo, or anything else, our team is ready to answer all your questions
        </v-card-text>
      </v-card>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Contact',

    data: () => ({
        validationRules:{
          nameRules:[
            v => v.length > 3 || "name must be more than 3 characters",
          ],
          emailRules: [
            v => /.+@.+\..+/.test(v) || "must be a valid email address",
          ],
        },
        formValues: {
          name:"",
          email:"",
          subject:"",
          message:"",
        },
        
    }),
    methods: {
       submit(){
          if(this.$refs.contact.validate()){
            console.log("validation passed");
            console.log(this.formValues);

          }
          else{
            console.log("validation failed");
            console.log(this.formValues);
          }
        },
    }
  }
</script>
