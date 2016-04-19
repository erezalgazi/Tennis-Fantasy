var playersData = 
[
  {name: 'Novak Djokovic', currenRank: 1, rankGroup: 1},
  {name: 'Andy Murray', currenRank: 2, rankGroup:1},
  {name: 'Roger Federer', currenRank: 3, rankGroup:1},
  {name: 'Stan Wawrinka', currenRank: 4, rankGroup:1},
  {name: 'Rafael Nadal', currenRank: 5, rankGroup:1},
  {name: 'Kei Nishikori', currenRank: 6, rankGroup:1},
  {name: 'Jo Wilfried Tsonga', currenRank: 7, rankGroup:1},
  {name: 'Tomas Berdych', currenRank: 8, rankGroup:1},
  {name: 'David Ferrer', currenRank: 9, rankGroup:1},
  {name: 'Richard Gasquet', currenRank: 10, rankGroup:1},
  {name: 'Milos Raonic', currenRank: 11, rankGroup:2},
  {name: 'Marin Cilic', currenRank: 12, rankGroup:2},
  {name: 'David Goffin', currenRank: 13, rankGroup:2},
  {name: 'Gael Monfils', currenRank: 14, rankGroup:2},
  {name: 'Dominic Thiem', currenRank: 15, rankGroup:2},
  {name: 'John Isner', currenRank: 16, rankGroup:2},
  {name: 'Roberto Bautista Agut', currenRank: 17, rankGroup:2},
  {name: 'Gilles Simon', currenRank: 18, rankGroup:2},
  {name: 'Kevin Anderson', currenRank: 19, rankGroup:2},
  {name: 'Nick Kyrgios', currenRank: 20, rankGroup:2},
  {name: 'Bernard Tomic', currenRank: 21, rankGroup:3},
  {name: 'Benoit Paire', currenRank: 22, rankGroup:3},
  {name: 'Feliciano Lopez', currenRank: 23, rankGroup:3},
  {name: 'Viktor Troicki', currenRank: 24, rankGroup:3},
  {name: 'Pablo Cuevas', currenRank: 25, rankGroup:3},
  {name: 'Jack Sock', currenRank: 26, rankGroup:3},
  {name: 'Grigor Dimitrov', currenRank: 27, rankGroup:3},
  {name: 'Philipp Kohlschreiber', currenRank: 28, rankGroup:3},
  {name: 'Alexandr Dolgopolov', currenRank: 29, rankGroup:3},
  {name: 'Ivo Karlovic', currenRank: 30, rankGroup:3},
  {name: 'Steve Johnson', currenRank: 31, rankGroup:3},
  {name: 'Jeremy Chardy', currenRank: 32, rankGroup:4},
  {name: 'Fabio Fognini', currenRank: 33, rankGroup:4},
  {name: 'Joao Sousa', currenRank: 34, rankGroup:4},
  {name: 'Thomaz Bellucci', currenRank: 35, rankGroup:4},
  {name: 'Sam Querrey', currenRank: 36, rankGroup:4},
  {name: 'Federico Delbonis', currenRank: 37, rankGroup:4},
  {name: 'Marcos Baghdatis', currenRank: 38, rankGroup:4},
  {name: 'Borna Coric', currenRank: 39, rankGroup:4},
  {name: 'Andreas Seppi', currenRank: 40, rankGroup:4},
  {name: 'Gilles Muller', currenRank: 41, rankGroup:5},
  {name: 'Martin Klizan', currenRank: 42, rankGroup:5},
  {name: 'Vasek Pospisil', currenRank: 43, rankGroup:5},
  {name: 'Leonardo Mayer', currenRank: 44, rankGroup:5},
  {name: 'Guido Pella', currenRank: 45, rankGroup:5},
  {name: 'Nicolas Mahut', currenRank: 46, rankGroup:5},
  {name: 'Andrey Kuznetsov', currenRank: 47, rankGroup:5},
  {name: 'Pablo Carreno Busta', currenRank: 48, rankGroup:5},
  {name: 'Guillermo Garcia Lopez', currenRank: 49, rankGroup:5},
  {name: 'Alexander Zverev', currenRank: 50, rankGroup:5}
];

  var showTable = function () {

      var source = $('#ranking').html();

      var template = Handlebars.compile(source);

      var newHTML = template({playersData});

      $('.players-table').append(newHTML);
  };

  showTable();
