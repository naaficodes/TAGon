	var previewbox=document.getElementById('previewbox');
	function crtbtn()
	{
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
		})
		previewbox.appendChild(crtbtn);
	}


	var crttitle=()=>
	{
		var crttitle=document.createElement('div');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crttitleclass";
		crttitle.setAttributeNode(crttitleclass);
		previewbox.appendChild(crttitle);
	}

	var crtcontent=()=>
	{
		var crttitle=document.createElement('div');
		var crttitleclass=document.createAttribute('class');
		crttitleclass.value="crtcontentclass";
		crttitle.setAttributeNode(crttitleclass);
		previewbox.appendChild(crttitle);
	}