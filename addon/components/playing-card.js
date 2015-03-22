import Ember from 'ember';
import layout from '../templates/components/playing-card';

export default Ember.Component.extend({
  classNameBindings: [':playing-card', 'cardRankClass', 'suit'],
  cardRankClass: function() {
    return 'card-' + this.get('rank');
  }.property('rank'),
  hideRank: function() {
    var rank = this.get('rank');
    return rank === 'big-joker' || rank === 'little-joker' || rank === 'back';
  }.property('rank', 'suit'),
  isFace: function() {
    var rank = this.get('rank');
    return this.get('hideRank') ||
           rank === 'jack' || rank === 'queen' || rank === 'king' || rank === 'back';
  }.property('rank'),
  topCenter: function() {
    var rank = this.get('rank');
    return rank === 'two' || rank === 'three';
  }.property('rank'),
  topLeft: function() {
    var rank = this.get('rank');
    return rank === 'four' || rank === 'five' ||
           rank === 'six' || rank === 'seven' ||
           rank === 'eight' || rank === 'nine' ||
           rank === 'ten';
  }.property('rank'),
  topRight: function() {
    var rank = this.get('rank');
    return rank === 'four' || rank === 'five' ||
           rank === 'six' || rank === 'seven' ||
           rank === 'eight' || rank === 'nine' ||
           rank === 'ten';
  }.property('rank'),
  bottomCenter: function() {
    var rank = this.get('rank');
    return rank === 'two' || rank === 'three';
  }.property('rank'),
  bottomLeft: function() {
    var rank = this.get('rank');
    return rank === 'four' || rank === 'five' ||
           rank === 'six' || rank === 'seven' ||
           rank === 'eight' || rank === 'nine' ||
           rank === 'ten';
  }.property('rank'),
  bottomRight: function() {
    var rank = this.get('rank');
    return rank === 'four' || rank === 'five' ||
           rank === 'six' || rank === 'seven' ||
           rank === 'eight' || rank === 'nine' ||
           rank === 'ten';
  }.property('rank'),
  middleCenter: function() {
    var rank = this.get('rank');
    return rank === 'ace' || rank === 'three' ||
           rank === 'five' || rank === 'nine';
  }.property('rank'),
  middleTop: function() {
    var rank = this.get('rank');
    return rank === 'seven' || rank === 'eight';
  }.property('rank'),
  middleBottom: function() {
    var rank = this.get('rank');
    return rank === 'eight';
  }.property('rank'),
  middleLeft: function() {
    var rank = this.get('rank');
    return rank === 'six' || rank === 'seven' ||
           rank === 'eight';
  }.property('rank'),
  middleRight: function() {
    var rank = this.get('rank');
    return rank === 'six' || rank === 'seven' ||
           rank === 'eight';
  }.property('rank'),
  middleTopCenter: function() {
    var rank = this.get('rank');
    return rank === 'ten';
  }.property('rank'),
  middleTopLeft: function() {
    var rank = this.get('rank');
    return rank === 'nine' || rank === 'ten';
  }.property('rank'),
  middleTopRight: function() {
    var rank = this.get('rank');
    return rank === 'nine' || rank === 'ten';
  }.property('rank'),
  middleBottomCenter: function() {
    var rank = this.get('rank');
    return rank === 'ten';
  }.property('rank'),
  middleBottomLeft: function() {
    var rank = this.get('rank');
    return rank === 'nine' || rank === 'ten';
  }.property('rank'),
  middleBottomRight: function() {
    var rank = this.get('rank');
    return rank === 'nine' || rank === 'ten';
  }.property('rank'),
  number: function() {
    switch(this.get('rank')) {
      case 'ace':
        return 'A';
      case 'two':
        return '2';
      case 'three':
        return '3';
      case 'four':
        return '4';
      case 'five':
        return '5';
      case 'six':
        return '6';
      case 'seven':
        return '7';
      case 'eight':
        return '8';
      case 'nine':
        return '9';
      case 'ten':
        return '10';
      case 'jack':
        return 'J';
      case 'queen':
        return 'Q';
      case 'king':
        return 'K';
      default:
        return 'J';
    }
  }.property('rank'),
  symbol: function() {
    var text;
    switch(this.get('suit')) {
      case 'club':
        text = '&#9827;';
        break;
      case 'diamond':
        text = '&diams;';
        break;
      case 'heart':
        text = '&hearts;';
        break;
      case 'spade':
        text = '&spades;';
        break;
      default:
        text = '&spades';
    }
    return Ember.String.htmlSafe(text);
  }.property('suit'),
  layout: layout
});
