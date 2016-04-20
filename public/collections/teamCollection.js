var TeamCollection = Backbone.Collection.extend ({
  model: PlayerModel,
  comparator: 'rankGroup'
});