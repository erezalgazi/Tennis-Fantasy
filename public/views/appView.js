var AppView = Backbone.View.extend ({

  el: 'body',

  events:{},

  initialize: function () {
    this.listenTo(this.model.get('playersCollection'),'add',this.renderPlayer);
  },

  renderPlayer: function (model) {
    // console.log((model.toJSON()));
    var view = new PlayerView({model: model, collection: this.model.get('teamCollection'), className: 'rank' + model.get('rankGroup')});
    // console.log(JSON.stringify(view.$el.html()));
    // console.log(view.render());
    // view.render();
    // console.log(JSON.stringify(view.$el.html()));
    $('.players-table').append(view.render().el); //because we return "this" in the render function inside playerView, we can chain the object it returns to el
  }
});