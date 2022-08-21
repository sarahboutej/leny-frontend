
<template>
  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="delete-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box py-8 relative">
      <label for="delete-modal" class="btn btn-sm btn-circle absolute right-4 top-4 bg-leny-gray-500 border-0 hover:bg-leny-cyan-400">✕</label>
      <h3 class="text-2xl font-futura-ptmedium text-leny-cyan-400 text-center my-6">Are you sure delete this agent?</h3>
      <div class="modal-action flex space-x-4 justify-center mt-3 mb-8">
        <label for="delete-modal" class="w-1/4 text-center py-2
              px-8 font-futura-ptbook
              text-sm text-white
              bg-leny-gray-700
              rounded-full
              border border-leny-gray-700
              hover:bg-transparent hover:text-leny-gray-700
              transition
              duration-300 cursor-pointer">No</label>
        <label for="delete-modal" class="w-1/4 text-center py-2
              px-8 font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300 cursor-pointer">Yes</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DeleteModal",
};
</script>
