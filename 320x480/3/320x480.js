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


(lib.phone_clear_pic = function() {
	this.initialize(img.phone_clear_pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,184,294);


(lib.phone_ending = function() {
	this.initialize(img.phone_ending);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,500);// helper functions:

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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYCEQgnAAAAglIAAh8IDAAAIAAhHIjEAAIAAgeIDkAAIAACDIi/AAIAABRQAAARAVABICOAAQAUAAAEgMQAFgMACgjIAgAKQgGAzgKAPQgJAPggAAg");
	this.shape.setTransform(198,40.4,0.867,0.867);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKCQIAAgRIiUAAIAAARIggAAIAAj8IBCAAQAKgSAFgRIAgAFQgFAQgIAOIByAAIAAD8gAhKBgICUAAIAAgoIiUAAgAhKAaICUAAIAAglIiUAAgAhKgpICUAAIAAgkIiUAAg");
	this.shape_1.setTransform(169.6,40.2,0.867,0.867);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAzCMIgIgdIAkACQARAAADgTQADgUAAiFIhLAAQgMAcgRAXIgTgaQAdgqALhBIAgADQgEAXgHAZIBeAAQAACigFAmQgEAhgoAAIgigDgAiFCIIAAjiIAeAAQAJgZADgaIAhAEQgGAbgIAUIAvAAIAADZIgfAAIAAgQIguAAIAAAZgAhmBRIAuAAIAAg7IguAAgAhmgGIAuAAIAAg1IguAAgAAEABIAbgPQAfAnAOAaIgaASQgRgfgdglg");
	this.shape_2.setTransform(142,40.1,0.867,0.867);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiPBvQA2gLASgSQAQgRADgcIg1AAIAAivIDRAAIAACvIg5AAIAAA0QAAAMAMAAIAkAAQAIAAAFgFQADgFADgdIAeAKQgEArgKAJQgLAHgRAAIg1AAQgiAAAAgjIAAg7IgjAAQgDApgYAYQgXAYg3ANgAhJAIICQAAIAAgWIiQAAgAhJgpICQAAIAAgVIiQAAgAhJhZICQAAIAAgVIiQAAg");
	this.shape_3.setTransform(114.6,40.7,0.867,0.867);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPCJIAAiiQgsAvg+AlIgVgcQBlg4AohPIiEAAIAAggIEMAAIAAAgIhkAAQgGAOgLATIAAANQBJAqA0AwIgXAbQgqgtg8gmIAAChg");
	this.shape_4.setTransform(86.8,40.9,0.867,0.867);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPBwQB1gtA/iGIhSAAQgdAsgsAhIgWgbQBFg0AZhLIAjAEQgHAYgJARIBoAAIAAAbQgWAzgZAkQAkA9BOAlIgaAfQhJgpgkg8Qg3BFhOAhg");
	this.shape_5.setTransform(59.3,40.1,0.867,0.867);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiOB2QAjgZASgeIgtgjQAMgjAMgwIgdAAIAAggIAkAAIAKg6IAgADIgKA3IAyAAIAAASQgCBIgZA1QAaAUAPAPIgXAaQgNgPgUgRQgXAkghAZgAhjASIAZASQASgpAEgyIgaAAQgIAkgNAlgAAKCNIgJggIAqABQAIAAAAgQIAAhPIhCAAIAAgfIBCAAIAAgiQAXgVAUgbIhkAAIAAggICJAAIAAAgQgVAggbAaIAAAYIA8AAIAAAfIg8AAIAABZQABAlgcAAg");
	this.shape_6.setTransform(31.8,40.3,0.867,0.867);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiPBwQA2gNASgRQAQgRAEgcIg2AAIAAivIDRAAIAACvIg5AAIAAAzQAAANAMAAIAlAAQAIAAAEgFQAEgGACgcIAeAKQgEArgKAIQgKAIgSAAIg1AAQgiAAAAgjIAAg7IgjAAQgCApgZAYQgXAYg3ANgAhJAIICRAAIAAgVIiRAAgAhJgpICRAAIAAgWIiRAAgAhJhaICRAAIAAgUIiRAAg");
	this.shape_7.setTransform(155.9,3.7,0.867,0.867);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiPB5QAVgoAUgIQAIgWAFgWIgsAAIAAgYQAWgZAOgTIgpAAIAAgdIBMAAIAAAZQgOAXgTAWIAkAAIAAAVQgGAhgJAWIAHAGQAOAOAOAGQAOAGAZAAIA4ABQAcAAA8gDIgIAfIiJgBQgggCgQgGQgUgIgPgQQgDgEgEAAQgJAAgUApgABMBlIgHgZIAaABQAJAAAAgLIAAg1IgyAAIAAAcIAQgCIgFgSIAUgGQAHATAHAgIgVAFIgCgKQgeAGg3AFIgFgbIApgCIAAgeIgsAAIAABTIgdAAIAAhsIBJAAIAAgQIg7AAIAAhrICXAAIAABrIg+AAIAAAQIBMAAIAABUQAAAdgeAAgAA5gzIAhAAIAAgTIghAAgAgDgzIAeAAIAAgTIgeAAgAA5hcIAhAAIAAgSIghAAgAgDhcIAeAAIAAgSIgeAAgAiEh6IAVgUQAcAWATAWIgVAVQgSgXgdgWg");
	this.shape_8.setTransform(128.2,3.3,0.867,0.867);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhqCQIAAifIgaAdIgLghQAwg1AXhIIAeAPQgMAkgTAhIAADMgAgJCPIgHgfQATACAQABQALgBAAgMIAAicIAfAAIAACkQAAAggfABgABNgIIAdgKQAWA3AQA8IgdAMQgRhEgVgxgAg/BdQAZgrAShBIAcAIQgPA/gZAxgAg/gfQAig0AOg6IAdAGIgIAcICCAAIAAAVQgJAigJAWIgfgJQAJgQAGgUIhqAAQgOAhgSAcg");
	this.shape_9.setTransform(100.5,3.2,0.867,0.867);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABYCPIAAgPIhPAAIAAAPIgeAAIAAh6ICMAAIAAB6gAAJBjIBPAAIAAgvIhPAAgAiICPIAAkTIBkAAIAAAZQgOAqgRAqQAdAoACAeQABAZgKAKQgNANgjABIgLgiIARACQANgBADgDQAEgDAAgKQAAgcggglQAUgwALgkIgmAAIAAD1gAgmAAIAAgdIAoAAQgHgcgKgaIgOAAIAAgfIA8AAIgJgXIAggGIAJAdIBAAAIAAAfIgQAAQgIAbgLAbIAtAAIAAAdgAAggdIAeAAQAJgbAIgbIg/AAQALAgAFAWg");
	this.shape_10.setTransform(73.4,3.2,0.867,0.867);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_3, new cjs.Rectangle(19.5,-9.3,190,62.3), null);


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


(lib.text_1_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBqQgHgFAAgMQAAgKAHgHQAHgGAKAAQAIAAAIAGQAHAIAAAJQAAAKgHAIQgHAGgJAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAOgMIASgSQAJgLAAgKQAAgQgJgIQgJgKgQABQgTAAgJAMQgIALAAAUIgjAAQAAgjAUgTQAVgUAhAAQAeAAASAQQATARAAAcQAAAXgLAQQgFAFgWASQgIAHgEAIQgFAKAAAKIAAAFg");
	this.shape.setTransform(259.3,10.3,0.715,0.715);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag6CFIgIggQAWADAaABQAKAAAAgLIAAiMQAogWAsgjIjEAAIAAgfIDxAAIAAAfQgtAog0AiIAACBQAAAjghAAQgVAAgcgCg");
	this.shape_1.setTransform(236.2,10.9,0.715,0.715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiECQIAAhzIBgAAIAABuIgeAAIAAgMIgkAAIAAARgAhmBhIAkAAIAAgnIgkAAgABfCPIAAgNIhOAAIAAANIgfAAIAAh/IA1AAIAAgoIhAAAIAAgfIBAAAIAAglQgbADgYAAIgJgdQBRAAA5gVIAQAbQgaAKgkAHIAAAoIBGAAIAAAfIhGAAIAAAoIA2AAIAAB/gAARBkIBOAAIAAg3IhOAAgAiBALIAAgcIBaAAIAAAcgAiBggIAAgcIBaAAIAAAcgAiMhMIAAgeIArAAIgNgcIAfgJQAJAXAEAOIAmAAIAAAeg");
	this.shape_2.setTransform(213.7,10.4,0.715,0.715);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAuCPIgHgfQAVACAOAAQAMAAAAgMIAAiYIhCAAIAAgfIBCAAIAAg9IAgAAIAAA9IAZAAIAAAfIgZAAIAACgQAAAhggAAgAiIBrIA9gDIAAgeIgwAAIAAgdIAwAAIAAgZIg4AAIAAgbIAcAAIgIgeIgaAAIAAgeIApAAIAAhJIAdAAIAABJIAPAAIAAhJIAdAAIAABJIAjAAIAAAeIgUAAIgKAeIAbAAIAAAbIg1AAIAAAZIAvAAIAAAdIgvAAIAAAcIA3gGIAAAcQgkAHhrAGgAhJgHIAaAAIAKgeIgsAAgAAQgOIAcgJQAPAfAOArIgcAMQgMgrgRgigAiOh5IAZgIQALAXAHAXIgZAKQgHgYgLgYgAgUhSQAKgUAHgdIAaAHQgIAegLAVg");
	this.shape_3.setTransform(190.9,10.4,0.715,0.715);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiNB2QAggYAUgeQgQgOgegVQAPgqAJgrIgcAAIAAgfIAkAAIAKg6IAfADIgKA3IAzAAIAAASQgCBHgZA2QAcAWAMANIgWAaQgPgPgTgRQgVAigjAbgAhkATIAZASQASgoAEg1IgZAAQgLAugLAdgAAJCMIgIgeIApAAQAJAAAAgQIAAhPIhBAAIAAgeIBBAAIAAgjQAWgUAWgcIhlAAIAAggICJAAIAAAgQgXAhgZAZIAAAZIA7AAIAAAeIg7AAIAABZQAAAkgbAAg");
	this.shape_4.setTransform(168.3,10.4,0.715,0.715);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiOB2QAigZATgdIgugjQANgkAMgxIgcAAIAAgfIAjAAIAKg6IAfADIgKA3IA0AAIAAASQgEBJgYA0QAaAVAOAOIgVAaQgOgOgUgSQgXAkghAZgAhjATIAZASQASgpAEg0IgaAAQgIAlgNAmgAAJCMIgIgeIAqAAQAIAAAAgQIAAhPIhBAAIAAgeIBBAAIAAgjQAZgYATgYIhlAAIAAggICKAAIAAAgQgWAggbAaIAAAZIA8AAIAAAeIg8AAIAABZQAAAkgbAAg");
	this.shape_5.setTransform(145.5,10.4,0.715,0.715);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXCEQgoAAAAglIAAh8IDAAAIAAhGIjEAAIAAggIDkAAIAACEIi/AAIAABRQAAASAWAAICOAAQATAAAFgMQAEgMACgjIAgAKQgFAygLAQQgIAPghAAg");
	this.shape_6.setTransform(123.5,10.6,0.715,0.715);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABLCQIAAgRIiVAAIAAARIghAAIAAj8IBEAAQAJgRAFgSIAfAFQgDAOgIAQIBwAAIAAD8gAhKBgICVAAIAAgoIiVAAgAhKAaICVAAIAAglIiVAAgAhKgpICVAAIAAgkIiVAAg");
	this.shape_7.setTransform(100,10.4,0.715,0.715);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAtAcIAZgNQAEAMAKASQAUgNAPgVIAUAVQgSAWgWAOQATAZAbAQIgSAcQg4gigahLgAgWBrQAJgEAAgHIAAjoICJAAIAACKIhqAAIAABeQAagKASgIIAIAdQgjAOgyANgAASgZIBKAAIAAgbIhKAAgAAShQIBKAAIAAgbIhKAAgAiQBoIAMgDIAAhpIAdAAIAABjIAPgEIAAh6IgsAAIAAhpIBmAAIAABpIgcAAIAAAoIAdAAIAAAdIgdAAIAAAtIAggKIAAAgQg2ARg3AMgAhlg9IAoAAIAAguIgoAAg");
	this.shape_8.setTransform(77.4,10.7,0.715,0.715);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhMB1QA1gNAlgVQgggcgOgkIgTAAIAAgeICnAAIAAAdQgOAmghAdQAjASAqALIgSAdQgwgQglgYQgrAbg6APgAAnBDQAegXANgZIhTAAQALAaAdAWgAiOB/QAdg2AUg2IAeAMQgUA4gaA2gAiRgsIAXgWQAfAXAUAVIgYAWQgQgTgigZgAhCgqQAtgmAPg/IAfAFIgGAWIBhAAQgBBBgIAQQgIAOgbAAIgigBIgKgdIAoABQAKAAAEgEQABgGABgZIhNAAQgUAqgfAbgAiKh1IAXgXQAbATAaAYIgYAXQgSgUgigXg");
	this.shape_9.setTransform(54.6,10.4,0.715,0.715);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiPBwQB1gtA/iGIhSAAQgdAsgsAhIgWgbQBFg0AZhLIAjAEQgHAYgJARIBnAAIAAAbQgVAzgZAkQAkA9BOAlIgaAfQhJgpgjg8Qg4BFhOAhg");
	this.shape_10.setTransform(31.8,10.4,0.715,0.715);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiBBwQBFAAAygPQgMgQgQgQIAcgOQAMANARAVQArgTAbghIhSAAQgmASg4AMIgTgdQBlgJAvgxIAcAPIgQANIBNAAIAAAZQhDBti0AFgAhsgTQAkgCAegIQgMgPgNgMIAcgOQARASALANQApgRAXgfIhQAAQgkAVgwAKIgTgdQBSgPAogqIAcAPIgLALIBRAAIAAAZQgzBaiHAKg");
	this.shape_11.setTransform(9.4,10.3,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1_intro, new cjs.Rectangle(0,0,264.4,20.9), null);


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
	this.instance = new lib.phone_clear_pic();
	this.instance.parent = this;
	this.instance.setTransform(14,51,2.953,2.953);

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


(lib.circleR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMwZQGzAAEyEzQE0E0AAGyQAAG0k0EyQkyE0mzAAg");
	mask.setTransform(213.5,239.3);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,50);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleR, new cjs.Rectangle(161,134.3,105,210), null);


(lib.circleL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjYLmQk0kzAAmzQAAmyE0k0QEykzGzAAMAAAAgzQmzAAkyk0g");
	mask.setTransform(109,239.5);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,50);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleL, new cjs.Rectangle(56.5,134.5,105,210), null);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(222));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_172 = new cjs.Graphics().p("AprJtQkCkBAAlsQAAlrECkBQEAkBFrAAQD5AADIB5IAAAAIDIAAIAACmQDkD4AAFWQAAFskAEBQkBEBlsAAQlrAAkAkBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(172).to({graphics:mask_graphics_172,x:162.3,y:189.8}).wait(50));

	// phone_ending
	this.instance_1 = new lib.phone_ending_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(163.6,342.2,0.806,0.806,0,0,0,79.4,101.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,scaleX:0.81,scaleY:0.81,x:162.6,y:306.3},0).wait(1).to({y:269.7},0).wait(1).to({y:233},0).wait(1).to({y:196.4},0).wait(43));

	// circle
	this.instance_2 = new lib.circle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(161.8,189.3,0.161,0.161,0,0,0,73,73);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(172).to({_off:false},0).wait(1).to({regX:73.2,regY:73.2,scaleX:0.42,scaleY:0.42,y:189.2},0).wait(1).to({scaleX:0.68,scaleY:0.68,x:161.9},0).wait(1).to({scaleX:0.94,scaleY:0.94,y:189.1},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:162,y:189},0).wait(46));

	// title
	this.instance_3 = new lib.title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(160.2,70.1,1.183,1.183,0,0,0,95.5,11.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(171).to({_off:false},0).wait(1).to({regX:94.1,scaleX:1.16,scaleY:1.16,x:158.6,alpha:0.25},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:158.7,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:1},0).wait(47));

	// 最高享
	this.instance_4 = new lib.ending_cut_text_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(144.4,297.9,1.26,1.26,0,0,0,56.8,29.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179).to({_off:false},0).wait(1).to({regX:24.5,regY:43.9,x:110.9,y:315.5,alpha:0.125},0).wait(1).to({x:118,alpha:0.25},0).wait(1).to({x:125.2,alpha:0.375},0).wait(1).to({x:132.3,alpha:0.5},0).wait(1).to({x:139.5,alpha:0.625},0).wait(1).to({x:146.6,alpha:0.75},0).wait(1).to({x:153.8,alpha:0.875},0).wait(1).to({x:160.9,alpha:1},0).wait(35));

	// 再送
	this.instance_5 = new lib.ending_cut_text_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(25.4,388.3,1.311,1.311,0,0,0,26.9,26.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).wait(1).to({regX:60.7,regY:14.1,x:77.4,y:372.2,alpha:0.125},0).wait(1).to({x:85.1,alpha:0.25},0).wait(1).to({x:92.8,alpha:0.375},0).wait(1).to({x:100.5,alpha:0.5},0).wait(1).to({x:108.2,alpha:0.625},0).wait(1).to({x:115.9,alpha:0.75},0).wait(1).to({x:123.6,alpha:0.875},0).wait(1).to({x:131.3,alpha:1},0).wait(30));

	// Kate Spade
	this.instance_6 = new lib.katespade_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(250.6,551,0.67,0.67,0,0,0,69.7,100.5);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(187).to({_off:false},0).wait(1).to({regX:69.5,x:250.4,y:532.7,alpha:0.125},0).wait(1).to({y:514.4,alpha:0.25},0).wait(1).to({y:496.1,alpha:0.375},0).wait(1).to({y:477.8,alpha:0.5},0).wait(1).to({y:459.5,alpha:0.625},0).wait(1).to({y:441.2,alpha:0.75},0).wait(1).to({y:422.9,alpha:0.875},0).wait(1).to({y:404.6,alpha:1},0).wait(27));

	// cta
	this.instance_7 = new lib.cta();
	this.instance_7.parent = this;
	this.instance_7.setTransform(125,449.3,1.084,1.102,0,0,0,66.1,18.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(190).to({_off:false},0).wait(1).to({regX:65.5,regY:18.8,x:124.2,y:444.5,alpha:0.2},0).wait(1).to({x:124.1,y:439.9,alpha:0.4},0).wait(1).to({x:124,y:435.3,alpha:0.6},0).wait(1).to({x:123.9,y:430.6,alpha:0.8},0).wait(1).to({x:123.8,y:426,alpha:1},0).wait(27));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(160,0,1,1,0,0,0,160,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:25,y:25},0).wait(165).to({scaleY:1.68,y:42},0).wait(1).to({scaleY:2.36,y:59},0).wait(1).to({scaleY:3.04,y:76},0).wait(1).to({scaleY:3.72,y:93.1},0).wait(1).to({scaleY:4.4,y:110.1},0).wait(1).to({scaleY:5.08,y:127.1},0).wait(51));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(160,480.1,1,1,0,0,0,160,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:0,y:455},0).wait(165).to({scaleY:1.67,y:438.3},0).wait(1).to({scaleY:2.33,y:421.6},0).wait(1).to({scaleY:3,y:405},0).wait(1).to({scaleY:3.66,y:388.3},0).wait(1).to({scaleY:4.33,y:371.7},0).wait(1).to({scaleY:4.99,y:355},0).wait(51));

	// text_1
	this.instance_10 = new lib.text_1_intro();
	this.instance_10.parent = this;
	this.instance_10.setTransform(163.7,236.7,1.207,1.207,0,0,0,132.1,10.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:132.2,regY:10.4,scaleX:1.19,scaleY:1.19,x:163.8,y:236.5,alpha:0.143},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.286},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.429},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.571},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.714},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.857},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:1},0).wait(28).to({scaleX:1.09,scaleY:1.09,alpha:0.889},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:236.6,alpha:0.778},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0.667},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.556},0).wait(1).to({scaleX:1.15,scaleY:1.15,alpha:0.444},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.333},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.222},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.111},0).wait(1).to({scaleX:1.21,scaleY:1.21,alpha:0},0).wait(179));

	// Mask_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("AA/WFQkzkyAAmzQAAmzEzk0QEzkyGzgBMAAAAg0QmzAAkzk1g");
	var mask_1_graphics_5 = new cjs.Graphics().p("Ai3TmQjulsBbmpQBamqFtjsQFsjtGpBbMgG0AgFQmqhajrlug");
	var mask_1_graphics_6 = new cjs.Graphics().p("AmDRFQidmWCxmNQCxmNGWicQGVibGOCxItXd9QmMixibmWg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AobOoQhFmtEAlgQEAlfGthEQGthEFgD/IzSaiQlgj/hDmug");
	var mask_1_graphics_8 = new cjs.Graphics().p("Ap4MWQAWmyFDkjQFDkiGzAXQGxAWEjFDI4XV9QkklDAYmzg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AqWKWQBwmkF4jZQF4jZGlBxQGjBvDaF5I8aQaQjZl5Bxmkg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Ap0IuQDFmEGdiGQGdiGGEDFQGDDFCGGeI/MKJQiGmeDGmDg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AoUHhQESlSGvguQGxgtFSESQFSERAtGxMggnADbQgumwESlSg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Ar8QIQAumxFSkRQFSkSGvAtQGxAuESFSQERFSgtGwg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ArPLGQCGmeGEjFQGCjFGeCGQGeCGDFGEQDFGDiGGeg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Ap2GZQDal5GjhvQGkhxF5DZQF4DZBxGlQBwGjjZF5g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AnzCPQEjlDGxgWQGygXFDEiQFEEjAXGzQAWGykjFDg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AlRhNQFfj/GtBEQGuBEEAFfQD/FghEGuQhEGtlgD/g");
	var mask_1_graphics_17 = new cjs.Graphics().p("AiUjxQGNixGVCcQGXCbCxGNQCxGNidGXQibGVmOCxg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AA9lXQGphbFtDuQFtDrBaGqQBaGpjtFtQjsFtmqBag");
	var mask_1_graphics_19 = new cjs.Graphics().p("AEYl6QGzABEzEzQE0EzAAGzQAAGzk0EzQkzE0mzAAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:80.5,y:172.2}).wait(1).to({graphics:mask_1_graphics_5,x:91.4,y:171}).wait(1).to({graphics:mask_1_graphics_6,x:101.9,y:167.6}).wait(1).to({graphics:mask_1_graphics_7,x:111.4,y:162.1}).wait(1).to({graphics:mask_1_graphics_8,x:119.5,y:154.8}).wait(1).to({graphics:mask_1_graphics_9,x:126,y:145.9}).wait(1).to({graphics:mask_1_graphics_10,x:130.4,y:135.9}).wait(1).to({graphics:mask_1_graphics_11,x:132.7,y:125.1}).wait(1).to({graphics:mask_1_graphics_12,x:133,y:125.1}).wait(1).to({graphics:mask_1_graphics_13,x:133.2,y:135.9}).wait(1).to({graphics:mask_1_graphics_14,x:133.1,y:145.9}).wait(1).to({graphics:mask_1_graphics_15,x:133,y:154.8}).wait(1).to({graphics:mask_1_graphics_16,x:133.1,y:162.1}).wait(1).to({graphics:mask_1_graphics_17,x:133.2,y:167.6}).wait(1).to({graphics:mask_1_graphics_18,x:133.1,y:171}).wait(1).to({graphics:mask_1_graphics_19,x:133,y:172.2}).wait(1).to({graphics:null,x:0,y:0}).wait(202));

	// circleR
	this.instance_11 = new lib.circleR();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,100,1,1,0,0,0,150,100);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({_off:true},30).wait(188));

	// Mask_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_20 = new cjs.Graphics().p("AEYl6QGzABEzEzQE0EzAAGzQAAGzk0EzQkzE0mzAAg");
	var mask_2_graphics_21 = new cjs.Graphics().p("ABKakMAGaggLQGrBVDxFpQDyFphVGrQhVGrlqDyQkLCykvAAQhqAAhwgWg");
	var mask_2_graphics_22 = new cjs.Graphics().p("Ah6ZnIMj+TQGSCmClGRQCoGSinGSQimGSmTCmQjIBTjJAAQjJAAjIhTg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AkuYGISO7RQFpDxBUGrQBWGqjyFqQjxFpmsBVQhuAWhqAAQkuAAkMizg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AnMWEIXM3LQE0EygBGzQABGzk0EzQkzE0m0AAQmxAAk0k0g");
	var mask_2_graphics_25 = new cjs.Graphics().p("ABMajQmphVjylqIbRyOQDyFphWGrQhUGqlpDyQkMCzkwAAQhqAAhvgWg");
	var mask_2_graphics_26 = new cjs.Graphics().p("Ah5ZmQmRimimmSIeTskQCmGSinGSQilGSmSCmQjJBTjJAAQjJAAjJhTg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AktYGQlpjyhVmqMAgLgGaQBVGrjyFpQjxFqmrBVQhvAWhqAAQkvAAkMizg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AnLWEQkzkzABmzMAgyAAAQAAGzk0EzQkzE0myAAQmzAAk0k0g");
	var mask_2_graphics_29 = new cjs.Graphics().p("ABZajQmphVjylqQjylpBVmrMAgLAGaQhVGrlqDxQkLCzkwAAQhqAAhvgWg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AhMZnQmSiminmTQimmRCmmSIeTMkQimGSmSClQjJBUjJAAQjJAAjHhTg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AjRYHQlqjxhVmsQhVmpDylqIbRSPQjxFpmrBUQhwAXhrAAQkuAAkKizg");
	var mask_2_graphics_32 = new cjs.Graphics().p("AG3a5QmzABkzk0QkzkzAAm0QAAmyEzkzIXMXMQkzEzmxAAIgCAAg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AE6akQmqhUjylpQjxlqBVmrQBUmqFqjxISObRQkLCzkvAAQhrAAhvgXg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_2_graphics_20,x:133,y:172.2}).wait(1).to({graphics:mask_2_graphics_21,x:133.1,y:172.2}).wait(1).to({graphics:mask_2_graphics_22,x:133.2,y:172.2}).wait(1).to({graphics:mask_2_graphics_23,x:133.2,y:172.1}).wait(1).to({graphics:mask_2_graphics_24,x:133.1,y:172}).wait(1).to({graphics:mask_2_graphics_25,x:133.3,y:172.1}).wait(1).to({graphics:mask_2_graphics_26,x:133.4,y:172.1}).wait(1).to({graphics:mask_2_graphics_27,x:133.4,y:172.1}).wait(1).to({graphics:mask_2_graphics_28,x:133.4,y:172}).wait(1).to({graphics:mask_2_graphics_29,x:132.4,y:172.1}).wait(1).to({graphics:mask_2_graphics_30,x:129.4,y:172.2}).wait(1).to({graphics:mask_2_graphics_31,x:124.6,y:172.2}).wait(1).to({graphics:mask_2_graphics_32,x:118.1,y:172.1}).wait(1).to({graphics:mask_2_graphics_33,x:110.2,y:172.3}).wait(189));

	// circleL
	this.instance_12 = new lib.circleL();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,100,1,1,0,0,0,150,100);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({_off:true},14).wait(188));

	// light
	this.instance_13 = new lib.light();
	this.instance_13.parent = this;
	this.instance_13.setTransform(164,326.1,1.575,1.575,0,0,0,58.5,119.7);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).wait(1).to({regX:58.4,regY:119.5,x:163.8,y:325.7,alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(156));

	// text2_2
	this.instance_14 = new lib.text_2_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(253.5,295.7,1.163,1.163,0,0,0,59.6,13);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(83).to({_off:false},0).wait(1).to({regX:55.1,regY:12.6,x:241,y:295.2,alpha:0.2},0).wait(1).to({x:233.8,alpha:0.4},0).wait(1).to({x:226.7,alpha:0.6},0).wait(1).to({x:219.5,alpha:0.8},0).wait(1).to({x:212.3,alpha:1},0).wait(26).to({scaleX:1.19,scaleY:1.19,x:212.2,alpha:0.8},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:212.1,alpha:0.6},0).wait(1).to({scaleX:1.25,scaleY:1.25,x:211.9,alpha:0.4},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:211.8,alpha:0.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,x:211.6,alpha:0},0).to({_off:true},1).wait(103));

	// text_2
	this.instance_15 = new lib.text_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(108,249.6,1.172,1.172,0,0,0,73.5,13);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(78).to({_off:false},0).wait(1).to({regX:45.4,regY:12.9,x:81.8,y:249.4,alpha:0.2},0).wait(1).to({x:88.5,alpha:0.4},0).wait(1).to({x:95.2,alpha:0.6},0).wait(1).to({x:102,alpha:0.8},0).wait(1).to({x:108.7,alpha:1},0).wait(31).to({scaleX:1.2,scaleY:1.2,x:107.9,alpha:0.8},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:107.1,alpha:0.6},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:106.3,alpha:0.4},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:105.5,alpha:0.2},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:104.7,alpha:0},0).to({_off:true},1).wait(103));

	// phone_clear
	this.instance_16 = new lib.phone_clear();
	this.instance_16.parent = this;
	this.instance_16.setTransform(158.3,326.3,0.339,0.339,0,0,0,287.8,610.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(63).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:157.8,y:325.5},0).wait(45).to({alpha:0.9},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:0.7},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0.1},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(103));

	// text_3
	this.instance_17 = new lib.text_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(156.6,241.4,1.287,1.287,0,0,0,115.5,12.8);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(137).to({_off:false},0).wait(1).to({regX:114.4,regY:21.8,scaleX:1.25,scaleY:1.25,x:155.2,y:252.7,alpha:0.167},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:155.3,y:252.4,alpha:0.333},0).wait(1).to({scaleX:1.19,scaleY:1.19,y:252.1,alpha:0.5},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:155.4,y:251.8,alpha:0.667},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:251.6,alpha:0.833},0).wait(1).to({scaleX:1.1,scaleY:1.1,y:251.3,alpha:1},0).wait(32).to({scaleX:1.14,scaleY:1.14,y:251.7,alpha:0.8},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:155.3,y:252.1,alpha:0.6},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:252.4,alpha:0.4},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:155.2,y:252.8,alpha:0.2},0).wait(1).to({scaleX:1.31,scaleY:1.31,y:253.2,alpha:0},0).to({_off:true},1).wait(42));

	// transition
	this.instance_18 = new lib.transition();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(124).to({_off:false},0).wait(1).to({regX:160,regY:240,x:160,y:240,alpha:0.075},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.45},0).wait(92));

	// bg_clear
	this.instance_19 = new lib.bg_clear_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(160,240,1,1,0,0,0,160,190);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(111).to({_off:false},0).wait(1).to({alpha:0.125},0).wait(1).to({alpha:0.25},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.625},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:160.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:160},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:160.1},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:160},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:160.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:160},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:160.1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:160},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:160.1},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:160},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:160.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:160},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:160.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:160},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:160.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:160},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:160.1},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:160},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:160.1},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:160},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:160.1},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:160},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:160.1},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:160},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:160.1},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:160},0).wait(57));

	// phone
	this.instance_20 = new lib.phone_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(59.1,430,0.339,0.339,0,0,0,0.1,0.1);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(50).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:156.1,y:609.9},0).wait(1).to({x:156.3,y:584},0).wait(1).to({x:156.4,y:558.2},0).wait(1).to({x:156.6,y:532.3},0).wait(1).to({x:156.7,y:506.5},0).wait(1).to({x:156.9,y:480.6},0).wait(1).to({x:157,y:454.8},0).wait(1).to({x:157.2,y:428.9},0).wait(1).to({x:157.3,y:403.1},0).wait(1).to({x:157.5,y:377.2},0).wait(1).to({x:157.6,y:351.4},0).wait(1).to({x:157.8,y:325.5},0).to({_off:true},1).wait(159));

	// Mask_circle (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_34 = new cjs.Graphics().p("AnKWGQkykzAAmzQAAmzEykzQE0kzGzAAQGzAAEyEzQE0EzAAGzQAAGzk0EzQkyE0mzAAQmzAAk0k0g");
	var mask_3_graphics_35 = new cjs.Graphics().p("ApBWbQlQlQAAncQAAncFQlQQFRlQHbAAQHcAAFQFQQFRFQAAHcQAAHclRFQQlQFRncAAQnbAAlRlRg");
	var mask_3_graphics_36 = new cjs.Graphics().p("Aq4WvQltlsAAoFQAAoFFtltQFtltIFAAQIFAAFsFtQFuFtAAIFQAAIFluFsQlsFuoFAAQoFAAltlug");
	var mask_3_graphics_37 = new cjs.Graphics().p("AswXEQmJmKAAouQAAotGJmLQGLmJItAAQIuAAGKGJQGLGLAAItQAAIumLGKQmKGLouAAQotAAmLmLg");
	var mask_3_graphics_38 = new cjs.Graphics().p("AunXYQmnmmAApXQAApWGnmoQGommJWAAQJXAAGmGmQGoGoAAJWQAAJXmoGmQmmGopXAAQpWAAmomog");
	var mask_3_graphics_39 = new cjs.Graphics().p("AwfXtQnDnDAAqAQAAp/HDnFQHFnEJ/AAQKAAAHDHEQHFHFAAJ/QAAKAnFHDQnDHFqAAAQp/AAnFnFg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AyKYBQngngAAqpQAAqoHgniQHingKoAAQKpAAHgHgQHiHiAAKoQAAKpniHgQngHiqpAAQqoAAninig");
	var mask_3_graphics_41 = new cjs.Graphics().p("AzQYWQn9n9AArSQAArRH9n/QH/n9LRAAQLSAAH9H9QH/H/AALRQAALSn/H9Qn9H/rSAAQrRAAn/n/g");
	var mask_3_graphics_42 = new cjs.Graphics().p("A0WYqQoaoaAAr6QAAr6IaocQIcoaL6AAQL7AAIaIaQIcIcAAL6QAAL6ocIaQoaIcr7AAQr6AAococg");
	var mask_3_graphics_43 = new cjs.Graphics().p("A1cY/Qo2o3AAskQAAsiI2o5QI5o3MjAAQMkAAI3I3QI4I5AAMiQAAMko4I3Qo3I5skAAQsjAAo5o5g");
	var mask_3_graphics_44 = new cjs.Graphics().p("A2iZTQpTpTAAtNQAAtMJTpWQJWpTNMAAQNNAAJTJTQJWJWAANMQAANNpWJTQpTJWtNAAQtMAApWpWg");
	var mask_3_graphics_45 = new cjs.Graphics().p("A3oZoQpwpxAAt1QAAt1JwpzQJzpwN1AAQN2AAJwJwQJzJzAAN1QAAN1pzJxQpwJzt2AAQt1AApzpzg");
	var mask_3_graphics_46 = new cjs.Graphics().p("A4uZ8QqNqNAAufQAAudKNqQQKQqOOeAAQOfAAKNKOQKQKQAAOdQAAOfqQKNQqNKQufAAQueAAqQqQg");
	var mask_3_graphics_47 = new cjs.Graphics().p("A5zaRQqrqqAAvIQAAvHKrqsQKsqrPHAAQPIAAKqKrQKtKsAAPHQAAPIqtKqQqqKtvIAAQvHAAqsqtg");
	var mask_3_graphics_48 = new cjs.Graphics().p("A65a4QrIrHAAvxQAAvwLIrJQLJrIPwAAQPxAALHLIQLKLJAAPwQAAPxrKLHQrHLKvxAAQvwAArJrKg");
	var mask_3_graphics_49 = new cjs.Graphics().p("A7/b+QrkrkAAwaQAAwZLkrmQLmrkQZAAQQaAALkLkQLmLmAAQZQAAQarmLkQrkLmwaAAQwZAArmrmg");
	var mask_3_graphics_50 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_51 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_52 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_54 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_98 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_114 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_160 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_161 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_162 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_163 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_164 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_165 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_166 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_167 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_168 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_169 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_170 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_171 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_172 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_173 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_174 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_175 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_176 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_177 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_178 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_179 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_180 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_181 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_182 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_183 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_184 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_185 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_186 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_187 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_188 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_189 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_190 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_191 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_192 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_193 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_194 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_195 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_196 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_197 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_198 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_199 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_200 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_201 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_202 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_203 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_204 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_205 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_206 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_207 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_208 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_209 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_210 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_211 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_212 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A9FdDQsBsBAAxCQAAxBMBsEQMEsBRBAAQRCAAMBMBQMEMEAARBQAARCsEMBQsBMExCAAQxBAAsEsEg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_3_graphics_34,x:133.4,y:172.2}).wait(1).to({graphics:mask_3_graphics_35,x:138.4,y:177.2}).wait(1).to({graphics:mask_3_graphics_36,x:143.3,y:182.1}).wait(1).to({graphics:mask_3_graphics_37,x:148.3,y:187.1}).wait(1).to({graphics:mask_3_graphics_38,x:153.2,y:192}).wait(1).to({graphics:mask_3_graphics_39,x:158.1,y:197}).wait(1).to({graphics:mask_3_graphics_40,x:161.8,y:201.9}).wait(1).to({graphics:mask_3_graphics_41,x:161.8,y:206.9}).wait(1).to({graphics:mask_3_graphics_42,x:161.8,y:211.8}).wait(1).to({graphics:mask_3_graphics_43,x:161.8,y:216.8}).wait(1).to({graphics:mask_3_graphics_44,x:161.8,y:221.7}).wait(1).to({graphics:mask_3_graphics_45,x:161.8,y:226.7}).wait(1).to({graphics:mask_3_graphics_46,x:161.8,y:231.6}).wait(1).to({graphics:mask_3_graphics_47,x:161.8,y:236.6}).wait(1).to({graphics:mask_3_graphics_48,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_49,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_50,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_51,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_52,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_53,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_54,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_55,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_56,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_57,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_58,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_59,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_60,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_61,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_62,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_63,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_64,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_65,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_66,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_67,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_68,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_69,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_70,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_71,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_72,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_73,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_74,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_75,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_76,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_77,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_78,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_79,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_80,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_81,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_82,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_83,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_84,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_85,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_86,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_87,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_88,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_89,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_90,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_91,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_92,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_93,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_94,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_95,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_96,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_97,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_98,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_99,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_100,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_101,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_102,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_103,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_104,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_105,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_106,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_107,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_108,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_109,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_110,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_111,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_112,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_113,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_114,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_115,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_116,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_117,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_118,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_119,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_120,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_121,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_122,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_123,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_124,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_125,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_126,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_127,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_128,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_129,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_130,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_131,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_132,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_133,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_134,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_135,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_136,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_137,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_138,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_139,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_140,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_141,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_142,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_143,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_144,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_145,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_146,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_147,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_148,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_149,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_150,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_151,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_152,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_153,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_154,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_155,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_156,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_157,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_158,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_159,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_160,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_161,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_162,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_163,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_164,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_165,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_166,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_167,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_168,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_169,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_170,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_171,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_172,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_173,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_174,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_175,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_176,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_177,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_178,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_179,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_180,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_181,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_182,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_183,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_184,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_185,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_186,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_187,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_188,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_189,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_190,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_191,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_192,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_193,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_194,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_195,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_196,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_197,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_198,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_199,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_200,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_201,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_202,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_203,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_204,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_205,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_206,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_207,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_208,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_209,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_210,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_211,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_212,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_213,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_214,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_215,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_216,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_217,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_218,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_219,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_220,x:161.7,y:239.7}).wait(1).to({graphics:mask_3_graphics_221,x:161.7,y:239.7}).wait(1));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,50);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(34).to({_off:false},0).wait(188));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("EgY/AlgMAAAhK/MAx/AAAMAAABK/g");
	this.shape.setTransform(160,240);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(160,240,323.4,480);
// library properties:
lib.properties = {
	id: '9FA0091970324CFF8975F2E17058979F',
	width: 320,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1525958287512", id:"bg"},
		{src:"images/bg_clear.jpg?1525958287512", id:"bg_clear"},
		{src:"images/katespade.jpg?1525958287512", id:"katespade"},
		{src:"images/phone.jpg?1525958287512", id:"phone"},
		{src:"images/phone_clear_pic.jpg?1525958287512", id:"phone_clear_pic"},
		{src:"images/phone_ending.jpg?1525958287512", id:"phone_ending"}
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
an.compositions['9FA0091970324CFF8975F2E17058979F'] = {
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