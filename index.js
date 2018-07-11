'use strict';

module.exports = {
  name: 'ember-cli-vtkui',

  contentFor: function(type, config) {
    if (type === 'head') {
      return '<style> html, body { height: 100vh; margin: 0; }</style>';
    }
  }
};
