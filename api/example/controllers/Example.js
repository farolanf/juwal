'use strict';

/**
 * Example.js controller
 *
 * @description: A set of functions called "actions" for managing `Example`.
 */

module.exports = {

  send: async (ctx) => {
    await strapi.plugins['email'].services.email.send({
      to: 'test@mail.com',
      from: 'noreply@juwal.id',
      replyTo: 'cs@juwal.id',
      subject: 'test email',
      text: 'this is text',
      html: '<b>this is html</b>'
    });
    ctx.status = 200;
    ctx.body = 'done!';
  },

  /**
   * Retrieve example records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.example.search(ctx.query);
    } else {
      return strapi.services.example.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a example record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.example.fetch(ctx.params);
  },

  /**
   * Count example records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.example.count(ctx.query);
  },

  /**
   * Create a/an example record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.example.add(ctx.request.body);
  },

  /**
   * Update a/an example record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.example.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an example record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.example.remove(ctx.params);
  }
};
