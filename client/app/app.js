/**
 * @author Author name <example@email.com>
 */

import 'normalize.css';
import 'angular-material/angular-material.min.css';

import {appDirective} from './app.directive';

// Angular dependencies
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMaterial from 'angular-material';

// Views
import {home} from './components/home/home';

// Shared factories and constants
import {shared} from './shared/shared';

angular.module('app', [

  // Angular dependencies
  uiRouter,
  ngAnimate,
  ngSanitize,
  ngMaterial,
  
  // shared dependencies
  shared.name,

  // Demo views
  home.name

])
.directive('app', appDirective)
.run(function($state){
  $state.go('home');
})
.config(function($mdThemingProvider){
  // Configire theme colors
  $mdThemingProvider.theme('default') 
  .primaryPalette('red');
});
