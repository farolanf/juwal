'use strict';

/**
 * Field.js controller
 *
 * @description: A set of functions called "actions" for managing `Field`.
 */

module.exports = {

  /**
   * Retrieve field records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.field.search(ctx.query);
    } else {
      return strapi.services.field.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a field record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.field.fetch(ctx.params);
  },

  /**
   * Count field records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.field.count(ctx.query);
  },

  /**
   * Create a/an field record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.field.add(ctx.request.body);
  },

  /**
   * Update a/an field record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.field.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an field record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.field.remove(ctx.params);
  }
};
