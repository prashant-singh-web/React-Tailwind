import React from 'react'

function TestProfile() {
  return (
    <figure class="md:flex bg-slate-100 rounded-xl overflow-hidden p-8 md:p-0 dark:bg-slate-800">
    <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/logo.jpg" alt="" width="384" height="512"/>
    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p class="text-lg font-medium dark:text-gray-500/70">
          “lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus ratione similique, rem iure voluptates itaque. ”
        </p>
      </blockquote>
      <figcaption class="font-medium">
        <div class="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div class="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure>
  )
}

export default TestProfile