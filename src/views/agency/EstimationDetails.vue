
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :actionButton="false" :page="'estimation'" />
  <section class="pb-16">
    <div class="container mx-auto">
      <div>
        <h1 class="text-h2xl text-leny-blue-800 mb-6 font-futura-ptmedium">Edit an Estimate</h1>
        <div class="flex flex-nowrap space-x-6 h-full w-full mb-9">
          <div class="item w-1/3 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] py-4.5 px-6 rounded-3xl text-leny-gray-700">
            <h6 class="text-base 
               font-futura-ptmedium 
               text-leny-cyan-400 pb-1.5 
               before:leny-gray-700 before:border-leny-gray-500 
               relative before:w-6 before:border-b 
               before:absolute before:bottom-0 before:inset-x-0 mb-6">
              Contact info
            </h6>
            <ul class="">
              <li class="flex mb-3">
                <img src="../../assets/images/user_icon.svg" loading="lazy" role="presentation" />
                <span class="ml-3 text-sm font-futura-ptbook">
                  Ben Le Bon
                </span>
              </li>
              <li class="flex mb-3">
                <img src="../../assets/images/lock_icon.svg" loading="lazy" role="presentation" />
                <span class="ml-3 text-sm font-futura-ptbook">
                  lebon.bernnard31@gmail.com
                </span>
              </li>
              <li class="flex">
                <img src="../../assets/images/call_icon.svg" loading="lazy" role="presentation" />
                <span class="ml-3 text-sm font-futura-ptbook">
                  002289270589
                </span>
              </li>
            </ul>
            <button class="text-center h-10 flex items-center justify-center ml-auto
              w-32
              font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300 cursor-pointer">Find More</button>
          </div>
          <div class="item w-1/3 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] py-4.5 px-6 bg-leny-cyan-400 rounded-3xl text-white">
            <h6 class="text-base 
               font-futura-ptmedium 
               pb-1.5 
               before:leny-gray-700 before:border-white 
               relative before:w-6 before:border-b 
               before:absolute before:bottom-0 before:inset-x-0 mb-6">
              Estimated on:
            </h6>
            <ul class="">
              <li class="flex mb-3">
                <img src="../../assets/images/calendar_icon.svg" loading="lazy" role="presentation" />
                <span class="ml-3 text-sm font-futura-ptbook">
                  01- 12 - 2021
                </span>
              </li>
              <li class="flex mb-3">
                <img src="../../assets/images/time_icon.svg" loading="lazy" role="presentation" />
                <span class="ml-3 text-sm font-futura-ptbook">
                  18:43:59
                </span>
              </li>
              <li class="flex">
                <img src="../../assets/images/price_icon.svg" loading="lazy" role="presentation" />
                <span class="ml-3 text-sm font-futura-ptbook">
                  167900 € - 197000 €
                </span>
              </li>
            </ul>
          </div>
          <div class="item w-1/3 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] py-4.5 px-6 rounded-3xl text-leny-gray-700">
            <h6 class="text-base 
              font-futura-ptmedium 
               text-leny-cyan-400 pb-1.5 
               before:leny-gray-700 before:border-leny-gray-500 
               relative before:w-6 before:border-b 
               before:absolute before:bottom-0 before:inset-x-0 mb-6">
              Location:
            </h6>
            <div class="flex">
              <div class="flex-[1_1_9rem]">
                <img src="../../assets/images/map_img.png" alt="">
              </div>
              <div class="ml-3">
                <p class="flex mb-4">
                  <img src="../../assets/images/location_icon.svg" loading="lazy" role="presentation" />
                  <span class="ml-3 text-xs md:text-sm text-leny-gray-600 font-futura-ptbook">
                    6 Place de la Gare, JouÉ-lÈs-tours, France
                  </span>
                </p>
                <button class="text-center h-10 flex justify-center items-center  
                  w-32
                  font-futura-ptbook
                  text-sm text-white
                  bg-leny-blue-800
                  rounded-full
                  border border-leny-blue-800
                  hover:bg-transparent hover:text-leny-blue-800
                  transition
                  duration-300 cursor-pointer">
                  <img src="../../assets/images/location_white_icon.svg" loading="lazy" role="presentation" />
                  <span class="ml-3">View on map</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 class="mb-4 text-leny-blue-800 text-base font-futura-ptmedium">Estimate Status:</h4>
        <div class="flex items-center">
          <div class="dropdown w-60 mr-6">
            <label tabindex="0" class="border-0 flex items-center bg-white  text-leny-gray-500 hover:bg-white justify-between w-full normal-case pr-5  mr-6 px-4.5 font-futura-ptlight placeholder:text-xs placeholder:text-slate-400 rounded-full py-2.5 pl-6 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] focus:outline-none focus:border-sky-500 focus:ring-0 sm:text-sm">
              <span class="text-leny-gray-800">{{currentOption}}</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-down text-leny-gray-800 w-3 h-3" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </label>
            <div tabindex="0" class="dropdown-content bg-white pt-4.5 px-6 shadow-[0px_0px_6px_rgba(0,0,0,0.29)] rounded-box flex w-full flex-wrap mt-2">
              <ul class="bg-white">
                <li v-for="(option,index) in propertiesOptions" :key="index" class="label-text font-futura-ptbook text-leny-gray-800 text-sm mb-4 cursor-pointer" @click="changeOption(option)"><a>{{option}}</a></li>
              </ul>
            </div>
          </div>
          <button class="text-center h-10 flex justify-center items-center 
              w-32
              font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300 cursor-pointer">Update Status</button>
        </div>
        <div class="flex flex-nowrap items-center space-x-6 h-full w-full mt-6">
          <ul class="item w-1/3">
            <li v-for="(item, index) in estimationDetails.slice(0,6)" :key="index" class="mb-4">
              <span class="badge badge-xs h-1.5 px-0.5 mr-3 bg-leny-cyan-400 border-leny-cyan-400"></span>
              <span class="text-sm text-leny-cyan-400 font-futura-ptbook">{{item.name}}: </span>
              <span class="text-sm font-futura-ptlight text-leny-gray-700">{{item.value}}</span>
            </li>
          </ul>
          <ul class="item w-1/3">
            <li v-for="(item, index) in estimationDetails.slice(7,13)" :key="index" class="mb-4">
              <span class="badge badge-xs h-1.5 px-0.5 mr-3 bg-leny-cyan-400 border-leny-cyan-400"></span>
              <span class="text-sm text-leny-cyan-400 font-futura-ptbook">{{item.name}}: </span>
              <span class="text-sm font-futura-ptlight text-leny-gray-700">{{item.value}}</span>
            </li>
          </ul>
          <ul class="item w-1/3">
            <li v-for="(item, index) in estimationDetails.slice(14,20)" :key="index" class="mb-4">
              <span class="badge badge-xs h-1.5 px-0.5 mr-3 bg-leny-cyan-400 border-leny-cyan-400"></span>
              <span class="text-sm text-leny-cyan-400 font-futura-ptbook">{{item.name}}: </span>
              <span class="text-sm font-futura-ptlight text-leny-gray-700">{{item.value}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center justify-center mx-auto mt-12 space-x-6">
        <button class="
              h-10 flex justify-center items-center 
              font-futura-ptbook
              px-8
              text-center
              font-regular
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300
            ">Export estimate to product</button>
        <label for="assign-agent" class="
              h-10 flex justify-center items-center 
              font-futura-ptbook
              px-8
              text-center
              font-regularchange
              text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800 cursor-pointer
            ">Transfer the estimate to an agent</label>
      </div>
    </div>
  </section>
  <Footer />
  <assign-agent />
</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
import AssignAgent from "../../components/modals/AssignAgent.vue";
export default {
  name: "EstimationDetails",
  components: {
    Header,
    Footer,
    AgencyHeader,
    AssignAgent,
  },
  data: () => {
    return {
      estimationDetails: [
        { name: "For", value: "Sale" },
        { name: "Type", value: "Apartement" },
        { name: "Construction Date", value: "1850" },
        { name: "Surface habitable", value: "73 m2" },
        { name: "No. of pieces", value: "3" },
        { name: "No. of bathrooms", value: "1" },
        { name: "Land size", value: "m2" },

        { name: "Balcony Size", value: "1" },
        { name: "Floor of the property", value: "4" },
        { name: "Garden Size", value: "0 m2" },
        { name: "Elevator", value: "No" },
        { name: "No. of parking spaces(inside)", value: "2" },
        { name: "No. of parking spaces(exterior)", value: "0" },
        { name: "Bathroom quality", value: "normal" },

        { name: "Kitchen quality", value: "normal" },
        { name: "Floor quality", value: "high_quality" },
        { name: "Window quality", value: "high_quality" },
        { name: "Condition Sall de bain", value: "new_or_recently_renovated" },
        { name: "Condition Cuisine", value: "well_maintained" },
        { name: "Condition sol", value: "new_or_recently renovated" },
        { name: "Condition fenetre", value: "Well_maintained" },
      ],
      propertiesOptions: [
        "Validated",
        "Option One",
        "Option Two",
        "Option Three",
        "Option Four",
      ],
      currentOption: "Validated",
    };
  },
  methods: {
    changeOption(option) {
      this.currentOption = option;
    },
  },
};
</script>
