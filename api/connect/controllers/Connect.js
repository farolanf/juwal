'use strict';

/**
 * A set of functions called "actions" for `Connect`
 */

module.exports = {
  proxy: async (ctx) => {
    const frontendURL = strapi.config.currentEnvironment.connectURL;
    const provider = ctx.request.params.provider;
    const url = `${frontendURL}${ctx.request.search}&provider=${provider}`;
    ctx.redirect(url);
  }
};
