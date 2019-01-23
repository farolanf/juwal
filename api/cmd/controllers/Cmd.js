'use strict';

const { ObjectID } = require('mongodb');

const provinsis = require('../../../data/provinsi.json');
const kabupatens = require('../../../data/kabupaten.json');

/**
 * Cmd.js controller
 *
 * @description: A set of functions called "actions" for managing `Cmd`.
 */

module.exports = {
  resetRegions: async (ctx) => {
    console.log('clearing provinsi and kabupaten..');
    await Promise.all([
      Provinsi.remove({}),
      Kabupaten.remove({})
    ]);
    console.log('populating provinsi and kabupaten..');
    await Promise.all(
      provinsis.map(prov => {
        const provinsiObjectId = new ObjectID(prov.pk);
        return Promise.all([
          strapi.services.provinsi.add({
            _id: provinsiObjectId,
            title: prov.fields.name
          }),
          Promise.all(
            kabupatens
              .filter(kab => kab.fields.provinsi === prov.pk)
              .map(kab => {
                return strapi.services.kabupaten.add({
                  _id: new ObjectID(kab.pk),
                  title: kab.fields.name,
                  provinsi: provinsiObjectId
                });
              })
          )
        ]);
      })
    );
    ctx.body = 'ok';
  },
};
