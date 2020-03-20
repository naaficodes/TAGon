
var layoutcanvas=document.getElementById('layoutcanvas');
		var file=layoutcanvas.outerHTML;
	var generated="";
var style="";
var styleadded=[];
var mobstyle="";
var mobstyleadded=[];
var mediaq1="@media only screen and (max-width: 768px) {";

	var crttitle=()=>
	{
		var thisstyle = 'crttitleclass';
	if(!(styleadded.includes(thisstyle))){
		styleadded.push('crttitleclass');
		style+="\n .crttitleclass { margin: 10px 0px 10px 0px; width: 100%; height: 80px; background-color: #009688; }";
	}
		var crttitle=document.createElement('nav');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crttitleclass common";
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

	var crtfooter=()=>
	{
		var thisstyle = 'crtfooterclass';
	if(!(styleadded.includes(thisstyle))){
		styleadded.push('crtfooterclass');
		style+="\n .crtfooterclass { margin: 10px 0px 10px 0px; width: 100%; height: 200px; background-color: #FF9800; }";
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
		style+="\n .crtcontentclass { margin: 10px 0px 10px 0px; width: 100%; height: 250px; background-color: #2196f3; }";
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
	var multidivparentadd=()=>
	{
		var thisstyle = 'multidivparent';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('multidivparent');
		style+="\n .multidivparent { margin: 10px 0px; display: flex; width: 100%; min-height: 300px; justify-content: space-between; flex-wrap: wrap; }";
	}
	var thismobstyle = 'multidivparent';
		if(!(mobstyleadded.includes(thismobstyle))){
			mobstyleadded.push('multidivparent');
		mobstyle+="\n .multidivparent .doubledivchild,.multidivparent .tridivchild { margin:unset; flex: unset; width: 100%; } .doubledivchild:nth-child(1) { margin-bottom: 10px; } .doubledivchild:nth-child(2) { margin-left: unset; } .tridivchild:nth-child(1) { margin-bottom: 10px; } .tridivchild:nth-child(2) { margin-right: unset; margin-left: unset; } .tridivchild:nth-child(3) { margin-top: 10px; }";
	}
	}
	var crtdoublediv=()=>
	{
		multidivparentadd();
		var thisstyle = 'doubledivchild';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('doubledivchild');
		style+="\n .multidivparent .doubledivchild { flex:5; min-height: 100%; background-color:#393e46; } .doubledivchild:nth-child(1) { margin-right: 5px; } .doubledivchild:nth-child(2) { margin-left: 5px; }";
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
		multidivparentadd();
		var thisstyle = 'tridivchild';
		if(!(styleadded.includes(thisstyle))){
			styleadded.push('tridivchild');
		style+="\n .multidivparent .tridivchild { flex:3.333; min-height: 100%; background-color:#9e9e9e;} .tridivchild:nth-child(1) { margin-right: 5px; } .tridivchild:nth-child(2) { margin-right: 5px; margin-left: 5px; } .tridivchild:nth-child(3) { margin-left: 5px; }";
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
		layoutcanvas.removeChild(document.getElementById('ins1'));
		file=layoutcanvas.outerHTML;
  var a = document.getElementById("a");
  a.style.display = "block";
  generated="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width, initial-scale=1.0'><style>"+style+mediaq1+mobstyle+"}"+"</style></head><body>"+file+"</body></html>";
  var dfile = new Blob([generated], {type: type});
  a.href = URL.createObjectURL(dfile);
  a.download = name;
}