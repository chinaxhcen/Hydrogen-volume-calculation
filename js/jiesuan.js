function dongyuan(){
	//----------------------------------------
     //东元公式计算
	//alert("容积不能为空");
	var rongji=$("#rongji").val();
	var t01=$("#t01").val();
	var t02=$("#t02").val();
	var p01=$("#p01").val();
	var p02=$("#p02").val();

	if(rongji.length==0){
		alert("容积不能为空");
		return false;
	}else if(t01.length==0||t02.length==0){
		alert("温度不能为空");
		return false;	 
	}else if(p01.length==0||p02.length==0){
		alert("压力不能为空");
		return false;	 
	}else{

		var fd = new FormData();
			fd.append('rongji', rongji);
			fd.append('t01', t01); 
			fd.append('t02', t02); 
			fd.append('p01', p01); 
			fd.append('p02', p02); 
			fd.append('action', 'dongyuan'); 
		//***********************************************
		$.ajax({
			  url:'ajax/Volume.php',
			  type:'POST',
			  data:fd,
			  processData:false, 
			  contentType:false,   
			  beforeSend: function() {},
			  complete: function () {},
			  success:function(obj){
				 //返回数据解析为
				 var res=jQuery.parseJSON(obj); 
				  if(res.msg){
					 $("#czl").val(res.data);
					 $("#msgxx").html('【东元公式】计算');  
				  }else{
					 $("#czl").val('');
					 $("#msgxx").html('计算错误');   
				  }
                $("#listx").html('');
			  },

		 });
	  //***********************************************
		return false;


	}			 
}
//东元公式计算
//-------------------------------------------------------



//----------------------------------------
//济宁宝钢公式计算
function  baogang(){
	//alert("容积不能为空");
	var rongji=$("#rongji").val();
	var t01=$("#t01").val();
	var t02=$("#t02").val();
	var p01=$("#p01").val();
	var p02=$("#p02").val();

	if(rongji.length==0){
		alert("容积不能为空");
		return false;
	}else if(t01.length==0||t02.length==0){
		alert("温度不能为空");
		return false;	 
	}else if(p01.length==0||p02.length==0){
		alert("压力不能为空");
		return false;	 
	}else{

		var fd = new FormData();
			fd.append('rongji', rongji);
			fd.append('t01', t01); 
			fd.append('t02', t02); 
			fd.append('p01', p01); 
			fd.append('p02', p02); 
			fd.append('action', 'baogang'); 
		//***********************************************
		$.ajax({
			  url:'ajax/Volume.php',
			  type:'POST',
			  data:fd,
			  processData:false, 
			  contentType:false,   
			  beforeSend: function() {},
			  complete: function () {},
			  success:function(obj){
				 //返回数据解析为
				 var res=jQuery.parseJSON(obj); 
				  if(res.msg){
					 $("#czl").val(res.data);
					 $("#msgxx").html('【济宁宝钢公式】计算');  
				  }else{
					 $("#czl").val('');
					 $("#msgxx").html('计算错误');   
				  }
                $("#listx").html('');
			  },

		 });
	  //***********************************************
		return false;


	}			 
}
//济宁宝钢公式计算
//-------------------------------------------------------


//=============================================
//压力差长管拖车公式计算
function  yaChaChangGuan(){
	//alert("容积不能为空");
	var rongji=$("#rongji").val();
	var t01=$("#t01").val();
	var t02=$("#t02").val();
	var p01=$("#p01").val();
	var p02=$("#p02").val();

	if(rongji.length==0){
		alert("容积不能为空");
		return false;
	}else if(t01.length==0||t02.length==0){
		alert("温度不能为空");
		return false;	 
	}else if(p01.length==0||p02.length==0){
		alert("压力不能为空");
		return false;	 
	}else{

		var fd = new FormData();
			fd.append('rongji', rongji);
			fd.append('t01', t01); 
			fd.append('t02', t02); 
			fd.append('p01', p01); 
			fd.append('p02', p02); 
			fd.append('action', 'Yalicha'); 
		//***********************************************
		$.ajax({
			  url:'ajax/Volume.php',
			  type:'POST',
			  data:fd,
			  processData:false, 
			  contentType:false,   
			  beforeSend: function() {},
			  complete: function () {},
			  success:function(obj){
				 //返回数据解析为
				 var res=jQuery.parseJSON(obj); 
				  if(res.msg){
					 $("#czl").val(res.data);
					 $("#msgxx").html('【压力差长管公式】计算');  
				  }else{
					 $("#czl").val('');
					 $("#msgxx").html('计算错误');   
				  }
                  $("#listx").html('');
			  },

		 });
	  //=============================================
		return false;


	}			 
}
//压力差长管拖车公式计算
//-------------------------------------------------------


//安瑞克计算方法
function  anruike(){
	//alert("容积不能为空");
	var arkcs=0.06894757;  //安瑞科常数
	var rongji=$("#rongji").val();
	var t01=$("#t01").val();
	var t02=$("#t02").val();
	var p01=$("#p01").val();
	var p02=$("#p02").val();

	if(rongji.length==0){
		alert("容积不能为空");
		return false;
	}else if(t01.length==0||t02.length==0){
		alert("温度不能为空");
		return false;	 
	}else if(p01.length==0||p02.length==0){
		alert("压力不能为空");
		return false;	 
	}else{

		   //根据压力判断参数
						  //查询结果

		   //根据json数据得到结果
		   $.getJSON("ajax/anruike.json", "", function(data) {　 //each循环 使用$.each方法遍历返回的数据
			   //alert(data)

			   var str ='';

			   var ks01=p01*10/arkcs;   //参数1  压力按Ba计算啊
			   var ks02=(p01*10/arkcs)+25;   //参数1  压力按Ba计算啊
			   var ksjg01=0;                //查询结果
			   var ksjg02=0;

			   var kszs01=0;       //起始总数01  为平均值准备
			   var ispj01=0;       //是否计算平均值  0计算 1不计算
			   var kszs02=0;       //起始总数02  为平均值准备
			   var ispj02=0;       //是否计算平均值  0计算 1不计算

			   var cha=25;         //容差率
			   var chax=25;        //容差率
			   var m=0;
			   var n=0;

			   //计算初始的参数   取平均值
			   $.each(data, function(i, item) {
				   var bcha=Math.abs(item.p-ks01);
				   var bchax=Math.abs(item.p-ks02);
				   //逐渐减少的过程
				   if(bcha<cha && ispj01==0){

						  ksjg01= item.cs;   //直接获得结果
						  ispj01=1;       //不再计算平均值


				   }
				   //逐渐减少的过程
				   if(bchax<chax&&ispj02==0){
					  // chax=bchax;
					   ksjg02= item.cs;   //直接获得结果
					   ispj02=1;       //不再计算平均值

				   }
			   })
			   //计算初始的参数



			   var ksrj=arkfenshi(ksjg01,ksjg02,p01,t01,rongji);    //起初容积量--重要参数

			   //----------------------------------------------------------------
			   //计算结束参数
			   var js01=p02*10/arkcs;   //参数1  压力按Ba计算啊
			   var js02=(p02*10/arkcs)+25;   //参数1  压力按Ba计算啊

			   var jsjg01=0;                //查询结果
			   var jsjg02=0; 
			   var ispj01=0;       //是否计算平均值  0计算 1不计算
			   var ispj02=0;       //是否计算平均值  0计算 1不计算
				   cha=25;         //容差率
				   chax=25;        //容差率
				//计算结束的参数 
			   $.each(data, function(i, item) {
				   var bcha=Math.abs(item.p-js01);
				   var bchax=Math.abs(item.p-js02);
				   //逐渐减少的过程
				   if(bcha<cha && ispj01==0){
					   //cha=bcha;
					   jsjg01= item.cs;
					   ispj01=1;       //不再计算
				   }
				   //逐渐减少的过程
				   if(bchax<chax && ispj02==0){
					  //chax=bchax;  
					   jsjg02= item.cs;
					   ispj02=1;       //不再计算
				   }
			   })
			   //计算结束的参数

			   var jsrj=arkfenshi(jsjg01,jsjg02,p02,t02,rongji);    //结束量
			  //--------------------------------------------------------------------------
				   //jsrj=jsrj.toFixed(2);
				   //ksrj=ksrj.toFixed(2);
			   var sjzl=jsrj-ksrj;         //实际的装量
				   sjzl=sjzl.toFixed(2);  //两位小数

				$("#czl").val(sjzl);

				str += '<br/><div>起始量:' + ksrj.toFixed(2) + ' 结束量：' + jsrj.toFixed(2) + '</div>';

			   $("#msgxx").html('【安瑞科公式】计算');  
			   $("#listx").html(str); 



		   });
	  //=============================================
		return false;


	}			 
}
//安瑞克计算方法

//安瑞克辅助公式  常数1 常数2  压力 温度 容积
function arkfenshi(cs01,cs02,p,t,r){
	var arkcs=0.06894757;  //安瑞科常数

	var step01=cs01;
	var step02=cs02;
	var step03=p*10/arkcs;   // 压力按Ba计算啊
	var step04=Math.floor(step03/25)*25;  //向下取整
	var step05=(step02-step01)*((step03-step04)/25);
	var step06=530/((t*9/5+32)+460);

	var reslut=(step01+step05)*r*step06;


	//return step03+'=='+step04+'=='+step05+'=='+step06+'=='+reslut;
	return reslut;


}
//安瑞克辅助公式

	
//淄博鱼雷计算方法
function  yulei(){

	
	var rongji=$("#rongji").val();
	var t01=$("#t01").val();
	var t02=$("#t02").val();
	var p01=$("#p01").val();
	var p02=$("#p02").val();

	if(rongji.length==0){
		alert("容积不能为空");
		return false;
	}else if(t01.length==0||t02.length==0){
		alert("温度不能为空");
		return false;	 
	}else if(t01>50||t02>50){
		alert("温度不能超过50 摄氏度");
		return false;	 
	}else if(p01.length==0||p02.length==0){
		alert("压力不能为空");
		return false;	 
	}else if(p01<=0||p01>23||p02<0||p02>23){
		alert("压力参数错误");
		return false;	 
	}else{

		   //根据压力判断参数
		  var str ='';

		   var ksp=p01*10;   //参数1  初始压力按Ba计算 圆整四舍五入
		   var kst=t01;      //参数1  初始温度  圆整四舍五入
		   var ksjg=0;                   //初始查询结果
		   var ksisjs=0;                //初始计算参数  0计算 1不计算

		   var jsp=p02*10;   //参数1  结束压力按Ba计算 圆整四舍五入
		   var jst=t02;      //参数1  结束温度  圆整四舍五入
		   var jsjg=0;                   //结束查询结果
		   var jsisjs=0;                //结束参数  0计算 1不计算
		   var wd=0;

		   //根据json数据得到结果
		   $.getJSON("ajax/yulei.json", "", function(data) {　 //each循环 使用$.each方法遍历返回的数据
			   //alert(data)

			   

			   //循环JSON参数
			   $.each(data, function(i, item) {
				   
				   wd=item.T;     //温度
				   
				   if(wd==kst && ksisjs==0){
						  ksjg = item[ksp];   //直接获得结果   根据压力得到查询结果
						  ksisjs=1;          //不再计算平均值
				   }
				   //查询结束结果参数
				   if(wd==jst && jsisjs==0){
					      jsjg= item[jsp];   //直接获得结果   根据压力得到查询结果
						  jsisjs=1;          //不再计算平均值
				   }
				   
				   if(ksisjs==1 && jsisjs==1){
					  return false;   //如果得到全部结果，则退出循环
					}
			   })
			   //循环JSON参数
			   
			   
			   var  ksrj=yuleiFenshi(ksjg,p01,t01,rongji);    //起始容积
               var  jsrj=yuleiFenshi(jsjg,p02,t02,rongji);    //结束容积

               var sjrj=jsrj-ksrj;
			       sjrj=sjrj.toFixed(2);    //保留两位小数
				  $("#czl").val(sjrj);

				str += '<br/><div>初始容积:' + ksrj + ' 结束容积：' + jsrj + '</div>'; 

			   $("#msgxx").html('【淄博鱼雷公式】计算');  
			   $("#listx").html(str); 



		   });
	  //=============================================
		return false;


	}			 
}
//淄博鱼雷计算方法
	
//淄博鱼雷公式  常数1  压力 温度 容积
function yuleiFenshi(csx,p,t,r){
	
	var step01=p*10;   // 压力按Ba计算啊;
	var step02=step01+1;
	var step03=step02*r*273.15;  
	var step04=273.15+Number(t);  

	var reslut=step03/step04/csx;
        reslut=reslut.toFixed(2);
	return reslut;

}
//淄博鱼雷公式	

	
//盐化计算方法
function  yanhua(){

	
	var rongji=$("#rongji").val();
	var t01=$("#t01").val();
	var t02=$("#t02").val();
	var p01=$("#p01").val();
	var p02=$("#p02").val();

	if(rongji.length==0){
		alert("容积不能为空");
		return false;
	}else if(t01.length==0||t02.length==0){
		alert("温度不能为空");
		return false;	 
	}else if(t01>50||t02>50){
		alert("温度不能超过50 摄氏度");
		return false;	 
	}else if(p01.length==0||p02.length==0){
		alert("压力不能为空");
		return false;	 
	}else if(p01<=0||p01>23||p02<0||p02>23){
		alert("压力参数错误");
		return false;	 
	}else{

		   //根据压力判断参数
		  var str ='';

		
			   
			   var  ksrj=yanhuaFenshi(p01,t01,rongji);    //起始容积
               var  jsrj=yanhuaFenshi(p02,t02,rongji);    //结束容积

               var sjrj=jsrj-ksrj;
			       sjrj=sjrj.toFixed(2);    //保留两位小数
				   $("#czl").val(sjrj);

				str += '<br/><div>初始容积:' + ksrj + ' 结束容积：' + jsrj + '</div>'; 

			   $("#msgxx").html('【盐化法公式】计算');  
			   $("#listx").html(str); 



		 
	  //=============================================
		return false;


	}			 
}
//盐化计算方法
	
//盐化公式  常数1  压力 温度 容积
function yanhuaFenshi(p,t,r){
	var mrcs01=0.023659;  //摩尔常数
	var mrcs02=0.99752;  //摩尔常数
	var mrcs03=14.2233;  //摩尔常数
	var mrcs04=0.0000031;  //摩尔常数
	var mrcs05=100;         //摩尔常数 默认氢气100%
	
	var wdj=Number(t)+273.16;   //绝对温度值
	var step01=p*10;        // 压力按Ba计算啊;
	var step02=r*1000;      //容积换算成升  传递过来的立方米
	
	
	var step03=mrcs01*(mrcs02+step01*mrcs03*mrcs04)*mrcs05/100;     //氢气摩尔体积  
	
	var step04=0.084785*wdj/(step01+1.0333);  //第一次类算
	var step05=yanhuaLeisuan(step04,p,t);     //第二次 类算
	var step06=yanhuaLeisuan(step05,p,t);     //第三次 类算
	var step07=yanhuaLeisuan(step06,p,t);     //第四次 类算
	var step08=yanhuaLeisuan(step07,p,t);     //第五次 类算
	var step09=yanhuaLeisuan(step08,p,t);     //第六次 类算
	var step10=yanhuaLeisuan(step09,p,t);     //第七次 类算
	 

	var reslut=step03*step02/step10;
        reslut=reslut.toFixed(2);
	return reslut;
	

}
//盐化公式	

//盐化累计计算  分公式  上级的值 压力 温度
function yanhuaLeisuan(v,p,t){
	
	var kz=0.084785;     //系统常数
	var Acomp=1.48006;   //氢气摩尔常数
	var Bcomp=0.018462;  //氢气摩尔常数
	var px=p*10;         //按吧单位计算
	var wdz=Number(t)+273.16;   //绝对温度
	
	var cs01=Math.pow(v,2);      //计算值得2幂运算
	var cs02=Math.pow(v,3);      //计算值得3幂运算
	var cs03=Math.pow(Bcomp,2);      //摩尔数幂运算
	var cs04=px+1.0333;            //压力参数
	var cs05=Math.sqrt(wdz);  //温度平方根参数
	var cs06=wdz;  //温度参数
	
	var jieguo=v-(cs02-cs01*kz*cs06/cs04-v*(kz*cs06*Bcomp/cs04+cs03-Acomp/(cs04*cs05))-Acomp*Bcomp/(cs04*cs05))/(3*cs01-v*2*kz*cs06/cs04-cs03-kz*cs06*Bcomp/cs04+Acomp/(cs04*cs05));
	
	return jieguo; 
}	
//盐化累计计算分公式	
