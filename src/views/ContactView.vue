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

  
    
    <!--
    This component uses @tailwindcss/forms

    yarn add @tailwindcss/forms
    npm install @tailwindcss/forms

    plugins: [require('@tailwindcss/forms')]
  -->

    <section class="bg-gray-100 my-8">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            

            <div class="mt-8">
              <a href="" class="text-2xl font-bold text-pink-600">
                
              </a>

              <address class="mt-2 not-italic">
                commerciale@parmexport.it
              </address>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form @submit.prevent="sendContact" class="space-y-4">
              <div>
                <label class="sr-only" for="name">Name</label>
                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" :placeholder="t('contact.name') " type="text" id="name" v-model="form.name" />
              </div>

              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input class="w-full rounded-lg border-gray-200 p-3 text-sm" :placeholder="t('contact.email')" type="email"
                    id="email" v-model="form.email" />
                </div>

                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input class="w-full rounded-lg border-gray-200 p-3 text-sm" :placeholder="t('contact.phone')" type="tel"
                    id="phone" v-model="form.phone" />
                </div>
              </div>

              

              <div>
                <label class="sr-only " for="message">Message</label>

                <textarea class="w-full rounded-lg border-gray-200 p-3 text-sm" :placeholder="t('contact.message')" rows="8"
                  id="message" v-model="form.message"></textarea>
              </div>

              <div class="mt-4">
                <a type="submit"
                href=""
                  class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                  {{ t('contact.send') }}
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
</template>


