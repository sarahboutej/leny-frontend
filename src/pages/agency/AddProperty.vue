
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :page="'property'" :actionButton="false" />
  <section class="pb-16">
    <div class="container mx-auto">
      <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Add Property</h1>
      <div class="flex space-x-6">
        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Property Type</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="propertyType" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Property Size</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="propertySize" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">No. of Bedrooms</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="bedrooms" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">No. of Bathrooms</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="bathroom" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-6">
        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Floor no.</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="propertyType" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Published Date</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="propertySize" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Location</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="bedrooms" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Amenities</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="bathroom" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex space-x-6">
        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Gallery</p>
            <div>
              <label for="drop-zone" class="relative
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       pl-6 pr-3 
                       mb-4 block w-full h-10 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1">
                <img src="../../assets/images/gallery_icon.svg" class="absolute inset-y-0 right-2.5 my-auto" loading="lazy" role="presentation">
              </label>
              <input id="drop-zone" class="hidden" name="propertyGallery" type="file" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Description</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="propertySize" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div class="form-control">
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Price</p>
            <div>
              <input class="font-futura-ptlight 
                       placeholder:text-xs 
                       placeholder:text-slate-400 
                       bg-white rounded-full 
                       py-2 sm:py-2.5 pl-6 pr-3 
                       mb-4 w-full shadow-[0px_0px_6px_rgba(0,0,0,0.29)] 
                       focus:outline-none 
                       focus:border-sky-500 focus:ring-sky-500 
                       focus:ring-1 sm:text-sm" name="bedrooms" />
            </div>
          </div>
        </div>

        <div class="w-1/4">
          <div>
            <p class="text-leny-gray-800 text-sm mb-3 mt-4 font-futura-ptbook">Chat</p>
            <div class="flex items-center mt-2">
              <div class="form-control">
                <label class="flex items-center cursor-pointer label">
                  <input type="radio" name="radio-6" class="w-4 h-4 text-white bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] border-white focus:ring-0 focus:ring-offset-0 checked:bg-radio-check" checked />
                  <span class="ml-2 text-sm font-futura-ptbook text-leny-gray-800 label-text">Active</span>
                </label>
              </div>
              <div class="form-control">
                <label class="flex items-center label cursor-pointer ml-10">
                  <input type="radio" name="radio-6" class="w-4 h-4 text-white bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.29)] border-white focus:ring-0 focus:ring-offset-0 checked:bg-radio-check" checked />
                  <span class="ml-2 text-sm font-futura-ptbook text-leny-gray-800 label-text">Not active</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8">
        <button for="assign-agent" class="
          py-2.5
          w-60
          block
          mx-auto
          text-center
          font-futura-ptbook
          text-sm text-white
          bg-leny-blue-800
          rounded-full
          border border-leny-blue-800
          hover:bg-transparent hover:text-leny-blue-800
          transition
          duration-300"> Add Property </button>
      </div>
    </div>
  </section>
  <Footer />
</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
export default {
  name: "AgencyProperties",
  components: {
    Header,
    Footer,
    AgencyHeader,
  },
  data: () => {
    return {};
  },
};
</script>
