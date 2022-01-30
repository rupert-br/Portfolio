<template>
  <div class="px-2 md:px-40">
    <div class="flex flex-col md:flex-row pt-16 pb-16 items-center">
      <div class="basis-1/2 text-center">
        <div class="text-5xl font-bold pb-6">
          Hello, I'm Rupert
        </div>
        <div class="text-2xl font-mono mt-2">
          <span class="py-3 px-4 decoration-blue-600 underline underline-offset-4 decoration-solid decoration-4 tracking-tighter">Web Developer</span>
        </div>
      </div>
      <div class="basis-1/2">
        <div class="h-72 w-72 bg-blue-600 shadow-xl rounded-full mt-12 md:mt-0" />
      </div>
    </div>
    <div class="text-5xl font-bold mb-8 mt-6">
      Projects
    </div>
    <div class="grid grid-cols-3 gap-4 justify-items-center">
      <div class="">01</div>
      <div>02</div>
      <div>03</div>
      <div>04</div>
      <div>05</div>
      <div>06</div>
      <div>07</div>
      <div>08</div>
      <div>09</div>
    </div>
    <div class="mt-20">
      <div class="text-5xl font-bold mb-8">
        Customers
      </div>
    </div>
    <div class="mt-20">
      <div class="text-5xl font-bold mb-8">
        Contact me
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, accusamus molestiae consequuntur libero odit delectus deserunt sapiente pariatur magni repellat atque, praesentium quibusdam quia doloremque ullam eius labore explicabo cumque?
      </div>
      <form action="" class="py-8">
        <label for="name">Name</label>
        <input id="name" type="text" name="name" class="form-input border border-blue-600">
        <label for="name">Email</label>
        <input id="email" type="text" name="email" class="border border-blue-600">
        <label for="subject">Subject</label>
        <input id="subject" type="text" name="subject" class="border border-blue-600">
        <div>
          <label for="w3review">Message</label>
          <textarea id="w3review" name="w3review" class="border border-blue-600"/>
        </div>
        <button class="py-2 px-3 mt-4 text-white bg-blue-700 hover:bg-blue-800">
          Send message!
        </button>
      </form>
    </div>
  </div>
</template>
