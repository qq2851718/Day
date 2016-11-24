<script>			
	myVid=document.getElementById("audio1");
	var button1 = document.getElementById("button1");
	var button2 = document.getElementById("button2");
	var i = 1;
	button1.onclick = function(){
	i -=1;
	myVid.src= "mp3/"+i+".mp3";
	}
	button2.onclick = function(){
	i +=1;
	myVid.src= "mp3/"+i+".mp3";
	}
	myVid.load();			
</script>
		