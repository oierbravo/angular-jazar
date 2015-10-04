(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularJazar.config', [])
      .value('angularJazar.config', {
          debug: true
      });

  // Modules
  angular.module('angularJazar.services', []);
  angular.module('angularJazar',
      [
          'angularJazar.config',
          'angularJazar.services',
          'ngResource',
          'ngSanitize'
      ]);

})(angular);

/*angularJazar.services.js*/

angular.module('angularJazar.services').factory('Jazar',['$http',
	function($http){
    var baseUrl = 'http://jazar.org/?json=1';
    var query;
		return {
			//Get all posts - Returns $promise
		    getAll: function(){
		      query = $http.get(baseUrl + '&count=-1');
		      return query;
		    },
		    //Get paginated posts Count of 10 -Arg page_num (1,2,3...- Returns $promise
			getPage: function(page){
			  query = $http.get(baseUrl + '&page=' + page);
			  return query;
			},
			//Get a post - Arg: postId - Returns $promise
	        getPost: function(postId){
	          query = $http.get(baseUrl + '&p=' + postId);
	          return query;
	        }
		};
	}]
);