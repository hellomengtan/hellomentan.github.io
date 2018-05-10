(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,380);


(lib.bg_clear = function() {
	this.initialize(img.bg_clear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,380);


(lib.katespade = function() {
	this.initialize(img.katespade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,201);


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
p.nominalBounds = new cjs.Rectangle(0,0,184,294);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.transition, new cjs.Rectangle(0,0,320,480), null);


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


(lib.text_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCPIAAjxIAvAAQAFgTADgZIAgAFQgCAUgGATIBLAAIAADwIgiAAIAAgMIhZAAIAAANgAAOBiIBZAAIAAhEIhZAAgAAOgBIBZAAIAAhBIhZAAgAh4COIgHgfIAYACQAKAAAAgLIAAhAIgiANIgJghQATgEAYgJIAAg9IgnAAIAAggIAnAAIAAg0IAhAAIAAA0IAfAAIAAAgIgfAAIAAAxIAegPIAAAgIgeAPIAABWQAAAfggAAg");
	this.shape.setTransform(98.3,12.5,0.866,0.866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoCSIAAhuIgRASIgVgcQAtgrAQg+IAhAEQgHAhgQAfIAACdgAApBmQgiAagrARIgQgfQApgQAagTQgVgYgPgaIgSAQIgVgbQAvgjAQg+IAhAGIgGASIBcAAIAAAcQgOA/gqArQAiAXAsANIgVAeQgvgPgjgcgAAAAFQAOAdAZAZQAMgLAIgKQgXgUgVgOIAWgTIAlAeQALgVAFgTIhIAAQgJARgJANgAiHhSIAAgfIB4AAQgHgPgHgLIAjgGQAKASAEAOIB2AAIAAAfg");
	this.shape_1.setTransform(70,12.6,0.866,0.866);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBiIARgZQBAATAwAZIgSAdQgzgdg8gTgAiQByQBEgMAdgVIAOgOIhfAAIAAgdIBwAAIAFgTIAeADIgDAQIByAAIAAAdIh8AAQgKAUgRAQQgeAahPAQgAiIAOIAAgdIB5AAIAAgWIhdAAIAAgbIBdAAIAAgWIhvAAIAAgdIBBAAQgEgJgIgOIAigGQAGAPAFAOIA7AAQAGgRADgNIAjAFQgEANgHAMIA+AAIAAAdIhuAAIAAAWIBfAAIAAAbIhfAAIAAAWIB5AAIAAAdg");
	this.shape_2.setTransform(41.2,12.7,0.866,0.866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiOB0QAzgNAQgSQASgVACggIhQAAIAAgfIEPAAIAAAfIhTAAIAAA+QAAAOALAAIAmAAQAEAAADgHQACgGAAgfIAgAJQgFAwgHAJQgIAIgPAAIg2AAQgiAAAAgmIAAhEIgrAAQgCAugYAbQgXAagzAOgAhYgYIAAgfICvAAIAAAfgABlgnIAAgsIjLAAIAAAsIggAAIAAhLIBzAAIgLgYIAkgGQAGAPAEAPIB2AAIAABLg");
	this.shape_3.setTransform(12.3,12.7,0.866,0.866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_2_2, new cjs.Rectangle(0,0,110.2,25.3), null);


(lib.text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwB/IA2hWQgGACgIAAQghAAgXgXQgYgXAAglQAAgmAagYQAZgYAlAAQAmAAAaAZQAZAYAAAkQAAAkgTAcIhBBogAgdhHQgNANAAASQAAASANANQANAMARAAQASAAAMgMQANgNAAgSQAAgSgNgNQgMgOgSAAQgRAAgNAOg");
	this.shape.setTransform(11.2,12.2,0.889,0.889);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbBUIAqgiQAVAiAhAAQASAAAKgKQAKgKAAgOQAAgOgQgJQgIgEgbgIQgigMgOgJQgXgTABgfQgBgeAYgVQAYgUAigBQAdAAAVALQARAIARASIgnAdQgQgYgdAAQgPAAgKAJQgIAHgBANQAAANAQAIQAIAFAbAJQAhAKAPAMQAYATAAAfQAAAggXAWQgYAZgoAAQg4AAgogtg");
	this.shape_1.setTransform(-6.1,12.3,0.889,0.889);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABaB8IAAgLIizAAIAAALIgbAAIAAj3IDpAAIAAD3gAhZBZICzAAIAAi8IizAAgAgZBRQgWAAAAgVIAAgiQgKAJgPAJIgOgWQAbgNARgVIgkAAIAAgXIAyAAIAFgKIgwAAIAAgWIASAAIgJgRIAVgJQAFAJAHARIAMAAQAEgNACgNIAYACIgFAYIASAAQAIgPADgMIAWAJIgJASIAVAAIAAAWIhFAAIgDAKIBQAAIAAAXIgdAAQAXARANAQIgQASQgNgPgRgRIAAAZQAAARgWABIgXgBIgFgUIASABQAIAAAAgGIAAgIIgmAAIAAAjQAAAIAJAAIAoAAQALAAADgEQADgEACgNIAXAIQgDAZgHAFQgHAFgSAAgAgUgCIAyAAIgMgKIgfAAIgHAKg");
	this.shape_2.setTransform(93.4,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiPByQAygRASgaQARgaACgtIhPAAIAAggIB4AAIAAhuIAgAAIAABuIB4AAIAAAgIhVAAIAABcQAAANALAAIAiAAQAGAAAEgGQADgIACgkIAfAKQgDAzgJAKQgLAKgRAAIgyAAQghgBAAgkIAAhjIgqAAQgCA5gZAkQgYAhg0ARgAAvg4QAYgiAPgmIAeAOQgOAkgZAlgAhyhvIAfgOQAUAdAVAoIgfAPQgSglgXghg");
	this.shape_3.setTransform(63.7,13,0.889,0.889);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAEBzQg1AUhHAKIgOgdQA1gFAugNQgkgSgSgYIgcAAIAAgcIDiAAIAAAYQgcAcgmATQAuAMA4AIIgRAaQhKgMgygSgAACBWQAjgOAWgQIhvAAQATARAjANgAAOARIAAhIIgEAHIgPgUIAAAKIgeAAIAAAQIAeAAIAAAWIgeAAIAAAOIAoAAIAAAXIh8AAIAAhHIgHALIgSgVQAWgbAQgzIAaAGIgGASIAYAAIgJgWIAbgEIAKAaIAkAAIAAAXIglAAIAAAQIAeAAIAAAIQARgZAQgwIAbAGIgHAUIAYAAIgKgWIAcgEQAEAKAFAQIAkAAIAAAXIgiAAIAAAQIAcAAIAAAVIgcAAIAAAQIAcAAIAAAWIgcAAIAAAOIAmAAIAAAXgAAqgGIAgAAIAAgOIggAAgAhbgGIAeAAIAAgOIgeAAgAAqgqIAgAAIAAgQIggAAgAhbgqIAeAAIAAgQIgeAAgAAqhPIAgAAIAAgQIggAAgAhbhPIAeAAIAAgQIgeAAg");
	this.shape_4.setTransform(34.1,12.9,0.889,0.889);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_2, new cjs.Rectangle(-14.3,0,119.4,25.9), null);


(lib.text_1R = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgOsAlgMAI2hK/IUjAAMAAABK/g");
	mask.setTransform(147.3,240);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(166.5,222.8,1.058,1.058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(138.4,223,1.058,1.058);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(102.4,223.2,1.058,1.058);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(68.3,223.7,1.058,1.058);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(32.7,223.9,1.058,1.058);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(-2.5,223,1.058,1.058);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594078").s().p("EgOsAlgMAI2hK/IUjAAMAAABK/g");
	this.shape_6.setTransform(147.3,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1R, new cjs.Rectangle(53.3,0,188.2,480), null);


(lib.text_1L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgOxAlgMAAAhK/IdjAAMgI2BK/g");
	mask.setTransform(94.6,240);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(245.5,222.8,1.058,1.058);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(217.4,223,1.058,1.058);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(181.4,223.2,1.058,1.058);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(147.3,223.7,1.058,1.058);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(111.7,223.9,1.058,1.058);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(76.5,223,1.058,1.058);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594078").s().p("EgOxAlgMAAAhK/IdjAAMgI2BK/g");
	this.shape_6.setTransform(94.6,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1L, new cjs.Rectangle(0,0,189.3,480), null);


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
	this.instance.setTransform(13,60,2.957,2.89);

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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("AgyAPIAAgdIBkAAIAAAdg");
	this.shape.setTransform(13.4,-1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// logo
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgQEMIAAoXIAhAAIAAIXg");
	this.shape_1.setTransform(193.6,5.9,0.219,0.219);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfBqIAAhJIhKAAIAAhBIBKAAIAAhJIA/AAIAABJIBKAAIAABBIhKAAIAABJg");
	this.shape_2.setTransform(217.4,5.7,0.219,0.219);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSDUIBbiQQgNAEgKAAQg3AAgngnQgogoAAg9QAAg/ArgpQAqgnA/AAQBAAAArApQAqApAAA8QAAAdgJAdQgJAbgPAWIhrCugAgxh4QgWAWAAAeQAAAeAWAWQAVAVAdAAQAeAAAVgVQAVgWAAgeQAAgegVgWQgVgWgeAAQgcAAgWAWg");
	this.shape_3.setTransform(211.1,5.6,0.219,0.219);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiZCMIBHg5QARAcAXAOQAYAPAbAAQAeAAARgRQARgQAAgXQAAgXgbgPQgOgIgtgOQg5gSgYgRQgmgeAAg1QAAgzAngiQAogjA7AAQAvAAAkARQAdAOAcAeIhAAxQgcgpgwAAQgaAAgQAOQgPANAAAVQAAAWAZAOQAOAIAtAPQA5ASAZAUQAnAfAAA2QAAA0gmAlQgpAphBAAQhgAAhDhLg");
	this.shape_4.setTransform(203.9,5.7,0.219,0.219);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSDUIBbiQQgNAEgKAAQg3AAgngnQgngoAAg9QgBg/AsgpQApgnA/AAQBAAAAqApQAqApABA8QAAAdgJAdQgIAbgQAWIhsCugAgxh4QgWAWAAAeQAAAeAWAWQAVAVAcAAQAfAAAVgVQAVgWAAgeQAAgegVgWQgVgWgfAAQgcAAgVAWg");
	this.shape_5.setTransform(183.4,5.6,0.219,0.219);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiYCMIBGg5QAQAcAYAOQAYAPAbAAQAeAAARgRQAQgQAAgXQAAgXgbgPQgNgIgugOQg4gSgYgRQgmgeAAg1QAAgzAogiQAngjA7AAQAuAAAlARQAcAOAcAeIg/AxQgbgpgxAAQgbAAgPAOQgPANgBAVQABAWAZAOQAOAIAtAPQA4ASAaAUQAnAfgBA2QABA0gmAlQgpAphBAAQhgAAhChLg");
	this.shape_6.setTransform(176.3,5.7,0.219,0.219);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiWCXQg7g+gBhZQABhZA8g+QA9g/BbAAQA/AAAzAeQAwAdAcAwIhFApQgnhIhRAAQg6AAgnApQgnAoAAA5QAAA6AnAoQAoApA7AAQAuAAAhgZQAegXAMgqIiEAAIAAhKIDYAAIAAAeQgBBXg3A8Qg6A/hbAAQhfAAg9hAg");
	this.shape_7.setTransform(130.6,5.7,0.219,0.219);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgmDUIAAmnIBNAAIAAGng");
	this.shape_8.setTransform(145.6,5.6,0.219,0.219);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABRCnIhRhvIhQBvIheAAIB+ipIh6ikIBfAAIBLBqIBLhqIBcAAIh4CkICACpg");
	this.shape_9.setTransform(159.3,6.6,0.219,0.219);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhfDmIA9iQIiJk7IBSAAIBcDhIBYjhIBRAAIi7HLg");
	this.shape_10.setTransform(166.9,8,0.219,0.219);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah6CAQg0gyAAhOQAAhOAzgyQAvgtBEAAQAgAAAcAMQAcANASAWIAAgoIBNAAIAAFNIhNAAIAAgsQgSAYgdAOQgdANggAAQhAAAgwgugAhFhJQgdAeAAArQAAArAdAeQAdAeAqAAQArAAAdgeQAcgeAAgrQAAgrgcgeQgdgegrAAQgqAAgdAeg");
	this.shape_11.setTransform(151.1,6.6,0.219,0.219);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ah6CAQg1gyABhOQgBhOA0gyQAwgtBCAAQAhAAAcAMQAdANARAWIAAgoIBNAAIAAFNIhNAAIAAgsQgSAYgdAOQgdANggAAQhAAAgwgugAhFhJQgdAeAAArQAAArAdAeQAdAeAqAAQArAAAdgeQAcgeABgrQgBgrgcgeQgdgegrAAQgqAAgdAeg");
	this.shape_12.setTransform(139.7,6.6,0.219,0.219);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhBCDQgdgSgDgkIgBgSIABiHQAJhFBYAAQBbAAAHBFIAAAcIhGAAIgBgbQgEgUgXAAQgXAAgFAUIAAANIAACKQABAHAHAFQAHAIANgBQANABAIgIQAGgFABgHIABgLIAAgpIgdAAIAAgnIBjAAIAABKIgBASQgDAkgdASQgaAPgoAAQgoAAgZgPg");
	this.shape_13.setTransform(68.2,5.4,0.368,0.368);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhgBLIgBjaIBHAAIAADYQAEAVAWgBQANABAHgIQAFgFACgIIABgKIAAjOIBGAAIgBDaQgGBFhbAAQhaAAgGhFg");
	this.shape_14.setTransform(46.8,5.6,0.368,0.368);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhECDQgfgUAAgrIAAgVIBLAAIAAAaQAAAMAHAHQAIAGALAAQAWAAAFgSQADgLgDgKQgGgOg4ggQg3gegHgfQgDgSADgTQAFggAbgQQAZgOAmAAQBdAAAABGIAAATIhFAAIAAgRQAAgLgGgHQgHgHgLAAQgWAAgDATQgCAFACAJQADANA5AfQA5AeAGAhQAEAUgEAZQgJA/hYAAQgsAAgZgRg");
	this.shape_15.setTransform(37.1,5.5,0.368,0.368);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhFCEQgfgUAAgrIAAgWIBLAAIAAAbQAAAMAHAGQAIAHAMAAQAWAAAFgSQADgNgEgIQgFgPg5ggQg3gegHggQgEgSADgTQAGghAbgPQAZgOAnAAQBeAAAABGIAAAUIhGAAIAAgSQAAgLgHgHQgHgHgLAAQgVAAgEATQgBAIABAHQADANA6AfQA5AfAHAgQADAVgDAZQgFAhgcAQQgZAOgpAAQgrAAgagRg");
	this.shape_16.setTransform(3.7,5.5,0.368,0.368);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABWCLIgDj6IgBABIgvD5IhGAAIguj6IgBAAIgCD6IhGAAIAGkWIByAAIAiDVIABAAIAijVIByAAIAGEWg");
	this.shape_17.setTransform(25.2,5.5,0.368,0.368);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnCLIgmj7IgBAAIglD7IhMAAIA0kWIB7AAIA0EWg");
	this.shape_18.setTransform(13.3,5.5,0.368,0.368);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASCKIhEjiIgBAAIAEDiIhFAAIAAkTIBnAAIBADaIABAAIgEjaIBFAAIAAETg");
	this.shape_19.setTransform(57.5,5.4,0.368,0.368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,-2.6,219.7,15.7), null);


(lib.light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgjuBWeQhpgFhpg/QjSh9AAkfMAAAielQAChuA2huQBsjcEAAAMBGcgACIANAAQA1gBAyAIQC0AZBLBkQBBBcAYBrQAKAvALCQUAAEAA6AAAAojMAAAAlCMgAEBM+IADAsIABAyQAAAdgCAdQgKCqg+BYQhJBmhfAqQhXAmibAIQhkAFxoAAUgRmAAAghrgAFg");
	this.shape.setTransform(58.4,119.5,0.216,0.216);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.light, new cjs.Rectangle(0,0,116.9,239), null);


(lib.kate_light = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(255,255,255,0)"],[0,0.396,1],-2.1,-17.1,2.4,19.3).s().p("AsjDIIYcsHIArF4I4cMHg");
	this.shape.setTransform(80.4,-2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.kate_light, new cjs.Rectangle(0,-59.9,160.8,115.2), null);


(lib.header = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,0,1,1,0,0,0,0,-25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(0,0,320,50), null);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A4/D6IAAnzMAx/AAAIAAHzg");
	this.shape.setTransform(160,-0.1,1,1,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(0,-25,320,50), null);


(lib.ending_cut_text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAvIAAgGIAMAAIAAgTIBFAAIAAATIAMAAIAAAGgAAOApIAOAAIAAgNIgOAAgAgGApIANAAIAAgNIgNAAgAgbApIAOAAIAAgNIgOAAgAAbANIg/ADIgBgFQAJAAAMgLIgbAAIAAgGIApAAIAAgIIgjAAIAAgHIAjAAIAAgGIAGAAIAAAGIAiAAIAAAHIgiAAIAAAIIAoAAIAAAGIgYAAQANAJAIAHIgGAFgAgUAKIApgDIgJgGIADgBIgWAAgAAQgZIAAgHIgNAAIAAgHIANAAIAAgHIAHAAIAAAHIAXAAIAAAHIgXAAIAAAHgAgVgZIAAgHIgXAAIAAgHIAXAAIAAgHIAHAAIAAAHIANAAIAAAHIgNAAIAAAHg");
	this.shape.setTransform(100.1,22.5,1.318,1.318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAsQAJgKAAgQIAAgWIBAAAIAAAsQAAAJgJAAIgNAAIgBgHIAMAAQAEgBAAgEIAAgJIgwAFIgBgHQAZgCAYgCIAAgVIgxAAIAAAHIAqADIgDAGIgngDIAAAEQgBATgKAMgAgugQIAggDIAAgMIgcAAIAAgHIAcAAIAAgJIAIAAIAAAbIAGgBIAAAHIgtAFgAAOgKQgJAAAAgIIAAgeIAIAAIAAALIAegCIAAAHIgeACIAAALQAAAAAAABQAAAAABABQAAAAABAAQABAAAAAAIARAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBACgIIAGACQgBALgDACQgCACgHAAg");
	this.shape_1.setTransform(86.1,22.7,1.318,1.318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAxIAAhDIAlAAIAAgdIAHAAIAAAdIAmAAIAAA4QAAAKgKAAIgKAAIgCgHIAKAAQAEAAAAgFIAAguIhDAAIAAA7gAgTAgIAAggIAmAAIAAAggAgLAZIAXAAIAAgSIgXAAgAASgaQAGgHAFgMIAGADQgFANgGAHgAgjgoIAHgDIAKARIgHAEg");
	this.shape_2.setTransform(72.2,22.7,1.318,1.318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAwIgCgHIAMAAQAFAAAAgFIAAgaIgjAAIAAgIIAjAAIAAgHIAHAAIAAAHIANAAIAAAIIgNAAIAAAcQAAAKgJAAgAgtAoIAAhPIAeAAIAABNIgIAAIAAgHIgPAAIAAAJgAgmAXIAPAAIAAgYIgPAAgAgmgIIAPAAIAAgYIgPAAgAgHARIAGgDIANAQIgGAFQgFgIgIgKgAgHgKIAAgHIAVAAIAAgMIgZAAIAAgHIAZAAIAAgLIAHAAIAAALIAZAAIAAAHIgZAAIAAAMIAVAAIAAAHg");
	this.shape_3.setTransform(58.5,22.7,1.318,1.318);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAVQgHgIAAgLIAAgCQAAgHADgHQAEgHAFgDQAHgEAFAAQALAAAGAHQAGAIAAANIAAADIglAAQAAAIAFAFQAEAFAGAAQAGAAADgCQADgBADgFIAGAFQgHALgOAAQgKAAgIgIgAgIgQQgEAFgBAHIAbAAIAAgBQgBgHgDgEQgEgEgFAAQgEAAgFAEg");
	this.shape_4.setTransform(118.3,5.9,1.318,1.318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAgQgHgHABgNIAAgBQgBgMAHgIQAFgIAKAAQAJAAAGAHIAAgdIAJAAIAABOIgIAAIgBgGQgFAHgKAAQgJAAgGgIgAgJgDQgEADAAAMQAAAKAEAFQAEAFAFAAQAJAAAFgIIAAgZQgFgIgIAAQgGAAgEAGg");
	this.shape_5.setTransform(110.4,4.4,1.318,1.318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYQgGgEAAgIQAAgIAHgEQAGgFAMAAIAJAAIAAgEQAAgGgDgCQgEgDgFAAQgFAAgCADQgEACAAADIgKAAQAAgDADgFQACgDAGgCQAGgDAFAAQAJAAAFAFQAGAEAAAJIAAAZQAAAGACAGIAAABIgKAAIgBgGQgHAHgIAAQgIAAgFgFgAgNALQAAAFADACQADACAFABQAEgBAEgBQAEgDACgEIAAgLIgIAAQgRAAAAAKg");
	this.shape_6.setTransform(102.9,5.9,1.318,1.318);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAIAAIABAGQAGgHAIAAQALAAAFAHQAHAIAAAOIAAAAQAAAMgHAIQgEAIgLAAQgKAAgFgHIAAAbgAgNgWIAAAZQAEAIAJAAQAGAAAEgFQAEgGAAgKQAAgIgEgHQgEgFgGAAQgKAAgDAIg");
	this.shape_7.setTransform(95.3,7.2,1.318,1.318);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAkQgHgDgEgFQgDgFAAgHIAKAAQAAAHAFAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgGgEgDQgEgDgJgDQgMgDgGgFQgGgFAAgIQAAgJAHgGQAHgGALAAQAHAAAGADQAHAEADAFQADAFAAAGIgKAAQAAgGgEgEQgEgEgIAAQgHAAgEADQgEACAAAHQAAAEAEAEQAFADAHACIAPAFQAGAEACAEQACAEAAAGQAAAJgHAFQgIAGgLAAQgGAAgHgDg");
	this.shape_8.setTransform(87.1,4.6,1.318,1.318);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAVQgGgGAAgNIAAgCQAAgHACgHQAEgHAFgDQAGgEAFAAQAMAAAFAHQAHAIgBANIAAADIgkAAQAAAJAEAEQAGAFAGAAQAFAAADgCQADgCADgEIAGAFQgGALgPAAQgLAAgHgIgAgIgQQgEAEgBAIIAbAAIAAgBQAAgHgEgEQgDgEgHAAQgEAAgEAEg");
	this.shape_9.setTransform(75.9,5.9,1.318,1.318);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAfQgDgDAAgIIAAghIgKAAIAAgIIAKAAIAAgNIAIAAIAAANIALAAIAAAIIgLAAIAAAhQAAAEACACQABABAEAAIAEAAIAAAHIgHABQgHAAgCgEg");
	this.shape_10.setTransform(69.7,5,1.318,1.318);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAYQgFgEAAgIQAAgJAGgDQAHgFALAAIAJAAIAAgEQAAgGgDgCQgDgDgFAAQgFAAgDADQgEACABADIgKAAQAAgDADgFQADgDAFgCQAGgDAEAAQALAAAFAFQAFAEAAAJIAAAZQAAAGACAGIAAABIgKAAIgBgGQgHAHgIAAQgIAAgGgFgAgMALQAAAFACACQADACAGABQADgBAEgBQAEgDABgEIAAgLIgHAAQgQAAAAAKg");
	this.shape_11.setTransform(63.8,5.9,1.318,1.318);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAlIgagjIgJAKIAAAZIgKAAIAAhJIAKAAIAAAkIAhgkIALAAIgcAhIAfAog");
	this.shape_12.setTransform(56.2,4.6,1.318,1.318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E497F9").s().p("AhbBOQAOgaAMgEQAFgMAEgQIgbAAIAAgQQALgMAKgPIgaAAIAAgTIAxAAIAAAQQgGALgPASIAYAAIAAANQgFAWgFANIADAEQAKAIAIAEQAKAEAPAAIBbgBIgEATIhYgBQgUgBgKgDQgLgEgMgLQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgGAAgLAZgAgaAzQAfgRAJgcIgqAAIAAgSIAtAAQABgLAAgNIgnAAIAAgTIAVAAQgGgNgJgMIARgJQAJANAHAQIgLAFIAdAAQAJgRAGgTIATAHQgGARgHAMIAVAAIAAATIgnAAIgCAYIAxAAIAAASIg0AAQgIAkgmAagAAhAdIALgOQAaASASASIgOAQQgVgWgUgQgAhThMIAOgNQAQAOAOAOIgOAOQgKgNgUgQg");
	this.shape_13.setTransform(30.1,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E497F9").s().p("AhDBXIAAgvIgVAAIAAgUIAVAAIAAhIIA6AAIAAgPIhJAAIAAgTIClAAIAAATIhJAAIAAAPIA6AAIAABIIAVAAIAAAUIgVAAIAAAXQAAAYgVAAIgSAAIgFgUIARABQAHAAAAgKIAAgSIhfAAIAAAvgAAKAUIAmAAIAAgSIgmAAgAgvAUIAmAAIAAgSIgmAAgAAKgPIAmAAIAAgTIgmAAgAgvgPIAmAAIAAgTIgmAAg");
	this.shape_14.setTransform(8.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ending_cut_text_2, new cjs.Rectangle(0,-0.9,121.5,30.1), null);


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
	this.shape_13.setTransform(-13.7,47.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E497F9").s().p("AhPBcIAAhbICfAAIAABGQAAAUgYAAIgRAAIgFgSIAQABQAKAAAAgHIAAgxIh3AAIAABKgAgnBFIAAgrIBQAAIAAArgAgVA2IAsAAIAAgNIgsAAgAg5gGIAAgqIBzAAIAAAqgAglgWIBLAAIAAgLIhLAAgAhXg4IAAgTIBNAAIgFgMIAWgEIAFAQIBMAAIAAATg");
	this.shape_14.setTransform(-34.9,47.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E497F9").s().p("AAvBGQgPALgTAIIgLgQQAQgHAOgJQgNgQgFgTIgHAAIAAgRIBGAAIAAAQQgGAWgMAOQAPAKAOAFIgLARQgRgIgNgLgAAuAtQAIgKAFgNIgcAAQAFANAKAKgAgTBYIAAgQQgVAEgtADIgCgRIARgBIAAg+IgRAAIAAgSICuAAIAAASIhWAAIAABZgAgzA7IAggDIAAgJIggAAgAgzAhIAgAAIAAgLIggAAgAgzAHIAgAAIAAgIIggAAgAhAgaIAAg+ICBAAIAAA9IgUAAIAAgtIhYAAIAAAugAgmgcIAAgOIBNAAIAAAOgAgmgyIAAgNIBNAAIAAANg");
	this.shape_15.setTransform(-56,48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ending_cut_text_1, new cjs.Rectangle(-64.8,28.3,178.6,31.1), null);


(lib.cta_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68EEC").s().p("AnoC7QhHAAgzgyQgygzAAhHIAAgdQAAhIAygyQAzgyBHAAIPRAAQBHAAAzAyQAyAyAABIIAAAdQAABHgyAzQgzAyhHAAgApbiBQgvAvAABEIAAAdQAABDAvAwQAwAvBDAAIPRAAQBDAAAwgvQAvgwAAhDIAAgdQAAhEgvgvQgwgwhDABIvRAAQhDgBgwAwg");
	this.shape.setTransform(65.5,18.8,1.09,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#88429C","#632276"],[0,1],0,-15.9,0,14.2).s().p("AnoCxQhDAAgwgvQgvgwAAhDIAAgdQAAhEAvgvQAwgwBDABIPRAAQBDgBAwAwQAvAvAABEIAAAdQAABDgvAwQgwAvhDAAg");
	this.shape_1.setTransform(65.5,18.8,1.09,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_bg, new cjs.Rectangle(-6.5,0,144.2,37.5), null);


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

}).prototype = getMCSymbolPrototype(lib.bg_clear_1, new cjs.Rectangle(0,0,320,380), null);


(lib.katespade_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzOBQhegrkbidQgOgGgKgRQgUghAVgyQAhhQH5z5QABgFADgIQAHgPALgLQAjgiBAAXIFrBhIAmAVQAkAegLAuQgQAykTLAIkQK3IgGAQQgHAUgMANQgYAcggAAQgTAAgWgLgAClqFIgRARIh1EgQgXA8ADAZQAEAeAbAUQAcAVAogFQA/gJAlhWIAOgpQAEgMAGgBIAdgCQAZgCAPgNQAQgOAZhCIAWg/QAFgOACgQQAEgfgUgJIgegMQgIgDgCgGQgKgagEgEQgUgZgzgJQgOgDgNAAQgXAAgRALg");
	mask.setTransform(57.2,90.8);

	// 分離模式
	this.instance = new lib.kate_light();
	this.instance.parent = this;
	this.instance.setTransform(61.2,7.7,1,1,0,0,0,80.4,27.6);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-2.3,y:-22.2},0).wait(6).to({regY:27.6,y:7.7},0).wait(1).to({regY:-2.3,x:61.1,y:-12.5,alpha:0.25},0).wait(1).to({x:60.9,y:-2.8,alpha:0.5},0).wait(1).to({x:60.8,y:6.8,alpha:0.75},0).wait(1).to({x:60.7,y:16.5,alpha:1},0).wait(1).to({x:60.6,y:26.1},0).wait(1).to({x:60.4,y:35.8},0).wait(1).to({x:60.3,y:45.5},0).wait(1).to({x:60.2,y:55.1},0).wait(1).to({x:60.1,y:64.8},0).wait(1).to({x:59.9,y:74.5},0).wait(1).to({x:59.8,y:88.9,alpha:0.848},0).wait(1).to({x:59.6,y:103.4,alpha:0.695},0).wait(1).to({x:59.4,y:117.9,alpha:0.543},0).wait(1).to({x:59.2,y:132.4,alpha:0.39},0).wait(1).to({x:59.1,y:138.9,alpha:0.26},0).wait(1).to({x:59,y:145.3,alpha:0.13},0).wait(1).to({x:58.9,y:151.8,alpha:0},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.katespade();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,139,201);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACBFQgcAEguADIgCgQIAigCIAAgKIgcAAIAAgOIAcAAIAAgJIgdAAIAAg1IAdAAIAAgHIggAAIAAgOIAgAAIAAgHIgcABIgEgPQArABAcgHIAHANQgLADgSACIAAAJIAeAAIAAAOIgeAAIAAAHIAbAAIAAA1IgbAAIAAAJIAaAAIAAAOIgaAAIAAAJIAagDIAAAHQAXgdAAg5IAAgFIgPAAIAAgQIAPAAIAAgeIAQAAIAAAeIAhAAQAABWgCASQgDATgUAAIgQgBIgEgQIASABQAHAAACgLQACgLgBhFIgQAAIAAAFQAABGgeAggAgYANIANAAIAAgJIgNAAgAg1ANIAOAAIAAgJIgOAAgAgYgHIANAAIAAgIIgNAAgAg1gHIAOAAIAAgIIgOAAg");
	this.shape.setTransform(92.5,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBLQgVAAAAgUIAAheIASAAIAABaQAAAHAIAAIAbAAQAFAAADgFQACgFAAgcIARAGQgCAkgGAGQgEAHgLAAgAhOAxQANgjAFglIAQAEQgGAugNAfgAAkgVIARgGQAMAbAOAtIgQAHQgNgrgOgegAgThBIAOgJQAXAbAJASIgOAKQgNgXgTgXg");
	this.shape_1.setTransform(74.8,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBAQA3gSAZgxIAQAHQgMATgNARQAOALAMANIgNAOQgKgOgPgNQgUASgdAKgAAhBMIgDgQIAWABQAHAAgBgHIAAiCIARAAIAACHQAAARgRAAgAAbApIAAhmIAQAAIAABmgAhHAYQAYgJARgQIgiACIgEgPIADgBQAIgFANgYIgaAAIAAgQIAlAAIgIgPIATgDIAIASIAhAAIAAAQIgtAAQgLAVgHAJIAbgDQAEgGAGgLIANAIQgXAvgsASg");
	this.shape_2.setTransform(56.4,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBJIAAgRIAtAAQgGgpgMguIgTAAIAAgRIA8AAIgIgVIARgDQAFANACALIA9AAIAAARIgTAAQgKA1gLAiIAwAAIAAARgAgOA4IAZAAQALgiAJg1Ig+AAQAKAqAHAtg");
	this.shape_3.setTransform(38.7,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// bg
	this.instance = new lib.cta_bg();
	this.instance.parent = this;
	this.instance.setTransform(66.1,18.8,1,1,0,0,0,66.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:65.5,scaleX:1,scaleY:1,x:65.5},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:65.6},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:65.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,0,144.2,37.5);


// stage content:
(lib._320x480 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(202.4,26.1,1.375,1.375,0,0,0,139.8,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_161 = new cjs.Graphics().p("AprJtQkCkBAAlsQAAlrECkBQEAkBFrAAQD5AADIB5IAAAAIDIAAIAACmQDkD4AAFWQAAFskAEBQkBEBlsAAQlrAAkAkBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(161).to({graphics:mask_graphics_161,x:162.3,y:189.8}).wait(78));

	// phone_ending
	this.instance_1 = new lib.phone_ending_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.6,342.2,0.806,0.806,0,0,0,79.4,101.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(164).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,scaleX:0.81,scaleY:0.81,x:162.6,y:306.3},0).wait(1).to({y:269.7},0).wait(1).to({y:233},0).wait(1).to({y:196.4},0).wait(71));

	// circle
	this.instance_2 = new lib.circle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.8,188.8,0.161,0.161,0,0,0,73,73);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(161).to({_off:false},0).wait(1).to({regX:73.2,regY:73.2,scaleX:0.42,scaleY:0.42},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:161.9,y:188.9},0).wait(1).to({scaleX:0.94,scaleY:0.94},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:162,y:189},0).wait(74));

	// title
	this.instance_3 = new lib.title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.2,70.1,1.183,1.183,0,0,0,95.5,11.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(160).to({_off:false},0).wait(1).to({regX:94.1,scaleX:1.16,scaleY:1.16,x:158.6,alpha:0.25},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:158.7,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:1},0).wait(75));

	// 最高享
	this.instance_4 = new lib.ending_cut_text_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.4,297.9,1.26,1.26,0,0,0,56.8,29.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(168).to({_off:false},0).wait(1).to({regX:24.5,regY:43.9,x:110.9,y:315.5,alpha:0.125},0).wait(1).to({x:118,alpha:0.25},0).wait(1).to({x:125.2,alpha:0.375},0).wait(1).to({x:132.3,alpha:0.5},0).wait(1).to({x:139.5,alpha:0.625},0).wait(1).to({x:146.6,alpha:0.75},0).wait(1).to({x:153.8,alpha:0.875},0).wait(1).to({x:160.9,alpha:1},0).wait(63));

	// 再送
	this.instance_5 = new lib.ending_cut_text_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25.4,388.3,1.311,1.311,0,0,0,26.9,26.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(173).to({_off:false},0).wait(1).to({regX:60.7,regY:14.1,x:77.4,y:372.2,alpha:0.125},0).wait(1).to({x:85.1,alpha:0.25},0).wait(1).to({x:92.8,alpha:0.375},0).wait(1).to({x:100.5,alpha:0.5},0).wait(1).to({x:108.2,alpha:0.625},0).wait(1).to({x:115.9,alpha:0.75},0).wait(1).to({x:123.6,alpha:0.875},0).wait(1).to({x:131.3,alpha:1},0).wait(58));

	// Kate Spade
	this.instance_6 = new lib.katespade_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(250.6,551,0.67,0.67,0,0,0,69.7,100.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(176).to({_off:false},0).wait(1).to({regX:69.5,x:250.4,y:532.7,alpha:0.125},0).wait(1).to({y:514.4,alpha:0.25},0).wait(1).to({y:496.1,alpha:0.375},0).wait(1).to({y:477.8,alpha:0.5},0).wait(1).to({y:459.5,alpha:0.625},0).wait(1).to({y:441.2,alpha:0.75},0).wait(1).to({y:422.9,alpha:0.875},0).wait(1).to({y:404.6,alpha:1},0).wait(55));

	// cta
	this.instance_7 = new lib.cta();
	this.instance_7.parent = this;
	this.instance_7.setTransform(125,449.3,1.084,1.102,0,0,0,66.1,18.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(179).to({_off:false},0).wait(1).to({regX:65.5,regY:18.8,x:124.2,y:444.5,alpha:0.2},0).wait(1).to({x:124.1,y:439.9,alpha:0.4},0).wait(1).to({x:124,y:435.3,alpha:0.6},0).wait(1).to({x:123.9,y:430.6,alpha:0.8},0).wait(1).to({x:123.8,y:426,alpha:1},0).wait(55));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,0,1,1,0,0,0,160,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:25,y:25},0).wait(154).to({scaleY:1.68,y:42},0).wait(1).to({scaleY:2.36,y:59},0).wait(1).to({scaleY:3.04,y:76},0).wait(1).to({scaleY:3.72,y:93.1},0).wait(1).to({scaleY:4.4,y:110.1},0).wait(1).to({scaleY:5.08,y:127.1},0).wait(79));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,480.1,1,1,0,0,0,160,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:0,y:455},0).wait(154).to({scaleY:1.67,y:438.3},0).wait(1).to({scaleY:2.33,y:421.6},0).wait(1).to({scaleY:3,y:405},0).wait(1).to({scaleY:3.66,y:388.3},0).wait(1).to({scaleY:4.33,y:371.7},0).wait(1).to({scaleY:4.99,y:355},0).wait(79));

	// text2_2
	this.instance_10 = new lib.text_2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(237.7,278.1,1.132,1.132,0,0,0,59.4,13.1);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(64).to({_off:false},0).wait(1).to({regX:55.1,regY:12.6,x:226.9,y:277.4,alpha:0.2},0).wait(1).to({x:221,alpha:0.4},0).wait(1).to({x:215.1,alpha:0.6},0).wait(1).to({x:209.2,alpha:0.8},0).wait(1).to({x:203.3,alpha:1},0).wait(30).to({scaleX:1.19,scaleY:1.19,x:205,y:278.6,alpha:0.8},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:206.7,y:279.6,alpha:0.6},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:208.4,y:280.7,alpha:0.4},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:210.1,y:281.8,alpha:0.2},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:211.8,y:282.9,alpha:0},0).to({_off:true},1).wait(135));

	// text_2
	this.instance_11 = new lib.text_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(99.4,238,1.14,1.14,0,0,0,73.5,13.1);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).wait(1).to({regX:45.4,regY:12.9,x:76.8,y:237.7,alpha:0.2},0).wait(1).to({x:86.3,alpha:0.4},0).wait(1).to({x:95.8,alpha:0.6},0).wait(1).to({x:105.3,alpha:0.8},0).wait(1).to({x:114.8,alpha:1},0).wait(35).to({scaleX:1.2,scaleY:1.2,x:112.8,y:236.6,alpha:0.8},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:110.9,y:235.5,alpha:0.6},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:109,y:234.4,alpha:0.4},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:107,y:233.3,alpha:0.2},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:105.1,y:232.2,alpha:0},0).to({_off:true},1).wait(135));

	// light
	this.instance_12 = new lib.light();
	this.instance_12.parent = this;
	this.instance_12.setTransform(164,326.1,1.575,1.575,0,0,0,58.5,119.7);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).wait(1).to({regX:58.4,regY:119.5,x:163.8,y:325.7,alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// phone_clear
	this.instance_13 = new lib.phone_clear();
	this.instance_13.parent = this;
	this.instance_13.setTransform(158.5,326.6,0.339,0.339,0,0,0,288.6,611.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:157.7,y:325.5},0).wait(56).to({scaleX:0.34,scaleY:0.34,x:157.8,y:325.2,alpha:0.889},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:324.9,alpha:0.778},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:324.5,alpha:0.667},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:157.7,y:324.2,alpha:0.556},0).wait(1).to({scaleX:0.34,scaleY:0.34,y:323.9,alpha:0.444},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:157.8,y:323.5,alpha:0.333},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:157.7,y:323.2,alpha:0.222},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:322.9,alpha:0.111},0).wait(1).to({scaleX:0.35,scaleY:0.35,y:322.5,alpha:0},0).to({_off:true},1).wait(126));

	// phone
	this.instance_14 = new lib.phone_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(59.1,430,0.339,0.339,0,0,0,0.1,0.1);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:156.1,y:609.9},0).wait(1).to({x:156.3,y:584},0).wait(1).to({x:156.4,y:558.2},0).wait(1).to({x:156.6,y:532.3},0).wait(1).to({x:156.7,y:506.5},0).wait(1).to({x:156.9,y:480.6},0).wait(1).to({x:157,y:454.8},0).wait(1).to({x:157.2,y:428.9},0).wait(1).to({x:157.3,y:403.1},0).wait(1).to({x:157.5,y:377.2},0).wait(1).to({x:157.6,y:351.4},0).wait(1).to({x:157.8,y:325.5},0).to({_off:true},1).wait(192));

	// text_1_intro
	this.instance_15 = new lib.text_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(157,223.4,1.623,1.623,0,0,0,72.2,11.8);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regY:11.5,scaleX:1.56,scaleY:1.56,y:222.9,alpha:0.2},0).wait(1).to({scaleX:1.51,scaleY:1.51,alpha:0.4},0).wait(1).to({scaleX:1.45,scaleY:1.45,y:223,alpha:0.6},0).wait(1).to({scaleX:1.39,scaleY:1.39,alpha:0.8},0).wait(1).to({scaleX:1.33,scaleY:1.33,alpha:1},0).to({_off:true},1).wait(233));

	// text_1L
	this.instance_16 = new lib.text_1L();
	this.instance_16.parent = this;
	this.instance_16.setTransform(111.6,125,1,1,0,0,0,111.6,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).wait(1).to({regX:94.6,regY:240,x:94.6,y:240},0).wait(18).to({y:233.8},0).wait(1).to({y:227.5},0).wait(1).to({y:221.3},0).wait(1).to({y:215},0).wait(1).to({x:62.8},0).wait(1).to({x:31},0).wait(1).to({x:-0.9},0).wait(1).to({x:-32.7},0).wait(1).to({x:-64.5},0).wait(1).to({x:-96.4},0).wait(205));

	// text_1R
	this.instance_17 = new lib.text_1R();
	this.instance_17.parent = this;
	this.instance_17.setTransform(78.8,0);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).wait(1).to({regX:147.3,regY:240,x:226.1,y:240},0).wait(18).to({y:246.3},0).wait(1).to({y:252.5},0).wait(1).to({y:258.8},0).wait(1).to({y:265},0).wait(1).to({x:256.8},0).wait(1).to({x:287.4},0).wait(1).to({x:318.1},0).wait(1).to({x:348.7},0).wait(1).to({x:379.4},0).wait(1).to({x:410.1},0).wait(205));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},6).wait(233));

	// text_3
	this.instance_18 = new lib.text_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(159.7,249,1.26,1.26,0,0,0,115.1,13);
	this.instance_18.alpha = 0;
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(123).to({_off:false},0).wait(1).to({regX:115.4,scaleX:1.23,scaleY:1.23,x:160,y:248.9,alpha:0.167},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.333},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.667},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.833},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:1},0).wait(32).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(73));

	// transition
	this.instance_19 = new lib.transition();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(112).to({_off:false},0).wait(1).to({regX:160,regY:240,x:160,y:240,alpha:0.075},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.45},0).wait(121));

	// bg_clear
	this.instance_20 = new lib.bg_clear_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(160,240,1,1,0,0,0,160,190);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(98).to({_off:false},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:160.1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:160},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:160.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:160},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:160.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:160},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:160},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:160.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:160},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:160.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:160},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:160.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:160},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:160.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:160},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:160.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:160},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:160.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:160},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:160.1},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:160},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:160.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:160},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:160.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:160},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:160.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:160},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:160.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:160},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:160.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:160},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:160.1},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:160},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:160.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:160},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:160.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:160},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:160.1},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:160},0).wait(86));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,50);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(239));

	// bg-purple
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#594078").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape_1.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,240,320,480);
// library properties:
lib.properties = {
	id: '6717DACCF8344094AE4C863E021302C6',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1525959159395", id:"bg"},
		{src:"images/bg_clear.jpg?1525959159395", id:"bg_clear"},
		{src:"images/katespade.jpg?1525959159395", id:"katespade"},
		{src:"images/phone.jpg?1525959159395", id:"phone"},
		{src:"images/phone_ending.jpg?1525959159395", id:"phone_ending"},
		{src:"images/pic_clear.jpg?1525959159395", id:"pic_clear"}
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