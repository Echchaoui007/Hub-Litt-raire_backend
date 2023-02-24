<script setup>
</script>
<template>
    <div class="max-w-[25%] fixed bottom-2 left-2">
            <div class="w-72 bg-white rounded-lg  shadow-xl p-6">
                <div class="w-16 mx-auto relative -mt-10 mb-3">
                    <img class="-mt-1" src="https://www.svgrepo.com/show/30963/cookie.svg" alt="Cookie Icon SVG">
                </div>
                <span class="w-full sm:w-48  block leading-normal text-gray-800 text-md mb-3">We use cookies to provide a
                    better user experience.</span>
                <div class="flex items-center justify-between">
                    <button @click="$emit('rejected')" class="text-xs mr-1 text-red-500" href="#">Reject</button>
                    <div class="w-1/2">
                        <button type="button" @click="$emit('accepted')"
                            class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Accept</button>
                    </div>
                </div>
            </div>
    </div>
</template>