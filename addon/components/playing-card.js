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
  suitPositions: function() {
    var suitPositions = [];
    var rank = this.get('rank');
    if (rank === 'two' || rank === 'three') {
      suitPositions.push('top-center');
      suitPositions.push('bottom-center');
    }
    if (rank === 'four' || rank === 'five' ||
        rank === 'six' || rank === 'seven' ||
        rank === 'eight' || rank === 'nine' ||
        rank === 'ten') {
      suitPositions.push('top-left');
      suitPositions.push('top-right');
    }
    if (rank === 'four' || rank === 'five' ||
        rank === 'six' || rank === 'seven' ||
        rank === 'eight' || rank === 'nine' ||
        rank === 'ten') {
      suitPositions.push('bottom-left');
      suitPositions.push('bottom-right');
    }
    if (rank === 'ace' || rank === 'three' ||
        rank === 'five' || rank === 'nine') {
      suitPositions.push('middle-center');
    }
    if (rank === 'seven' || rank === 'eight') {
      suitPositions.push('middle-top');
    }
    if (rank === 'eight') {
      suitPositions.push('middle-bottom');
    }
    if (rank === 'six' || rank === 'seven' ||
        rank === 'eight') {
      suitPositions.push('middle-left');
      suitPositions.push('middle-right');
    }
    if (rank === 'ten') {
      suitPositions.push('middle-top-center');
      suitPositions.push('middle-bottom-center');
    }
    if (rank === 'nine' || rank === 'ten') {
      suitPositions.push('middle-top-left');
      suitPositions.push('middle-top-right');
      suitPositions.push('middle-bottom-left');
      suitPositions.push('middle-bottom-right');
    }
    return suitPositions;
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
