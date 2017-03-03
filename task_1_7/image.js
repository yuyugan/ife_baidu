function imageChange(){
	var arr=["images/xinlan2_400.jpg","images/kelan3_400.jpg","images/kelan7_400.jpg","images/kexinlan_400.jpg",
			"images/kexinlan2_400.jpg","images/xinlan_400.jpg","images/xinlan3_400.png","images/xinlan5_400.jpg"];
	var theImg=document.getElementById("theImage");
	var t=1;
	setInterval(function()
	{
		theImg.src = arr[t];
		t++;
		if(t == arr.length)
		{
		t=0;	
		}
	},2000);
}