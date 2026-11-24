<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '@/components/NavBar.vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import waveBg from '@/assets/wave-background.png';

const $toast = useToast();
const isSubmitting = ref(false);

const email = ref('');
const subject = ref('');
const message = ref('');

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  try {
    await fetch('https://nishanttheprogrammer-portfolio-default-rtdb.firebaseio.com/queries.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        subject: subject.value,
        message: message.value,
        timestamp: new Date().toISOString()
      })
    });

    $toast.success(`Thanks for reaching out! I'll get back to you shortly at ${email.value}`);
    email.value = '';
    subject.value = '';
    message.value = '';
  } catch (error) {
    $toast.error('Something went wrong. Please email directly at knishant113@gmail.com');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <NavBar />

  <main
    class="flex-1 py-12 md:py-20 relative bg-cover bg-center"
    :style="{ backgroundImage: `url(${waveBg})` }"
  >
    <div class="absolute inset-0 bg-[#121417]/85 backdrop-blur-sm"></div>

    <div class="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      
      <div class="text-center space-y-3">
        <span class="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">Contact</span>
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-mono text-white">Get in Touch</h1>
        <p class="text-gray-300 font-mono text-sm sm:text-base max-w-xl mx-auto">
          Have a question, an engineering opportunity, or want to discuss a scalable project? Drop me a message below!
        </p>
      </div>

      <div class="bg-zinc-800/90 border border-zinc-700/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
        <form @submit="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block mb-2 text-xs font-mono font-medium uppercase tracking-wider text-gray-300">
              Your Email Address
            </label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              placeholder="e.g. recruiter@company.com"
              required
            />
          </div>

          <div>
            <label for="subject" class="block mb-2 text-xs font-mono font-medium uppercase tracking-wider text-gray-300">
              Subject
            </label>
            <input
              v-model="subject"
              type="text"
              id="subject"
              class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              placeholder="e.g. Senior Software Engineer Role / Inquiry"
              required
            />
          </div>

          <div>
            <label for="message" class="block mb-2 text-xs font-mono font-medium uppercase tracking-wider text-gray-300">
              Message
            </label>
            <textarea
              v-model="message"
              id="message"
              rows="5"
              class="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-gray-500 font-mono text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
              placeholder="Share details about the role, project, or timeline..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-black font-bold text-sm tracking-wide transition-all shadow-lg shadow-emerald-500/20"
          >
            <span v-if="!isSubmitting">Send Message</span>
            <span v-else class="inline-flex items-center gap-2">
              <svg class="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              Sending...
            </span>
          </button>
        </form>

        <div class="mt-8 pt-6 border-t border-zinc-700/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <span>Or reach out directly:</span>
          <div class="flex items-center gap-4">
            <a href="mailto:knishant113@gmail.com" class="text-emerald-400 hover:underline">knishant113@gmail.com</a>
            <span>•</span>
            <a href="https://wa.me/917838716089" target="_blank" class="text-emerald-400 hover:underline">+91 7838716089</a>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>
