import $ from 'jquery';
import PikadayInput from 'ember-pikaday/components/pikaday-input';
import PikadayMixin from 'ember-pikaday/mixins/pikaday';

export default PikadayInput.extend(PikadayMixin, {

  classNames: ['g-input-field'],
  theme: 'g-theme',
  format: 'MM/DD/YYYY',

  onPikadaySelect: function() {
    let current = this.get('value');
    let selected = this.get('pikaday').getDate();
    if (current) {
      selected.setHours(current.getHours(), current.getMinutes(), current.getSeconds());
    } else {
      selected.setHours(0, 0, 0);
    }
    this.set('value', selected);
  },

  onPikadayRedraw: function() {
    this._super(...arguments);
    let that = this;
    let $pikadayEl = $(this.get('pikaday').el);
    if ($($pikadayEl).find('.g-button').length === 0) {
      let $btn = $('<button class="g-button">Today</button>').click(function() {
        that.get('pikaday').setDate(new Date());
      });
      let $wrapper = $('<div class="today-button"></div>').append($btn);
      $pikadayEl.append($wrapper);
    }
  }
});
