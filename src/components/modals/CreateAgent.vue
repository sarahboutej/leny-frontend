
<template>
  <input type="checkbox" id="create-agent" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box bg-white w-86 px-9">
      <p class="text-2xl font-futura-ptmedium text-leny-cyan-400 pb-2 before:leny-gray-700 before:border-leny-gray-400 relative before:w-11 before:border-b before:absolute before:bottom-0 before:inset-x-0 mb-4">
        Create agent
      </p>
      <div class="flex items-center">
        <div class="avatar mr-4.5">
          <div class="w-20 rounded-full">
            <img src="../../assets/images/user_image.svg" />
          </div>
        </div>
        <label class="block">
          <span class="text-sm text-leny-gray-700 font-futura-ptbook">Upload pic</span>
          <input type="file" class="block w-full text-sm text-leny-gray-700 font-futura-ptbook
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:bg-leny-light-gray file:leny-gray-700
      hover:file:bg-violet-100 " />
        </label>
      </div>
      <form action="" class="mt-8">
        <div class="relative">
          <div class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
                w-full
                mb-4
              ">
            <img src="../../assets/images/user_icon.svg" alt="">
          </div>
          <input class="
          border-0
          text-leny-gray-800
                placeholder:text-xs placeholder:text-slate-400
                bg-white
                rounded-full
                font-futura-ptlight
                py-2
                sm:py-3
                pl-11
                pr-3
                mb-4
                w-full
                h-10
                shadow-[0px_0px_6px_rgba(0,0,0,0.29)]
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                sm:text-sm" placeholder="User..." type="text" name="myUserName" />
        </div>
        <div class="relative">
          <div class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
                w-full
                mb-4">
            <img src="../../assets/images/email_icon.svg" alt="">
          </div>
          <input class="
          border-0
          text-leny-gray-800
                placeholder:text-xs placeholder:text-slate-400
                bg-white
                rounded-full
                font-futura-ptlight
                py-3
                sm:py-2
                pl-11
                pr-3
                mb-4
                w-full
                h-10
                shadow-[0px_0px_6px_rgba(0,0,0,0.29)]
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                sm:text-sm" placeholder="Email..." type="text" name="myPassword" />
        </div>
        <div class="relative">
          <div class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
                w-full
                mb-3.5
              ">
            <img src="../../assets/images/phone-icon.svg" alt="">
          </div>
          <input class="
          border-0
          text-leny-gray-800
                placeholder:text-xs placeholder:text-slate-400
                bg-white
                rounded-full
                font-futura-ptlight
                py-2
                sm:py-3
                pl-11
                pr-3
                mb-4
                w-full
                h-10
                shadow-[0px_0px_6px_rgba(0,0,0,0.29)]
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                sm:text-sm" placeholder="Mobile..." type="text" name="myUserName" />
        </div>

        <div class="relative">
          <div class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
                w-full
                mb-3.5
              ">
            <img src="../../assets/images/password.svg" alt="">
          </div>
          <input class="
          border-0
          text-leny-gray-800
                placeholder:text-xs placeholder:text-slate-400
                bg-white
                rounded-full
                font-futura-ptlight
                py-2
                sm:py-3
                pl-11
                pr-3
                mb-4
                w-full
                h-10
                shadow-[0px_0px_6px_rgba(0,0,0,0.29)]
                focus:outline-none
                focus:border-sky-500
                focus:ring-sky-500
                focus:ring-1
                sm:text-sm" placeholder="Password..." type="password" name="agentPassword" />
        </div>

      </form>
      <div class="modal-action flex space-x-4 mt-4">
        <label for="create-agent" class="w-1/2 text-center flex items-center justify-center h-10
              px-8 font-futura-ptbook
              text-sm text-white
              bg-leny-gray-700
              rounded-full
              border border-leny-gray-700
              hover:bg-transparent hover:text-leny-gray-700
              transition
              duration-300 cursor-pointer">Cancel</label>
        <label for="create-agent" class="w-1/2 text-center flex items-center justify-center h-10
              px-8 font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300 cursor-pointer">Save</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CreateModal",
};
</script>
