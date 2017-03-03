window.onload = function(){
	init();
	imageChange();
	}
var selectId=["selectAge","selectName"]; 
var optionInit = ["10-20岁","新一和小兰"]; 
function init() 
{ 
	for(i=0;i <selectId.length-1;i++) 
		document.getElementById(selectId[i]).onchange=new Function("changeOpt("+(i+1)+")"); //不太理解这个用法，回头再看看
		changeOpt(0); 
} 
function changeOpt(num){
	var str="0"; 
	for(i=0;i < num;i++){ 
	str+=("_"+(document.getElementById(selectId[i]).selectedIndex-1));
	}
	var nextSelect=document.getElementById(selectId[num]); 
	with(nextSelect){ 
		length = 0; 
		options[0]=new Option(optionInit[num],optionInit[num]); 
		if(num && document.getElementById(selectId[num-1]).selectedIndex>0 || !num) 
		{ 
			if(setOption.Exists(str)){ 
				optionArray = setOption.Items[str]; 
				for(i=0;i <optionArray.length;i++){
					options[length]=new Option(optionArray[i],optionArray[i]); 
				}
				if(num){
					options[1].selected = true; }
			} 
		} 
		if(++num <selectId.length){
			changeOpt(num);
		} 
	} 
} 

function SetOption() { 
	this.Items = {}; 
} 
SetOption.prototype.add = function(id,iArray) { 
	this.Items[id] = iArray; 
} 
SetOption.prototype.Exists = function(id) { 
	if(typeof(this.Items[id]) == "undefined"){
		return false;} 
	return true; 
}
var setOption = new SetOption(); 
setOption.add("0",["10岁以下","10-20岁","20-30岁","30岁以上"]);
setOption.add("0_0",["新一和小兰","柯南和小哀","柯南和步美","光彦和小哀","光彦和步美","元太和步美"]);
setOption.add("0_1",["新一和小哀","平次和和叶","快斗和小青","京极真和园子"]);
setOption.add("0_2",["高木和佐藤","秀吉和由美","白鸟和小林","千叶和苗子","秀一和明美"]);
setOption.add("0_3",["小五郎和英理","优作和有希子","木暮和木暮缘"]);


