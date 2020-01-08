	var previewbox=document.getElementById('previewbox');
		var file="";
	var generated="";
var style="";
var styleadded=[];

	function crtbtn()
	{
		var thisstyle = 'crtbtn';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('crtbtn');
		style+="\n .crtbtn { width: 200px; height: 300px; background-color:black; color: white; }";
	}
		var btnname=document.getElementById('btnname');
		var crtbtn=document.createElement('button');
		var classatt=document.createAttribute('class');
		classatt.value="crtbtn";
		crtbtn.setAttributeNode(classatt);
		crtbtn.innerHTML=btnname.value;
		crtbtn.value=btnname.value;

		crtbtn.addEventListener('click',()=>{
			let namee=this.value;
			alert("hai");
		});
		previewbox.appendChild(crtbtn)
			var x = crttitle.outerHTML;
		file=file+"\n"+x;
		console.log(x);
		console.log(file);
	}


	var crttitle=()=>
	{
		var thisstyle = 'crttitleclass';
	if(!(styleadded.includes(thisstyle))){
		styleadded.push('crttitleclass');
		style+="\n .crttitleclass { margin: 10px 0px 10px 0px; width: 100%; height: 40px; background-color: green; }";
	}
		var crttitle=document.createElement('div');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crttitleclass";
		crttitle.setAttributeNode(crttitleclass);
		previewbox.appendChild(crttitle)
		var x = crttitle.outerHTML;
		file=file+"\n"+x;
		console.log(file);
	}

	var crtcontent=()=>
	{
		var thisstyle = 'crtcontentclass';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('crtcontentclass');
		style+="\n .crtcontentclass { margin: 10px 0px 10px 0px; width: 100%; height: 250px; background-color: blue; }";
	}
		var crttitle=document.createElement('div');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crtcontentclass";
		crttitle.setAttributeNode(crttitleclass);
		previewbox.appendChild(crttitle)
			var x = crttitle.outerHTML;
		file=file+"\n"+x;
		console.log(file);
	}

	function download(name, type) {
  var a = document.getElementById("a");
  a.style.display = "block";
  generated="<!DOCTYPE html><html><head><style>"+style+"</style></head><body>"+file+"</body></html>";
  var dfile = new Blob([generated], {type: type});
  a.href = URL.createObjectURL(dfile);
  a.download = name;
}