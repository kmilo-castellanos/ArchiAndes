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
	this.diagInstance= "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzNzFweCIgaGVpZ2h0PSI5NnB4IiB2aWV3Qm94PSItMC41IC0wLjUgMzcxIDk2IiBjb250ZW50PSImbHQ7bXhmaWxlIGV0YWc9JnF1b3Q7NTNITW1BS0lpMHEtLWdvMWVQaFYmcXVvdDsgYWdlbnQ9JnF1b3Q7TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTBfMTNfMSkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzgwLjAuMzk4Ny4xMDYgU2FmYXJpLzUzNy4zNiZxdW90OyBtb2RpZmllZD0mcXVvdDsyMDIwLTAyLTI3VDA0OjM1OjA1LjAyNlomcXVvdDsgaG9zdD0mcXVvdDt3d3cuZHJhdy5pbyZxdW90OyB2ZXJzaW9uPSZxdW90OzEyLjcuOCZxdW90OyZndDsmbHQ7ZGlhZ3JhbSBpZD0mcXVvdDtyVXV4dm1hbWROWjF6ckxYT2xfNiZxdW90OyBuYW1lPSZxdW90O1BhZ2UtMSZxdW90OyZndDt6VlpOYjlzd0RQMDFPWGJ3WitvYzg5VnVRRGNNeldGYmI0cXMyR3BsMFpDVk50bXZIeFhUc1oya1F6TjBiVThXbnloUjVPTWpQQWlueGViYXNETC9DcWxRZzhCTE40TndOZ2dDUDRpRytISEl0a2FpVVZJRG1aRXBPYlhBUXY0V0JIcUVybVVxcXA2akJWQldsbjJRZzlhQzJ4N0dqSUdudnRzS1ZEOXF5VEp4QkN3NFU4Zm9ENW5hdkVhVDJHdnh6MEptZVJQWjkyaW5ZSTB6QVZYT1VuanFRT0Y4RUU0TmdLMVh4V1lxbEN0ZVU1ZHYvdmRaRklTM0Yvck80MWt3bnQ5bDhxSys3T3FjSS9zVWpORDJuNjl1Q0tuc3RxbU5TTEZVWklLeE9XU2dtWnEzNk1UQVdxZkMzZUNoMWZyY0FKUUkrZ2plQzJ1M3hEdGJXMEFvdDRXaVhYeXgyZjUwNXovRmpmbUxydHNaczAzUDJwTDF3cFNwTkJXc0RhZWtMcW5KbU1rRUhSM1ZrRXUzMHhSVXBtc0JoY0RRNkdDRVlsWSs5anVIVVFObWU3KzJ5TGlnT3U5TVdONjdGZzQ4eFpaQzFjZSs2RXhVRmd3OTFQQWFwdndNV09DZ0RqQmV5N0FETmlSZWRoNU8vSGI0eEE0dDNaSkRVWUxlVlc3Q2xNdzBZa3FzbkZtVmpFdWQzZXlzV2VCMVBEZ2VFQWFCUjJHc1JBV05hY002cmljcnFkUVVGR2JpWW9WcExKSTBjamRhQXcraXM1TUV5M0E0eEIxTVRMR3lrc3ZkKy95eldYWHZFSnUvTWthN3dTVTFOdzJwSUNUN3FaWDhYdGg1Uis3TkdEaURaRFNKNTJjNVgwajk4RHA4SngrRzcxWENCZWVuK0Y0bWNSUjdiOHAzSEwwYjM4ZHp0WmxCSDJLdSt2OXRybzZPNTJyeWpuTjFqTlhhWXR0V2xGRlJ2RnhWb3cranFxdXJlVHdhblZMVmREb2NlbStycXNnN1VGWDBDcXFpYUxkSUlOTVo1ckFQRnliOWNQNEpFU2Nub2dVSDBaakNnbXRteGNTSnFqcnFvMzJpTDFBM211MFBYWDI2L1MwTzUzOEEmbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHBhdGggZD0iTSAxMDAgNDIgTCAxMjAgNDIgTCAxMjAgNyBMIDE4MCA3IEwgMTgwIDIwLjYzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTgwIDI1Ljg4IEwgMTc2LjUgMTguODggTCAxODAgMjAuNjMgTCAxODMuNSAxOC44OCBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTYgMTcgTCAxMDAgMTcgTCAxMDAgNjcgTCAxNiA2NyBMIDE2IDU4IEwgMCA1OCBMIDAgNDYgTCAxNiA0NiBMIDE2IDM4IEwgMCAzOCBMIDAgMjYgTCAxNiAyNiBaIiBmaWxsPSIjZDVlOGQ0IiBzdHJva2U9IiM4MmIzNjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTYgMjYgTCAzMiAyNiBMIDMyIDM4IEwgMTYgMzggTSAxNiA0NiBMIDMyIDQ2IEwgMzIgNTggTCAxNiA1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjODJiMzY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEycHgiPjx0ZXh0IHg9IjU5LjUiIHk9IjM0LjUiPkluZ2VzdG9yPC90ZXh0PjwvZz48cGF0aCBkPSJNIDI4NiAxNyBMIDM3MCAxNyBMIDM3MCA2NyBMIDI4NiA2NyBMIDI4NiA1OCBMIDI3MCA1OCBMIDI3MCA0NiBMIDI4NiA0NiBMIDI4NiAzOCBMIDI3MCAzOCBMIDI3MCAyNiBMIDI4NiAyNiBaIiBmaWxsPSIjZjhjZWNjIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMjg2IDI2IEwgMzAyIDI2IEwgMzAyIDM4IEwgMjg2IDM4IE0gMjg2IDQ2IEwgMzAyIDQ2IEwgMzAyIDU4IEwgMjg2IDU4IiBmaWxsPSJub25lIiBzdHJva2U9IiNiODU0NTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTJweCI+PHRleHQgeD0iMzI5LjUiIHk9IjM0LjUiPlNpbms8L3RleHQ+PC9nPjxwYXRoIGQ9Ik0gMjMwIDUyIEwgMjUwIDUyIEwgMjUwIDg3IEwgMzIwIDg3IEwgMzIwIDczLjM3IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMzIwIDY4LjEyIEwgMzIzLjUgNzUuMTIgTCAzMjAgNzMuMzcgTCAzMTYuNSA3NS4xMiBaIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTQ2IDI3IEwgMjMwIDI3IEwgMjMwIDc3IEwgMTQ2IDc3IEwgMTQ2IDY4IEwgMTMwIDY4IEwgMTMwIDU2IEwgMTQ2IDU2IEwgMTQ2IDQ4IEwgMTMwIDQ4IEwgMTMwIDM2IEwgMTQ2IDM2IFoiIGZpbGw9IiNmZmU1OTkiIHN0cm9rZT0iI2NjNjYwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxNDYgMzYgTCAxNjIgMzYgTCAxNjIgNDggTCAxNDYgNDggTSAxNDYgNTYgTCAxNjIgNTYgTCAxNjIgNjggTCAxNDYgNjgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjNjYwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxMnB4Ij48dGV4dCB4PSIxODkuNSIgeT0iNDQuNSI+QW5hbHl0aWNzPC90ZXh0PjwvZz48L2c+PC9zdmc+";
	console.log(this.diagInstance);
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

/**
 * CSS style for the iframe.
 */
DiagramEditor.prototype.frameStyle = 'position:absolute;border:0;top:60px!important;width:100%;height:100%;';

/**
 * Adds the iframe and starts editing.
 */
DiagramEditor.prototype.editElement = function(elem)
{
	var src = this.getElementData(elem);
	this.startElement = elem;
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
	console.log(src);
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
		this.save(msg.xml, true, this.startElement);
	}
	else if (msg.event == 'export')
	{
		this.save(msg.data, false, this.startElement);
		this.stopEditing();
	}
	else if (msg.event == 'save')
	{
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
DiagramEditor.prototype.save = function(data, draft, elt)
{
	if (elt != null && !draft)
	{
		this.setElementData(elt, data);
		DiagramEditor.diagInstance=data;
		console.log(this.formType)
		console.log(data.length);
		var formName="#AddDEForm";
		if (this.formType!='addDiagram'){
			formName="#EditDEForm";
		}
		document.querySelector(formName + " > div.ui.segment.af-fieldGroup > input[type=hidden]").value=data;
		this.done(data, draft, elt);
	}
};

/*DiagramEditor.getDiagInstance = function()
{
	return this.diagInstance;
};*/

/**
 * Invoked after save.
 */
DiagramEditor.prototype.done = function()
{
	// hook for subclassers
};
