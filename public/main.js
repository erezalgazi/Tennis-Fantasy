var playersData = 
[
  {name: 'Novak Djokovic', currentRank: 1, rankGroup: 1},
  {name: 'Andy Murray', currentRank: 2, rankGroup:1},
  {name: 'Roger Federer', currentRank: 3, rankGroup:1},
  {name: 'Stan Wawrinka', currentRank: 4, rankGroup:1},
  {name: 'Rafael Nadal', currentRank: 5, rankGroup:1},
  {name: 'Kei Nishikori', currentRank: 6, rankGroup:1},
  {name: 'Jo Wilfried Tsonga', currentRank: 7, rankGroup:1},
  {name: 'Tomas Berdych', currentRank: 8, rankGroup:1},
  {name: 'David Ferrer', currentRank: 9, rankGroup:1},
  {name: 'Richard Gasquet', currentRank: 10, rankGroup:1},
  {name: 'Milos Raonic', currentRank: 11, rankGroup:2},
  {name: 'Marin Cilic', currentRank: 12, rankGroup:2},
  {name: 'David Goffin', currentRank: 13, rankGroup:2},
  {name: 'Gael Monfils', currentRank: 14, rankGroup:2},
  {name: 'Dominic Thiem', currentRank: 15, rankGroup:2},
  {name: 'John Isner', currentRank: 16, rankGroup:2},
  {name: 'Roberto Bautista Agut', currentRank: 17, rankGroup:2},
  {name: 'Gilles Simon', currentRank: 18, rankGroup:2},
  {name: 'Kevin Anderson', currentRank: 19, rankGroup:2},
  {name: 'Nick Kyrgios', currentRank: 20, rankGroup:2},
  {name: 'Bernard Tomic', currentRank: 21, rankGroup:3},
  {name: 'Benoit Paire', currentRank: 22, rankGroup:3},
  {name: 'Feliciano Lopez', currentRank: 23, rankGroup:3},
  {name: 'Viktor Troicki', currentRank: 24, rankGroup:3},
  {name: 'Pablo Cuevas', currentRank: 25, rankGroup:3},
  {name: 'Jack Sock', currentRank: 26, rankGroup:3},
  {name: 'Grigor Dimitrov', currentRank: 27, rankGroup:3},
  {name: 'Philipp Kohlschreiber', currentRank: 28, rankGroup:3},
  {name: 'Alexandr Dolgopolov', currentRank: 29, rankGroup:3},
  {name: 'Ivo Karlovic', currentRank: 30, rankGroup:3},
  {name: 'Steve Johnson', currentRank: 31, rankGroup:3},
  {name: 'Jeremy Chardy', currentRank: 32, rankGroup:4},
  {name: 'Fabio Fognini', currentRank: 33, rankGroup:4},
  {name: 'Joao Sousa', currentRank: 34, rankGroup:4},
  {name: 'Thomaz Bellucci', currentRank: 35, rankGroup:4},
  {name: 'Sam Querrey', currentRank: 36, rankGroup:4},
  {name: 'Federico Delbonis', currentRank: 37, rankGroup:4},
  {name: 'Marcos Baghdatis', currentRank: 38, rankGroup:4},
  {name: 'Borna Coric', currentRank: 39, rankGroup:4},
  {name: 'Andreas Seppi', currentRank: 40, rankGroup:4},
  {name: 'Gilles Muller', currentRank: 41, rankGroup:5},
  {name: 'Martin Klizan', currentRank: 42, rankGroup:5},
  {name: 'Vasek Pospisil', currentRank: 43, rankGroup:5},
  {name: 'Leonardo Mayer', currentRank: 44, rankGroup:5},
  {name: 'Guido Pella', currentRank: 45, rankGroup:5},
  {name: 'Nicolas Mahut', currentRank: 46, rankGroup:5},
  {name: 'Andrey Kuznetsov', currentRank: 47, rankGroup:5},
  {name: 'Pablo Carreno Busta', currentRank: 48, rankGroup:5},
  {name: 'Guillermo Garcia Lopez', currentRank: 49, rankGroup:5},
  {name: 'Alexander Zverev', currentRank: 50, rankGroup:5}
];

  var showTable = function () {

      var source = $('#ranking').html();

      var template = Handlebars.compile(source);

      var newHTML = template({playersData});

      $('.players-table').append(newHTML);
  };

  showTable();

  
var appModel = new AppModel();
var appView = new AppView({model: appModel});
