var AppModel = Backbone.Model.extend({
  defaults: {
    playersCollection: new PlayersCollection()
  }
});