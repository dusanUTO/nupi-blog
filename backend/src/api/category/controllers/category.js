'use strict';

/**
 * category controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::category.category', ({ strapi }) => ({
  async findOne(ctx) {
    console.log(ctx.request.params.id)
    const data = await strapi.service('api::category.category').find(ctx.request.params.id, {
      populate: ['Name', 'Description']
    })
    // delete data.users_permissions_user.password
    return data
  }
}));
