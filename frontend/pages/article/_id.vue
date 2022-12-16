<template>
  <div>
    <Nav class="mx-auto sticky top-0" />
    <div class="w-4/5 sm:w-1/2 mx-auto my-5">
      <img
        :src="`http://localhost:1337${article.Image.url}`"
        class="max-h-screen"
      />
      <h3 class="mt-5 font-bold text-4xl">
        {{ article.Name }}
      </h3>
      <p class="mt-2 text-gray-700 font-semibold">
        written by {{ article.users_permissions_user.username }}
      </p>
      <div class="my-5">{{ article.Content }}</div>
      <button
        v-if="
          $strapi.user && article.users_permissions_user.id === $strapi.user.id
        "
        class="button--gray"
        @click="deletePost(article.id)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $strapi, route }) {
    const id = route.params.id
    const article = await $strapi.$articles.findOne(id, {
      populate: '*',
    })
    return { article }
  },
  methods: {
    async deletePost(id) {
      await this.$strapi.$articles.delete(id)
      this.$nuxt.$router.push('/articles')
    },
  },
  middleware({ $strapi, redirect }) {
    if ($strapi.user === null) {
      redirect('/articles')
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
