'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  async findOne(ctx) {
    console.log(ctx.request.params.id)
    const data = await strapi.service('api::article.article').findOne(ctx.request.params.id, {
      populate: ['Image', 'users_permissions_user']
    })
    delete data.users_permissions_user.password
    return data
  }
}));
