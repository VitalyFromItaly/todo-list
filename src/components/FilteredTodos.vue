<template>
  <div id="filter">
    <div class="flex space-x-2 text-gray-400" >
      <button
        @click="$emit('showAll')"
        class=" hover:text-gray-600 focus:text-blue-700 focus:outline-none"
        :class="[isAllClicked ? 'text-blue-700 dark:text-blue-600 ' : '']"
      >
        All
      </button>
      <button
        @click="$emit('showActive')"
        class=" hover:text-gray-600 focus:outline-none"
        :class="[isActiveClicked ? 'text-blue-700 dark:text-blue-600' : '']"
      >
        Active
      </button>
      <button
        @click="$emit('showCompleted')"
        class=" hover:text-gray-600 focus:text-blue-700 focus:outline-none"
        :class="[isCompletedClicked ? 'text-blue-700 dark:text-blue-600' : '']"
      >
        Completed
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props:['isAllClicked', "isActiveClicked", 'isCompletedClicked'],
  data() {
    return {
      width: 0,
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
      handleResize() {
      this.width = window.innerWidth;
      this.$emit('width',this.width)
    },
  }
};
</script>

<style></style>
