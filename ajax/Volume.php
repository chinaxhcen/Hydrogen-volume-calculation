<?php 
@header('Content-type: text/html;charset=utf-8');
require_once 'function.php';

$action="";
$action=$_REQUEST["action"]; 

switch($action){
	//东元公式
	//-----------------------------------------------
	case 'dongyuan':
		
		$rongji=$_REQUEST['rongji'];
		$t01=$_REQUEST['t01'];
		$t02=$_REQUEST['t02'];
		$p01=$_REQUEST['p01'];
		$p02=$_REQUEST['p02'];
		$zt=true;
		$zhi=45600;
		
		$reslut=new eleGasVules($rongji,$t01,$t02,$p01,$p02);
		$zhi=$reslut->dongyuanJS();
		
		$ret=array('msg'=>$zt,'code'=>'0','data'=>$zhi); 
		echo json_encode($ret);   //返还json
		
    break;
	//东元公式
	//-----------------------------------------------
		
	//宝钢公式
	//-----------------------------------------------
	case 'baogang':
		
		$rongji=$_REQUEST['rongji'];
		$t01=$_REQUEST['t01'];
		$t02=$_REQUEST['t02'];
		$p01=$_REQUEST['p01'];
		$p02=$_REQUEST['p02'];
		$zt=true;
		$zhi=45600;
		
		$reslut=new eleGasVules($rongji,$t01,$t02,$p01,$p02);
		$zhi=$reslut->baogangJS();
		
		$ret=array('msg'=>$zt,'code'=>'0','data'=>$zhi); 
		echo json_encode($ret);   //返还json
		
    break;
	//宝钢公式
	//-----------------------------------------------
		
	//压力差长管公式
	//-----------------------------------------------
	case 'Yalicha':
		
		$rongji=$_REQUEST['rongji'];
		$t01=$_REQUEST['t01'];
		$t02=$_REQUEST['t02'];
		$p01=$_REQUEST['p01'];
		$p02=$_REQUEST['p02'];
		$zt=true;
		$zhi=45600;
		
		$reslut=new eleGasVules($rongji,$t01,$t02,$p01,$p02);
		$zhi=$reslut->yalichaJS();
		
		$ret=array('msg'=>$zt,'code'=>'0','data'=>$zhi); 
		echo json_encode($ret);   //返还json
		
    break;
	//压力差长管公式
	//-----------------------------------------------	
}
?>