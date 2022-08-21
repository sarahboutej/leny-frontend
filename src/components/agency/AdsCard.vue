<template>
  <div class="card overflow-visible flex flex-row bg-white">
    <figure class="w-1/2">
      <img :src="require(`../../assets/images/agents/${adsPhoto}`)" alt="" class="rounded-xl" />
    </figure>
    <div class="card-body w-1/2 p-4 pr-0 justify-between">
      <div>
        <div class="flex justify-between">
          <h2 class="text-2xl text-leny-blue-800 font-futura-ptmedium font-normal card-title text-left mb-3">{{adsTitle}}</h2>
          <div class="dropdown dropdown-right">
            <label tabindex="0" class="btn btn-sm btn-circle btn-ghost">
              <img src="../../assets/images/three_dots.svg" loading="lazy" role="presentation">
            </label>
            <ul tabindex="0" class="dropdown-content menu bg-white w-32 rounded-box shadow-xl">
              <li>
                <label for="update-modal" class="modal-button w-full active:bg-leny-cyan-400 focus:bg-leny-cyan-400">
                  <a class="text-leny-gray-800 flex items-center justify-between font-futura-ptbook">Active</a>
                </label>
              </li>
              <li>
                <label for="delete-modal" class="modal-button w-full active:bg-leny-cyan-400 focus:bg-leny-cyan-400">
                  <a class="text-leny-gray-800 flex items-center justify-between font-futura-ptbook">Inactive</a>
                </label>
              </li>
            </ul>
        </div>
        </div>
        <p class="text-leny-gray-700 text-sm font-light line-clamp-2 grow-0 font-futura-ptlight">{{ adsDescription }}</p>
      </div>
      <a class="link link-neutral text-leny-cyan-400 text-sm font-futura-ptlight pt-4">www.realestate.com</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "AdsCard",
  props: {
    adsTitle: {
      type: String,
      default: () => "",
    },
    adsDescription: {
      type: String,
      default: () => "",
    },
    adsLink: {
      type: String,
      default: () => "",
    },
    adsPhoto: {
      type: String,
      default: () => "",
    },
  },
};
</script>
