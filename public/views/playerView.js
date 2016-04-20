var PlayerView = Backbone.View.extend ({

  template: Handlebars.compile($('#ranking#ranking').html()),

  events: {
    'click .player-div': 'selectPlayer',
    'click .create-btn': 'createTeam'
  },

  initialize: function () {

  },

  selectPlayer: function (e) {
    // console.log(e);
    if (this.$el.hasClass('off')) {
      return;
    }
    this.$el.toggleClass('chosen');    
    // $(e.currentTarget).toggleClass('chosen');
    var selectedRank = this.model.get('rankGroup');
    // console.log(selectedRank);
    var toDisable = this.$el.siblings('.rank' + selectedRank);
    console.log(toDisable);
    // console.log(toDisable[0]);
    // console.log($('.toDisable[0].className').children());
    toDisable.each(function (index, element) {
      console.log(index, element);
      $(element).toggleClass('off');
    });
    // for (var i=0; i<toDisable.length; i++) {
    //   $(toDisable[i]).toggleClass('off');
    // }
  // }
  },


  render: function () {
    // console.log(this.$el.html())
    this.$el.html(this.template(this.model.toJSON()));
    // console.log(this.$el.html())
    // console.log(JSON.stringify(this.$el.html()));
    return this;
  }

});