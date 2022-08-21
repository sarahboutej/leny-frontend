
<template>
  <Header :is-agency-page="true" />
  <AgencyHeader :actionButton="false" :page="'agent'" />
  <section class="pb-8">
    <div class="container mx-auto">
      <!-- Profile Part -->
      <div tabindex="0" class="collapse collapse-arrow bg-leny-light-gray rounded-box py-10 px-15 mb-4.5">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl after:top-0 after:bottom-0 after:mt-10 after:mr-11 after:shadow-leny-blue-800">
          <span class="text-leny-blue-800 text-2xl font-futura-ptmedium">Your Profile</span>
        </div>
        <div class="collapse-content mx-11">
          <div class="flex items-center bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3 mt-2">
            <label for="agency-img" class="cursor-pointer">
              <img src="../../assets/images/add_icon.svg" loading="lazy" role="presnetation">
            </label>
            <input type="file" id="agency-img" class="hidden">
            <span class="pl-3.5 font-futura-ptbook">Upload your logo (2000px by 2000px recommended)</span>
          </div>
          <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
            <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
              <div>
                <label for="agencyName" class="text-leny-gray-800 text-sm font-futura-ptlight">Company Name</label>
                <input class="border-0 focus:ring-0  text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Leny" type="text" id="myUserName" name="agencyName" />
              </div>
            </div>
            <div class="w-2/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
              <div>
                <label for="agencyBio" class="text-leny-gray-800 text-sm font-futura-ptlight">Bio</label>
                <input class="border-0 focus:ring-0  text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry." type="text" id="agencyBio" name="agencyBio" />
              </div>
            </div>
          </div>
          <div class="flex items-stretch space-x-4.5 flex-nowrap mt-4.5">
            <div class="w-1/2 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
              <div>
                <label for="agencyPassword" class="text-leny-gray-800 text-sm font-futura-ptlight">Change Password</label>
                <input class="border-0 focus:ring-0  text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="passwordvalue" type="password" id="agencyPassword" name="agencyPassword" />
              </div>
            </div>
            <div class="flex items-stretch space-x-3 flex-nowrap w-1/2">
              <div class="flex-auto bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3">
                <div class="relative">
                  <label for="agencyColor" class="text-leny-gray-800 text-sm font-futura-ptlight">Color</label>
                  <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Blue" type="text" id="agencyColor" name="agencyColor" />
                </div>
              </div>
              <div class="flex items-center justify-center bg-leny-blue-800 rounded-2.5 w-72">
                <label for="agency-color" class="cursor-pointer">
                  <img src="../../assets/images/pallete_icon.svg" loading="lazy" role="presnetation">
                </label>
                <input type="color" id="agency-color" class="hidden">
              </div>
            </div>
          </div>
          <div class="flex items-center justify-end mt-4 space-x-4">
            <button class="
              h-10
              w-32
              text-center
              font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300">Cancel</button>
            <button class="text-center
              h-10
              w-32
              font-futura-ptbook
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300">Save Change</button>
          </div>

        </div>
      </div>

      <!-- Presentation Part -->
      <div tabindex="0" class="collapse collapse-arrow bg-leny-light-gray rounded-box py-10 px-15 mb-4.5">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl after:top-0 after:bottom-0 after:mt-10 after:mr-11 after:shadow-leny-blue-800">
          <span class="text-leny-blue-800 text-2xl font-futura-ptmedium">Presentation</span>
        </div>
        <div class="collapse-content">
          <div class="flex items-center bg-leny-gray-300 rounded-2.5 text-leny-gray-700 py-2.5 px-3 mt-2">
            <label for="agency-img" class="cursor-pointer">
              <img src="../../assets/images/add_icon.svg" loading="lazy" role="presnetation">
            </label>
            <input type="file" id="agency-img" class="hidden">
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
              <label for="agencyBio" class="text-leny-gray-800 text-sm font-futura-ptbook p-0">Choose Properties</label>
              <select class="select select-ghost w-full p-0 focus:bg-leny-gray-300 focus:outline-0 text-leny-gray-700 text-sm font-futura-ptlight">
                <option disabled selected>Choose properties list will show to user</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </div>
          </div>

          <div class="flex justify-end mt-4 space-x-4">
            <button class="text-center
              h-10
              w-32
              font-futura-ptbook
              text-sm text-white
              bg-leny-cyan-400
              rounded-full
              border border-leny-cyan-400
              hover:bg-transparent hover:text-leny-cyan-400
              transition
              duration-300">Preview</button>

          </div>
        </div>
      </div>

      <!-- Payment -->
      <div tabindex="0" class="collapse collapse-arrow bg-leny-light-gray rounded-box py-10 px-15 mb-4.5">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl after:top-0 after:bottom-0 after:mt-10 after:mr-11 after:shadow-leny-blue-800">
          <span class="text-leny-blue-800 text-2xl font-futura-ptmedium">Payment method</span>
        </div>
        <div class="collapse-content">
          <div class="flex items-center">
            <input id="option-1" type="radio" value="" name="active" class="w-4 h-4 text-transparent bg-transparent shadow-[0px_0px_6px_rgba(0,0,0,0.29)] border-transparent focus:ring-0 focus:ring-offset-0 checked:bg-radio-check">
            <label for="option-1" class="ml-2 text-sm font-futura-ptbook text-leny-gray-700">Credit/Debit Card</label>
          </div>
          <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
            <div class="w-1/2 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
              <div>
                <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Name on the card" type="text" id="myUserName" name="agencyName" />
              </div>
            </div>
            <div class="w-1/2 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
              <div>
                <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Card number" type="text" id="agencyBio" name="agencyBio" />
              </div>
            </div>
          </div>

          <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
            <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
              <div>
                <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="MM / YY" type="text" id="myUserName" name="agencyName" />
              </div>
            </div>
            <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
              <div>
                <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="CVC" type="text" id="agencyBio" name="agencyBio" />
              </div>
            </div>
            <div class="w-1/3 bg-leny-gray-300 rounded-2.5 text-leny-gray-700 h-16 flex items-center">
              <div>
                <input class="border-0 focus:ring-0 text-leny-gray-700 font-futura-ptbook placeholder:text-sm placeholder:text-slate-400 bg-transparent rounded-full w-full focus:outline-none sm:text-sm" value="Zip/Postal Code" type="text" id="agencyBio" name="agencyBio" />
              </div>
            </div>
          </div>
          <div class="flex justify-end space-x-4.5 mt-6">
            <button class=" text-center h-10
              w-32
              font-futura-ptbook
              text-sm text-white
              bg-leny-gray-700
              rounded-full
              border border-leny-gray-700
              hover:bg-transparent hover:text-leny-gray-700
              transition
              duration-300 cursor-pointer">Cancel</button>
            <button class="text-center h-10
              w-32
              font-futura-ptbook
              text-sm text-white
              bg-leny-blue-800
              rounded-full
              border border-leny-blue-800
              hover:bg-transparent hover:text-leny-blue-800
              transition
              duration-300 cursor-pointer">Save Card</button>
          </div>

        </div>
      </div>

      <!-- Subscription Plan -->
      <div tabindex="0" class="collapse collapse-arrow bg-leny-light-gray rounded-box py-10 px-15 mb-4.5">
        <input type="checkbox" class="peer" />
        <div class="collapse-title text-xl after:top-0 after:bottom-0 after:mt-10 after:mr-11 after:shadow-leny-blue-800">
          <span class="text-leny-blue-800 text-2xl font-futura-ptmedium">Subscription Plan</span>
        </div>
        <div class="collapse-content">
          <div class="flex items-center space-x-4.5 flex-nowrap mt-4.5">
            <subscription-plan v-for="(plan, index) in plansItem" :key="index" :title="plan.title" :sub-title="plan.subtitle" :price="plan.price" :isActive="plan.isActive"/>
          </div>
        </div>
      </div>

    </div>
  </section>

  <Footer />
</template>
<script>
import Header from "../../components/Header.vue";
import Footer from "../../components/Footer.vue";
import AgencyHeader from "../../components/agency/AgencyHeader.vue";
import SubscriptionPlan from "../../components/agency/SubscriptionPlan.vue"
export default {
  name: "EditProfile",
  components: {
    Header,
    Footer,
    AgencyHeader,
    SubscriptionPlan
  },
  data: () => {
    return {
      plansItem: [
        {
          title: "Standard Plan",
          subtitle: "Independent Agent Subscription",
          price: "89 € H.T./month",
          isActive: true
        },
        {
          title: "Pro Plan",
          subtitle: "Independent Agent Subscription",
          price: "89 € H.T./month",
          isActive: false
        },
        {
          title: "Bussiness Plan",
          subtitle: "Independent Agent Subscription",
          price: "89 € H.T./month",
          isActive: false
        }
      ]
    }
  }
};
</script>
