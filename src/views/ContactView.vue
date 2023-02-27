<script>
import axios from 'axios'
import Swal from "sweetalert2";
import { useI18n } from 'vue-i18n'

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone:"",
        message: ""
      }
    }
  },
  setup() {
    const { t } = useI18n()
    return { t }
  },
  methods: {
    sendContact() {
      console.log(this.form)
      axios({
        method: 'POST',
        url: 'http://localhost:8000/api/contact',
        data: this.form,
      }).then(res => {
        Swal.fire(
          'Message sent',
          '',
          'success'
        )
      }).catch(err => {
        Swal.fire(
          'message not sent', '',
          'error'
        )
      })
    }
  }
}


</script>
<template>

  
    
   

    <section class="bg-gray-100 my-8">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            

            <div class="mt-8 text-center">
              <a  class="text-2xl font-bold text-pink-600">
                +393297130642
              </a>

              <address class="mt-2 not-italic">
                commerciale@parmexport.it
              </address>
            </div>
          </div>

          <div class=" text-center  rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <div class="mb-30">
              <h1>
                {{ t('contact.first') }}
              </h1>
              <h1>
                {{ t('contact.second') }}
              </h1>
              <h1>
                {{ t('contact.third') }}
              </h1>
              <h1>
                {{ t('contact.fourth') }}
              </h1>

            </div>
            <div>
              <lottie-player class=" z-0 mx-auto w-fit h-[20rem] " src="/assets/email.json" background="transparent" speed="1" loop
            autoplay></lottie-player>
            </div>
            <div class="hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-100 ">
              <a class="bg-gradient-to-t from-green-400 p-4 rounded transition-shadow hover:shadow-[0.25rem_0.25rem_rgba(216,188,27,1)]  " href="mailto:contact@parmexport.it">{{ t('contact.send') }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>


