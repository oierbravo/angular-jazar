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
