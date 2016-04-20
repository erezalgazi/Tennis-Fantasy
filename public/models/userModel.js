var UserModel = Backbone.Model.extend ({
  idAttribute: '_id',
  defaults: {
    teamCollection: new TeamCollection()  
  },

  parse: function (res) {
    var teams = this.get('teamCollection') || new TeamCollection();
    teams.set(res.teamCollection);
    res.teamCollection = teams;
    return res; 
  }
});