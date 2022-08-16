<template>
  <div tabindex="0" class="dropdown-content shadow bg-white rounded-box w-72 md:w-96 min-h-notif">
    <div v-show="!showAlertSetting">
      <p class="text-base font-medium text-leny-blue-800 pb-2 pt-4 mx-6 before:leny-gray-700 before:border-leny-blue-800 relative before:w-9 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-5"> Notification </p>
      <ul>
        <notification-item v-for="(item,index) in notifications" :key="index" :text="item.text" :image="item.image" :time="item.time" :read="item.read" /> 
      </ul>
      <div class="bg-leny-light-gray text-center rounded-b-3xl py-3.5">
        <a  id="notifContent" class="flex items-center space-x-1 justify-center cursor-pointer" @click="showAlertSetting = !showAlertSetting">
          <img src="../assets/images/alert_notification_blue.svg" loading="lazy" role="presentation">
          <span class="text-sm text-leny-cyan-400">Set Alert </span>
          <img src="../assets/images/arrows.svg" loading="lazy" role="presentation">
        </a>
      </div>
    </div>
    <div  v-show="showAlertSetting">
      <p class="text-base font-medium text-leny-blue-800 pb-2 pt-4 mx-6 before:leny-gray-700 before:border-leny-blue-800 relative before:w-9 before:border-b-2 before:absolute before:bottom-0 before:inset-x-0 mb-5"> Choose frequency </p>
      <div class="mx-6">
        <div class="flex mb-6 space-x-8">
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
              <span class="label-text ml-3 text-xs text-leny-gray-700">Live/immediately</span>
            </label>
          </div>
           <div class="form-control">
            <label class="label cursor-pointer">
              <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
              <span class="label-text ml-3 text-xs text-leny-gray-700">Every hour</span>
            </label>
          </div>
        </div>
        <div class="flex justify-between">
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
              <span class="label-text ml-3 text-xs text-leny-gray-700">Day</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
              <span class="label-text ml-3 text-xs text-leny-gray-700">Week</span>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
              <span class="label-text ml-3 text-xs text-leny-gray-700">Month</span>
            </label>
          </div>
        </div>
      </div>
      <a @click="showAlertSetting = !showAlertSetting" class="
                  py-3
                  px-8
                  w-32
                  mx-6
                  mt-6
                  block
                  text-center
                  font-regular
                  text-xs text-white
                  bg-leny-blue-800
                  rounded-full
                  border border-leny-blue-800
                  hover:bg-transparent hover:text-leny-blue-800
                  shadow-md
                  transition
                  duration-300
                  cursor-pointer
                ">Save Alert</a>
    </div>
  </div>
</template>
<script>
import NotificationItem from './NotificationItem.vue'
export default {
  name: "NotificationMenu",
  components: {
    NotificationItem
  },
  data: () => {
    return {
      showAlertSetting: false,
      notifications: [
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
          read: true
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
          read: false
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
          read: true
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
          read: false
        },
        {
          image: "img_notification.png",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          time: "11 Mar. 07:00",
          read: true
        },
      ],
    };
  },
};
</script>
