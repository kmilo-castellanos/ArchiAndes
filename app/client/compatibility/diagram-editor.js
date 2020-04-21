/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, Gaudenz Alder
 *
 * Usage: DiagramEditor.editElement(elt) where elt is an img or object with
 * a data URI src or data attribute or an svg node with a content attribute.
 *
 * See https://jgraph.github.io/drawio-integration/javascript.html
 */
function DiagramEditor(config, ui, done)
{
	this.config = (config != null) ? config : this.config;
	this.done = (done != null) ? done : this.done;
	this.ui = (ui != null) ? ui : this.ui;
	var self = this;
	//this.diagInstance= "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNzFweCIgaGVpZ2h0PSI5NnB4IiB2aWV3Qm94PSItMC41IC0wLjUgMzcxIDk2IiBjb250ZW50PSImbHQ7bXhmaWxlIGV0YWc9JnF1b3Q7NTNITW1BS0lpMHEtLWdvMWVQaFYmcXVvdDsgYWdlbnQ9JnF1b3Q7TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTNfMSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgwLjAuMzk4Ny4xMDYgU2FmYXJpLzUzNy4zNiZxdW90OyBtb2RpZmllZD0mcXVvdDsyMDIwLTAyLTI3VDA0OjM1OjA1LjAyNlomcXVvdDsgaG9zdD0mcXVvdDt3d3cuZHJhdy5pbyZxdW90OyB2ZXJzaW9uPSZxdW90OzEyLjcuOCZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtyVXV4dm1hbWROWjF6ckxYT2xfNiZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDt6VlpOYjlzd0RQMDFPWGJ3WitvYzg5VnVRRGNNeldGYmI0cXMyR3BsMFpDVk50bXZIeFhUc1oya1F6TjBiVThXbnloUjVPTWpQQWlueGViYXNETC9DcWxRZzhCTE40TndOZ2dDUDRpRytISEl0a2FpVVZJRG1aRXBPYlhBUXY0V0JIcUVybVVxcXA2akJWQldsbjJRZzlhQzJ4N0dqSUdudnRzS1ZEOXF5VEp4QkN3NFU4Zm9ENW5hdkVhVDJHdnh6MEptZVJQWjkyaW5ZSTB6QVZYT1VuanFRT0Y4RUU0TmdLMVh4V1lxbEN0ZVU1ZHYvdmRaRklTM0Yvck80MWt3bnQ5bDhxSys3T3FjSS9zVWpORDJuNjl1Q0tuc3RxbU5TTEZVWklLeE9XU2dtWnEzNk1UQVdxZkMzZUNoMWZyY0FKUUkrZ2plQzJ1M3hEdGJXMEFvdDRXaVhYeXgyZjUwNXovRmpmbUxydHNaczAzUDJwTDF3cFNwTkJXc0RhZWtMcW5KbU1rRUhSM1ZrRXUzMHhSVXBtc0JoY0RRNkdDRVlsWSs5anVIVVFObWU3KzJ5TGlnT3U5TVdONjdGZzQ4eFpaQzFjZSs2RXhVRmd3OTFQQWFwdndNV09DZ0RqQmV5N0FETmlSZWRoNU8vSGI0eEE0dDNaSkRVWUxlVlc3Q2xNdzBZa3FzbkZtVmpFdWQzZXlzV2VCMVBEZ2VFQWFCUjJHc1JBV05hY002cmljcnFkUVVGR2JpWW9WcExKSTBjamRhQXcraXM1TUV5M0E0eEIxTVRMR3lrc3ZkKy95eldYWHZFSnUvTWthN3dTVTFOdzJwSUNUN3FaWDhYdGg1Uis3TkdEaURaRFNKNTJjNVgwajk4RHA4SngrRzcxWENCZWVuK0Y0bWNSUjdiOHAzSEwwYjM4ZHp0WmxCSDJLdSt2OXRybzZPNTJyeWpuTjFqTlhhWXR0V2xGRlJ2RnhWb3cranFxdXJlVHdhblZMVmREb2NlbStycXNnN1VGWDBDcXFpYUxkSUlOTVo1ckFQRnliOWNQNEpFU2Nub2dVSDBaakNnbXRteGNTSnFqcnFvMzJpTDFBM211MFBYWDI2L1MwTzUzOEEmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHBhdGggZD0iTSAxMDAgNDIgTCAxMjAgNDIgTCAxMjAgNyBMIDE4MCA3IEwgMTgwIDIwLjYzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTgwIDI1Ljg4IEwgMTc2LjUgMTguODggTCAxODAgMjAuNjMgTCAxODMuNSAxOC44OCBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTYgMTcgTCAxMDAgMTcgTCAxMDAgNjcgTCAxNiA2NyBMIDE2IDU4IEwgMCA1OCBMIDAgNDYgTCAxNiA0NiBMIDE2IDM4IEwgMCAzOCBMIDAgMjYgTCAxNiAyNiBaIiBmaWxsPSIjZDVlOGQ0IiBzdHJva2U9IiM4MmIzNjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTYgMjYgTCAzMiAyNiBMIDMyIDM4IEwgMTYgMzggTSAxNiA0NiBMIDMyIDQ2IEwgMzIgNTggTCAxNiA1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODJiMzY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiPjx0ZXh0IHg9IjU5LjUiIHk9IjM0LjUiPkluZ2VzdG9yPC90ZXh0PjwvZz48cGF0aCBkPSJNIDI4NiAxNyBMIDM3MCAxNyBMIDM3MCA2NyBMIDI4NiA2NyBMIDI4NiA1OCBMIDI3MCA1OCBMIDI3MCA0NiBMIDI4NiA0NiBMIDI4NiAzOCBMIDI3MCAzOCBMIDI3MCAyNiBMIDI4NiAyNiBaIiBmaWxsPSIjZjhjZWNjIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMjg2IDI2IEwgMzAyIDI2IEwgMzAyIDM4IEwgMjg2IDM4IE0gMjg2IDQ2IEwgMzAyIDQ2IEwgMzAyIDU4IEwgMjg2IDU4IiBmaWxsPSJub25lIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTJweCI+PHRleHQgeD0iMzI5LjUiIHk9IjM0LjUiPlNpbms8L3RleHQ+PC9nPjxwYXRoIGQ9Ik0gMjMwIDUyIEwgMjUwIDUyIEwgMjUwIDg3IEwgMzIwIDg3IEwgMzIwIDczLjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMzIwIDY4LjEyIEwgMzIzLjUgNzUuMTIgTCAzMjAgNzMuMzcgTCAzMTYuNSA3NS4xMiBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTQ2IDI3IEwgMjMwIDI3IEwgMjMwIDc3IEwgMTQ2IDc3IEwgMTQ2IDY4IEwgMTMwIDY4IEwgMTMwIDU2IEwgMTQ2IDU2IEwgMTQ2IDQ4IEwgMTMwIDQ4IEwgMTMwIDM2IEwgMTQ2IDM2IFoiIGZpbGw9IiNmZmU1OTkiIHN0cm9rZT0iI2NjNjYwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxNDYgMzYgTCAxNjIgMzYgTCAxNjIgNDggTCAxNDYgNDggTSAxNDYgNTYgTCAxNjIgNTYgTCAxNjIgNjggTCAxNDYgNjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjNjYwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4Ij48dGV4dCB4PSIxODkuNSIgeT0iNDQuNSI+QW5hbHl0aWNzPC90ZXh0PjwvZz48L2c+PC9zdmc+";
	//console.log("DiagramEditor constr");
	this.handleMessageEvent = function(evt)
	{
		if (self.frame != null && evt.source == self.frame.contentWindow &&
			evt.data.length > 0)
		{
			try
			{
				var msg = JSON.parse(evt.data);

				if (msg != null)
				{
					self.handleMessage(msg);
				}
			}
			catch (e)
			{
				console.error(e);
			}
		}
	};
};

/**
 * Static method to edit the diagram in the given img or object.
 */
DiagramEditor.editElement = function(elt, config, ui, done)
{
	//console.log("DiagramEditor.editElement");

	//console.log(config);
	return new DiagramEditor(config, ui, done).editElement(elt);
};

/**
 * Global configuration.
 */
DiagramEditor.prototype.config = null;

/**
 * Protocol and domain to use.
 */
DiagramEditor.prototype.drawDomain = 'https://www.draw.io/';

/**
 * UI theme to be use.
 */
//DiagramEditor.prototype.ui = 'min';

/**
 * Format to use.
 */
DiagramEditor.prototype.format = 'xml';

/**
 * Specifies if libraries should be enabled.
 */
DiagramEditor.prototype.libraries = true;

//libraries: Sidebar.prototype.defaultEntries,
//			customLibraries: Editor.defaultCustomLibraries,
//			plugins: [],

/**
 * CSS style for the iframe.
 */
DiagramEditor.prototype.frameStyle = 'position:absolute;border:0;top:60px!important;width:100%;height:100%;';

/**
 * Adds the iframe and starts editing.
 */
DiagramEditor.prototype.editElement = function(elem)
{
	//console.log("DiagramEditor.prototype.editElement");
	this.startElement = elem;
	this.elem_bkp=Object.assign({}, elem);
	var src = this.getElementData(elem);
	//reading the origin form name from img.id that called this functions
	this.formType=elem.id;
	var fmt = this.format;

	if (src.substring(0, 15) === 'data:image/png;')
	{
		fmt = 'xmlpng';
	}
	else if (src.substring(0, 19) === 'data:image/svg+xml;' ||
		elem.nodeName.toLowerCase() == 'svg')
	{
		fmt = 'xmlsvg';
	}
	//console.log(src);
	this.startEditing(src, fmt);

	return this;
};

/**
 * Adds the iframe and starts editing.
 */
DiagramEditor.prototype.getElementData = function(elem)
{
	var name = elem.nodeName.toLowerCase();

	return elem.getAttribute((name == 'svg') ? 'content' :
		((name == 'img') ? 'src' : 'data'));
};

/**
 * Adds the iframe and starts editing.
 */
DiagramEditor.prototype.setElementData = function(elem, data)
{
	var name = elem.nodeName.toLowerCase();

	if (name == 'svg')
	{
		elem.outerHTML = atob(data.substring(data.indexOf(',') + 1));
	}
	else
	{
		elem.setAttribute((name == 'img') ? 'src' : 'data', data);
	}

	return elem;
};

/**
 * Starts the editor for the given data.
 */
DiagramEditor.prototype.startEditing = function(data, format, title)
{
	if (this.frame == null)
	{
		window.addEventListener('message', this.handleMessageEvent);
		this.format = (format != null) ? format : this.format;
		this.title = (title != null) ? title : this.title;
		this.data = data;

		this.frame = this.createFrame(
			this.getFrameUrl(),
			this.getFrameStyle());
		document.body.appendChild(this.frame);
		this.setWaiting(true);
	}
};

/**
 * Updates the waiting cursor.
 */
DiagramEditor.prototype.setWaiting = function(waiting)
{
	if (this.startElement != null)
	{
		// Redirect cursor to parent for SVG and object
		var elt = this.startElement;
		var name = elt.nodeName.toLowerCase();
		
		if (name == 'svg' || name == 'object')
		{
			elt = elt.parentNode;
		}
		
		if (elt != null)
		{
			if (waiting)
			{
				this.frame.style.pointerEvents = 'none';
				this.previousCursor = elt.style.cursor;
				elt.style.cursor = 'wait';
			}
			else
			{
				elt.style.cursor = this.previousCursor;
				this.frame.style.pointerEvents = '';
			}
		}
	}
};

/**
 * Updates the waiting cursor.
 */
DiagramEditor.prototype.setActive = function(active)
{
	if (active)
	{
		this.previousOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
	}
	else
	{
		document.body.style.overflow = this.previousOverflow;
	}
};

/**
 * Removes the iframe.
 */
DiagramEditor.prototype.stopEditing = function()
{
	if (this.frame != null)
	{
		window.removeEventListener('message', this.handleMessageEvent);
		document.body.removeChild(this.frame);
		this.setActive(false);
		this.frame = null;
	}
};

/**
 * Send the given message to the iframe.
 */
DiagramEditor.prototype.postMessage = function(msg)
{
	if (this.frame != null)
	{
		this.frame.contentWindow.postMessage(JSON.stringify(msg), '*');
	}
};

/**
 * Returns the diagram data.
 */
DiagramEditor.prototype.getData = function()
{
	return this.data;
};

/**
 * Returns the title for the editor.
 */
DiagramEditor.prototype.getTitle = function()
{
	return this.title;
};

/**
 * Returns the CSS style for the iframe.
 */
DiagramEditor.prototype.getFrameStyle = function()
{
	return this.frameStyle + ';left:' +
		document.body.scrollLeft + 'px;top:' +
		document.body.scrollTop + 'px;';
};

/**
 * Returns the URL for the iframe.
 */
DiagramEditor.prototype.getFrameUrl = function()
{
	var url = this.drawDomain + '?embed=1&proto=json&spin=1';

	if (this.ui != null)
	{
		url += '&ui=' + this.ui;
	}

	if (this.libraries != null)
	{
		url += '&libraries=1';
	}

	if (this.config != null)
	{
		url += '&configure=1';
	}

	return url;
};

/**
 * Creates the iframe.
 */
DiagramEditor.prototype.createFrame = function(url, style)
{
	var frame = document.createElement('iframe');
	frame.setAttribute('frameborder', '0');
	frame.setAttribute('style', style);
	frame.setAttribute('src', url);

	return frame;
};

/**
 * Sets the status of the editor.
 */
DiagramEditor.prototype.setStatus = function(messageKey, modified)
{
	this.postMessage({action: 'status', messageKey: messageKey, modified: modified});
};

/**
 * Handles the given message.
 */
DiagramEditor.prototype.handleMessage = function(msg)
{
	//console.log(msg);
	if (msg.event == 'configure')
	{
		this.configureEditor();
	}
	else if (msg.event == 'init')
	{
		this.initializeEditor();
	}
	else if (msg.event == 'autosave')
	{
		//console.log("Msg Autosave:");
		//console.log(msg.xml);
		this.save(msg.xml, true, this.startElement);

	}
	else if (msg.event == 'export')
	{
		//console.log("Msg Export:");
		//console.log(msg.xml);
		//console.log(msg.data);
		this.save(msg,false, this.startElement);
		this.stopEditing();
	}
	else if (msg.event == 'save')
	{
		this.saving=true;
		//console.log("this.saving=true");
		if (msg.exit)
		{
			msg.event = 'exit';
		}
		else
		{
			this.setStatus('allChangesSaved', false);
		}
	}

	if (msg.event == 'exit')
	{
		
		if (this.format != 'xml' && !msg.modified)
		{		
			this.postMessage({action: 'export', format: this.format,
				xml: msg.xml, spinKey: 'export'});
		}
		else
		{
			this.save(msg.xml, false, this.startElement);
			this.stopEditing(msg);
		}
	}
};

/**
 * Posts configure message to editor.
 */
DiagramEditor.prototype.configureEditor = function()
{
	this.postMessage({action: 'configure', config: this.config});
};

/**
 * Posts load message to editor.
 */
DiagramEditor.prototype.initializeEditor = function()
{
	this.postMessage({action: 'load',autosave: 1, saveAndExit: '1',
		modified: 'unsavedChanges', xml: this.getData(),
		title: this.getTitle()});
	this.setWaiting(false);
	this.setActive(true);
};

/**
 * Saves the given data.
 */
DiagramEditor.prototype.save = function(msg, draft, elt)
{
	if (elt != null && !draft)
	{
		//console.log("saving?:"+this.saving);
		if(this.saving){
			this.setElementData(elt, msg.data);
			//console.log(msg.xml);
			plainXml=decodeXML(msg.xml);
			//console.log(plainXml);

			//var xml = window.atob(data.substring(data.indexOf(',') + 1));
			//console.log(xml);
			//defining the origin form name to assign the data and xml

			var formName="#AddMOForm";
			if (this.formType!='addDiagram'){
				formName="#EditMOForm";
			}
			
			//console.log("Saving data");
			document.querySelector(formName + " > input[type=hidden]:nth-child(1)").value=plainXml;
			document.querySelector(formName + " > input[type=hidden]:nth-child(2)").value=msg.data;
		}
	
		this.done(msg.data, draft, elt);
	}
};

/*DiagramEditor.getDiagInstance = function()
{
	return this.diagInstance;
};*/

function decodeXML(xml){

	startIndex=xml.indexOf('<diagram');
	//console.log("decoding")
	//console.log(startIndex);
	if(startIndex>0){ 	
		startIndex=xml.indexOf(">",startIndex);
		//console.log(startIndex);
		endIndex=xml.indexOf('</diagram>');
		//console.log(endIndex);
		//console.log(xml.substring(startIndex + 1,endIndex));
		var plainXml = decode(xml.substring(startIndex + 1,endIndex));
		//console.log(plainXml);
		return plainXml;
	}else{
		return	"";
	}	
}

/**
 * Invoked after save.
 */
DiagramEditor.prototype.done = function()
{
	// hook for subclassers
};

/** 
 * Utils for decode XML
 *  **/
var Base64 = {

	// private property
	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	// public method for encoding
	encode : function (input, binary) {
		binary = (binary != null) ? binary : false;
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		if (!binary)
		{
			input = Base64._utf8_encode(input);
		}

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	// public method for decoding
	decode : function (input, binary) {
		binary = (binary != null) ? binary : false;
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		if (!binary)
		{
			output = Base64._utf8_decode(output);
		}

		return output;

	},

	// private method for UTF-8 encoding
	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	// private method for UTF-8 decoding
	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

}


function stringToBytes(str)
{
	var arr = new Array(str.length);

	for (var i = 0; i < str.length; i++)
	{
		arr[i] = str.charCodeAt(i);
	}

	return arr;
};
	
function bytesToString(arr)
{
	var str = '';

	for (var i = 0; i < arr.length; i++)
	{
		str += String.fromCharCode(arr[i]);
	}

	return str;
};

	
	
function removeLinebreaks(data)
{
	document.getElementById('textarea').value = data.replace(/(\r\n|\n|\r)/gm, '');
};

function decode(data)
{
	/*try
	{
		var node = parseXml(data).documentElement;

		if (node != null && node.nodeName == 'mxfile')
		{
			var diagrams = node.getElementsByTagName('diagram');

			if (diagrams.length > 0)
			{
				data = getTextContent(diagrams[0]);
			}
		}
	}
	catch (e)
	{
		// ignore
	}*/


	try
	{
		data = atob(data);
	}
	catch (e)
	{
		console.log(e);
		alert('atob failed: ' + e);

		return;
	}

	try
	{
		data = bytesToString(pako.inflateRaw(data));
	}
	catch (e)
	{
		console.log(e);
		alert('inflateRaw failed: ' + e);

		return;
	}

	try
	{
		data = decodeURIComponent(data);
	}
	catch (e)
	{
		console.log(e);
		alert('decodeURIComponent failed: ' + e);

		return;
	}


	if (data.length > 0)
	{
		return data;
		//document.getElementById('textarea').value = data;
	}
};
	
function parseXml(xml)
{
	if (window.DOMParser)
	{
		var parser = new DOMParser();

		return parser.parseFromString(xml, 'text/xml');
	}
	else
	{
		var result = createXmlDocument();

		result.async = 'false';
		result.loadXML(xml);

		return result;
	}
};

function createXmlDocument()
{
	var doc = null;

	if (document.implementation && document.implementation.createDocument)
	{
		doc = document.implementation.createDocument('', '', null);
	}
	else if (window.ActiveXObject)
	{
		doc = new ActiveXObject('Microsoft.XMLDOM');
	}

	return doc;
};

function decodeFromUri()
{
	try
	{
		document.getElementById('textarea').value = decodeURIComponent(document.getElementById('textarea').value)
	}
	catch (e)
	{
		console.log(e);
		alert('decodeURIComponent failed: ' + e);
	}
};

function getTextContent(node)
{
	return (node != null) ? node[(node.textContent === undefined) ? 'text' : 'textContent'] : '';
};

function normalizeXml()
{
	try
	{
	var str = document.getElementById('textarea').value;
	str = str.replace(/>\s*/g, '>');  // Replace "> " with ">"
	str = str.replace(/\s*</g, '<');  // Replace "< " with "<"
	document.getElementById('textarea').value = str;
	}
	catch (e)
	{
	alert(e.message);
	}
};
	