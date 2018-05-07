(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.bg_clear = function() {
	this.initialize(img.bg_clear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.katespade = function() {
	this.initialize(img.katespade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,120,182);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,1219);


(lib.phone_ending = function() {
	this.initialize(img.phone_ending);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,500);


(lib.pic_clear = function() {
	this.initialize(img.pic_clear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,126,180);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.transition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.transition, new cjs.Rectangle(0,0,300,250), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E594FB").s().p("AiaAIIAAgQIE1AAIAAAQg");
	this.shape.setTransform(215.2,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E594FB").s().p("AiaAIIAAgQIE1AAIAAAQg");
	this.shape_1.setTransform(-26.9,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3BbIAAgHIgoAAIAAAHIgTAAIAAhLIgGAEIgIgLIgFgGQAXgIAVgPQgIgJgGgLIgOAOIgKgOIAAAYIgTAAIAAAZIASAAIAAATIgSAAIAAAdIAWgIIAAAUQgjANglAJIgFgUIAIgCIAAhEIASAAIAABAIAKgDIAAhOIgbAAIAAhEIBBAAIAAAoQAXgUAIgaIAUAEIgEALIAtAAIAAAPQgJAYgQAQQAQANAaAJIgLARIgGgDIAABLgAAPBCIAoAAIAAggIgoAAgAgBAPIBKAAQgXgJgPgMQgQAMgUAJgAATg2QAFAJALANQAMgOAGgLIghAAgAg/gjIAaAAIAAgeIgaAAg");
	this.shape_2.setTransform(179,12,1.286,1.286);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhaBNQANgZAMgFQAFgLAEgRIgcAAIAAgQQAQgSAHgJIgaAAIAAgTIAwAAIAAAQQgKARgLALIAXAAIAAAOQgEAWgFANIAFADQAJAIAIAEQAIADAQABIBbgBIgEATIhXgBQgUAAgKgEQgLgEgMgLQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQgGAAgNAagAARA8IAAgfIgYAAIAAAfIgTAAIAAhqIAqAAIgTgMIAJgKIgkAAIAAgRIBsAAIAAAOQgSAPgSAKIAoAAIAABXQAAASgSAAIgRAAIgEgRIAPABQAFAAAAgGIAAgIIgbAAIAAAfgAAkAMIAbAAIAAgMIgbAAgAgHAMIAYAAIAAgMIgYAAgAAkgQIAbAAIAAgNIgbAAgAgHgQIAYAAIAAgNIgYAAgAAeg3IAUgNIgnAAgAhShNIANgNQAUAQAKAMIgNAOQgLgOgTgPg");
	this.shape_3.setTransform(151.1,12.1,1.286,1.286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaBLQAcgdAJguIAUADQgFAUgEALQAOAWAUAHIABAAIAAhMIgyAAIAAgUIB1AAIAAAUIgwAAIAAAaIA4AAIAAAUIg4AAIAAAiQAVADAcAAQAPAAAPgBIgEAUIgRAAQg+AAgbgLQgRgIgOgRQgLAXgQAQgAhRgYIAAgvIBJAAIgJgQIAVgEIAIAUIBIAAIAAAuIgUAAIAAgbIh9AAIAAAcg");
	this.shape_4.setTransform(123.1,11.9,1.286,1.286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABABbIAAgIIg2AAIAAAIIgUAAIAAhfIBeAAIAABfgAAKBBIA2AAIAAgRIg2AAgAAKAeIA2AAIAAgRIg2AAgAhQBZIgEgTIASABQAGAAAAgHIAAgoIgXAHIgFgVIAcgHIAAgmIgYAAIAAgUIAYAAIAAgjIAUAAIAAAjIAUAAIAAAUIgUAAIAAAgIAWgJIAAAUIgWAJIAAA0QAAAUgTAAgAAEgTQgPAAAAgRIAAg1IASAAIAAAPIBPgDIAAASIhPADIAAAMQAAAHAHAAIBLAAIAAASg");
	this.shape_5.setTransform(95,12.1,1.286,1.286);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyBdIAAhGIgiAAIAAgTIAiAAIAAgPIglAAIAAgTIAUAAIgIgSIASgHIAIAZIARAAQAFgLADgOIASAHQgDALgEAHIASAAIAAATIgjAAIAAAPIAgAAIAAATIggAAIAABGgAA2BcIAAhmIgVAAIAAASQgCA1gVAfIgOgQQAQgYABgsIAAhUQAkgBAdgLIAKASQgaAJgdABIAAAfIA7AAIAAATIgSAAIAABmgAhbBMQANgWAFgYIASAEQgHAfgMAVgAgaAiIARgFQAIAVACANIgQAHQgFgVgGgPgAhVg4IAAgSIAiAAIgIgOIAVgEIAHASIAjAAIAAASg");
	this.shape_6.setTransform(67.4,11.9,1.286,1.286);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhA/IAKgPQAaALAXAQIgLARQgYgUgYgJgAgjBJQAdgHANgOIAGgIIgrAAIAAgTIAMAAIAAg6IgDADIgLgNIAAAHIgPAAIAAAgIARgJIAAATIgRAJIAAA2QAAAUgSABIgRAAIgFgVIAPABQAFABAAgHIAAgpIgTAHIgFgUIAYgHIAAgnIgUAAIAAgUIAUAAIAAghIAUAAIAAAhIAPAAIAAAKQAWgQAPgdIATAFIgEAHIArAAIAAAOQgIANgHAFIAgAAIAABIIALAAIAAATIg5AAQgFAMgHAJQgPAQgjAJgAApAPIgBAKIAVAAIAAg3Ig9AAIAAA3IAVAAQACgHAAgFgAgDgvIAcAAIAPgPIgfAAgAADADQASgKAFgVIAPADIgEALQAMAIAJAJIgJALQgJgKgKgFQgGALgLAGg");
	this.shape_7.setTransform(39.7,12,1.286,1.286);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhEBcIAAhCQAhAAAggGIAHAOQgZAEgbACIAAAIIAsAAIAAAOIgsAAIAAAJIBoAAIAAgJIgrAAIAAgOIArAAIAAgJIgrAAIAAgOIA/AAIAABCIgUAAIAAgFIhoAAIAAAGgAhAASIAAglIgSAQIgGgSQAYgUAKgXIARAEIgDAHIAmAAIgEgKIASgDIAEANIA+AAIAAAOIg9AAIAAAHIA3AAIAAAMIg3AAIAAAHIA3AAIAAAMIg3AAIAAAFIBCAAIAAAOgAguAEIAuAAIAAgFIguAAgAgugNIAuAAIAAgHIguAAgAguggIAuAAIAAgHIguAAgAARg7IAAggIATAAIAAAIIA1AAIAAAQIg1AAIAAAIgAgcg7IAAgIIg2AAIAAgQIA2AAIAAgIIATAAIAAAgg");
	this.shape_8.setTransform(11.4,12,1.286,1.286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-42.4,0,273.1,23.9), null);


(lib.text_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXCEQgogBAAgkIAAh8IDAAAIAAhHIjEAAIAAgeIDlAAIAACDIjAAAIAABRQAAASAWAAICOAAQATAAAFgMQAFgQABgfIAgAKQgFAxgLAQQgJAPggABg");
	this.shape.setTransform(219.1,13.1,0.885,0.885);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABLCQIAAgRIiVAAIAAARIghAAIAAj8IBDAAQAKgRAFgSIAfAFQgEAQgHAOIBxAAIAAD8gAhKBgICVAAIAAgoIiVAAgAhKAaICVAAIAAglIiVAAgAhKgpICVAAIAAgkIiVAAg");
	this.shape_1.setTransform(188.7,12.9,0.885,0.885);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYB4IANgVIhLAAIAOAUQgiAOg+AKIgQgaQA2gHAigLIg0AAIAAhyIDNAAIAAByIguAAQAxAKAdAKIgRAaQgvgQgxgJgAhFBOICPAAIAAgLIiPAAgAhFAvICPAAIAAgJIiPAAgAhFASICPAAIAAgLIiPAAgAhTgYIAAg1ICrAAIAAA1gAg0gtIBtAAIAAgLIhtAAgABngyIAAglIjJAAIAAAkIggAAIAAg+IAwAAQgFgMgHgKIAhgGIAMAcIAkAAIAAgfIAfAAIAAAfIAjAAQAIgPADgNIAhAFQgEAOgFAJIAvAAIAAA/g");
	this.shape_2.setTransform(159.1,13.1,0.885,0.885);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghCQIAAiQICrAAIAABwQAAAfgeAAIgXAAIgIgcIAWABQAJAAAAgKIAAhOIhuAAIAAB0gAhZCQIAAhYIgpANIgIgfQAXgEAagJIAAhKIgPAAIgHAqIgdgIQALgvACg4IAcADIgBAjIALAAIAAg9IAgAAIAAA9IAVAAIAAAfIgVAAIAAA+IARgIIAAAfIgRAHIAABlgAAOBqIAAhBIBLAAIAABBgAAmBTIAaAAIAAgTIgaAAgAgNgMIAAg/ICDAAIAAA/gAAQgjIBIAAIAAgRIhIAAgAglhYIAAgdIBHAAQgEgLgGgKIAfgFIALAaIBLAAIAAAdg");
	this.shape_3.setTransform(129.5,12.9,0.885,0.885);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiNB2QAfgXAVgfIgugkQANgkAMgvIgdAAIAAggIAkAAIAKg6IAgADIgLA3IAzAAIAAASQgDBGgYA3QAeAYALALIgXAZIgigfQgWAkghAZgAhkASIAaASQATgoADgzIgaAAQgLAtgLAcgAAJCMIgIgeIApAAQAJAAgBgQIAAhPIhAAAIAAgfIBAAAIAAgiQAXgUAVgcIhjAAIAAggICIAAIAAAgQgTAdgdAdIAAAYIA7AAIAAAfIg7AAIAABZQAAAkgbAAg");
	this.shape_4.setTransform(100.3,12.9,0.885,0.885);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiOB2QAhgXAUgfIgtgkQAMgkAMgvIgdAAIAAggIAkAAIAKg6IAfADIgJA3IAzAAIAAASQgDBGgZA3QAaAVAOAOIgVAZIgigfQgYAlggAYgAhjASIAZASQASgoAEgzIgaAAQgKAtgLAcgAAKCMIgJgeIAqAAQAIAAAAgQIAAhPIhBAAIAAgfIBBAAIAAgiQAXgUAUgcIhkAAIAAggICKAAIAAAgQgXAfgaAbIAAAYIA8AAIAAAfIg8AAIAABZQABAkgcAAg");
	this.shape_5.setTransform(70.8,12.9,0.885,0.885);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhqCRIAAigIgaAdIgLgiQAwg0AXhHIAeAOQgMAlgTAfIAADOgAgJCPIgHgfIAjACQALAAAAgMIAAicIAfAAIAACkQAAAggfABgABNgIIAdgKQAXA4APA7IgdAMQgShGgUgvgAg/BdQAZgrAShBIAcAIQgPA/gZAwgAg/gfQAig0AOg6IAdAHIgIAbICCAAIAAAVQgJAggJAXIgfgJQAJgPAGgVIhqAAQgOAjgSAbg");
	this.shape_6.setTransform(41.1,12.9,0.885,0.885);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABYCQIAAgPIhPAAIAAAPIgeAAIAAh7ICMAAIAAB7gAAJBjIBPAAIAAgvIhPAAgAiJCQIAAkTIBkAAIAAAYQgLAjgTAxQAdAoACAfQAAAYgJAKQgOANgiAAIgLggIASABQALAAAEgEQAEgDAAgJQAAgdggglQAUgwALgkIgmAAIAAD2gAgmAAIAAgdIAoAAQgHgdgKgZIgOAAIAAgfIA8AAIgJgXIAggGIAJAdIBAAAIAAAfIgQAAQgJAegKAYIAuAAIAAAdgAAggdIAdAAQAKgaAIgcIg/AAQAJAaAHAcg");
	this.shape_7.setTransform(12.2,12.8,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_3, new cjs.Rectangle(0,0,230.7,25.9), null);


(lib.text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwB/IA2hWIgOACQghAAgXgXQgYgXAAgmQAAglAagYQAZgXAlAAQAmAAAaAYQAZAYAAAkQAAAkgTAcIhBBogAgdhHQgNANAAASQAAATANAMQANAMARAAQARAAANgMQANgNAAgTQAAgSgNgNQgNgMgRgBQgRAAgNAOg");
	this.shape.setTransform(25.6,12.2,0.894,0.894);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbBUIArgiQATAiAiAAQASAAALgKQAJgKAAgOQAAgOgQgIQgIgFgbgJQghgKgPgKQgWgSAAggQAAgeAXgUQAYgVAiAAQAcAAAWAKQARAIARASIgmAdQgQgYgdAAQgQAAgJAIQgJAIAAANQAAANAPAIQAIAEAbAKQAhALAQALQAXATAAAgQAAAfgXAWQgYAYgnAAQg5AAgogsg");
	this.shape_1.setTransform(8.2,12.4,0.894,0.894);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRCPIAAjxIAuAAQAGgTACgZIAiAFQgFAagEANIBKAAIAADwIghAAIAAgMIhaAAIAAANgAANBiIBaAAIAAhEIhaAAgAANgBIBaAAIAAhBIhaAAgAh4COIgHgfQAKACANAAQAMAAAAgLIAAhAIgjAMIgIggQAYgGATgHIAAg+IgoAAIAAgfIAoAAIAAg0IAgAAIAAA0IAeAAIAAAfIgeAAIAAAyIAegPIAAAfQgMAHgSAIIAABXQAAAfggAAg");
	this.shape_2.setTransform(138.9,12.9,0.894,0.894);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhoCSIAAhuIgRASIgWgcQAvgrAPg9IAiAEQgIAfgQAgIAACdgAApBmQghAbgsAQIgRgfQAngOAdgVQgUgWgQgbIgRAPIgWgaQAvgjAQg/IAhAGIgGASIBcAAIAAAcQgOA/gqAsQAiAXAsAMIgVAeQgugPgkgcgAAAAFQAPAfAZAXQALgLAIgKQgRgQgbgRIAVgTQATANATAQQAKgSAGgVIhIAAQgIAQgKANgAiHhSIAAgfIB4AAQgEgKgJgQIAigGQAHANAHATIB3AAIAAAfg");
	this.shape_3.setTransform(109.6,13,0.894,0.894);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOBiIARgZQA8ARA2AbIgTAdQg4gfg4gRgAiQByQBBgLAfgWQAHgFAIgIIhgAAIAAgeIBxAAIAEgTIAfAEIgDAPIByAAIAAAeIh9AAQgJATgSAQQgfAbhNAQgAiIAOIAAgdIB5AAIAAgWIhdAAIAAgbIBdAAIAAgVIhuAAIAAgdIBAAAIgNgYIAigGIAMAeIA6AAQAGgNAEgSIAiAFQgDALgHAPIA/AAIAAAdIhvAAIAAAVIBeAAIAAAbIheAAIAAAWIB5AAIAAAdg");
	this.shape_4.setTransform(80,13.1,0.894,0.894);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiNBzQAxgMASgTQAQgTADghIhRAAIAAgfIEQAAIAAAfIhUAAIAAA9QAAAOAMAAIAmAAQAEAAADgGQACgJABgdIAeAKQgDAwgIAIQgIAJgPAAIg2AAQgiAAAAgmIAAhEIgrAAQgCAugYAbQgYAagyAOgAhZgZIAAgfICwAAIAAAfgABlgnIAAgsIjLAAIAAAsIggAAIAAhLIByAAQgEgMgGgMIAkgGIAKAeIB1AAIAABLg");
	this.shape_5.setTransform(50.2,13.1,0.894,0.894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_2, new cjs.Rectangle(0,0,151.2,26.1), null);


(lib.text_1R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtvTiMAISgnDITNAAMAAAAnDg");
	mask.setTransform(133.2,125);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(138.8,120,0.796,0.796);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(117.7,120.2,0.796,0.796);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(90.6,120.3,0.796,0.796);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(64.9,120.7,0.796,0.796);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(38.1,120.8,0.796,0.796);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(11.6,120.2,0.796,0.796);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594078").s().p("AtvTiMAISgnDITNAAMAAAAnDg");
	this.shape_6.setTransform(133.2,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1R, new cjs.Rectangle(45.3,0,176,250), null);


(lib.text_1L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("At0TiMAAAgnDIbpAAMgISAnDg");
	mask.setTransform(88.5,125);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(217.6,120,0.796,0.796);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(196.5,120.2,0.796,0.796);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(169.4,120.3,0.796,0.796);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(143.7,120.7,0.796,0.796);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(116.9,120.8,0.796,0.796);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(90.4,120.2,0.796,0.796);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594078").s().p("At0TiMAAAgnDIbpAAMgISAnDg");
	this.shape_6.setTransform(88.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1L, new cjs.Rectangle(0,0,177,250), null);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(138.8,11.3,0.796,0.796);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(117.7,11.5,0.796,0.796);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(90.6,11.6,0.796,0.796);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(64.9,12,0.796,0.796);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(38.1,12.1,0.796,0.796);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(11.6,11.5,0.796,0.796);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1, new cjs.Rectangle(0,0,144.5,23.1), null);


(lib.phone_ending_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsNPtIAA3EQACgcAUgZQAogyBYANQBXAMEMBAQCGAgB0AeIAAjLQgCgZAOgeQAcg9BUgYIIXjrIAygDQA4AEAaAkQAQARABBgQABAwgDAsIACbkg");
	mask.setTransform(78.2,102.5);

	// Layer_1
	this.instance = new lib.phone_ending();
	this.instance.parent = this;
	this.instance.setTransform(-5,-8,0.428,0.428);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_ending_1, new cjs.Rectangle(0,2,156.5,201.1), null);


(lib.phone_clear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgidBbHQhpgFhpg/QjSh9AAkfMAAAielQADhuA2huQBrjcEAAAMBGcgACQA8gBA4AIQC0AZBLBkQBCBcAXBrQAKAvALCQUAAHABRgADBNOMgAEBM+IADAsQADA3gDA1QgKCqg/BYQhIBmhfAqQhXAmicAIQhkAFxnAAUgRnAAAghrgAFg");
	mask.setTransform(278.9,583.6);

	// 反光
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-17,0,17,0).s().p("EgCpBXVMAAAiuqIFTAAMAAACuqg");
	this.shape.setTransform(21.4,608.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],9.1,0,-9,0).s().p("EgBZBXVMAAAiuqICzAAMAAACuqg");
	this.shape_1.setTransform(551.3,608.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

	// Layer_2
	this.instance = new lib.pic_clear();
	this.instance.parent = this;
	this.instance.setTransform(13,59,4.373,4.274);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghsBe1QjZgVhig2QiPhPhLhmQhniLgWjjUgAHgDpAAHhhcQgMgCgNgFQgZgJAAgKIAAtmQADgHAHgGQAMgNAPACIAApEQgKAAgIgJQgTgQAAgmIAA39QAAgGAGgHQAMgNAdgEIgExgQAAhFAGhTQAOimAlhIQAeheBZhiQCzjEEngTUAC4gASAgeAAHQQQAEPsAHIBcADQBwALBjAoQE6CBA/FyQAVFeABSiQACJRgEILIAeAZIAANwQgKAUgWANMAACBxgQgCA8gHA7QgXC+hHB0QhMB9iJBPQhrA8h6AXQhTAQjOAGIi9ADMg66AAAIgIAAQhVAAhpgKgEAiwhVvMhGcAACQkAAAhrDcQg2BugDBuMAAACelQAAEgDSB9QBpA+BpAFUBDVAAKADIgAKQCcgIBXgmQBfgqBIhmQA/hXAKiqQACg1gCg3IgDgtMAAEhM+UAAChNNgAGgBSQgLiQgKgvQgYhrhBhcQhLhki0gZQgygHg1AAIgNAAg");
	mask_1.setTransform(286.5,607.9);

	// phone
	this.instance_1 = new lib.phone();
	this.instance_1.parent = this;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573,1215.8);


(lib.phone_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgidBbHQhpgFhpg/QjSh9AAkfMAAAielQADhuA2huQBrjcEAAAMBGcgACQA8gBA4AIQC0AZBLBkQBCBcAXBrQAKAvALCQUAAHABRgADBNOMgAEBM+IADAsQADA3gDA1QgKCqg/BYQhIBmhfAqQhXAmicAIQhkAFxnAAUgRnAAAghrgAFg");
	mask.setTransform(278.9,583.6);

	// 反光
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-17,0,17,0).s().p("EgCpBXVMAAAiuqIFTAAMAAACuqg");
	this.shape.setTransform(21.4,608.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],9.1,0,-9,0).s().p("EgBZBXVMAAAiuqICzAAMAAACuqg");
	this.shape_1.setTransform(551.3,608.2);

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(20));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghsBe1QjZgVhig2QiPhPhLhmQhniLgWjjUgAHgDpAAHhhcQgMgCgNgFQgZgJAAgKIAAtmQADgHAHgGQAMgNAPACIAApEQgKAAgIgJQgTgQAAgmIAA39QAAgGAGgHQAMgNAdgEIgExgQAAhFAGhTQAOimAlhIQAeheBZhiQCzjEEngTUAC4gASAgeAAHQQQAEPsAHIBcADQBwALBjAoQE6CBA/FyQAVFeABSiQACJRgEILIAeAZIAANwQgKAUgWANMAACBxgQgCA8gHA7QgXC+hHB0QhMB9iJBPQhrA8h6AXQhTAQjOAGIi9ADMg66AAAIgIAAQhVAAhpgKgEAiwhVvMhGcAACQkAAAhrDcQg2BugDBuMAAACelQAAEgDSB9QBpA+BpAFUBDVAAKADIgAKQCcgIBXgmQBfgqBIhmQA/hXAKiqQACg1gCg3IgDgtMAAEhM+UAAChNNgAGgBSQgLiQgKgvQgYhrhBhcQhLhki0gZQgygHg1AAIgNAAg");
	mask_1.setTransform(286.5,607.9);

	// phone
	this.instance = new lib.phone();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573,1215.8);


(lib.logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgQEMIAAoXIAhAAIAAIXg");
	this.shape.setTransform(253.9,6.9,0.219,0.219);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBqIAAhJIhKAAIAAhBIBKAAIAAhJIA/AAIAABJIBKAAIAABBIhKAAIAABJg");
	this.shape_1.setTransform(277.7,6.7,0.219,0.219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSDUIBbiQQgNAEgKAAQg3AAgngnQgogoAAg9QAAg/ArgpQAqgnA/AAQBAAAArApQAqApAAA8QAAAdgJAdQgJAbgPAWIhrCugAgxh4QgWAWAAAeQAAAeAWAWQAVAVAdAAQAeAAAVgVQAVgWAAgeQAAgegVgWQgVgWgeAAQgcAAgWAWg");
	this.shape_2.setTransform(271.4,6.6,0.219,0.219);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiZCMIBHg5QARAcAXAOQAYAPAbAAQAeAAARgRQARgQAAgXQAAgXgbgPQgOgIgtgOQg5gSgYgRQgmgeAAg1QAAgzAngiQAogjA7AAQAvAAAkARQAdAOAcAeIhAAxQgcgpgwAAQgaAAgQAOQgPANAAAVQAAAWAZAOQAOAIAtAPQA5ASAZAUQAnAfAAA2QAAA0gmAlQgpAphBAAQhgAAhDhLg");
	this.shape_3.setTransform(264.2,6.7,0.219,0.219);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSDUIBbiQQgNAEgKAAQg3AAgngnQgngoAAg9QgBg/AsgpQApgnA/AAQBAAAAqApQAqApABA8QAAAdgJAdQgIAbgQAWIhsCugAgxh4QgWAWAAAeQAAAeAWAWQAVAVAcAAQAfAAAVgVQAVgWAAgeQAAgegVgWQgVgWgfAAQgcAAgVAWg");
	this.shape_4.setTransform(243.7,6.6,0.219,0.219);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiYCMIBGg5QAQAcAYAOQAYAPAbAAQAeAAARgRQAQgQAAgXQAAgXgbgPQgNgIgugOQg4gSgYgRQgmgeAAg1QAAgzAogiQAngjA7AAQAuAAAlARQAcAOAcAeIg/AxQgbgpgxAAQgbAAgPAOQgPANgBAVQABAWAZAOQAOAIAtAPQA4ASAaAUQAnAfgBA2QABA0gmAlQgpAphBAAQhgAAhChLg");
	this.shape_5.setTransform(236.6,6.7,0.219,0.219);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiWCXQg7g+gBhZQABhZA8g+QA9g/BbAAQA/AAAzAeQAwAdAcAwIhFApQgnhIhRAAQg6AAgnApQgnAoAAA5QAAA6AnAoQAoApA7AAQAuAAAhgZQAegXAMgqIiEAAIAAhKIDYAAIAAAeQgBBXg3A8Qg6A/hbAAQhfAAg9hAg");
	this.shape_6.setTransform(190.9,6.7,0.219,0.219);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmDUIAAmnIBNAAIAAGng");
	this.shape_7.setTransform(205.9,6.6,0.219,0.219);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABRCnIhRhvIhQBvIheAAIB+ipIh6ikIBfAAIBLBqIBLhqIBcAAIh4CkICACpg");
	this.shape_8.setTransform(219.6,7.6,0.219,0.219);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhfDmIA9iQIiJk7IBSAAIBcDhIBYjhIBRAAIi7HLg");
	this.shape_9.setTransform(227.2,9,0.219,0.219);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah6CAQg0gyAAhOQAAhOAzgyQAvgtBEAAQAgAAAcAMQAcANASAWIAAgoIBNAAIAAFNIhNAAIAAgsQgSAYgdAOQgdANggAAQhAAAgwgugAhFhJQgdAeAAArQAAArAdAeQAdAeAqAAQArAAAdgeQAcgeAAgrQAAgrgcgeQgdgegrAAQgqAAgdAeg");
	this.shape_10.setTransform(211.4,7.6,0.219,0.219);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah6CAQg1gyABhOQgBhOA0gyQAwgtBCAAQAhAAAcAMQAdANARAWIAAgoIBNAAIAAFNIhNAAIAAgsQgSAYgdAOQgdANggAAQhAAAgwgugAhFhJQgdAeAAArQAAArAdAeQAdAeAqAAQArAAAdgeQAcgeABgrQgBgrgcgeQgdgegrAAQgqAAgdAeg");
	this.shape_11.setTransform(200,7.6,0.219,0.219);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBCDQgdgSgDgkIgBgSIABiHQAJhFBYAAQBbAAAHBFIAAAcIhGAAIgBgbQgEgUgXAAQgXAAgFAUIAAANIAACKQABAHAHAFQAHAIANgBQANABAIgIQAGgFABgHIABgLIAAgpIgdAAIAAgnIBjAAIAABKIgBASQgDAkgdASQgaAPgoAAQgoAAgZgPg");
	this.shape_12.setTransform(68.2,5.4,0.368,0.368);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhgBLIgBjaIBHAAIAADYQAEAVAWgBQANABAHgIQAFgFACgIIABgKIAAjOIBGAAIgBDaQgGBFhbAAQhaAAgGhFg");
	this.shape_13.setTransform(46.8,5.6,0.368,0.368);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhECDQgfgUAAgrIAAgVIBLAAIAAAaQAAAMAHAHQAIAGALAAQAWAAAFgSQADgLgDgKQgGgOg4ggQg3gegHgfQgDgSADgTQAFggAbgQQAZgOAmAAQBdAAAABGIAAATIhFAAIAAgRQAAgLgGgHQgHgHgLAAQgWAAgDATQgCAFACAJQADANA5AfQA5AeAGAhQAEAUgEAZQgJA/hYAAQgsAAgZgRg");
	this.shape_14.setTransform(37.1,5.5,0.368,0.368);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFCEQgfgUAAgrIAAgWIBLAAIAAAbQAAAMAHAGQAIAHAMAAQAWAAAFgSQADgNgEgIQgFgPg5ggQg3gegHggQgEgSADgTQAGghAbgPQAZgOAnAAQBeAAAABGIAAAUIhGAAIAAgSQAAgLgHgHQgHgHgLAAQgVAAgEATQgBAIABAHQADANA6AfQA5AfAHAgQADAVgDAZQgFAhgcAQQgZAOgpAAQgrAAgagRg");
	this.shape_15.setTransform(3.7,5.5,0.368,0.368);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ABWCLIgDj6IgBABIgvD5IhGAAIguj6IgBAAIgCD6IhGAAIAGkWIByAAIAiDVIABAAIAijVIByAAIAGEWg");
	this.shape_16.setTransform(25.2,5.5,0.368,0.368);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAnCLIgmj7IgBAAIglD7IhMAAIA0kWIB7AAIA0EWg");
	this.shape_17.setTransform(13.3,5.5,0.368,0.368);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AASCKIhEjiIgBAAIAEDiIhFAAIAAkTIBnAAIBADaIABAAIgEjaIBFAAIAAETg");
	this.shape_18.setTransform(57.5,5.4,0.368,0.368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,280,14), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjuBWeQhpgFhpg/QjSh9AAkfMAAAielQAChuA2huQBsjcEAAAMBGcgACIANAAQA1gBAyAIQC0AZBLBkQBBBcAYBrQAKAvALCQUAAEAA6AAAAojMAAAAlCMgAEBM+IADAsIABAyQAAAdgCAdQgKCqg+BYQhJBmhfAqQhXAmibAIQhkAFxoAAUgRmAAAghrgAFg");
	this.shape.setTransform(58.4,119.5,0.216,0.216);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,116.9,239), null);


(lib.katespade_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.katespade();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.katespade_1, new cjs.Rectangle(0,0,120,182), null);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A3dB9IAAj5MAu7AAAIAAD5g");
	this.shape.setTransform(150.6,0.4,1,1,0,0,0,0.4,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(0,0,300.3,25), null);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A3dB9IAAj5MAu7AAAIAAD5g");
	this.shape.setTransform(150.2,12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(0,0,300.3,25.1), null);


(lib.ending_cut_text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAvIAAgGIAMAAIAAgTIBFAAIAAATIAMAAIAAAGgAAOApIAOAAIAAgNIgOAAgAgGApIANAAIAAgNIgNAAgAgbApIAOAAIAAgNIgOAAgAAbANIg/ADIgBgFQAJAAAMgLIgbAAIAAgGIApAAIAAgIIgjAAIAAgHIAjAAIAAgGIAGAAIAAAGIAiAAIAAAHIgiAAIAAAIIAoAAIAAAGIgYAAQANAJAIAHIgGAFgAgUAKIApgDIgJgGIADgBIgWAAgAAQgZIAAgHIgNAAIAAgHIANAAIAAgHIAHAAIAAAHIAXAAIAAAHIgXAAIAAAHgAgVgZIAAgHIgXAAIAAgHIAXAAIAAgHIAHAAIAAAHIANAAIAAAHIgNAAIAAAHg");
	this.shape.setTransform(40.6,47.2,1.115,1.115);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAsQAJgKAAgQIAAgWIBAAAIAAAsQAAAJgJAAIgNAAIgBgHIAMAAQAEgBAAgEIAAgJIgwAFIgBgHQAZgCAYgCIAAgVIgxAAIAAAHIAqADIgDAGIgngDIAAAEQgBATgKAMgAgugQIAggDIAAgMIgcAAIAAgHIAcAAIAAgJIAIAAIAAAbIAGgBIAAAHIgtAFgAAOgKQgJAAAAgIIAAgeIAIAAIAAALIAegCIAAAHIgeACIAAALQAAAAAAABQAAAAABABQAAAAABAAQABAAAAAAIARAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBACgIIAGACQgBALgDACQgCACgHAAg");
	this.shape_1.setTransform(28.8,47.4,1.115,1.115);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAxIAAhDIAlAAIAAgdIAHAAIAAAdIAmAAIAAA4QAAAKgKAAIgKAAIgCgHIAKAAQAEAAAAgFIAAguIhDAAIAAA7gAgTAgIAAggIAmAAIAAAggAgLAZIAXAAIAAgSIgXAAgAASgaQAGgHAFgMIAGADQgFANgGAHgAgjgoIAHgDIAKARIgHAEg");
	this.shape_2.setTransform(17.1,47.4,1.115,1.115);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAwIgCgHIAMAAQAFAAAAgFIAAgaIgjAAIAAgIIAjAAIAAgHIAHAAIAAAHIANAAIAAAIIgNAAIAAAcQAAAKgJAAgAgtAoIAAhPIAeAAIAABNIgIAAIAAgHIgPAAIAAAJgAgmAXIAPAAIAAgYIgPAAgAgmgIIAPAAIAAgYIgPAAgAgHARIAGgDIANAQIgGAFQgFgIgIgKgAgHgKIAAgHIAVAAIAAgMIgZAAIAAgHIAZAAIAAgLIAHAAIAAALIAZAAIAAAHIgZAAIAAAMIAVAAIAAAHg");
	this.shape_3.setTransform(5.5,47.4,1.115,1.115);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAVQgHgIAAgLIAAgCQAAgHADgHQAEgHAFgDQAHgEAFAAQALAAAGAHQAGAIAAANIAAADIglAAQAAAIAFAFQAEAFAGAAQAGAAADgCQADgBADgFIAGAFQgHALgOAAQgKAAgIgIgAgIgQQgEAFgBAHIAbAAIAAgBQgBgHgDgEQgEgEgFAAQgEAAgFAEg");
	this.shape_4.setTransform(56.1,33.2,1.115,1.115);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAgQgHgHABgNIAAgBQgBgMAHgIQAFgIAKAAQAJAAAGAHIAAgdIAJAAIAABOIgIAAIgBgGQgFAHgKAAQgJAAgGgIgAgJgDQgEADAAAMQAAAKAEAFQAEAFAFAAQAJAAAFgIIAAgZQgFgIgIAAQgGAAgEAGg");
	this.shape_5.setTransform(49.4,31.9,1.115,1.115);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYQgGgEAAgIQAAgIAHgEQAGgFAMAAIAJAAIAAgEQAAgGgDgCQgEgDgFAAQgFAAgCADQgEACAAADIgKAAQAAgDADgFQACgDAGgCQAGgDAFAAQAJAAAFAFQAGAEAAAJIAAAZQAAAGACAGIAAABIgKAAIgBgGQgHAHgIAAQgIAAgFgFgAgNALQAAAFADACQADACAFABQAEgBAEgBQAEgDACgEIAAgLIgIAAQgRAAAAAKg");
	this.shape_6.setTransform(43,33.2,1.115,1.115);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAIAAIABAGQAGgHAIAAQALAAAFAHQAHAIAAAOIAAAAQAAAMgHAIQgEAIgLAAQgKAAgFgHIAAAbgAgNgWIAAAZQAEAIAJAAQAGAAAEgFQAEgGAAgKQAAgIgEgHQgEgFgGAAQgKAAgDAIg");
	this.shape_7.setTransform(36.6,34.3,1.115,1.115);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAkQgHgDgEgFQgDgFAAgHIAKAAQAAAHAFAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgGgEgDQgEgDgJgDQgMgDgGgFQgGgFAAgIQAAgJAHgGQAHgGALAAQAHAAAGADQAHAEADAFQADAFAAAGIgKAAQAAgGgEgEQgEgEgIAAQgHAAgEADQgEACAAAHQAAAEAEAEQAFADAHACIAPAFQAGAEACAEQACAEAAAGQAAAJgHAFQgIAGgLAAQgGAAgHgDg");
	this.shape_8.setTransform(29.7,32.1,1.115,1.115);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAVQgGgGAAgNIAAgCQAAgHACgHQAEgHAFgDQAGgEAFAAQAMAAAFAHQAHAIgBANIAAADIgkAAQAAAJAEAEQAGAFAGAAQAFAAADgCQADgCADgEIAGAFQgGALgPAAQgLAAgHgIgAgIgQQgEAEgBAIIAbAAIAAgBQAAgHgEgEQgDgEgHAAQgEAAgEAEg");
	this.shape_9.setTransform(20.2,33.2,1.115,1.115);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAfQgDgDAAgIIAAghIgKAAIAAgIIAKAAIAAgNIAIAAIAAANIALAAIAAAIIgLAAIAAAhQAAAEACACQABABAEAAIAEAAIAAAHIgHABQgHAAgCgEg");
	this.shape_10.setTransform(14.9,32.5,1.115,1.115);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAYQgFgEAAgIQAAgJAGgDQAHgFALAAIAJAAIAAgEQAAgGgDgCQgDgDgFAAQgFAAgDADQgEACABADIgKAAQAAgDADgFQADgDAFgCQAGgDAEAAQALAAAFAFQAFAEAAAJIAAAZQAAAGACAGIAAABIgKAAIgBgGQgHAHgIAAQgIAAgGgFgAgMALQAAAFACACQADACAGABQADgBAEgBQAEgDABgEIAAgLIgHAAQgQAAAAAKg");
	this.shape_11.setTransform(9.9,33.2,1.115,1.115);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAlIgagjIgJAKIAAAZIgKAAIAAhJIAKAAIAAAkIAhgkIALAAIgcAhIAfAog");
	this.shape_12.setTransform(3.5,32.1,1.115,1.115);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E497F9").s().p("AhbBOQAOgaAMgEQAFgMAEgQIgbAAIAAgQQALgMAKgPIgaAAIAAgTIAxAAIAAAQQgGALgPASIAYAAIAAANQgFAWgFANIADAEQAKAIAIAEQAKAEAPAAIBbgBIgEATIhYgBQgUgBgKgDQgLgEgMgLQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgGAAgLAZgAgaAzQAfgRAJgcIgqAAIAAgSIAtAAQABgLAAgNIgnAAIAAgTIAVAAQgGgNgJgMIARgJQAJANAHAQIgLAFIAdAAQAJgRAGgTIATAHQgGARgHAMIAVAAIAAATIgnAAIgCAYIAxAAIAAASIg0AAQgIAkgmAagAAhAdIALgOQAaASASASIgOAQQgVgWgUgQgAhThMIAOgNQAQAOAOAOIgOAOQgKgNgUgQg");
	this.shape_13.setTransform(30.1,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E497F9").s().p("AhDBXIAAgvIgVAAIAAgUIAVAAIAAhIIA6AAIAAgPIhJAAIAAgTIClAAIAAATIhJAAIAAAPIA6AAIAABIIAVAAIAAAUIgVAAIAAAXQAAAYgVAAIgSAAIgFgUIARABQAHAAAAgKIAAgSIhfAAIAAAvgAAKAUIAmAAIAAgSIgmAAgAgvAUIAmAAIAAgSIgmAAgAAKgPIAmAAIAAgTIgmAAgAgvgPIAmAAIAAgTIgmAAg");
	this.shape_14.setTransform(8.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ending_cut_text_2, new cjs.Rectangle(0,0,58.7,52.9), null);


(lib.ending_cut_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E497F9").s().p("AhUBCQAdgKALgQQAKgQACgcIAAgEIgvAAIAAgTIChAAIAAATIgxAAIAAA/QAAAHAGAAIAVAAQAEAAABgEQADgFAAgXIASAGQgDAggFAGQgEAFgLAAIgdAAQgVAAABgUIAAhDIgbAAIAAAEQgCAjgOAVQgOAUgfALgAhAg/IAAgTICCAAIAAATg");
	this.shape.setTransform(105.3,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A72CCE").s().p("AhEBlQgWgdgBg0IAAglQABg2AVgdQAYgfAtAAQAuAAAXAeQAWAcABA1IAAAlQgBA2gVAdQgXAggvAAQgsAAgYgfgAg1hYQgRAXAAAwIAAAlQgBAsATAZQARAXAjAAQAkAAASgYQARgYABgvIAAglQgBgugRgWQgTgXgjAAQgkAAgRAXgAgZBEQgJgPAAgeIAAgxQAAgdAJgNQAHgOASAAQASAAAJAOQAIAPAAAeIAAAxQgBAfgIAMQgIAOgSAAQgRAAgIgPgAgIg6QgGAIAAAYIAAAxQgBAXAHAMQADAFAFAAQAGAAADgEQAFgJABgYIAAgxQAAgZgFgKQgDgEgHAAQgGAAgCAEg");
	this.shape_1.setTransform(85,41.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BZQgTgZABgsIAAglQAAgwARgXQARgXAkAAQAjAAATAXQARAWABAuIAAAlQgBAvgRAYQgSAYgkAAQgjAAgRgXgAgZhEQgJANAAAdIAAAxQAAAeAJAPQAIAPARAAQASAAAIgOQAIgMABgfIAAgxQAAgegIgPQgJgOgSAAQgSAAgHAOg");
	this.shape_2.setTransform(85,41.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A72CCE").s().p("AhEBlQgXgdABg0IAAglQgBg2AWgdQAYgfAtAAQAtAAAZAeQAVAdAAA0IAAAlQAAA2gVAdQgXAggvAAQgsAAgYgfgAg1hYQgSAYAAAvIAAAlQAAAtATAYQASAXAiAAQAkAAASgYQARgYAAgvIAAglQAAgugSgWQgSgXgjAAQgkAAgRAXgAgaBEQgIgOAAgfIAAgxQAAgcAIgOQAIgOASAAQASAAAIAOQAJAOAAAfIAAAxQAAAegJANQgIAOgSAAQgRAAgJgPgAgJg6QgFAJAAAXIAAAxQAAAYAFALQADAFAGAAQAGAAADgEQAGgKAAgXIAAgxQAAgZgGgKQgCgEgHAAQgGAAgDAEg");
	this.shape_3.setTransform(67.5,41.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BZQgTgYAAgtIAAglQAAgvASgYQARgXAkAAQAjAAASAXQASAWAAAuIAAAlQAAAvgRAYQgSAYgkAAQgiAAgSgXgAgahEQgIAOAAAcIAAAxQAAAfAIAOQAJAPARAAQASAAAIgOQAJgNAAgeIAAgxQAAgfgJgOQgIgOgSAAQgSAAgIAOg");
	this.shape_4.setTransform(67.5,41.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A72CCE").s().p("AhEBlQgVgcgBg1IAAglQAAg2AVgdQAYgfAtAAQAuAAAXAeQAXAdAAA0IAAAlQAAA2gWAdQgXAgguAAQgtAAgYgfgAg1hYQgRAYAAAvIAAAlQABAuARAXQASAXAjAAQAjAAASgYQASgXAAgwIAAglQAAgugSgWQgSgXgkAAQgjAAgSAXgAgZBEQgJgOAAgfIAAgxQAAgcAJgOQAIgOARAAQASAAAJAOQAIAOAAAfIAAAxQAAAdgIAOQgKAOgQAAQgSAAgIgPgAgIg6QgGAJAAAXIAAAxQAAAaAGAJQACAFAHAAQAGAAACgEQAGgIAAgZIAAgxQAAgZgFgKQgDgEgHAAQgFAAgDAEg");
	this.shape_5.setTransform(50,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BZQgRgXgBguIAAglQAAgvARgYQASgXAjAAQAkAAASAXQASAWAAAuIAAAlQAAAwgSAXQgSAYgjAAQgjAAgSgXgAgZhEQgJAOAAAcIAAAxQAAAfAJAOQAIAPASAAQAQAAAKgOQAIgOAAgdIAAgxQAAgfgIgOQgJgOgSAAQgRAAgIAOg");
	this.shape_6.setTransform(50,41.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A72CCE").s().p("AgOA7IgTgLQgIgFgBgIQgDgIAFgHQAIgMACgHQACgIAAgGIAAgcQAAgIAGgGQAGgGAIAAIAgAAQAJAAAFAGQAGAFAAAJIAAAaQgBAVgJATQgJASgRAPQgFAEgGAAQgFAAgGgDgAgIgNQAAALgDAJQgDAKgJANIAUAMQAMgLAHgPQAIgPAAgQIAAgaIggAAg");
	this.shape_7.setTransform(37.3,53.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAeQAJgNADgKQADgJAAgLIAAgcIAgAAIAAAaQAAAQgIAPQgHAPgMALg");
	this.shape_8.setTransform(37.3,53.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A72CCE").s().p("AhGCDQgJAAgGgGQgFgGAAgIIAAgZQAAgIAEgGIBJhOQAOgQAGgKQADgIABgGQgBgIgDgDQgCgEgGAAQgKAAgDAFQgEAFAAALQAAAIgGAGQgFAGgJAAIglAAQgIAAgGgGQgFgGgBgIQAAgaAMgUQAMgVAWgMQAUgLAdAAQAmAAAYAVQAZAWAAAlQAAAWgMAWQgJASgYAaIgWAYIA3AAQAJAAAGAGQAFAGAAAIIAAAdQAAAIgFAGQgGAGgJAAgAAVhHQAJAJAAAQQAAANgGALQgHAMgQAQIhHBQIAAAZICRAAIAAgdIhkAAIA1g5QAUgXAKgRQAJgSAAgRQAAgcgTgQQgRgQgfAAQgWAAgSAJQgQAIgKARQgIAQgBAUIAlAAQAAgUAKgKQAJgLASAAQAOAAAIAKg");
	this.shape_9.setTransform(25.8,41.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBvIAAgZIBHhQQAQgQAHgMQAGgLAAgNQAAgQgJgJQgIgKgOAAQgSAAgJALQgKAKAAAUIglAAQABgUAIgQQAKgRAQgIQASgJAWAAQAfAAARAQQATAQAAAcQAAARgJASQgKARgUAXIg1A5IBkAAIAAAdg");
	this.shape_10.setTransform(25.8,41.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A72CCE").s().p("AAJCCQgJAAgFgGQgFgGAAgIIAAiTIgbAJIgHABQgHAAgEgDQgJgGAAgLIAAgeQAAgOANgFIBVgfQACgCAEAAIAFAAQAJAAAFAGQAGAGAAAIIAADbQAAAIgGAGQgFAGgJAAgAAJBuIAkAAIAAjbIgFAAIhUAgIAAAeIA1gSg");
	this.shape_11.setTransform(6.5,41.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJBuIAAivIg1ASIAAgeIBUggIAFAAIAADbg");
	this.shape_12.setTransform(6.5,41.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E497F9").s().p("AghBcIgGgTIAYACQAKAAgBgLIAAgHIhTAAIAAgSIBTAAIAAgGIAigNIhiAAIAAgSICMAAIAAAOIg4AXIBNAAIAAASIhOAAIAAANQABAVgVABgAg9gFIAAgsIB7AAIAAAsgAgpgWIBTAAIAAgJIhTAAgAhWg5IAAgTIBIAAQgDgFgFgFIAXgFIAIAPIBNAAIAAATg");
	this.shape_13.setTransform(51.8,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E497F9").s().p("AhPBcIAAhbICfAAIAABGQAAAUgYAAIgRAAIgFgSIAQABQAKAAAAgHIAAgxIh3AAIAABKgAgnBFIAAgrIBQAAIAAArgAgVA2IAsAAIAAgNIgsAAgAg5gGIAAgqIBzAAIAAAqgAglgWIBLAAIAAgLIhLAAgAhXg4IAAgTIBNAAIgFgMIAWgEIAFAQIBMAAIAAATg");
	this.shape_14.setTransform(30.6,9.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E497F9").s().p("AAvBGQgPALgTAIIgLgQQAQgHAOgJQgNgQgFgTIgHAAIAAgRIBGAAIAAAQQgGAWgMAOQAPAKAOAFIgLARQgRgIgNgLgAAuAtQAIgKAFgNIgcAAQAFANAKAKgAgTBYIAAgQQgVAEgtADIgCgRIARgBIAAg+IgRAAIAAgSICuAAIAAASIhWAAIAABZgAgzA7IAggDIAAgJIggAAgAgzAhIAgAAIAAgLIggAAgAgzAHIAgAAIAAgIIggAAgAhAgaIAAg+ICBAAIAAA9IgUAAIAAgtIhYAAIAAAugAgmgcIAAgOIBNAAIAAAOgAgmgyIAAgNIBNAAIAAANg");
	this.shape_15.setTransform(9.5,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ending_cut_text_1, new cjs.Rectangle(0,0,113.8,59.4), null);


(lib.cta_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68EEC").s().p("AnoC7QhHAAgzgyQgygzAAhHIAAgdQAAhIAygyQAzgyBHAAIPRAAQBHAAAzAyQAyAyAABIIAAAdQAABHgyAzQgzAyhHAAgApbiBQgvAvAABEIAAAdQAABDAvAwQAwAvBDAAIPRAAQBDAAAwgvQAvgwAAhDIAAgdQAAhEgvgvQgwgwhDABIvRAAQhDgBgwAwg");
	this.shape.setTransform(66.1,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#88429C","#632276"],[0,1],0,-15.9,0,14.2).s().p("AnoCxQhDAAgwgvQgvgwAAhDIAAgdQAAhEAvgvQAwgwBDABIPRAAQBDgBAwAwQAvAvAABEIAAAdQAABDgvAwQgwAvhDAAg");
	this.shape_1.setTransform(66.1,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_bg, new cjs.Rectangle(0,0,132.3,37.5), null);


(lib.circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFDDDE").s().p("AoFIGQjXjWAAkwQAAkvDXjWQDWjXEvAAQEwAADWDXQDWDWABEvQgBEwjWDWQjWDWkwABQkvgBjWjWg");
	this.shape.setTransform(73.3,73.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.circle, new cjs.Rectangle(0,0,146.5,146.5), null);


(lib.bg_clear_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg_clear();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_clear_1, new cjs.Rectangle(0,0,300,200), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACBFQgcAEguADIgCgQIAigCIAAgKIgcAAIAAgOIAcAAIAAgJIgdAAIAAg1IAdAAIAAgHIggAAIAAgOIAgAAIAAgHIgcABIgEgPQArABAcgHIAHANQgLADgSACIAAAJIAeAAIAAAOIgeAAIAAAHIAbAAIAAA1IgbAAIAAAJIAaAAIAAAOIgaAAIAAAJIAagDIAAAHQAXgdAAg5IAAgFIgPAAIAAgQIAPAAIAAgeIAQAAIAAAeIAhAAQAABWgCASQgDATgUAAIgQgBIgEgQIASABQAHAAACgLQACgLgBhFIgQAAIAAAFQAABGgeAggAgYANIANAAIAAgJIgNAAgAg1ANIAOAAIAAgJIgOAAgAgYgHIANAAIAAgIIgNAAgAg1gHIAOAAIAAgIIgOAAg");
	this.shape.setTransform(93.3,18.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBLQgVAAAAgUIAAheIASAAIAABaQAAAHAIAAIAbAAQAFAAADgFQACgFAAgcIARAGQgCAkgGAGQgEAHgLAAgAhOAxQANgjAFglIAQAEQgGAugNAfgAAkgVIARgGQAMAbAOAtIgQAHQgNgrgOgegAgThBIAOgJQAXAbAJASIgOAKQgNgXgTgXg");
	this.shape_1.setTransform(75.6,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBAQA3gSAZgxIAQAHQgMATgNARQAOALAMANIgNAOQgKgOgPgNQgUASgdAKgAAhBMIgDgQIAWABQAHAAgBgHIAAiCIARAAIAACHQAAARgRAAgAAbApIAAhmIAQAAIAABmgAhHAYQAYgJARgQIgiACIgEgPIADgBQAIgFANgYIgaAAIAAgQIAlAAIgIgPIATgDIAIASIAhAAIAAAQIgtAAQgLAVgHAJIAbgDQAEgGAGgLIANAIQgXAvgsASg");
	this.shape_2.setTransform(57.2,18.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBJIAAgRIAtAAQgGgpgMguIgTAAIAAgRIA8AAIgIgVIARgDQAFANACALIA9AAIAAARIgTAAQgKA1gLAiIAwAAIAAARgAgOA4IAZAAQALgiAJg1Ig+AAQAKAqAHAtg");
	this.shape_3.setTransform(39.5,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// bg
	this.instance = new lib.cta_bg();
	this.instance.parent = this;
	this.instance.setTransform(66.1,18.8,1,1,0,0,0,66.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132.3,37.5);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(150,13,1,1,0,0,0,140,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.7,239.8,1,1,0,0,0,66.1,18.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(169).to({_off:false},0).wait(1).to({y:235.7,alpha:0.2},0).wait(1).to({y:231.6,alpha:0.4},0).wait(1).to({y:227.5,alpha:0.6},0).wait(1).to({y:223.4,alpha:0.8},0).wait(1).to({y:219.3,alpha:1},0).wait(65));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_159 = new cjs.Graphics().p("AoFIGQjWjWgBkwQABkuDWjXQDWjXEvAAQDQAACmBmIAAgBICoAAIAACLQC+DPABEdQAAEwjXDWQjWDXkwgBQkvABjWjXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(159).to({graphics:mask_graphics_159,x:88.3,y:143.8}).wait(80));

	// phone_ending
	this.instance_2 = new lib.phone_ending_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.6,284.6,0.686,0.686,0,0,0,79.5,101.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(162).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,x:88.6,y:251.2},0).wait(1).to({y:217.2},0).wait(1).to({y:183.2},0).wait(1).to({y:149.2},0).wait(73));

	// circle
	this.instance_3 = new lib.circle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.4,143.8,0.397,0.397,0,0,0,73.2,73.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:false},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:88.3,alpha:0.25},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:88.4,alpha:0.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:88.3,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,x:88.4,alpha:1},0).wait(76));

	// title
	this.instance_4 = new lib.title();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.7,49.6,1.098,1.098,0,0,0,95.5,11.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(157).to({_off:false},0).wait(1).to({regX:94.1,scaleX:1.07,scaleY:1.07,x:150.2,y:49.5,alpha:0.25},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:49.6,alpha:0.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,x:150.3,alpha:1},0).wait(78));

	// 最高享
	this.instance_5 = new lib.ending_cut_text_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178.3,113.6,1,1,0,0,0,56.9,29.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(166).to({_off:false},0).wait(1).to({x:184.6,alpha:0.125},0).wait(1).to({x:191,alpha:0.25},0).wait(1).to({x:197.4,alpha:0.375},0).wait(1).to({x:203.8,alpha:0.5},0).wait(1).to({x:210.1,alpha:0.625},0).wait(1).to({x:216.5,alpha:0.75},0).wait(1).to({x:222.9,alpha:0.875},0).wait(1).to({x:229.3,alpha:1},0).wait(65));

	// 再送
	this.instance_6 = new lib.ending_cut_text_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.4,178.8,1,1,0,0,0,29.4,26.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(169).to({_off:false},0).wait(1).to({x:161.3,alpha:0.125},0).wait(1).to({x:167.2,alpha:0.25},0).wait(1).to({x:173,alpha:0.375},0).wait(1).to({x:178.9,alpha:0.5},0).wait(1).to({x:184.8,alpha:0.625},0).wait(1).to({x:190.7,alpha:0.75},0).wait(1).to({x:196.5,alpha:0.875},0).wait(1).to({x:202.4,alpha:1},0).wait(62));

	// Kate Spade
	this.instance_7 = new lib.katespade_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(225.5,193.8,0.487,0.487,0,0,0,60.4,91.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(172).to({_off:false},0).wait(1).to({regX:60,regY:91,x:229.2,y:193.7,alpha:0.125},0).wait(1).to({x:233.2,alpha:0.25},0).wait(1).to({x:237.2,alpha:0.375},0).wait(1).to({x:241.2,alpha:0.5},0).wait(1).to({x:245.2,alpha:0.625},0).wait(1).to({x:249.2,alpha:0.75},0).wait(1).to({x:253.2,alpha:0.875},0).wait(1).to({x:257.2,y:193.6,alpha:1},0).wait(59));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.2,0,1,1,0,0,0,150.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:12.5,y:12.5},0).wait(150).to({scaleY:1.68,y:21},0).wait(1).to({scaleY:2.36,y:29.5},0).wait(1).to({scaleY:3.04,y:38},0).wait(1).to({scaleY:3.72,y:46.5},0).wait(1).to({scaleY:4.4,y:55},0).wait(1).to({scaleY:5.08,y:63.5},0).wait(83));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,250.1,1,1,0,0,0,150,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:150.2,regY:12.5,x:150.2,y:237.5},0).wait(150).to({scaleY:1.67,y:229.1},0).wait(1).to({scaleY:2.33,y:220.8},0).wait(1).to({scaleY:3,y:212.4},0).wait(1).to({scaleY:3.66,y:204.1},0).wait(1).to({scaleY:4.33,y:195.7},0).wait(1).to({scaleY:4.99,y:187.4},0).wait(83));

	// text_2
	this.instance_10 = new lib.text_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150.2,133.2,1.122,1.122,0,0,0,75.5,13);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(54).to({_off:false},0).wait(1).to({regX:75.6,scaleX:1.1,scaleY:1.1,y:133.1,alpha:0.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.3,alpha:0.6},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.2,alpha:1},0).wait(31).to({scaleX:1.03,scaleY:1.03,y:133.2,alpha:0.8},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:150.3,y:133.1,alpha:0.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.4},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0},0).to({_off:true},1).wait(144));

	// light
	this.instance_11 = new lib.light();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.4,177.3,1.035,1.035,0,0,0,58.4,120.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(42).to({_off:false},0).wait(1).to({regY:119.5,x:150.3,y:176.5,alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(194));

	// phone_clear
	this.instance_12 = new lib.phone_clear();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150.7,176.3,0.223,0.223,0,0,0,288.6,611);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:150.2,y:175.6},0).wait(44).to({scaleX:0.23,scaleY:0.23,alpha:0.875},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.75},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:175.5,alpha:0.625},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.375},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.25},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.125},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0},0).to({_off:true},1).wait(144));

	// phone
	this.instance_13 = new lib.phone_1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(86.2,225,0.223,0.223);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(29).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:150.2,y:345.2},0).wait(1).to({y:329.8},0).wait(1).to({y:314.4},0).wait(1).to({y:298.9},0).wait(1).to({y:283.5},0).wait(1).to({y:268.1},0).wait(1).to({y:252.7},0).wait(1).to({x:150.3,y:237.3},0).wait(1).to({y:221.9},0).wait(1).to({y:206.4},0).wait(1).to({y:191},0).wait(1).to({y:175.6},0).to({_off:true},1).wait(197));

	// text_1_intro
	this.instance_14 = new lib.text_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(151.1,120.3,1.221,1.221,0,0,0,72.2,11.6);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:11.5,scaleX:1.18,scaleY:1.18,y:120.2,alpha:0.2},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.4},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.6},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.8},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).to({_off:true},1).wait(233));

	// text_1L
	this.instance_15 = new lib.text_1L();
	this.instance_15.parent = this;
	this.instance_15.setTransform(111.6,125,1,1,0,0,0,111.6,125);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({_off:false},0).wait(1).to({regX:88.5,x:88.5},0).wait(13).to({y:118.8},0).wait(1).to({y:112.5},0).wait(1).to({y:106.3},0).wait(1).to({y:100},0).wait(1).to({x:60.7},0).wait(1).to({x:32.9},0).wait(1).to({x:5},0).wait(1).to({x:-22.8},0).wait(1).to({x:-50.6},0).wait(1).to({x:-78.5},0).wait(210));

	// text_1R
	this.instance_16 = new lib.text_1R();
	this.instance_16.parent = this;
	this.instance_16.setTransform(189.4,125,1,1,0,0,0,110.6,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).wait(1).to({regX:133.2,x:212},0).wait(13).to({y:131.3},0).wait(1).to({y:137.5},0).wait(1).to({y:143.8},0).wait(1).to({y:150},0).wait(1).to({x:239.7},0).wait(1).to({x:267.3},0).wait(1).to({x:295},0).wait(1).to({x:322.6},0).wait(1).to({x:350.3},0).wait(1).to({x:378},0).wait(210));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},6).wait(233));

	// text_3
	this.instance_17 = new lib.text_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(151.7,118.5,1.139,1.139,0,0,0,115.3,12.8);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(107).to({_off:false},0).wait(1).to({regX:115.4,regY:13,scaleX:1.12,scaleY:1.12,x:151.8,y:118.7,alpha:0.167},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:151.7,alpha:0.333},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:151.8,alpha:0.667},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:151.7,alpha:0.833},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(37).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(84));

	// transition
	this.instance_18 = new lib.transition();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(103).to({_off:false},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.45},0).wait(108).to({_off:true},1).wait(20));

	// bg_clear
	this.instance_19 = new lib.bg_clear_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,100);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(89).to({_off:false},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(10).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:150.1},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:150},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150.1},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:150},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150.1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:150.1},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:150},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150.1},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150.1},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:150.1},0).wait(90));

	// bg
	this.instance_20 = new lib.bg();
	this.instance_20.parent = this;
	this.instance_20.setTransform(0,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(239));

	// bg-purple
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#594078").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_1.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.3,250);
// library properties:
lib.properties = {
	id: '6717DACCF8344094AE4C863E021302C6',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1525636529619", id:"bg"},
		{src:"images/bg_clear.jpg?1525636529619", id:"bg_clear"},
		{src:"images/katespade.jpg?1525636529619", id:"katespade"},
		{src:"images/phone.jpg?1525636529619", id:"phone"},
		{src:"images/phone_ending.jpg?1525636529619", id:"phone_ending"},
		{src:"images/pic_clear.jpg?1525636529619", id:"pic_clear"}
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
an.compositions['6717DACCF8344094AE4C863E021302C6'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;