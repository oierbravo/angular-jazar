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

angular.module('angularJazar.services').factory('JazarPosts',['$resource',
	function($resource){
    var baseUrl = 'http://jazar.org/wp-json/wp/v2';
    var query;
    return $resource('http://jazar.org/wp-json/wp/v2/posts/:id', {id:'@id',type:'post'});
		
	}]
);
angular.module('angularJazar.services').factory('JazarEvents',['$resource',
	function($resource){
    var baseUrl = 'http://jazar.org/wp-json/wp/v2';
    var query;
    return $resource('http://jazar.org/wp-json/wp/v2/posts/:id', {id:'@id'});
		
	}]
);
/* REST v2 API   /wp-json/wp/v2   http://v2.wp-api.org/
/posts


*/


/* JSON API  https://es.wordpress.org/plugins/json-api/other_notes/
get_recent_posts/?post_type=ai1ec_event
 info
 get_recent_posts
 get_posts
 get_post
 get_page
 get_date_posts
 get_category_posts
 get_tag_posts
 get_author_posts
 get_search_results
 get_date_index
 get_category_index
 get_tag_index
 get_author_index
 get_page_index
 get_nonce 

*/
/*angular.module('angularJazar.services').factory('Jazar',['$http',
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
);*/