
destApp.controller('destCtrl', function($scope, $http, $rootScope) {
    $http.get('js/ctrl/alphabet.json').success(function(data) {
        $rootScope.level;
        $rootScope.globalLevel;
        $scope.words=data[$rootScope.globalLevel].words;
        $scope.word=$scope.words[$rootScope.level];
        $scope.letters=data[$rootScope.globalLevel].letters;
        $scope.word = $scope.word.split('');
        yourWord = "";
        $scope.yourWord = yourWord.split('');
        $scope.count=0;
        $scope.letters = $scope.letters.split('');
        $scope.setItem=function(x){
            $scope.item = x;
        };
        $scope.selectLet=function(){
            alert(x);
        }
        $scope.count;
        $scope.correct = "";
        $scope.countClick = function(letter){
            if($scope.count<$scope.word.length)
            $scope.count=$scope.count+1;
            $scope.correct = "";
            if($scope.count<=$scope.word.length)
                $scope.yourWord=$scope.yourWord+letter;
            if($scope.count==$scope.word.length){
                if($scope.word.join('')==$scope.yourWord){
                    $scope.correct = 1;
                    
                }
                else
                    $scope.correct = 0;
            }
        }

        $scope.nextLevel = function(){
            if($scope.correct==1){
                if($rootScope.level !=$scope.words.length){
                    $rootScope.level+=1;
                    $scope.word=$scope.words[$rootScope.level];

                    $scope.word = $scope.word.split('');
                    $scope.yourWord="";
                    $scope.correct="";
                    $scope.count=0;
                }
                else{
                    $rootScope.globalLevel +=1;
                    $rootScope.level = 0;
                }
            }   

        }

        $scope.delete = function(){
            if($scope.correct != 1){
                $scope.yourWord = $scope.yourWord.substring(0,$scope.yourWord.length-1);
                $scope.count-=1;
                $scope.correct="";
            }
        }
        $scope.clearField = function(){
            if($scope.correct != 1){
                $scope.yourWord = "";
                $scope.correct="";
            }
        }
        $rootScope.levelUp = function(){
            if($rootScope.globalLevel<4){
                $scope.downHide=0;
                $rootScope.globalLevel +=1;
                $rootScope.level = 0;
                $scope.words=data[$rootScope.globalLevel].words;
                $scope.word=$scope.words[$rootScope.level];
                $scope.letters=data[$rootScope.globalLevel].letters;
                $scope.word = $scope.word.split('');
                yourWord = "";
                $scope.yourWord = yourWord.split('');
            }else
                  $scope.upHide=1;
        }

        $rootScope.levelDown = function(){
            if($rootScope.globalLevel>0){
                $scope.upHide=0;
                $rootScope.globalLevel -=1;
                $rootScope.level = 0;
                $scope.count=0;
                $scope.words=data[$rootScope.globalLevel].words;
                $scope.word=$scope.words[$rootScope.level];
                $scope.letters=data[$rootScope.globalLevel].letters;
                $scope.word = $scope.word.split('');
                yourWord = "";
                $scope.yourWord = yourWord.split('');
                $scope.correct="";
            }else
                $scope.downHide=1;
        }

      });
});