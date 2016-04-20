var AppView = Backbone.View.extend ({

  el: 'body',

  events:{
    'click #create-btn': 'createTeam'
  },

  initialize: function () {
    this.listenTo(this.model.get('playersCollection'), 'add', this.renderPlayer);
    this.listenTo(this.model.get('playersCollection'), 'reset', this.renderAll);
  },

  createTeam: function () {
    if (this.model.get('teamCollection').length != 5) {
      $('.team-not-complete').append('Team must consist of 5 players');
    }
    else {
      var userModel = new UserModel();
      userModel.set('teamCollection',this.model.get('teamCollection'));
      var userCollection = new UserCollection();
      userCollection.create(userModel);
      console.log(JSON.stringify(userCollection));

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
  },
  
  renderAll: function () {
    console.log(this.model.get('playersCollection'));
    this.model.get('playersCollection').each(function (element, index, list) {
      this.renderPlayer(element)
    }, this);
  }

});
