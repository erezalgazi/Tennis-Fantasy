var ConfirmTeamView = Backbone.View.extend ({
  el: 'body',
  events:{},
  
  initialize: function () {
    this.listenTo(this.model.get('userCollection'), 'reset', this.renderAll);
  },

  
  renderTeam: function (model) {
    var view = new PlayerView({model: model});
    $('.players-table').append(view.render().el);
  },

  renderAll: function (collection) {
    console.log(collection.at(0).get('teamCollection'));
    collection.at(0).get('teamCollection').each(function(element,index,list) {
      this.renderTeam(element);
    },this);
  }
});