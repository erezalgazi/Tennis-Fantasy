var PlayersCollection = Backbone.Collection.extend({
  model: PlayerModel,
  url: '/players'
});