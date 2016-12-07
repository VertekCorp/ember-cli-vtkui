import Ember from 'ember';
import layout from '../templates/components/my-grid';

export default Ember.Component.extend({
  tagName: 'table',
  attributeBindings: ['border'],
  border: '1',
  layout
});
