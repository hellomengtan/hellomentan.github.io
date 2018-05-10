(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,490);


(lib.bg_clear = function() {
	this.initialize(img.bg_clear);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,490);


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
p.nominalBounds = new cjs.Rectangle(0,0,123,254);// helper functions:

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
	this.shape.graphics.f("#000000").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.transition, new cjs.Rectangle(0,0,160,600), null);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E594FB").s().p("AhNAGIAAgMICbAAIAAAMg");
	this.shape.setTransform(77.9,12.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E594FB").s().p("AhNAGIAAgMICbAAIAAAMg");
	this.shape_1.setTransform(-23.3,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyBdIAAhGIgiAAIAAgTIAiAAIAAgPIglAAIAAgTIAUAAIgIgSIASgHIAIAZIARAAQAFgLADgOIASAHQgDALgEAHIASAAIAAATIgjAAIAAAPIAgAAIAAATIggAAIAABGgAA2BcIAAhmIgVAAIAAASQgCA1gVAfIgOgQQAQgYABgsIAAhUQAkgBAdgLIAKASQgaAJgdABIAAAfIA7AAIAAATIgSAAIAABmgAhbBMQANgWAFgYIASAEQgHAfgMAVgAgaAiIARgFQAIAVACANIgQAHQgFgVgGgPgAhVg4IAAgSIAiAAIgIgOIAVgEIAHASIAjAAIAAASg");
	this.shape_2.setTransform(55.5,11.9,1.286,1.286);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhA/IAKgPQAaALAXAQIgLARQgYgUgYgJgAgjBJQAdgHANgOIAGgIIgrAAIAAgTIAMAAIAAg6IgDADIgLgNIAAAHIgPAAIAAAgIARgJIAAATIgRAJIAAA2QAAAUgSABIgRAAIgFgVIAPABQAFABAAgHIAAgpIgTAHIgFgUIAYgHIAAgnIgUAAIAAgUIAUAAIAAghIAUAAIAAAhIAPAAIAAAKQAWgQAPgdIATAFIgEAHIArAAIAAAOQgIANgHAFIAgAAIAABIIALAAIAAATIg5AAQgFAMgHAJQgPAQgjAJgAApAPIgBAKIAVAAIAAg3Ig9AAIAAA3IAVAAQACgHAAgFgAgDgvIAcAAIAPgPIgfAAgAADADQASgKAFgVIAPADIgEALQAMAIAJAJIgJALQgJgKgKgFQgGALgLAGg");
	this.shape_3.setTransform(27.8,12,1.286,1.286);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhEBcIAAhCQAhAAAggGIAHAOQgZAEgbACIAAAIIAsAAIAAAOIgsAAIAAAJIBoAAIAAgJIgrAAIAAgOIArAAIAAgJIgrAAIAAgOIA/AAIAABCIgUAAIAAgFIhoAAIAAAGgAhAASIAAglIgSAQIgGgSQAYgUAKgXIARAEIgDAHIAmAAIgEgKIASgDIAEANIA+AAIAAAOIg9AAIAAAHIA3AAIAAAMIg3AAIAAAHIA3AAIAAAMIg3AAIAAAFIBCAAIAAAOgAguAEIAuAAIAAgFIguAAgAgugNIAuAAIAAgHIguAAgAguggIAuAAIAAgHIguAAgAARg7IAAggIATAAIAAAIIA1AAIAAAQIg1AAIAAAIgAgcg7IAAgIIg2AAIAAgQIA2AAIAAgIIATAAIAAAgg");
	this.shape_4.setTransform(-0.5,12,1.286,1.286);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3BbIAAgHIgoAAIAAAHIgTAAIAAhLIgGAEIgIgLIgFgGQAXgIAVgPQgIgJgGgLIgOAOIgKgOIAAAYIgTAAIAAAZIASAAIAAATIgSAAIAAAdIAWgIIAAAUQgjANglAJIgFgUIAIgCIAAhEIASAAIAABAIAKgDIAAhOIgbAAIAAhEIBBAAIAAAoQAXgUAIgaIAUAEIgEALIAtAAIAAAPQgJAYgQAQQAQANAaAJIgLARIgGgDIAABLgAAPBCIAoAAIAAggIgoAAgAgBAPIBKAAQgXgJgPgMQgQAMgUAJgAATg2QAFAJALANQAMgOAGgLIghAAgAg/gjIAaAAIAAgeIgaAAg");
	this.shape_5.setTransform(76,42.8,1.286,1.286);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhaBNQANgZAMgFQAFgLAEgRIgcAAIAAgQQAQgSAHgJIgaAAIAAgTIAwAAIAAAQQgKARgLALIAXAAIAAAOQgEAWgFANIAFADQAJAIAIAEQAIADAQABIBbgBIgEATIhXgBQgUAAgKgEQgLgEgMgLQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQgGAAgNAagAARA8IAAgfIgYAAIAAAfIgTAAIAAhqIAqAAIgTgMIAJgKIgkAAIAAgRIBsAAIAAAOQgSAPgSAKIAoAAIAABXQAAASgSAAIgRAAIgEgRIAPABQAFAAAAgGIAAgIIgbAAIAAAfgAAkAMIAbAAIAAgMIgbAAgAgHAMIAYAAIAAgMIgYAAgAAkgQIAbAAIAAgNIgbAAgAgHgQIAYAAIAAgNIgYAAgAAeg3IAUgNIgnAAgAhShNIANgNQAUAQAKAMIgNAOQgLgOgTgPg");
	this.shape_6.setTransform(43.7,42.9,1.286,1.286);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaBLQAcgdAJguIAUADQgFAUgEALQAOAWAUAHIABAAIAAhMIgyAAIAAgUIB1AAIAAAUIgwAAIAAAaIA4AAIAAAUIg4AAIAAAiQAVADAcAAQAPAAAPgBIgEAUIgRAAQg+AAgbgLQgRgIgOgRQgLAXgQAQgAhRgYIAAgvIBJAAIgJgQIAVgEIAIAUIBIAAIAAAuIgUAAIAAgbIh9AAIAAAcg");
	this.shape_7.setTransform(11.3,42.7,1.286,1.286);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABABbIAAgIIg2AAIAAAIIgUAAIAAhfIBeAAIAABfgAAKBBIA2AAIAAgRIg2AAgAAKAeIA2AAIAAgRIg2AAgAhQBZIgEgTIASABQAGAAAAgHIAAgoIgXAHIgFgVIAcgHIAAgmIgYAAIAAgUIAYAAIAAgjIAUAAIAAAjIAUAAIAAAUIgUAAIAAAgIAWgJIAAAUIgWAJIAAA0QAAAUgTAAgAAEgTQgPAAAAgRIAAg1IASAAIAAAPIBPgDIAAASIhPADIAAAMQAAAHAHAAIBLAAIAAASg");
	this.shape_8.setTransform(-21.1,42.9,1.286,1.286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-32.5,0,120.4,54.6), null);


(lib.text_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXCEQgogBAAgkIAAh8IDAAAIAAhHIjEAAIAAgeIDlAAIAACDIjAAAIAABRQAAASAWAAICOAAQATAAAFgMQAFgQABgfIAgAKQgFAxgLAQQgJAPggABg");
	this.shape.setTransform(101.3,47.9,0.885,0.885);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABLCQIAAgRIiVAAIAAARIghAAIAAj8IBDAAQAKgRAFgSIAfAFQgEAQgHAOIBxAAIAAD8gAhKBgICVAAIAAgoIiVAAgAhKAaICVAAIAAglIiVAAgAhKgpICVAAIAAgkIiVAAg");
	this.shape_1.setTransform(71,47.7,0.885,0.885);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAYB4IANgVIhLAAIAOAUQgiAOg+AKIgQgaQA2gHAigLIg0AAIAAhyIDNAAIAAByIguAAQAxAKAdAKIgRAaQgvgQgxgJgAhFBOICPAAIAAgLIiPAAgAhFAvICPAAIAAgJIiPAAgAhFASICPAAIAAgLIiPAAgAhTgYIAAg1ICrAAIAAA1gAg0gtIBtAAIAAgLIhtAAgABngyIAAglIjJAAIAAAkIggAAIAAg+IAwAAQgFgMgHgKIAhgGIAMAcIAkAAIAAgfIAfAAIAAAfIAjAAQAIgPADgNIAhAFQgEAOgFAJIAvAAIAAA/g");
	this.shape_2.setTransform(41.3,47.8,0.885,0.885);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AghCQIAAiQICrAAIAABwQAAAfgeAAIgXAAIgIgcIAWABQAJAAAAgKIAAhOIhuAAIAAB0gAhZCQIAAhYIgpANIgIgfQAXgEAagJIAAhKIgPAAIgHAqIgdgIQALgvACg4IAcADIgBAjIALAAIAAg9IAgAAIAAA9IAVAAIAAAfIgVAAIAAA+IARgIIAAAfIgRAHIAABlgAAOBqIAAhBIBLAAIAABBgAAmBTIAaAAIAAgTIgaAAgAgNgMIAAg/ICDAAIAAA/gAAQgjIBIAAIAAgRIhIAAgAglhYIAAgdIBHAAQgEgLgGgKIAfgFIALAaIBLAAIAAAdg");
	this.shape_3.setTransform(11.8,47.6,0.885,0.885);

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

}).prototype = getMCSymbolPrototype(lib.text_3, new cjs.Rectangle(-0.7,0,113.7,60.7), null);


(lib.text_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRCPIAAjxIAvAAQAFgTADgZIAgAFQgCAUgGATIBLAAIAADwIgiAAIAAgMIhZAAIAAANgAAOBiIBZAAIAAhEIhZAAgAAOgBIBZAAIAAhBIhZAAgAh4COIgHgfIAYACQAKAAAAgLIAAhAIgiANIgJghQATgEAYgJIAAg9IgnAAIAAggIAnAAIAAg0IAhAAIAAA0IAfAAIAAAgIgfAAIAAAxIAegPIAAAgIgeAPIAABWQAAAfggAAg");
	this.shape.setTransform(106.3,12.5,0.866,0.866);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoCSIAAhuIgRASIgVgcQAtgrAQg+IAhAEQgHAhgQAfIAACdgAApBmQgiAagrARIgQgfQApgQAagTQgVgYgPgaIgSAQIgVgbQAvgjAQg+IAhAGIgGASIBcAAIAAAcQgOA/gqArQAiAXAsANIgVAeQgvgPgjgcgAAAAFQAOAdAZAZQAMgLAIgKQgXgUgVgOIAWgTIAlAeQALgVAFgTIhIAAQgJARgJANgAiHhSIAAgfIB4AAQgHgPgHgLIAjgGQAKASAEAOIB2AAIAAAfg");
	this.shape_1.setTransform(75,12.6,0.866,0.866);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAPBiIARgZQBAATAwAZIgSAdQgzgdg8gTgAiQByQBEgMAdgVIAOgOIhfAAIAAgdIBwAAIAFgTIAeADIgDAQIByAAIAAAdIh8AAQgKAUgRAQQgeAahPAQgAiIAOIAAgdIB5AAIAAgWIhdAAIAAgbIBdAAIAAgWIhvAAIAAgdIBBAAQgEgJgIgOIAigGQAGAPAFAOIA7AAQAGgRADgNIAjAFQgEANgHAMIA+AAIAAAdIhuAAIAAAWIBfAAIAAAbIhfAAIAAAWIB5AAIAAAdg");
	this.shape_2.setTransform(43.7,12.7,0.866,0.866);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiOB0QAzgNAQgSQASgVACggIhQAAIAAgfIEPAAIAAAfIhTAAIAAA+QAAAOALAAIAmAAQAEAAADgHQACgGAAgfIAgAJQgFAwgHAJQgIAIgPAAIg2AAQgiAAAAgmIAAhEIgrAAQgCAugYAbQgXAagzAOgAhYgYIAAgfICvAAIAAAfgABlgnIAAgsIjLAAIAAAsIggAAIAAhLIBzAAIgLgYIAkgGQAGAPAEAPIB2AAIAABLg");
	this.shape_3.setTransform(12.3,12.7,0.866,0.866);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_2_2, new cjs.Rectangle(0,0,118.1,25.3), null);


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
	mask.graphics.p("EgHVAu4MAEbhdvIKQAAMAAABdvg");
	mask.setTransform(34,300);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(51.3,285.9,0.955,0.955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(26,286,0.955,0.955);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(-6.5,286.2,0.955,0.955);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(-37.3,286.6,0.955,0.955);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(19.7,251.6,0.955,0.955);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(-12.1,250.8,0.955,0.955);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594078").s().p("EgHVAu4MAEbhdvIKQAAMAAABdvg");
	this.shape_6.setTransform(34,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1R, new cjs.Rectangle(-12.9,0,94,600), null);


(lib.text_1L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgHYAu4MAAAhdvIOxAAMgEbBdvg");
	mask.setTransform(47.3,300);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(130.1,285.9,0.955,0.955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(104.8,286,0.955,0.955);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(72.3,286.2,0.955,0.955);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(41.5,286.6,0.955,0.955);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(98.5,251.6,0.955,0.955);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(66.7,250.8,0.955,0.955);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#594078").s().p("EgHYAu4MAAAhdvIOxAAMgEbBdvg");
	this.shape_6.setTransform(47.3,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1L, new cjs.Rectangle(0,0,94.5,600), null);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgGAAgKQAAgLAHgGQAHgHAKAAQAJAAAIAHQAGAHAAAKQAAAJgGAIQgJAGgIAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAdgaIADgDQAJgMAAgLQAAgOgJgKQgKgJgPABQgTAAgJAMQgIAKAAAUIgjAAQAAgiAUgUQAVgTAhAAQAeAAATAQQASARAAAcQAAAXgLAPQgFAGgWASQgHAFgGAKQgEAJAAALIAAAFg");
	this.shape.setTransform(70.9,40.2,0.777,0.777);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag0B7QAmgtAIhXQgWgXgUgMIAPgaQAQALAMANIAAhhIAfAAIAABaQgBCHg1A+gAAbCFIAAgeIAtAAIAAhcIggAAIAAgdIAgAAIAAhNIgiAAIAAgdIBkAAIAAAdIgjAAIAABNIAfAAIAAAdIgfAAIAABcIApAAIAAAegAiOBfQAVgEAQgGIAAhQIgeAAIAAgcIAeAAIAAhFIghAAIAAgeIBhAAIAAAeIghAAIAABFIAcAAIAAAcIgcAAIAABGIAhgPIAAAgQgsAUgxAOg");
	this.shape_1.setTransform(50.3,40.3,0.777,0.777);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiJB7QAzg3ACh4IguAAIAAggIAuAAIAAg7IAgAAIAAA7IA9AAQAACZgFAlQgEAigpAAQgKAAgOgCIgIgeQAOACANAAQARAAAEgUQADgVAAh5IgeAAQgDCFg6A/gABrCJIAAgTIgtAAIAAATIgfAAIAAjuIBrAAIAADugAA+BXIAtAAIAAidIgtAAg");
	this.shape_2.setTransform(23.8,40.4,0.777,0.777);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAqBfQgXgOgTgRQgzArhDAcIgUgfQBCgZAvgnQgdgegUgoQgTgkgGglIgWAAIAAgfIDiAAIAAAeQgbBXg3A5QAUASAZAOQAeATApAPIgTAdQgpgQglgYgAgqgjQATAgAWAVQAwgxAXhIIiKAAQAJAoARAcg");
	this.shape_3.setTransform(-1.2,40.8,0.777,0.777);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABQgIAbgIANQgeA3hLApIgVgbQBEgiAcgwQAKgRAHgZIhmAAIAAgeIBtAAQAFggACgeIhsAAIAAgeID3AAIAAAeIhrAAQgCAcgFAiIB7AAIAAAeIhtAAQAhBQBWAsIgUAbQhZgxgihXg");
	this.shape_4.setTransform(45.1,12.3,0.777,0.777);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgeB0QBKgdAdgzIi3AAIAAgeIDdAAIAAAZQgcBLhbAmgAiRgrQBRgoA1g8IAWAAQA7BABMAkIgRAeQgfgPgbgUIAAAZIiNAAIAAgZQgeAVgcAPgAg+g2IB9AAQgjgagcghQgaAggkAbg");
	this.shape_5.setTransform(19.2,11.7,0.777,0.777);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1, new cjs.Rectangle(-12,0.5,88.4,51.2), null);


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
	this.instance.setTransform(9,55,4.48,4.379);

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
	this.shape.setTransform(83.1,23.4,0.268,0.268);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBqIAAhJIhKAAIAAhBIBKAAIAAhJIA/AAIAABJIBKAAIAABBIhKAAIAABJg");
	this.shape_1.setTransform(112.2,23.2,0.268,0.268);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhSDUIBbiQQgNAEgKAAQg3AAgngnQgogoAAg9QAAg/ArgpQAqgnA/AAQBAAAArApQAqApAAA8QAAAdgJAdQgJAbgPAWIhrCugAgxh4QgWAWAAAeQAAAeAWAWQAVAVAdAAQAeAAAVgVQAVgWAAgeQAAgegVgWQgVgWgeAAQgcAAgWAWg");
	this.shape_2.setTransform(104.4,23.1,0.268,0.268);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiZCMIBHg5QARAcAXAOQAYAPAbAAQAeAAARgRQARgQAAgXQAAgXgbgPQgOgIgtgOQg5gSgYgRQgmgeAAg1QAAgzAngiQAogjA7AAQAvAAAkARQAdAOAcAeIhAAxQgcgpgwAAQgaAAgQAOQgPANAAAVQAAAWAZAOQAOAIAtAPQA5ASAZAUQAnAfAAA2QAAA0gmAlQgpAphBAAQhgAAhDhLg");
	this.shape_3.setTransform(95.7,23.2,0.268,0.268);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhSDUIBbiQQgNAEgKAAQg3AAgngnQgngoAAg9QgBg/AsgpQApgnA/AAQBAAAAqApQAqApABA8QAAAdgJAdQgIAbgQAWIhsCugAgxh4QgWAWAAAeQAAAeAWAWQAVAVAcAAQAfAAAVgVQAVgWAAgeQAAgegVgWQgVgWgfAAQgcAAgVAWg");
	this.shape_4.setTransform(70.6,23.1,0.268,0.268);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiYCMIBGg5QAQAcAYAOQAYAPAbAAQAeAAARgRQAQgQAAgXQAAgXgbgPQgNgIgugOQg4gSgYgRQgmgeAAg1QAAgzAogiQAngjA7AAQAuAAAlARQAcAOAcAeIg/AxQgbgpgxAAQgbAAgPAOQgPANgBAVQABAWAZAOQAOAIAtAPQA4ASAaAUQAnAfgBA2QABA0gmAlQgpAphBAAQhgAAhChLg");
	this.shape_5.setTransform(61.8,23.2,0.268,0.268);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiWCXQg7g+gBhZQABhZA8g+QA9g/BbAAQA/AAAzAeQAwAdAcAwIhFApQgnhIhRAAQg6AAgnApQgnAoAAA5QAAA6AnAoQAoApA7AAQAuAAAhgZQAegXAMgqIiEAAIAAhKIDYAAIAAAeQgBBXg3A8Qg6A/hbAAQhfAAg9hAg");
	this.shape_6.setTransform(5.8,23.2,0.268,0.268);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgmDUIAAmnIBNAAIAAGng");
	this.shape_7.setTransform(24.2,23.1,0.268,0.268);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABRCnIhRhvIhQBvIheAAIB+ipIh6ikIBfAAIBLBqIBLhqIBcAAIh4CkICACpg");
	this.shape_8.setTransform(41,24.3,0.268,0.268);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhfDmIA9iQIiJk7IBSAAIBcDhIBYjhIBRAAIi7HLg");
	this.shape_9.setTransform(50.3,26,0.268,0.268);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah6CAQg0gyAAhOQAAhOAzgyQAvgtBEAAQAgAAAcAMQAcANASAWIAAgoIBNAAIAAFNIhNAAIAAgsQgSAYgdAOQgdANggAAQhAAAgwgugAhFhJQgdAeAAArQAAArAdAeQAdAeAqAAQArAAAdgeQAcgeAAgrQAAgrgcgeQgdgegrAAQgqAAgdAeg");
	this.shape_10.setTransform(31,24.3,0.268,0.268);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah6CAQg1gyABhOQgBhOA0gyQAwgtBCAAQAhAAAcAMQAdANARAWIAAgoIBNAAIAAFNIhNAAIAAgsQgSAYgdAOQgdANggAAQhAAAgwgugAhFhJQgdAeAAArQAAArAdAeQAdAeAqAAQArAAAdgeQAcgeABgrQgBgrgcgeQgdgegrAAQgqAAgdAeg");
	this.shape_11.setTransform(17,24.3,0.268,0.268);

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

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(0,0,115,32.2), null);


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
	this.shape.graphics.f("#594078").s().p("AsfETIAAolIY/AAIAAIlg");
	this.shape.setTransform(160,0,1,1,0,0,0,80,-27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(0,0,160,55), null);


(lib.footer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("AsfETIAAolIY/AAIAAIlg");
	this.shape.setTransform(160,-0.1,1,1,0,0,0,80,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.footer, new cjs.Rectangle(0,-25,160,55), null);


(lib.ending_cut_text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAvIAAgGIAMAAIAAgTIBFAAIAAATIAMAAIAAAGgAAOApIAOAAIAAgNIgOAAgAgGApIANAAIAAgNIgNAAgAgbApIAOAAIAAgNIgOAAgAAbANIg/ADIgBgFQAJAAAMgLIgbAAIAAgGIApAAIAAgIIgjAAIAAgHIAjAAIAAgGIAGAAIAAAGIAiAAIAAAHIgiAAIAAAIIAoAAIAAAGIgYAAQANAJAIAHIgGAFgAgUAKIApgDIgJgGIADgBIgWAAgAAQgZIAAgHIgNAAIAAgHIANAAIAAgHIAHAAIAAAHIAXAAIAAAHIgXAAIAAAHgAgVgZIAAgHIgXAAIAAgHIAXAAIAAgHIAHAAIAAAHIANAAIAAAHIgNAAIAAAHg");
	this.shape.setTransform(47.7,50,1.318,1.318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgoAsQAJgKAAgQIAAgWIBAAAIAAAsQAAAJgJAAIgNAAIgBgHIAMAAQAEgBAAgEIAAgJIgwAFIgBgHQAZgCAYgCIAAgVIgxAAIAAAHIAqADIgDAGIgngDIAAAEQgBATgKAMgAgugQIAggDIAAgMIgcAAIAAgHIAcAAIAAgJIAIAAIAAAbIAGgBIAAAHIgtAFgAAOgKQgJAAAAgIIAAgeIAIAAIAAALIAegCIAAAHIgeACIAAALQAAAAAAABQAAAAABABQAAAAABAAQABAAAAAAIARAAQABAAABAAQABAAAAAAQABAAAAAAQABgBAAAAQABgBACgIIAGACQgBALgDACQgCACgHAAg");
	this.shape_1.setTransform(33.7,50.2,1.318,1.318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgoAxIAAhDIAlAAIAAgdIAHAAIAAAdIAmAAIAAA4QAAAKgKAAIgKAAIgCgHIAKAAQAEAAAAgFIAAguIhDAAIAAA7gAgTAgIAAggIAmAAIAAAggAgLAZIAXAAIAAgSIgXAAgAASgaQAGgHAFgMIAGADQgFANgGAHgAgjgoIAHgDIAKARIgHAEg");
	this.shape_2.setTransform(19.8,50.2,1.318,1.318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALAwIgCgHIAMAAQAFAAAAgFIAAgaIgjAAIAAgIIAjAAIAAgHIAHAAIAAAHIANAAIAAAIIgNAAIAAAcQAAAKgJAAgAgtAoIAAhPIAeAAIAABNIgIAAIAAgHIgPAAIAAAJgAgmAXIAPAAIAAgYIgPAAgAgmgIIAPAAIAAgYIgPAAgAgHARIAGgDIANAQIgGAFQgFgIgIgKgAgHgKIAAgHIAVAAIAAgMIgZAAIAAgHIAZAAIAAgLIAHAAIAAALIAZAAIAAAHIgZAAIAAAMIAVAAIAAAHg");
	this.shape_3.setTransform(6.1,50.2,1.318,1.318);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgQAVQgHgIAAgLIAAgCQAAgHADgHQAEgHAFgDQAHgEAFAAQALAAAGAHQAGAIAAANIAAADIglAAQAAAIAFAFQAEAFAGAAQAGAAADgCQADgBADgFIAGAFQgHALgOAAQgKAAgIgIgAgIgQQgEAFgBAHIAbAAIAAgBQgBgHgDgEQgEgEgFAAQgEAAgFAEg");
	this.shape_4.setTransform(65.9,33.3,1.318,1.318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQAgQgHgHABgNIAAgBQgBgMAHgIQAFgIAKAAQAJAAAGAHIAAgdIAJAAIAABOIgIAAIgBgGQgFAHgKAAQgJAAgGgIgAgJgDQgEADAAAMQAAAKAEAFQAEAFAFAAQAJAAAFgIIAAgZQgFgIgIAAQgGAAgEAGg");
	this.shape_5.setTransform(58,31.8,1.318,1.318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgQAYQgGgEAAgIQAAgIAHgEQAGgFAMAAIAJAAIAAgEQAAgGgDgCQgEgDgFAAQgFAAgCADQgEACAAADIgKAAQAAgDADgFQACgDAGgCQAGgDAFAAQAJAAAFAFQAGAEAAAJIAAAZQAAAGACAGIAAABIgKAAIgBgGQgHAHgIAAQgIAAgFgFgAgNALQAAAFADACQADACAFABQAEgBAEgBQAEgDACgEIAAgLIgIAAQgRAAAAAKg");
	this.shape_6.setTransform(50.5,33.3,1.318,1.318);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAnIAAhMIAIAAIABAGQAGgHAIAAQALAAAFAHQAHAIAAAOIAAAAQAAAMgHAIQgEAIgLAAQgKAAgFgHIAAAbgAgNgWIAAAZQAEAIAJAAQAGAAAEgFQAEgGAAgKQAAgIgEgHQgEgFgGAAQgKAAgDAIg");
	this.shape_7.setTransform(42.9,34.7,1.318,1.318);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgMAkQgHgDgEgFQgDgFAAgHIAKAAQAAAHAFAEQAFAEAHAAQAIAAAEgEQAEgDAAgFQAAgGgEgDQgEgDgJgDQgMgDgGgFQgGgFAAgIQAAgJAHgGQAHgGALAAQAHAAAGADQAHAEADAFQADAFAAAGIgKAAQAAgGgEgEQgEgEgIAAQgHAAgEADQgEACAAAHQAAAEAEAEQAFADAHACIAPAFQAGAEACAEQACAEAAAGQAAAJgHAFQgIAGgLAAQgGAAgHgDg");
	this.shape_8.setTransform(34.7,32,1.318,1.318);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgQAVQgGgGAAgNIAAgCQAAgHACgHQAEgHAFgDQAGgEAFAAQAMAAAFAHQAHAIgBANIAAADIgkAAQAAAJAEAEQAGAFAGAAQAFAAADgCQADgCADgEIAGAFQgGALgPAAQgLAAgHgIgAgIgQQgEAEgBAIIAbAAIAAgBQAAgHgEgEQgDgEgHAAQgEAAgEAEg");
	this.shape_9.setTransform(23.5,33.3,1.318,1.318);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAfQgDgDAAgIIAAghIgKAAIAAgIIAKAAIAAgNIAIAAIAAANIALAAIAAAIIgLAAIAAAhQAAAEACACQABABAEAAIAEAAIAAAHIgHABQgHAAgCgEg");
	this.shape_10.setTransform(17.3,32.5,1.318,1.318);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRAYQgFgEAAgIQAAgJAGgDQAHgFALAAIAJAAIAAgEQAAgGgDgCQgDgDgFAAQgFAAgDADQgEACABADIgKAAQAAgDADgFQADgDAFgCQAGgDAEAAQALAAAFAFQAFAEAAAJIAAAZQAAAGACAGIAAABIgKAAIgBgGQgHAHgIAAQgIAAgGgFgAgMALQAAAFACACQADACAGABQADgBAEgBQAEgDABgEIAAgLIgHAAQgQAAAAAKg");
	this.shape_11.setTransform(11.4,33.3,1.318,1.318);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AARAlIgagjIgJAKIAAAZIgKAAIAAhJIAKAAIAAAkIAhgkIALAAIgcAhIAfAog");
	this.shape_12.setTransform(3.8,32.1,1.318,1.318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E497F9").s().p("AhbBOQAOgaAMgEQAFgMAEgQIgbAAIAAgQQALgMAKgPIgaAAIAAgTIAxAAIAAAQQgGALgPASIAYAAIAAANQgFAWgFANIADAEQAKAIAIAEQAKAEAPAAIBbgBIgEATIhYgBQgUgBgKgDQgLgEgMgLQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBAAAAAAQgGAAgLAZgAgaAzQAfgRAJgcIgqAAIAAgSIAtAAQABgLAAgNIgnAAIAAgTIAVAAQgGgNgJgMIARgJQAJANAHAQIgLAFIAdAAQAJgRAGgTIATAHQgGARgHAMIAVAAIAAATIgnAAIgCAYIAxAAIAAASIg0AAQgIAkgmAagAAhAdIALgOQAaASASASIgOAQQgVgWgUgQgAhThMIAOgNQAQAOAOAOIgOAOQgKgNgUgQg");
	this.shape_13.setTransform(30.1,9.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E497F9").s().p("AhDBXIAAgvIgVAAIAAgUIAVAAIAAhIIA6AAIAAgPIhJAAIAAgTIClAAIAAATIhJAAIAAAPIA6AAIAABIIAVAAIAAAUIgVAAIAAAXQAAAYgVAAIgSAAIgFgUIARABQAHAAAAgKIAAgSIhfAAIAAAvgAAKAUIAmAAIAAgSIgmAAgAgvAUIAmAAIAAgSIgmAAgAAKgPIAmAAIAAgTIgmAAgAgvgPIAmAAIAAgTIgmAAg");
	this.shape_14.setTransform(8.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ending_cut_text_2, new cjs.Rectangle(0,0,69.1,56.7), null);


(lib.ending_cut_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E497F9").s().p("AhUBCQAdgKALgQQAKgQACgcIAAgEIgvAAIAAgTIChAAIAAATIgxAAIAAA/QAAAHAGAAIAVAAQAEAAABgEQADgFAAgXIASAGQgDAggFAGQgEAFgLAAIgdAAQgVAAABgUIAAhDIgbAAIAAAEQgCAjgOAVQgOAUgfALgAhAg/IAAgTICCAAIAAATg");
	this.shape.setTransform(28.5,79.6,0.874,0.874);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A72CCE").s().p("AhEBlQgWgdgBg0IAAglQABg2AVgdQAYgfAtAAQAuAAAXAeQAWAcABA1IAAAlQgBA2gVAdQgXAggvAAQgsAAgYgfgAg1hYQgRAXAAAwIAAAlQgBAsATAZQARAXAjAAQAkAAASgYQARgYABgvIAAglQgBgugRgWQgTgXgjAAQgkAAgRAXgAgZBEQgJgPAAgeIAAgxQAAgdAJgNQAHgOASAAQASAAAJAOQAIAPAAAeIAAAxQgBAfgIAMQgIAOgSAAQgRAAgIgPgAgIg6QgGAIAAAYIAAAxQgBAXAHAMQADAFAFAAQAGAAADgEQAFgJABgYIAAgxQAAgZgFgKQgDgEgHAAQgGAAgCAEg");
	this.shape_1.setTransform(10.7,75.6,0.874,0.874);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag0BZQgTgZABgsIAAglQAAgwARgXQARgXAkAAQAjAAATAXQARAWABAuIAAAlQgBAvgRAYQgSAYgkAAQgjAAgRgXgAgZhEQgJANAAAdIAAAxQAAAeAJAPQAIAPARAAQASAAAIgOQAIgMABgfIAAgxQAAgegIgPQgJgOgSAAQgSAAgHAOg");
	this.shape_2.setTransform(10.7,75.6,0.874,0.874);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A72CCE").s().p("AhEBlQgXgdABg0IAAglQgBg2AWgdQAYgfAtAAQAtAAAZAeQAVAdAAA0IAAAlQAAA2gVAdQgXAggvAAQgsAAgYgfgAg1hYQgSAYAAAvIAAAlQAAAtATAYQASAXAiAAQAkAAASgYQARgYAAgvIAAglQAAgugSgWQgSgXgjAAQgkAAgRAXgAgaBEQgIgOAAgfIAAgxQAAgcAIgOQAIgOASAAQASAAAIAOQAJAOAAAfIAAAxQAAAegJANQgIAOgSAAQgRAAgJgPgAgJg6QgFAJAAAXIAAAxQAAAYAFALQADAFAGAAQAGAAADgEQAGgKAAgXIAAgxQAAgZgGgKQgCgEgHAAQgGAAgDAEg");
	this.shape_3.setTransform(-4.6,75.6,0.874,0.874);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag0BZQgTgYAAgtIAAglQAAgvASgYQARgXAkAAQAjAAASAXQASAWAAAuIAAAlQAAAvgRAYQgSAYgkAAQgiAAgSgXgAgahEQgIAOAAAcIAAAxQAAAfAIAOQAJAPARAAQASAAAIgOQAJgNAAgeIAAgxQAAgfgJgOQgIgOgSAAQgSAAgIAOg");
	this.shape_4.setTransform(-4.6,75.6,0.874,0.874);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A72CCE").s().p("AhEBlQgVgcgBg1IAAglQAAg2AVgdQAYgfAtAAQAuAAAXAeQAXAdAAA0IAAAlQAAA2gWAdQgXAgguAAQgtAAgYgfgAg1hYQgRAYAAAvIAAAlQABAuARAXQASAXAjAAQAjAAASgYQASgXAAgwIAAglQAAgugSgWQgSgXgkAAQgjAAgSAXgAgZBEQgJgOAAgfIAAgxQAAgcAJgOQAIgOARAAQASAAAJAOQAIAOAAAfIAAAxQAAAdgIAOQgKAOgQAAQgSAAgIgPgAgIg6QgGAJAAAXIAAAxQAAAaAGAJQACAFAHAAQAGAAACgEQAGgIAAgZIAAgxQAAgZgFgKQgDgEgHAAQgFAAgDAEg");
	this.shape_5.setTransform(-19.9,75.6,0.874,0.874);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BZQgRgXgBguIAAglQAAgvARgYQASgXAjAAQAkAAASAXQASAWAAAuIAAAlQAAAwgSAXQgSAYgjAAQgjAAgSgXgAgZhEQgJAOAAAcIAAAxQAAAfAJAOQAIAPASAAQAQAAAKgOQAIgOAAgdIAAgxQAAgfgIgOQgJgOgSAAQgRAAgIAOg");
	this.shape_6.setTransform(-19.9,75.6,0.874,0.874);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A72CCE").s().p("AgOA7IgTgLQgIgFgBgIQgDgIAFgHQAIgMACgHQACgIAAgGIAAgcQAAgIAGgGQAGgGAIAAIAgAAQAJAAAFAGQAGAFAAAJIAAAaQgBAVgJATQgJASgRAPQgFAEgGAAQgFAAgGgDgAgIgNQAAALgDAJQgDAKgJANIAUAMQAMgLAHgPQAIgPAAgQIAAgaIggAAg");
	this.shape_7.setTransform(-30.9,85.7,0.874,0.874);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXAeQAJgNADgKQADgJAAgLIAAgcIAgAAIAAAaQAAAQgIAPQgHAPgMALg");
	this.shape_8.setTransform(-30.9,85.7,0.874,0.874);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A72CCE").s().p("AhGCDQgJAAgGgGQgFgGAAgIIAAgZQAAgIAEgGIBJhOQAOgQAGgKQADgIABgGQgBgIgDgDQgCgEgGAAQgKAAgDAFQgEAFAAALQAAAIgGAGQgFAGgJAAIglAAQgIAAgGgGQgFgGgBgIQAAgaAMgUQAMgVAWgMQAUgLAdAAQAmAAAYAVQAZAWAAAlQAAAWgMAWQgJASgYAaIgWAYIA3AAQAJAAAGAGQAFAGAAAIIAAAdQAAAIgFAGQgGAGgJAAgAAVhHQAJAJAAAQQAAANgGALQgHAMgQAQIhHBQIAAAZICRAAIAAgdIhkAAIA1g5QAUgXAKgRQAJgSAAgRQAAgcgTgQQgRgQgfAAQgWAAgSAJQgQAIgKARQgIAQgBAUIAlAAQAAgUAKgKQAJgLASAAQAOAAAIAKg");
	this.shape_9.setTransform(-41,75.4,0.874,0.874);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBvIAAgZIBHhQQAQgQAHgMQAGgLAAgNQAAgQgJgJQgIgKgOAAQgSAAgJALQgKAKAAAUIglAAQABgUAIgQQAKgRAQgIQASgJAWAAQAfAAARAQQATAQAAAcQAAARgJASQgKARgUAXIg1A5IBkAAIAAAdg");
	this.shape_10.setTransform(-41,75.4,0.874,0.874);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A72CCE").s().p("AAJCCQgJAAgFgGQgFgGAAgIIAAiTIgbAJIgHABQgHAAgEgDQgJgGAAgLIAAgeQAAgOANgFIBVgfQACgCAEAAIAFAAQAJAAAFAGQAGAGAAAIIAADbQAAAIgGAGQgFAGgJAAgAAJBuIAkAAIAAjbIgFAAIhUAgIAAAeIA1gSg");
	this.shape_11.setTransform(-57.8,75.5,0.874,0.874);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAJBuIAAivIg1ASIAAgeIBUggIAFAAIAADbg");
	this.shape_12.setTransform(-57.8,75.5,0.874,0.874);

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

}).prototype = getMCSymbolPrototype(lib.ending_cut_text_1, new cjs.Rectangle(-64.8,38.7,100.8,52.6), null);


(lib.cta_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D68EEC").s().p("AnoC7QhHAAgzgyQgygzAAhHIAAgdQAAhIAygyQAzgyBHAAIPRAAQBHAAAzAyQAyAyAABIIAAAdQAABHgyAzQgzAyhHAAgApbiBQgvAvAABEIAAAdQAABDAvAwQAwAvBDAAIPRAAQBDAAAwgvQAvgwAAhDIAAgdQAAhEgvgvQgwgwhDABIvRAAQhDgBgwAwg");
	this.shape.setTransform(60.1,18.8,1.007,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#88429C","#632276"],[0,1],0,-15.9,0,14.2).s().p("AnoCxQhDAAgwgvQgvgwAAhDIAAgdQAAhEAvgvQAwgwBDABIPRAAQBDgBAwAwQAvAvAABEIAAAdQAABDgvAwQgwAvhDAAg");
	this.shape_1.setTransform(60.1,18.8,1.007,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.cta_bg, new cjs.Rectangle(-6.5,0,133.3,37.5), null);


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

}).prototype = getMCSymbolPrototype(lib.bg_clear_1, new cjs.Rectangle(0,0,160,490), null);


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
	this.shape.setTransform(87.5,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOBLQgVAAAAgUIAAheIASAAIAABaQAAAHAIAAIAbAAQAFAAADgFQACgFAAgcIARAGQgCAkgGAGQgEAHgLAAgAhOAxQANgjAFglIAQAEQgGAugNAfgAAkgVIARgGQAMAbAOAtIgQAHQgNgrgOgegAgThBIAOgJQAXAbAJASIgOAKQgNgXgTgXg");
	this.shape_1.setTransform(69.8,16.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLBAQA3gSAZgxIAQAHQgMATgNARQAOALAMANIgNAOQgKgOgPgNQgUASgdAKgAAhBMIgDgQIAWABQAHAAgBgHIAAiCIARAAIAACHQAAARgRAAgAAbApIAAhmIAQAAIAABmgAhHAYQAYgJARgQIgiACIgEgPIADgBQAIgFANgYIgaAAIAAgQIAlAAIgIgPIATgDIAIASIAhAAIAAAQIgtAAQgLAVgHAJIAbgDQAEgGAGgLIANAIQgXAvgsASg");
	this.shape_2.setTransform(51.4,17);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMBJIAAgRIAtAAQgGgpgMguIgTAAIAAgRIA8AAIgIgVIARgDQAFANACALIA9AAIAAARIgTAAQgKA1gLAiIAwAAIAAARgAgOA4IAZAAQALgiAJg1Ig+AAQAKAqAHAtg");
	this.shape_3.setTransform(33.8,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(11));

	// bg
	this.instance = new lib.cta_bg();
	this.instance.parent = this;
	this.instance.setTransform(66.1,18.8,1,1,0,0,0,66.1,18.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:60.1,scaleX:1,scaleY:1,x:60.1},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:60.2},0).wait(1).to({scaleX:0.99,scaleY:0.99},0).wait(1).to({scaleX:0.98,scaleY:0.98},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:60.3},0).wait(1).to({scaleX:0.96,scaleY:0.96},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:60.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,x:60.5},0).wait(1).to({scaleX:0.93,scaleY:0.93},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.5,0,133.3,37.5);


// stage content:
(lib._160x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(165.5,20.3,1.106,1.106,0,0,0,139.8,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_162 = new cjs.Graphics().p("AneHeQjGjGAAkYQAAkYDGjGQDHjGEXAAQDAAACaBdIAAAAICaAAIAACAQCxC/AAEIQAAEYjGDGQjHDHkYAAQkXAAjHjHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(162).to({graphics:mask_graphics_162,x:81.2,y:235.4}).wait(77));

	// phone_ending
	this.instance_1 = new lib.phone_ending_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.3,352.9,0.622,0.622,0,0,0,79.5,101.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(165).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,x:81.5,y:325.2},0).wait(1).to({y:297},0).wait(1).to({y:268.7},0).wait(1).to({y:240.4},0).wait(1).to({y:240.5},0).wait(10).to({y:240.6},0).wait(11).to({y:240.7},0).wait(10).to({y:240.8},0).wait(38));

	// circle
	this.instance_2 = new lib.circle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.9,234,0.124,0.124,0,0,0,73.3,72.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(162).to({_off:false},0).wait(1).to({regX:73.2,regY:73.2,scaleX:0.32,scaleY:0.32,x:80.8,y:234.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:234.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:234.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:80.7,y:235},0).wait(73));

	// title
	this.instance_3 = new lib.title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.7,111.6,1.183,1.183,0,0,0,27.9,27.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(161).to({_off:false},0).wait(1).to({regX:27.7,regY:27.3,scaleX:1.16,scaleY:1.16,x:80.5,y:111.7,alpha:0.25},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:1},0).wait(74));

	// 最高享
	this.instance_4 = new lib.ending_cut_text_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.9,274.3,1.26,1.26,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(169).to({_off:false},0).wait(1).to({regX:-14.4,regY:64.9,x:23.7,y:355.9,alpha:0.125},0).wait(1).to({x:30.9,alpha:0.25},0).wait(1).to({x:38,alpha:0.375},0).wait(1).to({x:45.2,alpha:0.5},0).wait(1).to({x:52.3,alpha:0.625},0).wait(1).to({x:59.5,alpha:0.75},0).wait(1).to({x:66.6,alpha:0.875},0).wait(1).to({x:73.8,alpha:1},0).wait(62));

	// 再送
	this.instance_5 = new lib.ending_cut_text_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.5,438.4,1.311,1.311,0,0,0,25.6,26.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(174).to({_off:false},0).wait(1).to({regX:34.5,regY:28.3,x:2.9,y:440.8,alpha:0.125},0).wait(1).to({x:10.6,alpha:0.25},0).wait(1).to({x:18.3,alpha:0.375},0).wait(1).to({x:26,alpha:0.5},0).wait(1).to({x:33.7,alpha:0.625},0).wait(1).to({x:41.4,alpha:0.75},0).wait(1).to({x:49,alpha:0.875},0).wait(1).to({x:56.7,alpha:1},0).wait(57));

	// cta
	this.instance_6 = new lib.cta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(87,551.3,1.084,1.102,0,0,0,66.1,18.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(179).to({_off:false},0).wait(1).to({regX:60.1,regY:18.8,x:80.4,y:546.6,alpha:0.2},0).wait(1).to({x:80.3,y:541.9,alpha:0.4},0).wait(1).to({x:80.2,y:537.3,alpha:0.6},0).wait(1).to({x:80.1,y:532.7,alpha:0.8},0).wait(1).to({x:79.9,y:528,alpha:1},0).wait(55));

	// Kate Spade
	this.instance_7 = new lib.katespade_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(130.6,512.2,0.484,0.484,0,0,0,69.7,100.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(177).to({_off:false},0).wait(1).to({regX:69.5,regY:100.5,x:130.4,y:504.3,alpha:0.125},0).wait(1).to({y:496.6,alpha:0.25},0).wait(1).to({y:488.9,alpha:0.375},0).wait(1).to({y:481.2,alpha:0.5},0).wait(1).to({y:473.5,alpha:0.625},0).wait(1).to({y:465.7,alpha:0.75},0).wait(1).to({y:458,alpha:0.875},0).wait(1).to({y:450.3,alpha:1},0).wait(54));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,0,1,1,0,0,0,80,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:27.5,y:27.5},0).wait(154).to({scaleY:1.75,y:48},0).wait(1).to({scaleY:2.49,y:68.5},0).wait(1).to({scaleY:3.24,y:89},0).wait(1).to({scaleY:3.98,y:109.5},0).wait(1).to({scaleY:4.73,y:130},0).wait(1).to({scaleY:5.47,y:150.5},0).wait(79));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,600,1,1,0,0,0,80,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:2.5,y:572.5},0).wait(154).to({scaleY:1.74,y:552.1},0).wait(1).to({scaleY:2.49,y:531.6},0).wait(1).to({scaleY:3.23,y:511.2},0).wait(1).to({scaleY:3.97,y:490.8},0).wait(1).to({scaleY:4.71,y:470.4},0).wait(1).to({scaleY:5.46,y:449.9},0).wait(79));

	// text2_2
	this.instance_10 = new lib.text_2_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(151.8,372.4,1.026,1.026,0,0,0,59.2,13.2);
	this.instance_10.alpha = 0;
	this.instance_10.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(64).to({_off:false},0).wait(1).to({regX:59.1,regY:12.6,x:140.9,y:371.7,alpha:0.2},0).wait(1).to({x:130.1,alpha:0.4},0).wait(1).to({x:119.4,alpha:0.6},0).wait(1).to({x:108.6,alpha:0.8},0).wait(1).to({x:97.8,alpha:1},0).wait(1).to({x:97.2},0).wait(1).to({x:96.6},0).wait(1).to({x:96.1},0).wait(1).to({x:95.5},0).wait(1).to({x:94.9},0).wait(1).to({x:94.3},0).wait(1).to({x:93.7},0).wait(1).to({x:93.1},0).wait(1).to({x:92.6},0).wait(1).to({x:92},0).wait(1).to({x:91.4},0).wait(1).to({x:90.8},0).wait(1).to({x:90.2},0).wait(1).to({x:89.7},0).wait(1).to({x:89.1},0).wait(1).to({x:88.5},0).wait(1).to({x:87.9},0).wait(1).to({x:87.3},0).wait(1).to({x:86.7},0).wait(1).to({x:86.2},0).wait(1).to({x:85.6},0).wait(1).to({x:85},0).wait(1).to({x:84.4},0).wait(1).to({x:83.8},0).wait(1).to({x:83.2},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:83.3,alpha:0.8},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:83.2,alpha:0.6},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:83.3,y:371.6,alpha:0.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:83.2,alpha:0.2},0).wait(1).to({scaleX:1.39,scaleY:1.39,y:371.5,alpha:0},0).to({_off:true},1).wait(139));

	// text_2
	this.instance_11 = new lib.text_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(21.1,334.3,1.033,1.033,0,0,0,43.1,12.9);
	this.instance_11.alpha = 0;
	this.instance_11.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(59).to({_off:false},0).wait(1).to({regX:45.4,x:31.8,alpha:0.2},0).wait(1).to({x:40,alpha:0.4},0).wait(1).to({x:48.3,alpha:0.6},0).wait(1).to({x:56.5,alpha:0.8},0).wait(1).to({x:64.8,alpha:1},0).wait(1).to({x:65.4},0).wait(1).to({x:66},0).wait(1).to({x:66.7},0).wait(1).to({x:67.3},0).wait(1).to({x:67.9},0).wait(1).to({x:68.5},0).wait(1).to({x:69.2},0).wait(1).to({x:69.8},0).wait(1).to({x:70.4},0).wait(1).to({x:71},0).wait(1).to({x:71.6},0).wait(1).to({x:72.3},0).wait(1).to({x:72.9},0).wait(1).to({x:73.5},0).wait(1).to({x:74.1},0).wait(1).to({x:74.7},0).wait(1).to({x:75.4},0).wait(1).to({x:76},0).wait(1).to({x:76.6},0).wait(1).to({x:77.2},0).wait(1).to({x:77.9},0).wait(1).to({x:78.5},0).wait(1).to({x:79.1},0).wait(1).to({x:79.7},0).wait(1).to({x:80.3},0).wait(1).to({x:81},0).wait(1).to({x:81.6},0).wait(1).to({x:82.2},0).wait(1).to({x:82.8},0).wait(1).to({x:83.4},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:83.6,alpha:0.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:83.8,alpha:0.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:83.9,alpha:0.4},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:84.1,alpha:0.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:84.3,alpha:0},0).to({_off:true},1).wait(139));

	// light
	this.instance_12 = new lib.light();
	this.instance_12.parent = this;
	this.instance_12.setTransform(84.1,300.5,1.053,1.053,0,0,0,58.5,119.4);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(47).to({_off:false},0).wait(1).to({regX:58.4,regY:119.5,x:83.9,y:300.6,alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(189));

	// phone_clear
	this.instance_13 = new lib.phone_clear();
	this.instance_13.parent = this;
	this.instance_13.setTransform(84,300.2,0.227,0.227,0,0,0,288.7,611.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(47).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:83.5,y:299.5},0).wait(56).to({scaleX:0.23,scaleY:0.23,alpha:0.889},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.778},0).wait(1).to({scaleX:0.23,scaleY:0.23,y:299.4,alpha:0.667},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.556},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.444},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.333},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.222},0).wait(1).to({scaleX:0.24,scaleY:0.24,y:299.5,alpha:0.111},0).wait(1).to({scaleX:0.24,scaleY:0.24,x:83.4,alpha:0},0).to({_off:true},1).wait(126));

	// phone
	this.instance_14 = new lib.phone_1();
	this.instance_14.parent = this;
	this.instance_14.setTransform(15,545,0.227,0.227);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(34).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:80.3,y:650.9,alpha:0.083},0).wait(1).to({x:80.6,y:618.9,alpha:0.167},0).wait(1).to({x:80.9,y:587,alpha:0.25},0).wait(1).to({x:81.2,y:555,alpha:0.333},0).wait(1).to({x:81.5,y:523.1,alpha:0.417},0).wait(1).to({x:81.8,y:491.1,alpha:0.5},0).wait(1).to({x:82.1,y:459.2,alpha:0.583},0).wait(1).to({x:82.4,y:427.2,alpha:0.667},0).wait(1).to({x:82.7,y:395.3,alpha:0.75},0).wait(1).to({x:83,y:363.3,alpha:0.833},0).wait(1).to({x:83.3,y:331.4,alpha:0.917},0).wait(1).to({x:83.6,y:299.4,alpha:1},0).to({_off:true},1).wait(192));

	// text_1_intro
	this.instance_15 = new lib.text_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(81.2,269,1.512,1.512,0,0,0,31.1,26.6);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:32.2,regY:26,scaleX:1.46,scaleY:1.46,x:82.8,y:268.1,alpha:0.2},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:82.7,alpha:0.4},0).wait(1).to({scaleX:1.35,scaleY:1.35,y:268.2,alpha:0.6},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:82.6,alpha:0.8},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:82.5,alpha:1},0).to({_off:true},1).wait(233));

	// text_1L
	this.instance_16 = new lib.text_1L();
	this.instance_16.parent = this;
	this.instance_16.setTransform(111.6,125,1,1,0,0,0,111.6,125);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({_off:false},0).wait(1).to({regX:47.2,regY:300,x:47.2,y:300},0).wait(18).to({y:293.8},0).wait(1).to({y:287.5},0).wait(1).to({y:281.3},0).wait(1).to({y:275},0).wait(1).to({x:15.4},0).wait(1).to({x:-16.4},0).wait(1).to({x:-48.3},0).wait(1).to({x:-80.1},0).wait(1).to({x:-111.9},0).wait(1).to({x:-143.8},0).wait(205));

	// text_1R
	this.instance_17 = new lib.text_1R();
	this.instance_17.parent = this;
	this.instance_17.setTransform(78.8,0);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({_off:false},0).wait(1).to({regX:34,regY:300,x:112.8,y:300},0).wait(18).to({y:306.3},0).wait(1).to({y:312.5},0).wait(1).to({y:318.8},0).wait(1).to({y:325},0).wait(1).to({x:143.5},0).wait(1).to({x:174.1},0).wait(1).to({x:204.8},0).wait(1).to({x:235.4},0).wait(1).to({x:266.1},0).wait(1).to({x:296.8},0).wait(205));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},6).wait(233));

	// text_3
	this.instance_18 = new lib.text_3();
	this.instance_18.parent = this;
	this.instance_18.setTransform(79.4,365.1,1.26,1.26,0,0,0,56.2,30.3);
	this.instance_18.alpha = 0;
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(123).to({_off:false},0).wait(1).to({regX:56.1,scaleX:1.23,scaleY:1.23,x:79.2,alpha:0.167},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0.333},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:79.3,alpha:0.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.667},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:79.2,alpha:0.833},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:79.3,alpha:1},0).wait(32).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(73));

	// transition
	this.instance_19 = new lib.transition();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(112).to({_off:false},0).wait(1).to({regX:80,regY:300,x:80,y:300,alpha:0.075},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.45},0).wait(121));

	// bg_clear
	this.instance_20 = new lib.bg_clear_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(80,300,1,1,0,0,0,80,245);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(98).to({_off:false},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:80.1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:80},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:80.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:80},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:80.1},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:80},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:80.1},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:80},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:80.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:80},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:80.1},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:80},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:80.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:80},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:80.1},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:80},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:80.1},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:80},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:80.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:80},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:80.1},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:80},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:80.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:80},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:80.1},0).wait(1).to({scaleX:1.19,scaleY:1.19},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:80},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:80.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:80},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:80.1},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:80},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:300.1},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:80.1,y:300},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:80},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:80.1,y:300.1},0).wait(1).to({scaleX:1.25,scaleY:1.25,y:300},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:80,y:300.1},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:80.1,y:300},0).wait(1).to({scaleX:1.26,scaleY:1.26},0).wait(6).to({_off:true},1).wait(79));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,55);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(239));

	// bg-purple
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#594078").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	id: '6717DACCF8344094AE4C863E021302C6',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1525954504564", id:"bg"},
		{src:"images/bg_clear.jpg?1525954504564", id:"bg_clear"},
		{src:"images/katespade.jpg?1525954504564", id:"katespade"},
		{src:"images/phone.jpg?1525954504564", id:"phone"},
		{src:"images/phone_ending.jpg?1525954504564", id:"phone_ending"},
		{src:"images/pic_clear.jpg?1525954504564", id:"pic_clear"}
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