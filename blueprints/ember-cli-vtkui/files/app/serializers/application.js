import { merge } from '@ember/polyfills';
import DS from 'ember-data';
import { pluralize } from 'ember-inflector';

export default DS.RESTSerializer.extend({

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let data = {};
    let pluralized = pluralize(primaryModelClass.modelName);

    data[pluralized] = payload.collection;
    delete payload.collection;
    data['meta'] = {
      offset: payload.offset,
      limit: payload.limit,
      total: payload.total
    };
    delete payload.page;
    delete payload.total;
    delete payload.offset;
    delete payload.limit;
    return this._super(store, primaryModelClass, data, id, requestType);
  },

  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    let data = {};
    data[primaryModelClass.modelName] = payload;
    return this._normalizeResponse(store, primaryModelClass, data, id, requestType, true);
  },

  /**
   * Excludes a root object when serializing to JSON.
   * @param hash the payload.
   * @param type the model type.
   * @param snapshot the record.
   * @param options options.
   */
  serializeIntoHash: function(hash, type, snapshot, options) {
    merge(hash, this.serialize(snapshot, options));
  },

  /**
   * Includes identifiers when serializing to JSON.
   * @param record the record to serialize.
   * @param options options.
   * @returns {*}
   */
  serialize: function(snapshot, options) {
    options = options || { includeId: true };
    return this._super(snapshot, options);
  }

});
