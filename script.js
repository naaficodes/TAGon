
var layoutcanvas=document.getElementById('layoutcanvas');
		var file=layoutcanvas.outerHTML;
	var generated="";
var style="";
var styleadded=[];

	var crttitle=()=>
	{
		var thisstyle = 'crttitleclass';
	if(!(styleadded.includes(thisstyle))){
		styleadded.push('crttitleclass');
		style+="\n .crttitleclass { margin: 10px 0px 10px 0px; width: 100%; height: 40px; background-color: green; }";
	}
		var crttitle=document.createElement('nav');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crttitleclass common";
		crttitle.setAttributeNode(crttitleclass);
		var dragid=document.createAttribute("id");
		dragid.value="draggable";
		crttitle.setAttributeNode(dragid);
		var dell=document.createAttribute("oncontextmenu");
		dell.value="javascript:eldel(this);return false;";
		crttitle.setAttributeNode(dell);
		layoutcanvas.appendChild(crttitle)
		// var x = crttitle.outerHTML;
		// file=file+"\n"+x;
		// console.log(file);
		console.log(styleadded);
	}

	var crtfooter=()=>
	{
		var thisstyle = 'crtfooterclass';
	if(!(styleadded.includes(thisstyle))){
		styleadded.push('crtfooterclass');
		style+="\n .crtfooterclass { margin: 10px 0px 10px 0px; width: 100%; height: 40px; background-color: red; }";
	}
		var crttitle=document.createElement('footer');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crtfooterclass common";
		crttitle.setAttributeNode(crttitleclass);
		var dell=document.createAttribute("oncontextmenu");
		dell.value="javascript:eldel(this);return false;";
		crttitle.setAttributeNode(dell);
		layoutcanvas.appendChild(crttitle)
		// var x = crttitle.outerHTML;
		// file=file+"\n"+x;
		// console.log(file);
		console.log(styleadded);
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
		crttitleclass.value="crtcontentclass common";
		crttitle.setAttributeNode(crttitleclass);
		var dell=document.createAttribute("oncontextmenu");
		dell.value="javascript:eldel(this);return false;";
		crttitle.setAttributeNode(dell);
		layoutcanvas.appendChild(crttitle);
		// 	var x = crttitle.outerHTML;
		// file=file+"\n"+x;
		// console.log(file);
		console.log(styleadded);
		//oncontextmenu="javascript:alert('success!');return false;">
	}

	var crtdoublediv=()=>
	{
		var thisstyle = 'multidivparent';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('multidivparent');
		style+="\n .multidivparent .doubledivchild { flex:5; height: 100%; background-color:#393e46; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); transition: 1s; } .doubledivchild:nth-child(1) { margin-right: 20px; } .doubledivchild:nth-child(2) { margin-left: 20px; }";
	}
	console.log(styleadded);

		var crtmultidivparent=document.createElement('div');
		var crtmultidivparentclass=document.createAttribute('class');
		crtmultidivparentclass.value='multidivparent';
		crtmultidivparent.setAttributeNode(crtmultidivparentclass);
		crtdoubledivchild(crtmultidivparent);	
		crtdoubledivchild(crtmultidivparent);	
		var dell=document.createAttribute("oncontextmenu");
		dell.value="javascript:eldel(this);return false;";
		crtmultidivparent.setAttributeNode(dell);
				layoutcanvas.appendChild(crtmultidivparent);
		// 		var x = crtmultidivparent.outerHTML;
		// file=file+"\n"+x;
		// 		console.log(file);
	}
	function crtdoubledivchild(x){
		var crtdoubledivchild=document.createElement('div');
		var crtdoubledivchildclass=document.createAttribute('class');
		crtdoubledivchildclass.value='doubledivchild';
		crtdoubledivchild.setAttributeNode(crtdoubledivchildclass);
		x.appendChild(crtdoubledivchild);

	}
	var crttridiv=()=>
	{
		var thisstyle = 'multidivparent';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('multidivparent');
		style+="\n .multidivparent .tridivchild { flex:3.333; height: 100%; background-color:#393e46; border-radius: 10px; } .tridivchild:nth-child(1) { margin-right: 20px; } .tridivchild:nth-child(2) { margin-right: 20px; margin-left: 20px; } .tridivchild:nth-child(3) { margin-left: 20px; }";
	}
	console.log(styleadded);

		var crtmultidivparent=document.createElement('div');
		var crtmultidivparentclass=document.createAttribute('class');
		crtmultidivparentclass.value='multidivparent';
		crtmultidivparent.setAttributeNode(crtmultidivparentclass);
		crttridivchild(crtmultidivparent);	
		crttridivchild(crtmultidivparent);
		crttridivchild(crtmultidivparent);	
		var dell=document.createAttribute("oncontextmenu");
		dell.value="javascript:eldel(this);return false;";
		crtmultidivparent.setAttributeNode(dell);
				layoutcanvas.appendChild(crtmultidivparent);
		// 		var x = crtmultidivparent.outerHTML;
		// file=file+"\n"+x;
		// 		console.log(file);
	}
	function crttridivchild(x){
		var crttridivchild=document.createElement('div');
		var crttridivchildclass=document.createAttribute('class');
		crttridivchildclass.value='tridivchild';
		crttridivchild.setAttributeNode(crttridivchildclass);
		x.appendChild(crttridivchild);

	}
	function eldel(x){
		if(confirm("Do you want to delete this layout ?")){
			layoutcanvas.removeChild(x);
		}
		
	}
function showcodeo(){
	alert(layoutcanvas.outerHTML);
}
	function download(name, type) {
		file=layoutcanvas.outerHTML;
  var a = document.getElementById("a");
  a.style.display = "block";
  generated="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>"+style+"</style></head><body>"+file+"</body></html>";
  var dfile = new Blob([generated], {type: type});
  a.href = URL.createObjectURL(dfile);
  a.download = name;
}