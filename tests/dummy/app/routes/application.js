import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return {
      suits: [ 'heart', 'diamond', 'spade', 'club' ],
      ranks: [ 'ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king' ]
    };
  }
});
