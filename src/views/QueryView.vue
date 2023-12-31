<script setup lang="ts">
import NavBar from '@/components/NavBar.vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

const handleSubmit = async (event: any) => {
  event.preventDefault(); // Prevents the default form submission behavior
  const email = event.target.email.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;

  try {
    await fetch('https://nishanttheprogrammer-portfolio-default-rtdb.firebaseio.com/queries.json', {
      method: 'POST',
      body: JSON.stringify({ email, subject, message })
    });

    $toast.success(`Thanks for reaching me I'll be back to you really soon on ${email}`);
  } catch (error) {
    $toast.error(`Something went wrong`);
  }
};
</script>

<template>
  <NavBar></NavBar>
  <section class="min-h-screen" :style="{ background: 'url(../assets/wave-backgrouund.png)' }">

    <h2 class="text-4xl text-center">Get in Touch</h2>
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have a question or want
        to discuss a project? Drop me a message!</p>
      <form action="#" @submit="handleSubmit" class="space-y-8">
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
          <input type="email" id="email"
            class="shadow-sm bg-white dark:bg-gray-700 border border-gray-300 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            placeholder="name@example.com" required>
        </div>
        <div>
          <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
          <input type="text" id="subject"
            class="block p-3 w-full text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-lg border border-gray-300 shadow-sm focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            placeholder="How can I assist you?" required>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your
            message</label>
          <textarea id="message" rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-lg shadow-sm border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:placeholder-gray-400 dark:focus:ring-green-500 dark:focus:border-green-500 dark:shadow-sm-light"
            placeholder="Leave your message here..."></textarea>
        </div>
        <button type="submit"
          class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-400 sm:w-fit hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Send
          message</button>
      </form>
    </div>
  </section>
</template>
