<template>
  <Header :is-agency-page="true" />
  <AgencyHeader ref="companyHeader" :actionButton="false" :page="'agent'" />
  <section class="pb-8">
    <div class="container mx-auto">
      <div class="accordion-flush" id="accordionExample">
        <div class="accordion-item bg-leny-light-gray rounded-box mb-6">
          <h2 class="accordion-header mb-0" id="headingOne">
            <button class="accordion-button rounded-box rounded-t-box relative flex items-center w-full py-10 px-15 text-leny-blue-800 text-2xl font-futura-ptmedium text-left bg-leny-light-gray border-0 transition focus:outline-none [&:not(.collapsed)]:text-leny-blue-800 [&:not(.collapsed)]:bg-leny-light-gray [&:not(.collapsed)]:shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Your Profile
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body rounded-box px-20 pb-8">
              <div class="flex items-center bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3 mt-2">
                <label for="agency-img" class="cursor-pointer">
                  <img src="../../assets/images/add_icon.svg" loading="lazy" role="presnetation" />
                </label>
                <input ref="fileInput" type="file" id="agency-img" class="hidden" @input="pickFile" />
                <span class="pl-3.5 font-futura-ptbook">Upload your logo (2000px by 2000px recommended)</span>
              </div>
              <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
                <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                  <div>
                    <label for="agencyName" class="text-leny-gray-800 text-sm font-futura-ptlight">Company Name</label>
                    <input v-model="$store.state.agencyName" class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" type="text" id="myUserName" name="agencyName" />
                  </div>
                </div>
                <div class="w-2/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                  <div>
                    <label for="agencyBio" class="text-leny-gray-800 text-sm font-futura-ptlight">Bio</label>
                    <input v-model="$store.state.bio" class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" type="text" id="agencyBio" name="agencyBio" />
                  </div>
                </div>
              </div>
              <div class="flex items-stretch space-x-4.5 flex-nowrap mt-4.5">
                <div class="w-1/2 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                  <div>
                    <label for="agencyPassword" class="text-leny-gray-800 text-sm font-futura-ptlight">Change Password</label>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="passwordvalue" type="password" id="agencyPassword" name="agencyPassword" />
                  </div>
                </div>
                <div class="flex items-stretch space-x-3 flex-nowrap w-1/2">
                  <div class="flex-auto bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                    <div class="relative">
                      <label for="agencyColor" class="text-leny-gray-800 text-sm font-futura-ptlight">Color</label>

                      <input v-model="currentColor" class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" type="text" id="agencyColor" name="agencyColor" />
                    </div>
                  </div>
                  <div class="flex items-center justify-center rounded-2.5 w-72 relative" :style="{ backgroundColor: currentColor }">
                    <label for="agency-color" class="cursor-pointer">
                      <img src="../../assets/images/pallete_icon.svg" loading="lazy" role="presnetation" />
                    </label>
                    <div id="agency-color" class="color-picker hidden"></div>
                  </div>
                </div>
              </div>
              <div class="flex items-center justify-end mt-4 space-x-4">
                <button class="h-10 w-32 text-center font-futura-ptbook text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 transition duration-300">
                  Cancel
                </button>
                <button class="text-center h-10 w-32 font-futura-ptbook text-sm text-white bg-leny-cyan-400 rounded-full border border-leny-cyan-400 hover:bg-transparent hover:text-leny-cyan-400 transition duration-300">
                  Save Change
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-leny-light-gray rounded-box mb-6">
          <h2 class="accordion-header mb-0" id="headingTwo">
            <button class="accordion-button rounded-box collapsed relative flex items-center w-full py-10 px-15 text-leny-blue-800 text-2xl font-futura-ptmedium bg-leny-light-gray text-left border-0 transition focus:outline-none [&:not(.collapsed)]:text-leny-blue-800 [&:not(.collapsed)]:bg-leny-light-gray [&:not(.collapsed)]:shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Presentation
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse overflow-visible" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body px-20 pb-8">
              <div class="flex items-center bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3 mt-2">
                <label for="agency-img" class="cursor-pointer">
                  <img src="../../assets/images/add_icon.svg" loading="lazy" role="presnetation" />
                </label>
                <input type="file" id="agency-img" class="hidden" />
                <span class="pl-3.5 font-futura-ptbook">Upload logo (2000px by 2000px recommended)</span>
              </div>

              <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
                <div class="flex-auto bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                  <div>
                    <label for="agencyName" class="text-leny-gray-800 text-sm font-futura-ptlight">About company</label>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry." type="text" id="myUserName" name="agencyName" />
                  </div>
                </div>
              </div>

              <div class="flex items-stretch space-x-4.5 flex-nowrap mt-4.5">
                <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                  <div class="form-control h-full justify-center">
                    <label class="cursor-pointer label">
                      <span class="label-text font-futura-ptbook text-leny-gray-700 text-sm">Remember me</span>
                      <input type="checkbox" class="w-5 h-5 text-leny-gray-200 border-leny-gray-200 bg-leny-gray-200 rounded-sm focus:ring-0 focus:ring-offset-0 checked:bg-check" />
                    </label>
                  </div>
                </div>
                <div class="w-2/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3 font-futura-ptlight">
                  <span class="text-leny-gray-800 text-sm font-futura-ptbook p-0">Choose Properties</span>
                  <div class="dropdown block w-full">
                    <label tabindex="0" class="border-0 flex items-center bg-leny-gray-300 hover:bg-leny-gray-300  text-leny-gray-700 justify-between w-full normal-case px-0 pr-5">
                      <span class="text-leny-gray-600">Choose properties list will show to user</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                      </svg>
                    </label>
                    <div tabindex="0" class="dropdown-content bg-leny-gray-300 p-2 shadow rounded-box flex w-full flex-wrap mt-4">
                      <div class="w-1/3" v-for="index in 12" :key="index">
                        <label class="cursor-pointer label justify-start mb-4 pb-0">
                          <input type="checkbox" class="w-3 h-3 text-leny-gray-200 border-leny-gray-200 bg-leny-gray-200 rounded-sm focus:ring-0 focus:ring-offset-0 checked:bg-check mr-2" />
                          <span class="label-text font-futura-ptbook text-leny-gray-700 text-base">Property Name</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-end mt-4 space-x-4">
                <button class="text-center h-10 w-32 font-futura-ptbook text-sm text-white bg-leny-cyan-400 rounded-full border border-leny-cyan-400 hover:bg-transparent hover:text-leny-cyan-400 transition duration-300">
                  Preview
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Payment -->
        <div class="accordion-item bg-leny-light-gray rounded-box mb-6">
          <h2 class="accordion-header mb-0" id="headingThree">
            <button class="accordion-button rounded-box collapsed relative flex items-center w-full py-10 px-15 text-leny-blue-800 text-2xl font-futura-ptmedium text-left bg-leny-light-gray border-0 transition focus:outline-none [&:not(.collapsed)]:text-leny-blue-800 [&:not(.collapsed)]:bg-leny-light-gray [&:not(.collapsed)]:shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Payment method
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body px-20 pb-8">
              <div class="flex items-center">
                <input id="option-1" type="radio" value="" name="active" class="w-4 h-4 text-transparent bg-transparent shadow-[0px_0px_6px_rgba(0,0,0,0.29)] border-transparent focus:ring-0 focus:ring-offset-0 checked:bg-radio-check" />
                <label for="option-1" class="ml-2 text-sm font-futura-ptbook text-leny-gray-700">Credit/Debit Card</label>
              </div>
              <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
                <div class="w-1/2 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
                  <div>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-leny-gray-700 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" placeholder="Name on the card" type="text" id="myUserName" name="agencyName" />
                  </div>
                </div>
                <div class="w-1/2 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
                  <div>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-leny-gray-700 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" placeholder="Card number" type="text" id="agencyBio" name="agencyBio" />
                  </div>
                </div>
              </div>

              <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
                <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
                  <div>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-leny-gray-700 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" placeholder="MM / YY" type="text" id="myUserName" name="agencyName" />
                  </div>
                </div>
                <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
                  <div>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-leny-gray-700 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" placeholder="CVC" type="text" id="agencyBio" name="agencyBio" />
                  </div>
                </div>
                <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
                  <div>
                    <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-leny-gray-700 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" placeholder="Zip/Postal Code" type="text" id="agencyBio" name="agencyBio" />
                  </div>
                </div>
              </div>
              <div class="flex justify-end space-x-4.5 mt-6">
                <button class="text-center h-10 w-32 font-futura-ptbook text-sm text-white bg-leny-gray-700 rounded-full border border-leny-gray-700 hover:bg-transparent hover:text-leny-gray-700 transition duration-300 cursor-pointer">
                  Cancel
                </button>
                <button class="text-center h-10 w-32 font-futura-ptbook text-sm text-white bg-leny-blue-800 rounded-full border border-leny-blue-800 hover:bg-transparent hover:text-leny-blue-800 transition duration-300 cursor-pointer">
                  Save Card
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Subscription Plan -->
        <div class="accordion-item bg-leny-light-gray rounded-box mb-6">
          <h2 class="accordion-header mb-0" id="headingFour">
            <button class="accordion-button rounded-box collapsed relative flex items-center w-full py-10 px-15 text-leny-blue-800 text-2xl font-futura-ptmedium text-left bg-leny-light-gray border-0 transition focus:outline-none [&:not(.collapsed)]:text-leny-blue-800 [&:not(.collapsed)]:bg-leny-light-gray [&:not(.collapsed)]:shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Subscription Plan
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
            <div class="accordion-body px-20 pb-8">
              <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
                <subscription-plan v-for="(plan, index) in plansItem" :key="index" :title="plan.title" :sub-title="plan.subtitle" :price="plan.price" :isActive="plan.isActive" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>
<script>
import "@simonwep/pickr/dist/themes/nano.min.css";
import Pickr from "@simonwep/pickr";

import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
import SubscriptionPlan from "../../components/agency/SubscriptionPlan.vue";
export default {
  name: "EditProfile",
  components: {
    Header,
    Footer,
    AgencyHeader,
    SubscriptionPlan,
  },
  data: () => {
    return {
      plansItem: [
        {
          title: "Standard Plan",
          subtitle: "Independent Agent Subscription",
          price: "89 € H.T./month",
          isActive: true,
        },
        {
          title: "Pro Plan",
          subtitle: "Independent Agent Subscription",
          price: "89 € H.T./month",
          isActive: false,
        },
        {
          title: "Bussiness Plan",
          subtitle: "Independent Agent Subscription",
          price: "89 € H.T./month",
          isActive: false,
        },
      ],
      pickr: null,
      currentColor: "#112C61",
    };
  },
  mounted() {
    this.pickr = Pickr.create({
      el: ".color-picker",
      theme: "nano", // or 'monolith', or 'nano'

      swatches: null,

      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsla: true,
          hsva: true,
          cmyk: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });
    this.pickr.on("change", (color) => {
      this.currentColor = color.toHEXA().toString();
    });
  },
  methods: {
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.$store.state.logo = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>
<style>
.pickr {
  position: absolute !important;
  width: 100% !important;
  height: 100% !important;
}
.pickr .pcr-button {
  height: 100%;
  width: 100%;
  opacity: 0;
}
</style>
