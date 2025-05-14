(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
var rect; // used to reference frame bounds
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.homepage = function() {
	this.initialize(img.homepage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,751,1624);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABOCMIAAgvIggAAIAAgfIA/AAIAAAvIAfAAIAAAfgAAQCMIAAgfIAeAAIAAAfgAiLCMIAAheIBdAAIAABegAh0B0IAvAAIAAguIgvAAgAgPBtIAAhOIAfAAIAABOgAhoBpIAAgYIAXAAIAAAYgABtA+IAAg+IAfAAIAAA+gABtA+gAAQAfIAAgfIA+AAIAAAfgAguAfIAAgfIgfAAIAAAfIgfAAIAAgfIgfAAIAAgeIAfAAIAAAeIAfAAIAAgeIBdAAIAAAeIgfAAIAAAfgABOAAIAAgeIAfAAIAAAegAAuguIAAhdIBeAAIAABdgABGhFIAuAAIAAgvIguAAgAgeguIAAg+IAeAAIAAAfIAfAAIAAAfgAiLguIAAhdIBdAAIAABdgAh0hFIAvAAIAAgvIgvAAgABRhRIAAgXIAYAAIAAAXgAhohRIAAgXIAXAAIAAAXgAAAhsIAAgfIAfAAIAAAfgAAAhsg");
	this.shape.setTransform(0.0166,0.0262,5.4551,5.4551);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-76.3,-76.3,152.8,152.8);
p.frameBounds = [rect];


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIkSXIAAh1IHnAAIAAlvIB6AAIAAHkgAyESXIAAnkIB1AAIAAFvIHsAAIAAB1gAQLqyIAAlvInnAAIAAh1IJhAAIAAHkgAyEqyIAAnkIJhAAIAAB1InsAAIAAFvg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-115.6,-117.5,231.4,235.1);
p.frameBounds = [rect];


(lib.line = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AweAiIAAhDMAg9AAAIAABDg");
	this.shape.setTransform(105.525,3.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.line, rect = new cjs.Rectangle(0,0,211.1,6.8), [rect]);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween4("synched",0);
	this.instance.setTransform(76.35,76.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, rect = new cjs.Rectangle(0,0,152.8,152.8), [rect]);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_1 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_2 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_3 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_4 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_5 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_6 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_7 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_8 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_9 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_10 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_11 = new cjs.Graphics().p("AqfNmIAA7LIbMAAIAAbLg");
	var mask_graphics_12 = new cjs.Graphics().p("AqfNwIAA7MIbMAAIAAbMg");
	var mask_graphics_13 = new cjs.Graphics().p("AqfOvIAA7MIbMAAIAAbMg");
	var mask_graphics_14 = new cjs.Graphics().p("AqfPuIAA7MIbMAAIAAbMg");
	var mask_graphics_15 = new cjs.Graphics().p("AtlNmIAA7LIbLAAIAAbLg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:106.925,y:-62.2}).wait(1).to({graphics:mask_graphics_1,x:106.925,y:-49.6}).wait(1).to({graphics:mask_graphics_2,x:106.925,y:-37}).wait(1).to({graphics:mask_graphics_3,x:106.925,y:-24.4}).wait(1).to({graphics:mask_graphics_4,x:106.925,y:-11.8}).wait(1).to({graphics:mask_graphics_5,x:106.925,y:0.8}).wait(1).to({graphics:mask_graphics_6,x:106.925,y:13.4}).wait(1).to({graphics:mask_graphics_7,x:106.925,y:26}).wait(1).to({graphics:mask_graphics_8,x:106.925,y:38.6}).wait(1).to({graphics:mask_graphics_9,x:106.925,y:51.2}).wait(1).to({graphics:mask_graphics_10,x:106.925,y:63.8}).wait(1).to({graphics:mask_graphics_11,x:106.925,y:76.4}).wait(1).to({graphics:mask_graphics_12,x:106.925,y:88.025}).wait(1).to({graphics:mask_graphics_13,x:106.925,y:94.325}).wait(1).to({graphics:mask_graphics_14,x:106.925,y:100.625}).wait(1).to({graphics:mask_graphics_15,x:126.8,y:126.8}).wait(40));

	// Layer_8
	this.instance = new lib.Symbol3();
	this.instance.setTransform(128.55,130.75,1,1,0,0,0,76.4,76.4);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(17).to({alpha:0},5).to({alpha:1},6).to({alpha:0},5).wait(21));

	// line
	this.instance_1 = new lib.line();
	this.instance_1.setTransform(127.55,21,1,1,0,0,0,105.5,3.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({y:48.25,alpha:0.9805},2).to({y:198.2},11).to({y:225.45,alpha:0},2).wait(39));

	// button_scan3_svg
	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(128,128);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.8764,scaleY:0.8764},3).to({startPosition:0},8).to({startPosition:0},18).to({startPosition:0},3).to({scaleX:1.0813,scaleY:1.0813},2).to({scaleX:0.6692,scaleY:0.6692,x:128.05,y:128.05},9).to({regX:-0.2,regY:-0.6,scaleX:1.2362,scaleY:1.2361,x:126.6,y:125.4},8).to({regX:0,regY:0,scaleX:1.0813,scaleY:1.0813,x:128,y:128},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(12.4,10.5,231.4,235.1);
p.frameBounds = [rect, new cjs.Rectangle(17.1,15.3,221.9,225.4), new cjs.Rectangle(21.9,20.2,212.3,215.7), rect=new cjs.Rectangle(22.1,25,211.1,206), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(14.9,13,226.5,230.1), new cjs.Rectangle(3,0.9,250.2,254.2), new cjs.Rectangle(8.3,6.3,239.6,243.4), new cjs.Rectangle(13.6,11.7,229,232.7), new cjs.Rectangle(18.9,17.1,218.4,221.9), new cjs.Rectangle(22.1,22.5,211.1,211.1), new cjs.Rectangle(22.1,27.9,211.1,201), new cjs.Rectangle(22.1,33.3,211.1,195.5), new cjs.Rectangle(22.1,38.7,211.1,190.1), new cjs.Rectangle(22.1,44,211.1,184.8), new cjs.Rectangle(22.1,49.4,211.1,179.4), new cjs.Rectangle(22.1,40.7,211.1,188.1), new cjs.Rectangle(22.1,32.1,211.1,196.7), new cjs.Rectangle(22.1,23.4,211.1,207.3), new cjs.Rectangle(17.1,14.7,220.5,224), new cjs.Rectangle(8.7,6.1,236.9,240.6), new cjs.Rectangle(0.3,-2.6,253.2,257.3), new cjs.Rectangle(-8.1,-11.2,269.6,273.9), new cjs.Rectangle(-16.1,-19.1,286,290.6), new cjs.Rectangle(-9.6,-12.3,274,278.5), new cjs.Rectangle(-3.2,-5.3,262.1,266.3), new cjs.Rectangle(3,0.9,250.2,254.2)];


// stage content:
(lib.demo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(357.65,1437.3,0.222,0.222,0,0,0,44.8,33.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.homepage();
	this.instance_1.setTransform(1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = rect = new cjs.Rectangle(376,812,751,1624);
p.frameBounds = [rect];
// library properties:
lib.properties = {
	id: '278B740F553E49A39C12339F5B67D73A',
	width: 750,
	height: 1624,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/homepage.png", id:"homepage"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['278B740F553E49A39C12339F5B67D73A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;