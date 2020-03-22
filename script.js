var layoutcanvas=document.getElementById('layoutcanvas');
var file=layoutcanvas.outerHTML;
var generated="";
//css goes in this variable
var style="";
var styleadded=[];
//mobile responsive code goes in this variable
var mobstyle="";
var mobstyleadded=[];
var mediaq1="@media only screen and (max-width: 768px) {";

//To create and include the attibutes
var createattr=(whatattr,value,towho)=>{
	var attr=document.createAttribute(whatattr);
	attr.value=value;
	towho.setAttributeNode(attr);
}


var addtocanvas=(layout,outclassname,cssvar,whatattr,attrvalue,innerhtmlvalue)=>{
	var thisstyle = outclassname;
	if(!(styleadded.includes(thisstyle))){
		styleadded.push('crttitleclass');
		style+="\n"+cssvar;
	}
	var ele=document.createElement(layout);
	createattr(whatattr,attrvalue,ele);
	createattr('oncontextmenu',"javascript:eldel(this);return false;",ele);
	ele.innerHTML=innerhtmlvalue;
	layoutcanvas.appendChild(ele)
}

var mobileresponsive=(classname,cssvar)=>{
	var thismobstyle = classname;
	if(!(mobstyleadded.includes(thismobstyle))){
		mobstyleadded.push(classname);
		mobstyle+="\n"+cssvar;
	}

}

//Dynamic addition of Navbar in DOM.
var crttitle=()=>
{
	let csscode='.crttitleclass { margin: 10px 0px 10px 0px; width: 100%; height: 80px; background-color: #009688; }';
	addtocanvas('nav','crttitleclass',csscode,'class','crttitleclass common',null);


	// var thisstyle = 'crttitleclass';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('crttitleclass');
	// 	style+="\n .crttitleclass { margin: 10px 0px 10px 0px; width: 100%; height: 80px; background-color: #009688; }";
	// }
	// var crttitle=document.createElement('nav');
	// createattr('class',"crttitleclass common",crttitle);
	// createattr('oncontextmenu',"javascript:eldel(this);return false;",crttitle);
	// layoutcanvas.appendChild(crttitle)
	// console.log(styleadded);
}

//Dynamic addition of Footer in DOM.
var crtfooter=()=>
{
	let csscode='.crtfooterclass { margin: 10px 0px 10px 0px; width: 100%; height: 200px; background-color: #FF9800; }';
	addtocanvas('footer','crtfooterclass',csscode,'class','crtfooterclass common',null);
	// var thisstyle = 'crtfooterclass';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('crtfooterclass');
	// 	style+="\n .crtfooterclass { margin: 10px 0px 10px 0px; width: 100%; height: 200px; background-color: #FF9800; }";
	// }
	// var crtfooter=document.createElement('footer');
	// createattr('class',"crtfooterclass common",crtfooter);
	// createattr('oncontextmenu',"javascript:eldel(this);return false;",crtfooter);
	// layoutcanvas.appendChild(crtfooter)
	// console.log(styleadded);
}

//Dynamic addition of Div in DOM.
var crtcontent=()=>
{
	let csscode='.crtcontentclass { margin: 10px 0px 10px 0px; width: 100%; height: 250px; background-color: #2196f3; }';
	addtocanvas('div','crtcontentclass',csscode,'class','crtcontentclass common',null);
	// var thisstyle = 'crtcontentclass';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('crtcontentclass');
	// 	style+="\n .crtcontentclass { margin: 10px 0px 10px 0px; width: 100%; height: 250px; background-color: #2196f3; }";
	// }
	// var crtcontent=document.createElement('div');
	// createattr('class',"crtcontentclass common",crtcontent);
	// createattr('oncontextmenu',"javascript:eldel(this);return false;",crtcontent);
	// layoutcanvas.appendChild(crtcontent);
	// console.log(styleadded);
}

//Dynamic addition of Topic in DOM.
var crttopic=()=>
{
	let csscode='.crttopicclass { height: auto; color:#393e46; font-size: xx-large; margin: 10px 0px; width: 100%; }';
	let mobcsscode='.crttopicclass{text-align:center;}';
	addtocanvas('h3',"crttopicclass",csscode,'class','crttopicclass',"Topic");
	mobileresponsive('crttopicclass',mobcsscode);

	// var thisstyle = 'crttopicclass';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('crttopicclass');
	// 	style+="\n .crttopicclass { height: auto; color:#393e46; font-size: xx-large; margin: 10px 0px; width: 100%; }";
	// }
	// var thismobstyle = 'crttopicclass';
	// if(!(mobstyleadded.includes(thismobstyle))){
	// 	mobstyleadded.push('crttopicclass');
	// 	mobstyle+="\n .crttopicclass{text-align:center;}";
	// }
	// var crttopic=document.createElement('h3');
	// createattr('class',"crttopicclass",crttopic);
	// crttopic.innerHTML="Topic";
	// createattr('oncontextmenu',"javascript:eldel(this);return false;",crttopic);
	// layoutcanvas.appendChild(crttopic);
	// console.log(styleadded);
}

//Fuction for adding multi div parent css in the output code
var multidivcount=0;
var multidivparentadd=()=>
{
	let csscode=".multidivparent { margin: 10px 0px; display: flex; width: 100%; min-height: 300px; justify-content: space-between; flex-wrap: wrap; }";
	let mobcsscode='.multidivparent .doubledivchild,.multidivparent .tridivchild { margin:unset; flex: unset; width: 100%; } .doubledivchild:nth-child(1) { margin-bottom: 10px; } .doubledivchild:nth-child(2) { margin-left: unset; } .tridivchild:nth-child(1) { margin-bottom: 10px; } .tridivchild:nth-child(2) { margin-right: unset; margin-left: unset; } .tridivchild:nth-child(3) { margin-top: 10px; }';
	addtocanvas(null,'multidivparent',csscode,null,null,null);
	mobileresponsive('multidivparent',mobcsscode)
	// var thisstyle = 'multidivparent';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('multidivparent');
	// 	style+="\n .multidivparent { margin: 10px 0px; display: flex; width: 100%; min-height: 300px; justify-content: space-between; flex-wrap: wrap; }";
	// }
	// var thismobstyle = 'multidivparent';
	// if(!(mobstyleadded.includes(thismobstyle))){
	// 	mobstyleadded.push('multidivparent');
	// 	mobstyle+="\n .multidivparent .doubledivchild,.multidivparent .tridivchild { margin:unset; flex: unset; width: 100%; } .doubledivchild:nth-child(1) { margin-bottom: 10px; } .doubledivchild:nth-child(2) { margin-left: unset; } .tridivchild:nth-child(1) { margin-bottom: 10px; } .tridivchild:nth-child(2) { margin-right: unset; margin-left: unset; } .tridivchild:nth-child(3) { margin-top: 10px; }";
	// }
}

//Dynamic addition of Duo Div in DOM.
var crtdoublediv=()=>
{
	multidivparentadd();
	let csscode='.multidivparent .doubledivchild { flex:5; min-height: 100%; background-color:#393e46; } .doubledivchild:nth-child(1) { margin-right: 5px; } .doubledivchild:nth-child(2) { margin-left: 5px; }';
	addtocanvas('div','doubledivchild',csscode,'class','multidivparent',null);
	var multidivparent=document.getElementsByClassName('multidivparent');
	crtdoubledivchild(multidivparent[multidivcount]);	
	crtdoubledivchild(multidivparent[multidivcount]);
	multidivcount++;	
	// var thisstyle = 'doubledivchild';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('doubledivchild');
	// 	style+="\n .multidivparent .doubledivchild { flex:5; min-height: 100%; background-color:#393e46; } .doubledivchild:nth-child(1) { margin-right: 5px; } .doubledivchild:nth-child(2) { margin-left: 5px; }";
	// }
	// console.log(styleadded);
	
	// var crtmultidivparent=document.createElement('div');
	// createattr('class',"multidivparent",crtmultidivparent);
	// crtdoubledivchild(crtmultidivparent);	
	// crtdoubledivchild(crtmultidivparent);	
	// createattr('oncontextmenu',"javascript:eldel(this);return false;",crtmultidivparent);
	// layoutcanvas.appendChild(crtmultidivparent);
}
function crtdoubledivchild(x){
	var crtdoubledivchild=document.createElement('div');
	createattr('class',"doubledivchild",crtdoubledivchild);
	x.appendChild(crtdoubledivchild);
}

//Dynamic addition of Tri Div in DOM.
var crttridiv=()=>
{
	multidivparentadd();
	let csscode='.multidivparent .tridivchild { flex:3.333; min-height: 100%; background-color:#9e9e9e;} .tridivchild:nth-child(1) { margin-right: 5px; } .tridivchild:nth-child(2) { margin-right: 5px; margin-left: 5px; } .tridivchild:nth-child(3) { margin-left: 5px; }';
	addtocanvas('div','tridivchild',csscode,'class','multidivparent',null);
	var multidivparent=document.getElementsByClassName('multidivparent');
	crttridivchild(multidivparent[multidivcount]);	
	crttridivchild(multidivparent[multidivcount]);
	crttridivchild(multidivparent[multidivcount]);
	multidivcount++;	
	// var thisstyle = 'tridivchild';
	// if(!(styleadded.includes(thisstyle))){
	// 	styleadded.push('tridivchild');
	// 	style+="\n .multidivparent .tridivchild { flex:3.333; min-height: 100%; background-color:#9e9e9e;} .tridivchild:nth-child(1) { margin-right: 5px; } .tridivchild:nth-child(2) { margin-right: 5px; margin-left: 5px; } .tridivchild:nth-child(3) { margin-left: 5px; }";
	// }
	// console.log(styleadded);
	
	// var crtmultidivparent=document.createElement('div');
	// createattr('class',"multidivparent",crtmultidivparent);
	// crttridivchild(crtmultidivparent);	
	// crttridivchild(crtmultidivparent);
	// crttridivchild(crtmultidivparent);	
	// createattr('oncontextmenu',"javascript:eldel(this);return false;",crtmultidivparent);
	// layoutcanvas.appendChild(crtmultidivparent);
}
function crttridivchild(x){
	var crttridivchild=document.createElement('div');
	createattr('class',"tridivchild",crttridivchild);
	x.appendChild(crttridivchild);

}

//To delete a layout element
function eldel(x){
	if(confirm("Do you want to delete this layout ?")){
		layoutcanvas.removeChild(x);
	}
	
}

//To Download the final code
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