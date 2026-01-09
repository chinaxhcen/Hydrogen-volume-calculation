<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>氢气装量计算公式</title>
<style>
.main{
	margin: 10px;
	font-size:16px;
	line-height: 22px;
	font-family: Cambria, "Hoefler Text", "Liberation Serif", Times, "Times New Roman", "serif","宋体";
}
	.titlex{
		margin-top: 20px;
		font-size:18px;
		font-weight:bold;
		line-height: 28px;
		color: #5A0BEC;
		border-bottom: 1px solid #C4C4C4;
	}
	.linex{
		margin-top: 15px;
		line-height: 32px;
	}
	.linex input{
		boeder:1px;
		border-radius:5px;
		padding:5px;
		border-color: #C6C6C6;
	}
	.linex button{
		padding: 5px;
		boeder-radius:5px;
	}
	.online{
		display: -webkit-flex;
        display: flex;
		justify-content:flex-start;
	}
	.online .txt{
		margin-left: 5px; 
		font-size:14px;
		color:#999999;
	}
	.tsxx{
		font-weight:bold;
		color:#EF1436;
	}
</style>

</head>
<body>
<div class="main">
	<div class="titlex">氢气装量计算公式</div>
	<div class="linex online">
	    <div  style="width:90px;">罐体容积：</div>
		<div>
			<input type="text" id="rongji" name="rongji" value="26">  
		</div>
		<div class="txt">
			立方米（M3）
		</div>
	</div>
	<div class="linex  online">
	    <div  style="width:90px;">起始温度：</div>
		<div> <input type="text" id="t01" name="t01" value="24"></div> 
		<div class="txt">摄氏度 </div>
		<div  style="width:90px; margin-left:20px;">结束温度：</div>
		<div><input type="text" id="t02" name="t02" value="28"></div>   
		<div class="txt">摄氏度</div>
	</div> 
	
	<div class="linex  online">
	    <div style="width:90px;">起始压力：</div>
		<div><input type="text" id="p01" name="p01" value="1.5"> </div>
		<div class="txt">Mpa  </div>
		<div style="width:90px; margin-left:20px;">结束压力：</div>
		<div><input type="text" id="p02" name="p02" value="18.8"></div>  
		<div class="txt">Mpa</div>
	</div > 
	<div class="linex  online">
	    <div style="width:90px;">计算实量：</div>
		<div><input type="text" id="czl" name="czl"></div>   
		<div class="txt">立方米（M3）</div>
		<div class="tsxx" id="msgxx"></div>
	</div> 
	<div class="linex online">
		<div>
		  <button onClick="dongyuan()">东元法计算</button>
		</div>
		
		<div style="margin-left: 5px;">
		  <button onClick="baogang()">济宁宝钢法计算</button>
		</div>
		
		
		<div style="margin-left: 5px;">
		  <button onClick="yaChaChangGuan()">压力差长管拖车法计算</button>
		</div>
		
		<div style="margin-left: 5px;">
		  <button onClick="anruike()">安瑞科法计算</button>
		</div>
		
		<div style="margin-left: 5px;">
		  <button onClick="yanhua()">盐化法计算</button>
		</div>
		
		<div style="margin-left: 5px;">
		  <button onClick="yulei()">淄博鱼雷法计算</button>
		</div>
	</div>
	
	<div id="listx">
	
	</div>
</div>	
</body>
</html>
<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="js/jiesuan.js"></script>