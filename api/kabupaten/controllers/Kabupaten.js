'use strict';

/**
 * Kabupaten.js controller
 *
 * @description: A set of functions called "actions" for managing `Kabupaten`.
 */

module.exports = {

  /**
   * Retrieve kabupaten records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.kabupaten.search(ctx.query);
    } else {
      return strapi.services.kabupaten.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a kabupaten record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.kabupaten.fetch(ctx.params);
  },

  /**
   * Count kabupaten records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.kabupaten.count(ctx.query);
  },

  /**
   * Create a/an kabupaten record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.kabupaten.add(ctx.request.body);
  },

  /**
   * Update a/an kabupaten record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.kabupaten.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an kabupaten record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.kabupaten.remove(ctx.params);
  }
};
