var AppView = Backbone.View.extend ({

  el: 'body',

  events:{
    'click #create-btn': 'createTeam',
    'click .row-title': 'toggleLists'
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

      window.location = 'confirm-team.html';
    }
  },


  renderPlayer: function (model) {
    // console.log((model.toJSON()));
    var className = 'rank' + model.get('rankGroup');
    var view = new PlayerView({model: model, collection: this.model.get('teamCollection'), className: className});
    // console.log(JSON.stringify(view.$el.html()));
    // console.log(view.render());
    // view.render();
    // console.log(JSON.stringify(view.$el.html()));
    $('.players-table').find('.' + className + '-row').append(view.render().el); //because we return "this" in the render function inside playerView, we can chain the object it returns to el
  },
  
  renderAll: function () {
    console.log(this.model.get('playersCollection'));
    this.model.get('playersCollection').each(function (element, index, list) {
      this.renderPlayer(element)
    }, this);
  },

  toggleLists: function(e){
    console.log($(e.target).parent().siblings());
    if($(e.target).siblings('.row').hasClass('show')){
      $(e.target).siblings('.row').removeClass('show');
    }else{
      $(e.target).siblings('.row').addClass('show');
    }
  }

});
