angular.module('demo', ['angular-svg-round-progress']).controller('demoCtrl', ['$scope', '$interval', 'roundProgressService', function($scope, $interval, roundProgressService){
            $scope.current =        27;
            $scope.max =            100;
            $scope.offset =         0;
            $scope.timerCurrent =   0;
            $scope.uploadCurrent =  0;
            $scope.stroke =         15;
            $scope.radius =         100;
            $scope.isSemi =         false;
            $scope.rounded =        false;
            $scope.responsive =     false;
            $scope.clockwise =      true;
            $scope.currentColor =   '#45ccce';
            $scope.bgColor =        '#eaeaea';
            $scope.duration =       800;
            $scope.currentAnimation = 'easeOutCubic';
            $scope.increment = function(amount){
                $scope.current+=(amount || 1);
            };
            $scope.decrement = function(amount){
                $scope.current-=(amount || 1);
            };
            $scope.animations = [];
            angular.forEach(roundProgressService.animations, function(value, key){
                $scope.animations.push(key);
            });
            $scope.getStyle = function(){
                var transform = ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
                return {
                    'top': $scope.isSemi ? 'auto' : '50%',
                    'bottom': $scope.isSemi ? '5%' : 'auto',
                    'left': '50%',
                    'transform': transform,
                    '-moz-transform': transform,
                    '-webkit-transform': transform,
                    'font-size': $scope.radius/3.5 + 'px'
                };
            };
            $scope.getColor = function(){
                return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
            };
            var getPadded = function(val){
                return val < 10 ? ('0' + val) : val;
            };
            $interval(function(){
                var date = new Date();
                var hours = date.getHours();
                var minutes = date.getMinutes();
                var seconds = date.getSeconds();
                $scope.hours = hours;
                $scope.minutes = minutes;
                $scope.seconds = seconds;
                $scope.time = getPadded(hours) + ':' + getPadded(minutes) + ':' + getPadded(seconds);
            }, 1000);
        }]);