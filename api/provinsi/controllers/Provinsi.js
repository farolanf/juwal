'use strict';

/**
 * Provinsi.js controller
 *
 * @description: A set of functions called "actions" for managing `Provinsi`.
 */

module.exports = {

  /**
   * Retrieve provinsi records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.provinsi.search(ctx.query);
    } else {
      return strapi.services.provinsi.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a provinsi record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.provinsi.fetch(ctx.params);
  },

  /**
   * Count provinsi records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.provinsi.count(ctx.query);
  },

  /**
   * Create a/an provinsi record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.provinsi.add(ctx.request.body);
  },

  /**
   * Update a/an provinsi record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.provinsi.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an provinsi record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.provinsi.remove(ctx.params);
  }
};
