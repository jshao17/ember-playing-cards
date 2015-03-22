/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-playing-cards',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);
    target.import('vendor/playingcards.css');
  }
};
