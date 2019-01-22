'use strict';

/**
 * Fieldvalue.js controller
 *
 * @description: A set of functions called "actions" for managing `Fieldvalue`.
 */

module.exports = {

  /**
   * Retrieve fieldvalue records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.fieldvalue.search(ctx.query);
    } else {
      return strapi.services.fieldvalue.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a fieldvalue record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.fieldvalue.fetch(ctx.params);
  },

  /**
   * Count fieldvalue records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.fieldvalue.count(ctx.query);
  },

  /**
   * Create a/an fieldvalue record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.fieldvalue.add(ctx.request.body);
  },

  /**
   * Update a/an fieldvalue record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.fieldvalue.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an fieldvalue record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.fieldvalue.remove(ctx.params);
  }
};
