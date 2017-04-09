'use strict';

/**
 * @ngdoc function
 * @name iEmotions20App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iEmotions20App
 */
angular.module('iEmotionsApp')
.controller('soundsController', ['$scope', 'soundsFactory', function ($scope, soundsFactory) {
    $scope.emotions = soundsFactory.getEmotions();

    $scope.emotions.forEach(function(emotion){
        emotion.componente.click(function(){
            emotion.sound.play();                
        });
    });
}]);
