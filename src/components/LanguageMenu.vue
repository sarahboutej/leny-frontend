<template>
  <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-28">
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text ml-3 text-xs text-leny-gray-700">French</span>
        <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
      </label>
    </div>
    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text ml-3 text-xs text-leny-gray-700">English</span>
        <input type="radio" name="radio-4" class="checked:bg-leny-blue-800 radio radio-sm shadow-md" />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "LanguageMenu",
};
</script>
