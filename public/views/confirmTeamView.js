var ConfirmTeamView = Backbone.View.extend ({

  el: 'body',
  
  events:{
    'click #create-btn': 'goToDashboard',
    'click #back-btn': 'backToCreate'
  },
  
  initialize: function () {
    this.listenTo(this.model.get('userCollection'), 'reset', this.renderAll);
  },

  
  renderTeam: function (model) {
    className = 'rank' + model.get('rankGroup');
    var view = new PlayerView({model: model});
    $('.players-table').find('.' + className + '-row').append(view.render().el);
  },

  renderAll: function (collection) {
    // console.log(collection.at(0).get('teamCollection'));
    collection.at(0).get('teamCollection').each(function(element,index,list) {
      this.renderTeam(element);
    },this);
  },
  goToDashboard: function () {
    window.location = 'dashboard.html';
  },
  backToCreate: function () {
    console.log(this.model.get('userCollection'));
    this.model.get('userCollection').at(0).destroy();
    console.log(this.model.get('userCollection').at(0));
    console.log(JSON.stringify(this.model.get('userCollection')));
    window.location = 'create-team.html';
  }
});