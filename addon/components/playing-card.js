import Ember from 'ember';
import random from '../utils/random-element';
import layout from '../templates/components/playing-card';

export default Ember.Component.extend({
  classNameBindings: [':playing-card', 'cardRankClass', 'resolvedSuit'],
  specials: ['little-joker', 'big-joker', 'back'],
  ace: ['ace'],
  numbers: ['two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
  faces: ['jack', 'queen', 'king'],
  suits: ['club', 'diamond', 'heart', 'spade'],
  resolvedRank: function() {
    var rank = this.get('rank');
    if (rank == null) {
      var candidates = this.specials.concat(this.ace, this.numbers, this.faces);
      return random(candidates);
    }
    else if (rank === 'number') {
      return random(this.numbers);
    } else if (rank === 'face') {
      return random(this.faces);
    } else {
      return rank;
    }
  }.property('rank'),
  resolvedSuit: function() {
    var suit = this.get('suit');
    if (suit == null) {
      return random(this.suits);
    } else {
      return suit;
    }
  }.property('suit'),
  cardRankClass: function() {
    return 'card-' + this.get('resolvedRank');
  }.property('resolvedRank'),
  hideRank: function() {
    var rank = this.get('resolvedRank');
    return this.specials.indexOf(rank) >= 0;
  }.property('resolvedRank', 'suit'),
  isFace: function() {
    var rank = this.get('resolvedRank');
    return this.get('hideRank') ||
           this.faces.indexOf(rank) >= 0;
  }.property('resolvedRank'),
  suitPositions: function() {
    var suitPositions = [];

    if (this.get('isFace')) {
      return suitPositions;
    }

    var rank = this.get('resolvedRank');
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

    return suitPositions.length > 0 ? suitPositions : ['middle-center'];
  }.property('resolvedRank'),
  number: function() {
    switch(this.get('resolvedRank')) {
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
      case 'little-joker':
      case 'big-joker':
        return 'J';
      default:
        return 'A'; // Default card if invalid input is Ace of Spades
    }
  }.property('resolvedRank'),
  symbol: function() {
    var text;
    switch(this.get('resolvedSuit')) {
      case 'club':
        text = '&clubs;';
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
        text = '&spades;';
    }
    return Ember.String.htmlSafe(text);
  }.property('resolvedSuit'),
  layout: layout
});
