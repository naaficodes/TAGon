var layoutcanvas=document.getElementById('layoutcanvas');
var file=layoutcanvas.outerHTML;
//Final code gets stored in this variable.
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

//This method adds element to the layout canvas
var addtocanvas=(layout,outclassname,cssvar,whatattr,attrvalue,innerhtmlvalue)=>{
	var thisstyle = outclassname;
	if(!(styleadded.includes(thisstyle))){
		styleadded.push(outclassname);
		style+="\n"+cssvar;
	}
	var ele=document.createElement(layout);
	createattr(whatattr,attrvalue,ele);
	createattr('oncontextmenu',"javascript:eldel(this);return false;",ele);
	ele.innerHTML=innerhtmlvalue;
	layoutcanvas.appendChild(ele)
}

//This method adds mobileresponsive code to the output file
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
}

//Dynamic addition of Footer in DOM.
var crtfooter=()=>
{
	let csscode='.crtfooterclass { margin: 10px 0px 10px 0px; width: 100%; height: 200px; background-color: #FF9800; }';
	addtocanvas('footer','crtfooterclass',csscode,'class','crtfooterclass common',null);
}

//Dynamic addition of Div in DOM.
var crtcontent=()=>
{
	let csscode='.crtcontentclass { margin: 10px 0px 10px 0px; width: 100%; height: 250px; background-color: #2196f3; }';
	addtocanvas('div','crtcontentclass',csscode,'class','crtcontentclass common',null);
}

//Dynamic addition of Topic in DOM.
var crttopic=()=>
{
	let csscode='.crttopicclass { height: auto; color:#393e46; font-size: xx-large; margin: 10px 0px; width: 100%; }';
	let mobcsscode='.crttopicclass{text-align:center;}';
	addtocanvas('h3',"crttopicclass",csscode,'class','crttopicclass',"Topic");
	mobileresponsive('crttopicclass',mobcsscode);
}

//This variable holds the count of multidiv wrappers.
var multidivcount=0;
//Fuction for adding multi div parent css in the output code
var multidivparentadd=()=>
{
	let csscode=".multidivparent { margin: 10px 0px; display: flex; width: 100%; min-height: 300px; justify-content: space-between; flex-wrap: wrap; }";
	let mobcsscode='.multidivparent .doubledivchild,.multidivparent .tridivchild { margin:unset; flex: unset; width: 100%; } .doubledivchild:nth-child(1) { margin-bottom: 10px; } .doubledivchild:nth-child(2) { margin-left: unset; } .tridivchild:nth-child(1) { margin-bottom: 10px; } .tridivchild:nth-child(2) { margin-right: unset; margin-left: unset; } .tridivchild:nth-child(3) { margin-top: 10px; }';
	var thisstyle = ".multidivparent";
	if(!(styleadded.includes(thisstyle))){
		styleadded.push("multidivparent");
		style+="\n"+csscode;
	}
	mobileresponsive('multidivparent',mobcsscode)
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
		multidivcount--;
	}
	
}

var intro=()=>
{
	document.getElementById('intro').style.display="block";
};
//To Download the final code
function download(name, type) {
	nullvars=document.getElementsByTagName('null');
	console.log(nullvars.length);
	for(let i=0;i<nullvars.length;i++)
	{
		nullvars[i].remove();
		console.log(i);
	}
	file=layoutcanvas.outerHTML;
	var a = document.getElementById("a");
	a.style.display = "block";
	document.getElementById('downloadfile').style.display="block";
	generatedusing="<!-- This Layout code is generated using TAG-ON, Made by Abdul Wahid Naafi (naaficodes.github.io) -->";
	fincss=style+mediaq1+mobstyle;
	generated="<!DOCTYPE html><html><head>"+generatedusing+"<meta name='viewport' content='width=device-width, initial-scale=1.0'><style>"+css_beautify(fincss)+"}"+"</style></head><body>"+file+"</body></html>";
	generated=generated.replace('class="layoutcanvas" id="layoutcanvas"',"");
	generated=generated.replace(/common/g,"");
	generated=generated.replace(new RegExp('oncontextmenu="javascript|[:]eldel[(]this[)]|;return false;|"','g'),"");
	// generated=generated.replace(<null null="null" oncontextmenu="javascript:eldel(this);return false;"></null>/g',"");
	var dfile = new Blob([style_html(generated)], {type: type});
	a.href = URL.createObjectURL(dfile);
	a.download = name;
}
//this fuction closes the modal
function closebox(x){
x.style.display='none';
}

//To remove 'let's get started' text
document.getElementById('layoutoptions').addEventListener("click",()=>{
	document.getElementById('gs').style.display='none';
});





function style_html(html_source, options) {
	//Wrapper function to invoke all the necessary constructors and deal with the output.
	
	  var multi_parser,
		  indent_size,
		  indent_character,
		  max_char,
		  brace_style,
		  unformatted;
	
	  options = options || {};
	  indent_size = options.indent_size || 4;
	  indent_character = options.indent_char || ' ';
	  brace_style = options.brace_style || 'collapse';
	  max_char = options.max_char == 0 ? Infinity : options.max_char || 70;
	  unformatted = options.unformatted || ['a', 'span', 'bdo', 'em', 'strong', 'dfn', 'code', 'samp', 'kbd', 'var', 'cite', 'abbr', 'acronym', 'q', 'sub', 'sup', 'tt', 'i', 'b', 'big', 'small', 'u', 's', 'strike', 'font', 'ins', 'del', 'pre', 'address', 'dt', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
	
	  function Parser() {
	
		this.pos = 0; //Parser position
		this.token = '';
		this.current_mode = 'CONTENT'; //reflects the current Parser mode: TAG/CONTENT
		this.tags = { //An object to hold tags, their position, and their parent-tags, initiated with default values
		  parent: 'parent1',
		  parentcount: 1,
		  parent1: ''
		};
		this.tag_type = '';
		this.token_text = this.last_token = this.last_text = this.token_type = '';
	
		this.Utils = { //Uilities made available to the various functions
		  whitespace: "\n\r\t ".split(''),
		  single_token: 'br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?='.split(','), //all the single tags for HTML
		  extra_liners: 'head,body,/html'.split(','), //for tags that need a line of whitespace before them
		  in_array: function (what, arr) {
			for (var i=0; i<arr.length; i++) {
			  if (what === arr[i]) {
				return true;
			  }
			}
			return false;
		  }
		}
	
		this.get_content = function () { //function to capture regular content between tags
	
		  var input_char = '',
			  content = [],
			  space = false; //if a space is needed
	
		  while (this.input.charAt(this.pos) !== '<') {
			if (this.pos >= this.input.length) {
			  return content.length?content.join(''):['', 'TK_EOF'];
			}
	
			input_char = this.input.charAt(this.pos);
			this.pos++;
			this.line_char_count++;
	
			if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
			  if (content.length) {
				space = true;
			  }
			  this.line_char_count--;
			  continue; //don't want to insert unnecessary space
			}
			else if (space) {
			  if (this.line_char_count >= this.max_char) { //insert a line when the max_char is reached
				content.push('\n');
				for (var i=0; i<this.indent_level; i++) {
				  content.push(this.indent_string);
				}
				this.line_char_count = 0;
			  }
			  else{
				content.push(' ');
				this.line_char_count++;
			  }
			  space = false;
			}
			content.push(input_char); //letter at-a-time (or string) inserted to an array
		  }
		  return content.length?content.join(''):'';
		}
	
		this.get_contents_to = function (name) { //get the full content of a script or style to pass to js_beautify
		  if (this.pos == this.input.length) {
			return ['', 'TK_EOF'];
		  }
		  var input_char = '';
		  var content = '';
		  var reg_match = new RegExp('\<\/' + name + '\\s*\>', 'igm');
		  reg_match.lastIndex = this.pos;
		  var reg_array = reg_match.exec(this.input);
		  var end_script = reg_array?reg_array.index:this.input.length; //absolute end of script
		  if(this.pos < end_script) { //get everything in between the script tags
			content = this.input.substring(this.pos, end_script);
			this.pos = end_script;
		  }
		  return content;
		}
	
		this.record_tag = function (tag){ //function to record a tag and its parent in this.tags Object
		  if (this.tags[tag + 'count']) { //check for the existence of this tag type
			this.tags[tag + 'count']++;
			this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
		  }
		  else { //otherwise initialize this tag type
			this.tags[tag + 'count'] = 1;
			this.tags[tag + this.tags[tag + 'count']] = this.indent_level; //and record the present indent level
		  }
		  this.tags[tag + this.tags[tag + 'count'] + 'parent'] = this.tags.parent; //set the parent (i.e. in the case of a div this.tags.div1parent)
		  this.tags.parent = tag + this.tags[tag + 'count']; //and make this the current parent (i.e. in the case of a div 'div1')
		}
	
		this.retrieve_tag = function (tag) { //function to retrieve the opening tag to the corresponding closer
		  if (this.tags[tag + 'count']) { //if the openener is not in the Object we ignore it
			var temp_parent = this.tags.parent; //check to see if it's a closable tag.
			while (temp_parent) { //till we reach '' (the initial value);
			  if (tag + this.tags[tag + 'count'] === temp_parent) { //if this is it use it
				break;
			  }
			  temp_parent = this.tags[temp_parent + 'parent']; //otherwise keep on climbing up the DOM Tree
			}
			if (temp_parent) { //if we caught something
			  this.indent_level = this.tags[tag + this.tags[tag + 'count']]; //set the indent_level accordingly
			  this.tags.parent = this.tags[temp_parent + 'parent']; //and set the current parent
			}
			delete this.tags[tag + this.tags[tag + 'count'] + 'parent']; //delete the closed tags parent reference...
			delete this.tags[tag + this.tags[tag + 'count']]; //...and the tag itself
			if (this.tags[tag + 'count'] == 1) {
			  delete this.tags[tag + 'count'];
			}
			else {
			  this.tags[tag + 'count']--;
			}
		  }
		}
	
		this.get_tag = function () { //function to get a full tag and parse its type
		  var input_char = '',
			  content = [],
			  space = false,
			  tag_start, tag_end;
	
		  do {
			if (this.pos >= this.input.length) {
			  return content.length?content.join(''):['', 'TK_EOF'];
			}
	
			input_char = this.input.charAt(this.pos);
			this.pos++;
			this.line_char_count++;
	
			if (this.Utils.in_array(input_char, this.Utils.whitespace)) { //don't want to insert unnecessary space
			  space = true;
			  this.line_char_count--;
			  continue;
			}
	
			if (input_char === "'" || input_char === '"') {
			  if (!content[1] || content[1] !== '!') { //if we're in a comment strings don't get treated specially
				input_char += this.get_unformatted(input_char);
				space = true;
			  }
			}
	
			if (input_char === '=') { //no space before =
			  space = false;
			}
	
			if (content.length && content[content.length-1] !== '=' && input_char !== '>'
				&& space) { //no space after = or before >
			  if (this.line_char_count >= this.max_char) {
				this.print_newline(false, content);
				this.line_char_count = 0;
			  }
			  else {
				content.push(' ');
				this.line_char_count++;
			  }
			  space = false;
			}
			if (input_char === '<') {
				tag_start = this.pos - 1;
			}
			content.push(input_char); //inserts character at-a-time (or string)
		  } while (input_char !== '>');
	
		  var tag_complete = content.join('');
		  var tag_index;
		  if (tag_complete.indexOf(' ') != -1) { //if there's whitespace, thats where the tag name ends
			tag_index = tag_complete.indexOf(' ');
		  }
		  else { //otherwise go with the tag ending
			tag_index = tag_complete.indexOf('>');
		  }
		  var tag_check = tag_complete.substring(1, tag_index).toLowerCase();
		  if (tag_complete.charAt(tag_complete.length-2) === '/' ||
			  this.Utils.in_array(tag_check, this.Utils.single_token)) { //if this tag name is a single tag type (either in the list or has a closing /)
			this.tag_type = 'SINGLE';
		  }
		  else if (tag_check === 'script') { //for later script handling
			this.record_tag(tag_check);
			this.tag_type = 'SCRIPT';
		  }
		  else if (tag_check === 'style') { //for future style handling (for now it justs uses get_content)
			this.record_tag(tag_check);
			this.tag_type = 'STYLE';
		  }
		  else if (this.Utils.in_array(tag_check, unformatted)) { // do not reformat the "unformatted" tags
			var comment = this.get_unformatted('</'+tag_check+'>', tag_complete); //...delegate to get_unformatted function
			content.push(comment);
			// Preserve collapsed whitespace either before or after this tag.
			if (tag_start > 0 && this.Utils.in_array(this.input.charAt(tag_start - 1), this.Utils.whitespace)){
				content.splice(0, 0, this.input.charAt(tag_start - 1));
			}
			tag_end = this.pos - 1;
			if (this.Utils.in_array(this.input.charAt(tag_end + 1), this.Utils.whitespace)){
				content.push(this.input.charAt(tag_end + 1));
			}
			this.tag_type = 'SINGLE';
		  }
		  else if (tag_check.charAt(0) === '!') { //peek for <!-- comment
			if (tag_check.indexOf('[if') != -1) { //peek for <!--[if conditional comment
			  if (tag_complete.indexOf('!IE') != -1) { //this type needs a closing --> so...
				var comment = this.get_unformatted('-->', tag_complete); //...delegate to get_unformatted
				content.push(comment);
			  }
			  this.tag_type = 'START';
			}
			else if (tag_check.indexOf('[endif') != -1) {//peek for <!--[endif end conditional comment
			  this.tag_type = 'END';
			  this.unindent();
			}
			else if (tag_check.indexOf('[cdata[') != -1) { //if it's a <[cdata[ comment...
			  var comment = this.get_unformatted(']]>', tag_complete); //...delegate to get_unformatted function
			  content.push(comment);
			  this.tag_type = 'SINGLE'; //<![CDATA[ comments are treated like single tags
			}
			else {
			  var comment = this.get_unformatted('-->', tag_complete);
			  content.push(comment);
			  this.tag_type = 'SINGLE';
			}
		  }
		  else {
			if (tag_check.charAt(0) === '/') { //this tag is a double tag so check for tag-ending
			  this.retrieve_tag(tag_check.substring(1)); //remove it and all ancestors
			  this.tag_type = 'END';
			}
			else { //otherwise it's a start-tag
			  this.record_tag(tag_check); //push it on the tag stack
			  this.tag_type = 'START';
			}
			if (this.Utils.in_array(tag_check, this.Utils.extra_liners)) { //check if this double needs an extra line
			  this.print_newline(true, this.output);
			}
		  }
		  return content.join(''); //returns fully formatted tag
		}
	
		this.get_unformatted = function (delimiter, orig_tag) { //function to return unformatted content in its entirety
	
		  if (orig_tag && orig_tag.indexOf(delimiter) != -1) {
			return '';
		  }
		  var input_char = '';
		  var content = '';
		  var space = true;
		  do {
	
			if (this.pos >= this.input.length) {
			  return content;
			}
	
			input_char = this.input.charAt(this.pos);
			this.pos++
	
			if (this.Utils.in_array(input_char, this.Utils.whitespace)) {
			  if (!space) {
				this.line_char_count--;
				continue;
			  }
			  if (input_char === '\n' || input_char === '\r') {
				content += '\n';
				/*  Don't change tab indention for unformatted blocks.  If using code for html editing, this will greatly affect <pre> tags if they are specified in the 'unformatted array'
				for (var i=0; i<this.indent_level; i++) {
				  content += this.indent_string;
				}
				space = false; //...and make sure other indentation is erased
				*/
				this.line_char_count = 0;
				continue;
			  }
			}
			content += input_char;
			this.line_char_count++;
			space = true;
	
	
		  } while (content.indexOf(delimiter) == -1);
		  return content;
		}
	
		this.get_token = function () { //initial handler for token-retrieval
		  var token;
	
		  if (this.last_token === 'TK_TAG_SCRIPT' || this.last_token === 'TK_TAG_STYLE') { //check if we need to format javascript
		   var type = this.last_token.substr(7)
		   token = this.get_contents_to(type);
			if (typeof token !== 'string') {
			  return token;
			}
			return [token, 'TK_' + type];
		  }
		  if (this.current_mode === 'CONTENT') {
			token = this.get_content();
			if (typeof token !== 'string') {
			  return token;
			}
			else {
			  return [token, 'TK_CONTENT'];
			}
		  }
	
		  if (this.current_mode === 'TAG') {
			token = this.get_tag();
			if (typeof token !== 'string') {
			  return token;
			}
			else {
			  var tag_name_type = 'TK_TAG_' + this.tag_type;
			  return [token, tag_name_type];
			}
		  }
		}
	
		this.get_full_indent = function (level) {
		  level = this.indent_level + level || 0;
		  if (level < 1)
			return '';
	
		  return Array(level + 1).join(this.indent_string);
		}
	
	
		this.printer = function (js_source, indent_character, indent_size, max_char, brace_style) { //handles input/output and some other printing functions
	
		  this.input = js_source || ''; //gets the input for the Parser
		  this.output = [];
		  this.indent_character = indent_character;
		  this.indent_string = '';
		  this.indent_size = indent_size;
		  this.brace_style = brace_style;
		  this.indent_level = 0;
		  this.max_char = max_char;
		  this.line_char_count = 0; //count to see if max_char was exceeded
	
		  for (var i=0; i<this.indent_size; i++) {
			this.indent_string += this.indent_character;
		  }
	
		  this.print_newline = function (ignore, arr) {
			this.line_char_count = 0;
			if (!arr || !arr.length) {
			  return;
			}
			if (!ignore) { //we might want the extra line
			  while (this.Utils.in_array(arr[arr.length-1], this.Utils.whitespace)) {
				arr.pop();
			  }
			}
			arr.push('\n');
			for (var i=0; i<this.indent_level; i++) {
			  arr.push(this.indent_string);
			}
		  }
	
		  this.print_token = function (text) {
			this.output.push(text);
		  }
	
		  this.indent = function () {
			this.indent_level++;
		  }
	
		  this.unindent = function () {
			if (this.indent_level > 0) {
			  this.indent_level--;
			}
		  }
		}
		return this;
	  }
	
	  /*_____________________--------------------_____________________*/
	
	  multi_parser = new Parser(); //wrapping functions Parser
	  multi_parser.printer(html_source, indent_character, indent_size, max_char, brace_style); //initialize starting values
	
	  while (true) {
		  var t = multi_parser.get_token();
		  multi_parser.token_text = t[0];
		  multi_parser.token_type = t[1];
	
		if (multi_parser.token_type === 'TK_EOF') {
		  break;
		}
	
		switch (multi_parser.token_type) {
		  case 'TK_TAG_START':
			multi_parser.print_newline(false, multi_parser.output);
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.indent();
			multi_parser.current_mode = 'CONTENT';
			break;
		  case 'TK_TAG_STYLE':
		  case 'TK_TAG_SCRIPT':
			multi_parser.print_newline(false, multi_parser.output);
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.current_mode = 'CONTENT';
			break;
		  case 'TK_TAG_END':
			//Print new line only if the tag has no content and has child
			if (multi_parser.last_token === 'TK_CONTENT' && multi_parser.last_text === '') {
				var tag_name = multi_parser.token_text.match(/\w+/)[0];
				var tag_extracted_from_last_output = multi_parser.output[multi_parser.output.length -1].match(/<\s*(\w+)/);
				if (tag_extracted_from_last_output === null || tag_extracted_from_last_output[1] !== tag_name)
					multi_parser.print_newline(true, multi_parser.output);
			}
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.current_mode = 'CONTENT';
			break;
		  case 'TK_TAG_SINGLE':
			// Don't add a newline before elements that should remain unformatted.
			var tag_check = multi_parser.token_text.match(/^\s*<([a-z]+)/i);
			if (!tag_check || !multi_parser.Utils.in_array(tag_check[1], unformatted)){
				multi_parser.print_newline(false, multi_parser.output);
			}
			multi_parser.print_token(multi_parser.token_text);
			multi_parser.current_mode = 'CONTENT';
			break;
		  case 'TK_CONTENT':
			if (multi_parser.token_text !== '') {
			  multi_parser.print_token(multi_parser.token_text);
			}
			multi_parser.current_mode = 'TAG';
			break;
		  case 'TK_STYLE':
		  case 'TK_SCRIPT':
			if (multi_parser.token_text !== '') {
			  multi_parser.output.push('\n');
			  var text = multi_parser.token_text;
			  if (multi_parser.token_type == 'TK_SCRIPT') {
				var _beautifier = typeof js_beautify == 'function' && js_beautify;
			  } else if (multi_parser.token_type == 'TK_STYLE') {
				var _beautifier = typeof css_beautify == 'function' && css_beautify;
			  }
	
			  if (options.indent_scripts == "keep") {
				var script_indent_level = 0;
			  } else if (options.indent_scripts == "separate") {
				var script_indent_level = -multi_parser.indent_level;
			  } else {
				var script_indent_level = 1;
			  }
	
			  var indentation = multi_parser.get_full_indent(script_indent_level);
			  if (_beautifier) {
				// call the Beautifier if avaliable
				text = _beautifier(text.replace(/^\s*/, indentation), options);
			  } else {
				// simply indent the string otherwise
				var white = text.match(/^\s*/)[0];
				var _level = white.match(/[^\n\r]*$/)[0].split(multi_parser.indent_string).length - 1;
				var reindent = multi_parser.get_full_indent(script_indent_level -_level);
				text = text.replace(/^\s*/, indentation)
					   .replace(/\r\n|\r|\n/g, '\n' + reindent)
					   .replace(/\s*$/, '');
			  }
			  if (text) {
				multi_parser.print_token(text);
				multi_parser.print_newline(true, multi_parser.output);
			  }
			}
			multi_parser.current_mode = 'TAG';
			break;
		}
		multi_parser.last_token = multi_parser.token_type;
		multi_parser.last_text = multi_parser.token_text;
	  }
	  return multi_parser.output.join('');
	}
	
	/*
	
	 CSS Beautifier
	---------------
	
		Written by Harutyun Amirjanyan, (amirjanyan@gmail.com)
	
		Based on code initially developed by: Einar Lielmanis, <elfz@laacz.lv>
			http://jsbeautifier.org/
	
	
		You are free to use this in any way you want, in case you find this useful or working for you.
	
		Usage:
			css_beautify(source_text);
			css_beautify(source_text, options);
	
		The options are:
			indent_size (default 4)          â€” indentation size,
			indent_char (default space)      â€” character to indent with,
	
		e.g
	
		css_beautify(css_source_text, {
		  'indent_size': 1,
		  'indent_char': '\t'
		});
	*/
	
	// http://www.w3.org/TR/CSS21/syndata.html#tokenization
	// http://www.w3.org/TR/css3-syntax/
	function css_beautify(source_text, options) {
		options = options || {};
		var indentSize = options.indent_size || 4;
		var indentCharacter = options.indent_char || ' ';
	
		// compatibility
		if (typeof indentSize == "string")
			indentSize = parseInt(indentSize);
	
	
		// tokenizer
		var whiteRe = /^\s+$/;
		var wordRe = /[\w$\-_]/;
	
		var pos = -1, ch;
		function next() {
			return ch = source_text.charAt(++pos)
		}
		function peek() {
			return source_text.charAt(pos+1)
		}
		function eatString(comma) {
			var start = pos;
			while(next()){
				if (ch=="\\"){
					next();
					next();
				} else if (ch == comma) {
					break;
				} else if (ch == "\n") {
					break;
				}
			}
			return source_text.substring(start, pos + 1);
		}
	
		function eatWhitespace() {
			var start = pos;
			while (whiteRe.test(peek()))
				pos++;
			return pos != start;
		}
	
		function skipWhitespace() {
			var start = pos;
			do{
			}while (whiteRe.test(next()))
			return pos != start + 1;
		}
	
		function eatComment() {
			var start = pos;
			next();
			while (next()) {
				if (ch == "*" && peek() == "/") {
					pos ++;
					break;
				}
			}
	
			return source_text.substring(start, pos + 1);
		}
	
	
		function lookBack(str, index) {
			return output.slice(-str.length + (index||0), index).join("").toLowerCase() == str;
		}
	
		// printer
		var indentString = source_text.match(/^[\r\n]*[\t ]*/)[0];
		var singleIndent = Array(indentSize + 1).join(indentCharacter);
		var indentLevel = 0;
		function indent() {
			indentLevel++;
			indentString += singleIndent;
		}
		function outdent() {
			indentLevel--;
			indentString = indentString.slice(0, -indentSize);
		}
	
		var print = {}
		print["{"] = function(ch) {
			print.singleSpace();
			output.push(ch);
			print.newLine();
		}
		print["}"] = function(ch) {
			print.newLine();
			output.push(ch);
			print.newLine();
		}
	
		print.newLine = function(keepWhitespace) {
			if (!keepWhitespace)
				while (whiteRe.test(output[output.length - 1]))
					output.pop();
	
			if (output.length)
				output.push('\n');
			if (indentString)
				output.push(indentString);
		}
		print.singleSpace = function() {
			if (output.length && !whiteRe.test(output[output.length - 1]))
				output.push(' ');
		}
		var output = [];
		if (indentString)
			output.push(indentString);
		/*_____________________--------------------_____________________*/
	
		while(true) {
			var isAfterSpace = skipWhitespace();
	
			if (!ch)
				break;
	
			if (ch == '{') {
				indent();
				print["{"](ch);
			} else if (ch == '}') {
				outdent();
				print["}"](ch);
			} else if (ch == '"' || ch == '\'') {
				output.push(eatString(ch))
			} else if (ch == ';') {
				output.push(ch, '\n', indentString);
			} else if (ch == '/' && peek() == '*') { // comment
				print.newLine();
				output.push(eatComment(), "\n", indentString);
			} else if (ch == '(') { // may be a url
				if (lookBack("url", -1)) {
				  output.push(ch);
				  eatWhitespace();
				  if (next()) {
					if (ch != ')' && ch != '"' && ch != '\'')
						output.push(eatString(')'));
					else
						pos--;
				  }
				} else {
				  if (isAfterSpace)
					  print.singleSpace();
				  output.push(ch);
				  eatWhitespace();
				}
			} else if (ch == ')') {
				output.push(ch);
			} else if (ch == ',') {
				eatWhitespace();
				output.push(ch);
				print.singleSpace();
			} else if (ch == ']') {
				output.push(ch);
			}  else if (ch == '[' || ch == '=') { // no whitespace before or after
				eatWhitespace();
				output.push(ch);
			} else {
				if (isAfterSpace)
					print.singleSpace();
	
				output.push(ch);
			}
		}
	
	
		var sweetCode = output.join('').replace(/[\n ]+$/, '');
		return sweetCode;
	}
	

	
	/*jslint onevar: false, plusplus: false */
	/*jshint curly:true, eqeqeq:true, laxbreak:true, noempty:false */
	