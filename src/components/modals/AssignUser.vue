
<template>
  <input type="checkbox" id="assign-user" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box bg-white w-86 px-9 overflow-hidden">
      <p class="text-2xl font-futura-ptmedium text-leny-cyan-400 pb-2 before:leny-gray-700 before:border-leny-gray-400 relative before:w-11 before:border-b before:absolute before:bottom-0 before:inset-x-0 mb-4">
        User list
      </p>
      <input class="border-leny-blue-8000 font-futura-ptlight placeholder:text-xs placeholder:text-slate-400 bg-white rounded-full h-10 pl-6 pr-3 mb-4.5 mt-1 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="searchField">
      <ul class="max-h-80 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-leny-gray-500 scrollbar-thumb-rounded-lg scrollbar-track-gray-100 border-0 scrollbar-medium">
        <li v-for="user in usersList" :key="user" class="pl-2 pt-2 mb-2 flex items-center">
          <input type="checkbox" class="mr-2 w-4 h-4 text-white bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-sm border-white focus:ring-0 focus:ring-offset-0 checked:bg-check" />
          <span class="text-leny-blue-800 text-sm font-futura-ptbook">{{user}}</span>
        </li>
      </ul>
      <div class="actions mt-6">
        <label for="assign-user" class="
          flex items-center justify-center h-10
          w-36
          mx-auto
          text-center
          font-futura-ptbook
          text-sm text-white
          bg-leny-blue-800
          rounded-full
          border border-leny-blue-800
          hover:bg-transparent hover:text-leny-blue-800
          transition
          duration-300"> Assign </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AssignUser",
  data: () => {
    return {
      usersList: [
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
        "User Name",
      ],
    };
  },
};
</script>
