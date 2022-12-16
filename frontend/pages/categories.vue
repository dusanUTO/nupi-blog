<template>
  <div>
    <Nav class="mx-auto sticky top-0" />
    <h1 class="text-center my-5">All categories</h1>
    <div
      v-show="error !== ''"
      class="sticky z-100 border p-5 m-3 top-0 bg-black text-white text-center mx-auto w-4/5 sm:w-4/5 md:w-4/5 lg:w-1/2"
    >
      <p class="m-1 sm:m-3">{{ error }}</p>
      <button class="button--gray" @click="resetError()">Ok</button>
    </div>
    <div
      v-for="(category, i) in data.data"
      :key="i"
      class="sm:flex sm:space-x-5 my-5 shadow-lg mx-auto w-4/5 sm:w-4/5 md:w-4/5 lg:w-1/2"
    >
      <div class="px-2 sm:pr-2 sm:text-left text-center">
        <h3 class="font-bold my-3 text-2xl">{{ category.attributes.Name }}</h3>
        <p class="my-3">{{ category.attributes.Description }}</p>
        <button
          class="button--green mb-4"
          @click="articlesOfCategory(category)"
        >
          See articles
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $strapi }) {
    const data = await $strapi.find('categories', { populate: '*' })
    return { data }
  },
  data() {
    return {
      error: '',
    }
  },
  methods: {
    articlesOfCategory(category) {
      if (this.$strapi.user) {
        this.error = ''
        this.$nuxt.$router.push(`/category/${category.id}`)
      } else {
        this.error = 'Please Login to read articles'
      }
    },
    resetError() {
      this.error = ''
    },
  },
}
</script>
<style></style>
