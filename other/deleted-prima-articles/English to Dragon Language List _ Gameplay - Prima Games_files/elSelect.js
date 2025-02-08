var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/**
* @file elSelect.js
* @downloaded from http://www.cult-f.net/2007/12/14/elselect/
* @author Sergey Korzhov aka elPas0
* @site  http://www.cult-f.net
* @date December 14, 2007
* 
*/
var elSelect = new Class({
	options: {
		container: false,
		baseClass : 'elSelect'
	},
	source : false,
	selected : false,
	_select : false,
	current : false,
	selectedOption : false,
	dropDown : false,
	optionsContainer : false,
	hiddenInput : false,
	/*
	pass the options,
	create html and inject into container
	*/
	initialize: function(options){
		this.setOptions(options)
		
		if ( !this.options.container ) return
		
		this.selected = false;
		this.source = document.id(this.options.container).getElement('select');
		this.buildFrameWork();
		
		document.id(this.source).getElements('option').each( this.addOption, this );
		document.id(this.options.container).set('html', '');
		this._select.injectInside(document.id(this.options.container));
		
		this.autosubmit = (document.id(this.options.container).hasClass("autosubmit"))? true : false;
		
		this.bindEvents();
		
	},
	
	buildFrameWork : function() {
		this._select = new Element('div').addClass( this.options.baseClass )
		this.current = new Element('div').addClass('selected').injectInside(document.id(this._select))
		this.selectedOption = new Element('div').addClass('selectedOption').injectInside(document.id(this.current))
		this.dropDown = new Element('div').addClass('dropDown').injectInside(document.id(this.current))
		new Element('div').addClass('clear').injectInside(document.id(this._select))
		this.optionsContainer = new Element('div').addClass('optionsContainer').injectInside(document.id(this._select))
		var t = new Element('div').addClass('optionsContainerTop').injectInside(document.id(this.optionsContainer))
		var o = new Element('div').injectInside(document.id(t))
		var p = new Element('div').injectInside(document.id(o))
		var t = new Element('div').addClass('optionsContainerBottom').injectInside(document.id(this.optionsContainer))
		var o = new Element('div').injectInside(document.id(t))
		var p = new Element('div').injectInside(document.id(o))

		this.hiddenInput = new Element('input', {'type':'hidden', 'name': this.source.get('name')}).injectInside(document.id(this.options.container).getParent("form"));
				
	},
	
	bindEvents : function() {
		document.addEvent('click', function() { 
				if ( this.optionsContainer.getStyle('display') == 'block') 
					this.onDropDown()
			}.bind(this));
			
		document.id(this.options.container).addEvent( 'click', function(e) { new Event(e).stop(); } )		
		this.current.addEvent('click', this.onDropDown.bindWithEvent(this) )
		
	},
	
	//add single option to select
	addOption: function( option ){
    	var o = new Element('div').addClass('option').setProperty('value',option.value)
		if ( option.disabled ) { o.addClass('disabled') } else {
			o.addEvents( {
				'click': this.onOptionClick.bindWithEvent(this),
				'mouseout': this.onOptionMouseout.bindWithEvent(this),
				'mouseover': this.onOptionMouseover.bindWithEvent(this)
			})
		}
		
		if ( $defined(option.getProperty('class')) && $chk(option.getProperty('class')) ) 
			o.addClass(option.getProperty('class'))

	
		if ( option.selected ) { 
			if ( this.selected) this.selected.removeClass('selected');
			this.selected = o
			o.addClass('selected')
			this.selectedOption.set('text', option.text);
			this.hiddenInput.setProperty('value',option.value);
		}
		o.set('text', option.text)		
		o.injectBefore(document.id(this.optionsContainer).getLast())
	},
	
	onDropDown : function( e ) {
			var self = this;
			dropdowns.each(function(dd){
				if (self.options.container !== dd.options.container) dd.optionsContainer.setStyle('display','none')
			});
			
			if ( this.optionsContainer.getStyle('display') == 'block') {
				this.optionsContainer.setStyle('display','none')
			} else {
				this.optionsContainer.setStyle('display','block')
				this.selected.addClass('selected')
				//needed to fix min-width in ie6
				var width =  this.optionsContainer.getStyle('width').toInt() > this._select.getStyle('width').toInt() ?
															this.optionsContainer.getStyle('width')
															:
															this._select.getStyle('width')
															
				if(this.options.container == "sort_by") width = 280;
				else if(this.options.container == "platform") width = 120;
				else if(this.options.container == "guide_format") width = 120;
				else if(this.options.container == "release_date") width = 120;
				else if(this.options.container == "devpub") width = 160;
				
				else width = 191;	
															
				this.optionsContainer.setStyle('width', width)
				this.optionsContainer.getFirst().setStyle('width', width)
				this.optionsContainer.getLast().setStyle('width', width)
			}						
	},
	onOptionClick : function(e) {
		var event = new Event(e)
		if ( this.selected != event.target ) {
			this.selected.removeClass('selected')
			event.target.addClass('selected')
			this.selected = event.target
			this.selectedOption.set('text', this.selected.get('text'));
			this.hiddenInput.setProperty('value',this.selected.getProperty('value'));
			
			if(this.autosubmit) document.id(this.options.container).getParent("form").submit();
		}
		this.onDropDown()
	},
	onOptionMouseover : function(e){
		var event = new Event(e)
		this.selected.removeClass('selected')
		event.target.addClass('selected')
	},
	onOptionMouseout : function(e){
		var event = new Event(e)
		event.target.removeClass('selected')
	}
	
});
elSelect.implement(new Events);
elSelect.implement(new Options);


}
/*
     FILE ARCHIVED ON 21:03:00 Nov 05, 2015 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:29:02 Dec 14, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.624
  exclusion.robots: 0.023
  exclusion.robots.policy: 0.011
  esindex: 0.011
  cdx.remote: 6.107
  LoadShardBlock: 86.394 (3)
  PetaboxLoader3.datanode: 61.893 (4)
  PetaboxLoader3.resolve: 460.523 (2)
  load_resource: 440.578
*/