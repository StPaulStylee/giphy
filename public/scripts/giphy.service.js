angular.module('giphyApp')
       .service('giphy', GiphyAPIService);

function GiphyAPIService($http) {
  var API = 'http://api.giphy.com/v1/gifs';

  this.getRandom = function () {
    return $http.get(API + '/random?api_key=dc6zaTOxFJmzC')
                .then(function(response){
                    return response.data.data.image_url;
                });
  };

  this.getGif = function(query) {
    return $http.get(API + '/search?q=' + query.replace(' ','+') + '&api_key=dc6zaTOxFJmzC')
                .then(function(response){
                  return response.data.data;
                  console.log('Search query: ', query.replace(' ','+'));
                });
  }
}
