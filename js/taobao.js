var App = angular.module('myCart',[]);
	App.controller('myCart', ['$scope', function($scope){
		$scope.total=0;//定义总价
    $scope.all=false;
    $scope.checkAll = function(){
      angular.forEach($scope.data,function(key){
          key.isChecked = $scope.all;
      })
    }
    $scope.delChecked= function(){
        for(var i=$scope.data.length-1;i>=0;i--){
          if($scope.data[i].isChecked){
            $scope.data.splice(i,1);
          }
        }
        //计算总价
          total();
          console.log($scope.data);
    }
		//模拟数据
		$scope.data=[
  {
    "shop":"纤巧百媚时尚鞋坊",
    "saler":"纤巧百媚",
    "picUrl":"image/taobao_cart_01.jpg",
    "title":"日韩流行风时尚美眉最爱独特米字拼图金属坡跟公主靴子黑色",
    "color":"棕色",
    "size":37,
    "point":5,
    "price":138,
    "num":1,
    "isChecked":false
  },
  {
    "shop":"香港我的美丽日记",
    "saler":"lokemick2009",
    "picUrl":"image/taobao_cart_02.jpg",
    "title":"chanel/香奈尔/香奈尔炫亮魅力唇膏3.5g",
    "point":12,
    "price":265,
    "num":1,
    "isChecked":false
  },
  {
    "shop":"实体经营",
    "saler":"林颜店铺",
    "picUrl":"image/taobao_cart_03.jpg",
    "title":"蝶妆海?蓝清滢粉底液10#（象牙白）",
    "point":3,
    "price":85,
    "num":1,
    "isChecked":false
  },
  {
    "shop":"红豆豆的小屋",
    "saler":"taobao豆豆",
    "picUrl":"image/taobao_cart_04.jpg",
    "title":"相宜促销专供 大S推荐 最好用的LilyBell化妆棉",
    "point":12,
    "price":12,
    "num":1,
    "isChecked":false
  }
];
	
	//添加的函数
	$scope.add =function(index){
		$scope.data[index].num++;	
		//计算总价
		total();
	}

	$scope.reduce = function(index){
		if($scope.data[index].num<=1) return;
		$scope.data[index].num--;
		//计算总价
		total();
	}

	//删除功能
	$scope.del=function(index){
		$scope.data.splice(index,1);
		//计算总价
		total();
	}

	//定义一个函数计算总价
	function total(){
		var total=0;
		angular.forEach($scope.data,function(value,key){
				console.log(key,value);
				total+=value.num*value.price;
		})
		console.log(total);
		$scope.total=total;//把最终的计算结果赋值给$scope.total
	}
		//首次执行计算总价
	total();
	}])

