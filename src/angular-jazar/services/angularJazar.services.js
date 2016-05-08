/*angularJazar.services.js*/

var baseUrl = 'http://jazar.org/wp-json/wp/v2/';

angular.module('angularJazar.services').factory('JazarPosts',['$resource',
	function($resource){
	    return $resource(baseUrl + 'posts/:id', {id:'@id',per_page:100});
		
	}]
);
angular.module('angularJazar.services').factory('JazarEspaciosComunes',['$resource',
	function($resource){
	    return $resource(baseUrl + 'espacios-comunes/:id', {id:'@id',per_page:30});
		
	}]
);
angular.module('angularJazar.services').factory('JazarMedia',['$resource',
	function($resource){
    return $resource(baseUrl + 'media/:id', {id:'@id'});
		
	}]
);