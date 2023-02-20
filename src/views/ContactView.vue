<script>
import axios from 'axios'
import Swal from "sweetalert2";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    }
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
            'message not sent','',
            'error'
        )
      })
    }
  }
}


</script>
<template>
  <h1 class="text-center font-bold  text-3xl text-green-500">Contact us</h1>
  <div class="wrapper">
    <!--    contact area-->
    <div class=" mx-auto px-4 py-8 w-full">

      <form @submit.prevent="sendContact" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Full Name
          </label>
          <input
              v-model="form.name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name" type="text" placeholder="Full Name">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email" type="email" placeholder="Email" v-model="form.email">
        </div>
        <div class="mb-4">
          <label class="block   text-gray-700 font-bold mb-2" for="message">
            Message
          </label>
          <textarea
              class="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message" rows="6" placeholder="Message" v-model="form.message"></textarea>
        </div>
        <div class="flex items-center justify-between">
          <button
              class=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
    <!--    lottie animation area-->
    <div class="flex justify-center items-center">
      <lottie-player class="h-[32rem] w-fit -scale-x-100" src="./assets/workdesk.json" background="transparent"
                     speed="1"
                     loop autoplay></lottie-player>
    </div>


  </div>
</template>

<style scoped>
.wrapper {
  @apply grid grid-cols-1 md:grid-cols-2 gap-2 p-4 w-full
}
</style>
