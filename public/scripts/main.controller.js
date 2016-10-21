angular.module('giphyApp')
  .controller('MainController', MainController);

function MainController(giphy) {

  var main = this;
  console.log('MainController loaded');

main.getRandom = function(){
giphy.getRandom().then(function(rando) {
         console.log('response from random: ', rando);
         main.random = rando.image_url;
       });
     };

main.getGif = function() {
giphy.getGif(main.search)
       .then(function(results){
         console.log('Results of query: ', results);
         main.results = results;
       });
     };
   }
