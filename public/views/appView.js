var AppView = Backbone.View.extend ({

  el: 'body',

  events:{
    'click #create-btn': 'createTeam'
  },

  initialize: function () {
    this.listenTo(this.model.get('playersCollection'),'add',this.renderPlayer);
  },

  createTeam: function () {
    if (this.model.get('teamCollection').length != 5) {
      $('.team-not-complete').append('Team must consist of 5 players');
    }
    else {
      console.log('here');
      // var teamView = 
      $('.team-not-complete').append("<a href='confirm-team.html'>hjgjh</a>");
    }
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