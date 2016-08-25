//定义一个作用域;不写[]等于获取作用域;
var myApp = angular.module('myApp',[]);
//定义模块
myApp.controller('myController',function($scope,$http,$interval){
    $scope.btnClass = "jiantou";
    $scope.btn = function(){
      if($('#btn').hasClass('jiantou')){
        $('#content').animate({'width':0});
        $('#product-page').animate({'opacity':1},2000);
        $scope.btnClass = "jiantou-two";
        $('#btn').animate({'left':'170px'})
      }else{
        $('#content').animate({'width':'1000px'});
        $('#product-page').animate({'opacity':0});
        $scope.btnClass = "jiantou";
        $('#btn').animate({'left':'970px'})
      }
    };
    $scope.productTab = function(index){
      $('.product-type').eq(index).addClass('cur-type').siblings().removeClass('cur-type')
    };
    //点击优化  检测;
    $scope.contentTab = function(index){
     $scope.btn();
     $scope.productTab();  
    };
    //渲染
    $http.get('./data.json')
         .then(function(response){
          $scope.getDate = response.data;
          var arr1 = [];
         /* for(var k = 0;k< $scope.getDate.length;k++){

            arr = $scope.getDate[k].products
          }*/
          var arr = $scope.getDate[0].products
          for(var i = 0, len = Math.ceil(arr.length/7);i<len;i++){
            arr1[i] = [];
            for(var j = 0; j<7;j++){
              if(i>=1){
                arr1[i].push(arr[j+7*i]);
              }else {
                arr1[i].push(arr[j]);
              }
            }
          }
          
          for(var i=0;i<arr1.length;i++){
            for(var j=0; j<arr1[i].length;j++){
              if(!arr1[i][j]){
                arr1[i][j]={summary:'敬请期待'}
              }
            }
          }
          $scope.arr =arr1;



         })
         $scope.btnPage = function(index){
            $('#pageNo span').eq(index).addClass('curp').siblings().removeClass('curp')
            $('#scroll').animate({'top':-600*index});
         }
    //分页
    /*$scope.data = [];
    $scope.numberOfPages=function(){
        return Math.ceil($scope.data.length/$scope.pageSize);                
    }
    for (var i=0; i<45; i++) {
        $scope.data.push("Item "+i);
    }*/



    
    //gird;






    //轮播
   /* $scope.i = 0;
    $scope.n = 0;
    var timer = $interval(function(){
      $scope.i++
      if($scope.i>1)$scope.i=0;
      $('#slider ul li').eq($scope.i).animate({'opacity':1,'z-index':$scope.n++})
    },1000) */
    //导航


    
})
/*//设置自定义
myApp.filter('setPage', function($scope) {
    return function(x, num) {
      //  return x.length/num 
       var  page= x.length/num  
       $scope.data = [];
       for(var i=0; i<page;i++){

       }
    }
});*/