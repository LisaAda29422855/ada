<input type="text" id="time" onkeyup="document.getElementById('res').value=her(this)">
<input type="text" id="res" onkeyup="document.getElementById('time').value=her(this)">

<script type="text/javascript">
function her(b){
	a=b.value;
	i=0;
	dv1='';dv2='';probel='';
	while(a.substr(i,1)){
		if(a.substr(0,1)==' '){
			a=a.substr(1,100);
			continue;
		}
		switch(a.substr(i,1)){
			case ' ':{probel=i;break;}
			case ':':{if(!dv1)dv1=i;else dv2=i;break;}
		}
		i++;
	}
	len=i;
	if(!dv1&&!dv2){
		d=Math.floor(a/86400);
		a-=86400*d;
		h=Math.floor(a/3600);
		a-=3600*h;
		m=Math.floor(a/60);if(m<10){m='0'+m}
		s=a-60*m;if(s<10){s='0'+s}
		return d+" "+h+":"+m+":"+s;
	}
	else{
		if(probel)d=a.substr(0,probel)+' ';else d=0;
		h=a.substr(probel+1,dv1-probel-1);
		m=a.substr(dv1+1,dv2-dv1-1);
		s=a.substr(dv2+1,len-dv2-1);
		sec=d*86400;
		sec+=h*3600;
		sec+=m*60;
		sec+=s*1;
		return sec;
	}
}
</script>
