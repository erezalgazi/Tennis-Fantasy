var confirmTeamModel = new ConfirmTeamModel();
var confirmTeamView = new ConfirmTeamView({model: confirmTeamModel}); 

confirmTeamModel.get('userCollection').fetch({reset: true});