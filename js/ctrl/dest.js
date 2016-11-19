
destApp.controller('destCtrl', function($scope, $http, $rootScope) {
    $http.get('js/ctrl/alphabet.json').success(function(data) {
        $rootScope.level;
        $rootScope.globalLevel;
        $scope.words=data[$rootScope.globalLevel].words;
        $scope.word=$scope.words[$rootScope.level];
        $scope.letters=data[$rootScope.globalLevel].letters;
        $scope.word = $scope.word.split('');
        $scope.yourWord = "";
        $scope.count=0;
        $scope.letterCount=0;
        $scope.letters = $scope.letters.split('');
        $scope.setItem=function(x){
            function setColor(){
                img[i].style.color = '#fff';
            }

            var img = document.getElementsByClassName('letter_img');
            var obj=document.getElementsByClassName('letter');
            var i = $scope.letters.indexOf(x);

            if(x == $scope.word[$scope.letterCount] && $scope.count == $scope.letterCount){
                img[i].style.color = 'green';
                obj[$scope.letterCount].style.color='green';
                $scope.letterCount += 1;
                setTimeout(setColor,300);

            }
            else if(x != $scope.word[$scope.letterCount] && $scope.count == $scope.letterCount){
                img[i].style.color = 'red';
                setTimeout(setColor,300);
            }
            $scope.item = x;
        };
        $scope.selectLet=function(){
            alert(x);
        }
        $scope.count;
        $scope.correct = "";
        $scope.countClick = function(letter){
            $scope.correct = "";

            if(letter == $scope.word[$scope.yourWord.length]){
                $scope.count = $scope.count+1;
                $scope.yourWord = $scope.yourWord + letter;
            }
            if($scope.count == $scope.word.length){
                if($scope.word.join('') == $scope.yourWord){
                    $scope.correct = 1;
                    $scope.yourWord = "";
                }
                else
                    $scope.correct = 0;
            }
        }

        $scope.nextLevel = function(){
             var obj=document.getElementsByClassName('letter');
            if($scope.correct==1){
                if($rootScope.level != $scope.words.length){
                    $rootScope.level += 1;
                    $scope.word=$scope.words[$rootScope.level];

                    $scope.word = $scope.word.split('');
                    $scope.yourWord = "";
                    $scope.correct = "";
                    $scope.count = 0;
                    $scope.letterCount = 0;
                    for(i=0;i<obj.length;i++)
                        obj[i].style.color='';
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
            if($rootScope.globalLevel<3){
                $scope.downHide=0;
                $rootScope.globalLevel +=1;
                $rootScope.level = 0;
                $scope.words=data[$rootScope.globalLevel].words;
                $scope.word=$scope.words[$rootScope.level];
                $scope.letters=data[$rootScope.globalLevel].letters;
                $scope.word = $scope.word.split('');
                $scope.yourWord = "";
                $scope.yourWord = $scope.yourWord.split('');
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
                $scope.yourWord = "";
                $scope.yourWord = $scope.yourWord.split('');
                $scope.correct="";
            }else
                $scope.downHide=1;
        }

      });
});