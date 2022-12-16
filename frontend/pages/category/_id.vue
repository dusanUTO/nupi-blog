<template>
  <div>
    <Nav class="mx-auto sticky top-0" />
    <div class="w-4/5 sm:w-1/2 mx-auto my-5">
      <h3 class="my-5 font-bold text-xl">
        {{ category.data.Name }}
      </h3>
      <p class="mt-5 font-bold">
        {{ category.Description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, route }) {
    const id = route.params.id
    const category = await $strapi.$categories.findOne(id)
    const articles = await $strapi.$articles.find(category, {
      populate: '*',
    })
    /* eslint-disable */
    console.log(category)
    /* eslint-enable */
    return { category, articles }
  },
  data() {
    return {
      category: [],
      articles: [],
    }
  },
}
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 2rem;
  margin: 0.5em 0;
}
</style>
