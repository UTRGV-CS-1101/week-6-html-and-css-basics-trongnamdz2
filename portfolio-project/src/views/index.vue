<template>
  <section class="min-h-screen bg-[#05070f] text-white flex items-center">
    <div class="mx-auto w-full max-w-6xl px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div class="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">
            <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
            Portfolio Project
          </div>

          <h1 class="mt-5 text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Hi, I'm Nathan Nguyen
            <span class="block mt-2 text-lg md:text-xl font-medium text-white/60">
              (Trong Nam Nguyen)
            </span>
          </h1>

          <p class="mt-5 text-white/75 text-base md:text-lg leading-relaxed">
            I’m a <span class="text-white font-semibold">Full-Stack Developer</span> building modern, reliable web apps.
            I craft clean UI with <span class="text-white font-semibold">Tailwind CSS</span> and ship scalable backends using
            <span class="text-white font-semibold">Django</span> (APIs, auth, databases).
          </p>
          <div class="mt-6 flex flex-wrap gap-2">
            <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">Tailwind CSS</span>            <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">Vue</span>
            <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">Django</span>
            <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">REST APIs</span>
            <span class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80">PostgreSQL</span>
          </div>

          <div class="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              class="inline-flex justify-center items-center rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition"
            >
              View Projects
              <span class="ml-2">→</span>
            </a>

            <a
              href="#contact"
              class="inline-flex justify-center items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Contact Me
            </a>
          </div>

          <p class="mt-6 text-sm text-white/55">
            UIL Computer Science Participant · Competitive Programming · Problem Solving
          </p>
        </div>

        <div class="relative flex justify-center md:justify-end">
          <div class="absolute -inset-6 md:-inset-10 blur-3xl opacity-70">
            <div class="h-full w-full bg-gradient-to-tr from-indigo-500/25 via-fuchsia-500/20 to-emerald-400/20 rounded-full"></div>
          </div>

          <div class="relative w-full max-w-sm">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm text-white/60">Role</p>
                  <p class="font-semibold">Full-Stack Developer</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-xs text-white/70">
                  Tailwind · VueJS · Django
                </div>
              </div>

              <div class="mt-6 flex justify-center">
                <div class="relative">
                  <div class="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent"></div>
                  <img
                    :src="me_image"
                    alt="Nathan Nguyen"
                    class="relative w-[16rem] md:w-[18rem] drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              <div class="mt-6 grid grid-cols-3 gap-3">
                <div class="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p class="text-xs text-white/55">Focus</p>
                  <p class="text-sm font-semibold">UI/UX</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p class="text-xs text-white/55">Backend</p>
                  <p class="text-sm font-semibold">APIs</p>
                </div>
                <div class="rounded-xl border border-white/10 bg-black/20 p-3">
                  <p class="text-xs text-white/55">CS</p>
                  <p class="text-sm font-semibold">UIL</p>
                </div>
              </div>
            </div>

            <div class="absolute -bottom-4 -left-4 h-16 w-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import me_image from '@/resources/images/me.png'
</script>