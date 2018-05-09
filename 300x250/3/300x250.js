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
p.nominalBounds = new cjs.Rectangle(0,0,139,201);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,1219);


(lib.phone_clear_pic = function() {
	this.initialize(img.phone_clear_pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,119,175);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYCEQgnAAAAglIAAh8IDAAAIAAhHIjEAAIAAgeIDkAAIAACDIi/AAIAABRQAAARAVABICOAAQAUAAAEgMQAFgMACgjIAgAKQgGAzgKAPQgJAPggAAg");
	this.shape.setTransform(198,37.2,0.867,0.867);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABKCQIAAgRIiUAAIAAARIggAAIAAj8IBCAAQAKgSAFgRIAgAFQgFAQgIAOIByAAIAAD8gAhKBgICUAAIAAgoIiUAAgAhKAaICUAAIAAglIiUAAgAhKgpICUAAIAAgkIiUAAg");
	this.shape_1.setTransform(169.6,37,0.867,0.867);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAzCMIgIgdIAkACQARAAADgTQADgUAAiFIhLAAQgMAcgRAXIgTgaQAdgqALhBIAgADQgEAXgHAZIBeAAQAACigFAmQgEAhgoAAIgigDgAiFCIIAAjiIAeAAQAJgZADgaIAhAEQgGAbgIAUIAvAAIAADZIgfAAIAAgQIguAAIAAAZgAhmBRIAuAAIAAg7IguAAgAhmgGIAuAAIAAg1IguAAgAAEABIAbgPQAfAnAOAaIgaASQgRgfgdglg");
	this.shape_2.setTransform(142,36.9,0.867,0.867);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiPBvQA2gLASgSQAQgRADgcIg1AAIAAivIDRAAIAACvIg5AAIAAA0QAAAMAMAAIAkAAQAIAAAFgFQADgFADgdIAeAKQgEArgKAJQgLAHgRAAIg1AAQgiAAAAgjIAAg7IgjAAQgDApgYAYQgXAYg3ANgAhJAIICQAAIAAgWIiQAAgAhJgpICQAAIAAgVIiQAAgAhJhZICQAAIAAgVIiQAAg");
	this.shape_3.setTransform(114.6,37.5,0.867,0.867);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgPCJIAAiiQgsAvg+AlIgVgcQBlg4AohPIiEAAIAAggIEMAAIAAAgIhkAAQgGAOgLATIAAANQBJAqA0AwIgXAbQgqgtg8gmIAAChg");
	this.shape_4.setTransform(86.8,37.7,0.867,0.867);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPBwQB1gtA/iGIhSAAQgdAsgsAhIgWgbQBFg0AZhLIAjAEQgHAYgJARIBoAAIAAAbQgWAzgZAkQAkA9BOAlIgaAfQhJgpgkg8Qg3BFhOAhg");
	this.shape_5.setTransform(59.3,36.9,0.867,0.867);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiOB2QAjgZASgeIgtgjQAMgjAMgwIgdAAIAAggIAkAAIAKg6IAgADIgKA3IAyAAIAAASQgCBIgZA1QAaAUAPAPIgXAaQgNgPgUgRQgXAkghAZgAhjASIAZASQASgpAEgyIgaAAQgIAkgNAlgAAKCNIgJggIAqABQAIAAAAgQIAAhPIhCAAIAAgfIBCAAIAAgiQAXgVAUgbIhkAAIAAggICJAAIAAAgQgVAggbAaIAAAYIA8AAIAAAfIg8AAIAABZQABAlgcAAg");
	this.shape_6.setTransform(31.8,37.1,0.867,0.867);

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

}).prototype = getMCSymbolPrototype(lib.text_3, new cjs.Rectangle(19.5,-9.3,190,59.1), null);


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
	this.instance.setTransform(14,54,4.579,4.579);

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


(lib.circleR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBuDQF1AAEGEHQEIEIAAF0QAAF1kIEHQkGEIl1AAg");
	mask.setTransform(195,100);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleR, new cjs.Rectangle(150,10,90,180), null);


(lib.circleL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai5J8QkIkHAAl1QAAl0EIkIQEGkHF1AAIAAcHQl1AAkGkIg");
	mask.setTransform(105,100);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleL, new cjs.Rectangle(60,10,90,180), null);


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


(lib.katespade_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Ah0OCQhegrkbidQgOgGgKgRQgUghAVgyQAhhQH5z5QABgFADgIQAHgPALgLQAjgiBAAXIFrBhIAmAVQAkAegLAuQgQAykTLAIkQK3IgGAQQgHAUgMANQgYAbggAAQgTAAgWgKgACkqEIgRARIh1EgQgXA8ADAZQAEAeAbAUQAcAVAogFQA/gJAlhWIAOgpQAEgMAGgBIAdgCQAZgCAPgNQAQgOAZhCIAWg/QAFgOACgQQAEgfgUgJIgegMQgIgDgCgGQgKgagEgEQgUgZgzgJQgOgDgNAAQgXAAgRALg");
	var mask_graphics_7 = new cjs.Graphics().p("Ah0OCQhegrkbidQgOgGgKgRQgUghAVgyQAhhQH5z5QABgFADgIQAHgPALgLQAjgiBAAXIFrBhIAmAVQAkAegLAuQgQAykTLAIkQK3IgGAQQgHAUgMANQgYAbggAAQgTAAgWgKgACkqEIgRARIh1EgQgXA8ADAZQAEAeAbAUQAcAVAogFQA/gJAlhWIAOgpQAEgMAGgBIAdgCQAZgCAPgNQAQgOAZhCIAWg/QAFgOACgQQAEgfgUgJIgegMQgIgDgCgGQgKgagEgEQgUgZgzgJQgOgDgNAAQgXAAgRALg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:57.1,y:90.8}).wait(7).to({graphics:mask_graphics_7,x:57.1,y:90.8}).wait(18));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(222));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.7,239.8,1,1,0,0,0,66.1,18.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(184).to({_off:false},0).wait(1).to({y:235.7,alpha:0.2},0).wait(1).to({y:231.6,alpha:0.4},0).wait(1).to({y:227.5,alpha:0.6},0).wait(1).to({y:223.4,alpha:0.8},0).wait(1).to({y:219.3,alpha:1},0).wait(33));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_174 = new cjs.Graphics().p("AoFIGQjWjWgBkwQABkuDWjXQDWjXEvAAQDQAACmBmIAAgBICoAAIAACLQC+DPABEdQAAEwjXDWQjWDXkwgBQkvABjWjXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(174).to({graphics:mask_graphics_174,x:88.3,y:143.8}).wait(48));

	// phone_ending
	this.instance_2 = new lib.phone_ending_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.6,284.6,0.686,0.686,0,0,0,79.5,101.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(177).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,x:88.6,y:251.2},0).wait(1).to({y:217.2},0).wait(1).to({y:183.2},0).wait(1).to({y:149.2},0).wait(41));

	// circle
	this.instance_3 = new lib.circle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.4,143.8,0.397,0.397,0,0,0,73.2,73.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(174).to({_off:false},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:88.3,alpha:0.25},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:88.4,alpha:0.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:88.3,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,x:88.4,alpha:1},0).wait(44));

	// title
	this.instance_4 = new lib.title();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.7,49.6,1.098,1.098,0,0,0,95.5,11.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(172).to({_off:false},0).wait(1).to({regX:94.1,scaleX:1.07,scaleY:1.07,x:150.2,y:49.5,alpha:0.25},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:49.6,alpha:0.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,x:150.3,alpha:1},0).wait(46));

	// 最高享
	this.instance_5 = new lib.ending_cut_text_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178.3,113.6,1,1,0,0,0,56.9,29.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(181).to({_off:false},0).wait(1).to({x:184.6,alpha:0.125},0).wait(1).to({x:191,alpha:0.25},0).wait(1).to({x:197.4,alpha:0.375},0).wait(1).to({x:203.8,alpha:0.5},0).wait(1).to({x:210.1,alpha:0.625},0).wait(1).to({x:216.5,alpha:0.75},0).wait(1).to({x:222.9,alpha:0.875},0).wait(1).to({x:229.3,alpha:1},0).wait(33));

	// 再送
	this.instance_6 = new lib.ending_cut_text_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.4,178.8,1,1,0,0,0,29.4,26.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(184).to({_off:false},0).wait(1).to({x:161.3,alpha:0.125},0).wait(1).to({x:167.2,alpha:0.25},0).wait(1).to({x:173,alpha:0.375},0).wait(1).to({x:178.9,alpha:0.5},0).wait(1).to({x:184.8,alpha:0.625},0).wait(1).to({x:190.7,alpha:0.75},0).wait(1).to({x:196.5,alpha:0.875},0).wait(1).to({x:202.4,alpha:1},0).wait(30));

	// Kate Spade
	this.instance_7 = new lib.katespade_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(225.5,193.8,0.487,0.487,0,0,0,60.4,91.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(187).to({_off:false},0).wait(1).to({regX:69.5,regY:100.5,x:233.8,y:198.3,alpha:0.125},0).wait(1).to({x:237.8,alpha:0.25},0).wait(1).to({x:241.8,alpha:0.375},0).wait(1).to({x:245.8,alpha:0.5},0).wait(1).to({x:249.8,alpha:0.625},0).wait(1).to({x:253.8,alpha:0.75},0).wait(1).to({x:257.8,alpha:0.875},0).wait(1).to({x:261.8,y:198.2,alpha:1},0).wait(27));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.2,0,1,1,0,0,0,150.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:12.5,y:12.5},0).wait(165).to({scaleY:1.68,y:21},0).wait(1).to({scaleY:2.36,y:29.5},0).wait(1).to({scaleY:3.04,y:38},0).wait(1).to({scaleY:3.72,y:46.5},0).wait(1).to({scaleY:4.4,y:55},0).wait(1).to({scaleY:5.08,y:63.5},0).wait(51));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,250.1,1,1,0,0,0,150,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:150.2,regY:12.5,x:150.2,y:237.5},0).wait(165).to({scaleY:1.67,y:229.1},0).wait(1).to({scaleY:2.33,y:220.8},0).wait(1).to({scaleY:3,y:212.4},0).wait(1).to({scaleY:3.66,y:204.1},0).wait(1).to({scaleY:4.33,y:195.7},0).wait(1).to({scaleY:4.99,y:187.4},0).wait(51));

	// text_1
	this.instance_10 = new lib.text_1_intro();
	this.instance_10.parent = this;
	this.instance_10.setTransform(151.5,129.1,1.124,1.124,0,0,0,132.2,10.4);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.143},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.286},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.429},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.571},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.714},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.857},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(28).to({scaleX:1.01,scaleY:1.01,alpha:0.889},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.778},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.667},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.556},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.444},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.333},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.222},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.111},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0},0).wait(179));

	// Mask_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("AByMrQkHkHAAl1QAAl0EHkIQEHkHF1AAIAAcHQl1AAkHkIg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AhAK6QjWkxBBlvQBAlvExjWQExjVFvBBIk4brQlwhBjUkxg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AjaJGQielRB/leQCAleFRieQFRidFfB/IpoabQldiAidlSg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AlXHUQhhloC7lCQC6lDFohgQFnhhFDC7IuEYWQlCi7hglog");
	var mask_1_graphics_8 = new cjs.Graphics().p("AmyFnQghlyDvkeQDvkeF0ghQFzggEdDwIyEViQkdjwgglzg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AnqEBQAglyEejwQEcjvF0AgQFzAhDwEdI1iSEQjwkdAhl0g");
	var mask_1_graphics_10 = new cjs.Graphics().p("An8CnQBglnFDi6QFCi7FpBhQFnBgC7FDI4WODQi7lDBhlog");
	var mask_1_graphics_11 = new cjs.Graphics().p("AnnBbQCdlRFdiAQFfh/FSCeQFRCdCAFdI6bJoQh/lfCelRg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AmtAfQDVkxFvhAQFvhBEyDWQEwDUBBFwI7rE4QhBlvDWkxg");
	var mask_1_graphics_13 = new cjs.Graphics().p("ApXJxQAAl1EIkGQEHkIF0AAQF1AAEIEIQEHEGAAF1g");
	var mask_1_graphics_14 = new cjs.Graphics().p("ApKGHQBBlwExjUQEwjWFwBBQFvBADWExQDVExhAFvg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AoiCjQB/ldFSidQFRieFeB/QFfCACeFRQCdFRiAFfg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AnggxQC7lDFnhgQFohhFDC7QFDC6BgFoQBhFni7FDg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AmFjyQDwkdFyggQFzghEeDvQEeDwAgFzQAhFzjwEdg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AkWmYQEdjwFzAhQFzAgDwEeQDwEeghFyQggFzkeDwg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AiWofQFCi7FoBhQFoBgC6FDQC7FChhFpQhgFnlDC7g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:75,y:107.5}).wait(1).to({graphics:mask_1_graphics_5,x:82.8,y:106.8}).wait(1).to({graphics:mask_1_graphics_6,x:90.4,y:104.8}).wait(1).to({graphics:mask_1_graphics_7,x:97.5,y:101.5}).wait(1).to({graphics:mask_1_graphics_8,x:103.9,y:97}).wait(1).to({graphics:mask_1_graphics_9,x:109.5,y:91.4}).wait(1).to({graphics:mask_1_graphics_10,x:114,y:85}).wait(1).to({graphics:mask_1_graphics_11,x:117.3,y:77.9}).wait(1).to({graphics:mask_1_graphics_12,x:119.3,y:70.3}).wait(1).to({graphics:mask_1_graphics_13,x:120,y:62.5}).wait(1).to({graphics:mask_1_graphics_14,x:120.1,y:70.3}).wait(1).to({graphics:mask_1_graphics_15,x:120.1,y:77.9}).wait(1).to({graphics:mask_1_graphics_16,x:120.1,y:85}).wait(1).to({graphics:mask_1_graphics_17,x:120,y:91.4}).wait(1).to({graphics:mask_1_graphics_18,x:120,y:97}).wait(1).to({graphics:mask_1_graphics_19,x:120.1,y:101.5}).wait(1).to({graphics:null,x:0,y:0}).wait(202));

	// circleR
	this.instance_11 = new lib.circleR();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150,125,1,1,0,0,0,150,100);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({_off:true},30).wait(188));

	// Mask_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_20 = new cjs.Graphics().p("AEsrUQF1AAEHEHQEIEIAAF0QAAF1kIEHQkHEIl1AAg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AB8QhIFf7lQFuBJDOE2QDQE2hJFtQhJFuk2DOQjlCakEAAQhbAAhfgTg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AgtPtIKw5+QFZCPCOFYQCPFXiPFZQiPFZlYCOQitBHisAAQisAAirhHg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AjIObIPn3YQE2DPBJFtQBJFtjQE2QjPE2ltBIQhgAUhcAAQkDAAjkiZg");
	var mask_2_graphics_24 = new cjs.Graphics().p("AEsQzQl0AAkHkHIT3z4QEIEIAAFzQAAF1kIEIQkHEHlzAAIgCAAg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AB8QgQlthIjPk2IXXvnQDQE2hJFsQhJFuk2DQQjlCZkDAAQhcAAhfgUg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AgtPtQlYiOiPlZIZ+qwQCPFYiPFXQiOFZlZCPQisBHisAAQisAAishHg");
	var mask_2_graphics_27 = new cjs.Graphics().p("AjIOaQk2jOhJluIblleQBJFsjPE2QjPE2luBJQhfAThbAAQkEAAjliag");
	var mask_2_graphics_28 = new cjs.Graphics().p("AlPMrQkIkHAAl1IcHAAQAAF1kHEHQkIEIl1AAQl0AAkHkIg");
	var mask_2_graphics_29 = new cjs.Graphics().p("ACFQhQlthJjOk2QjQk2BJlsIbkFeQhIFuk2DOQjlCakFAAQhbAAhfgTg");
	var mask_2_graphics_30 = new cjs.Graphics().p("AgJPtQlZiPiOlYQiPlYCPlYIZ+KwQiPFZlYCOQisBHitAAQisAAirhHg");
	var mask_2_graphics_31 = new cjs.Graphics().p("Ah7OaQk2jPhIltQhKltDQk2IXXPnQjPE2ltBJQhfAThcAAQkEAAjkiag");
	var mask_2_graphics_32 = new cjs.Graphics().p("AjMMrQkHkHAAl1QAAl0EHkHIT4T3QkIEIlzAAQl2AAkHkIg");
	var mask_2_graphics_33 = new cjs.Graphics().p("AFFQhQlthJjPk2QjQk2BKlsQBIluE1jPIPoXXQjmCakDAAQhbAAhfgTg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_2_graphics_20,x:120,y:107.5}).wait(1).to({graphics:mask_2_graphics_21,x:120.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_22,x:120.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_23,x:120.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_24,x:120,y:107.5}).wait(1).to({graphics:mask_2_graphics_25,x:120.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_26,x:120.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_27,x:120.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_28,x:120,y:107.5}).wait(1).to({graphics:mask_2_graphics_29,x:119.1,y:107.6}).wait(1).to({graphics:mask_2_graphics_30,x:116.6,y:107.6}).wait(1).to({graphics:mask_2_graphics_31,x:112.4,y:107.6}).wait(1).to({graphics:mask_2_graphics_32,x:106.8,y:107.5}).wait(1).to({graphics:mask_2_graphics_33,x:100,y:107.6}).wait(189));

	// circleL
	this.instance_12 = new lib.circleL();
	this.instance_12.parent = this;
	this.instance_12.setTransform(150,125,1,1,0,0,0,150,100);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({_off:true},14).wait(188));

	// light
	this.instance_13 = new lib.light();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150.4,177.3,1.035,1.035,0,0,0,58.4,120.5);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).wait(1).to({regY:119.5,x:150.3,y:176.2,alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(156));

	// text2_2
	this.instance_14 = new lib.text_2_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(213.6,155.6,1,1,0,0,0,59.4,13);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(83).to({_off:false},0).wait(1).to({regX:55.1,regY:12.6,x:204.1,y:155.2,alpha:0.2},0).wait(1).to({x:198.9,alpha:0.4},0).wait(1).to({x:193.7,alpha:0.6},0).wait(1).to({x:188.5,alpha:0.8},0).wait(1).to({x:183.3,alpha:1},0).wait(26).to({scaleX:1.05,scaleY:1.05,x:184.8,y:156.2,alpha:0.8},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:186.4,y:157.1,alpha:0.6},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:188,y:158,alpha:0.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:189.6,y:159,alpha:0.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:191.2,y:159.9,alpha:0},0).to({_off:true},1).wait(103));

	// text_2
	this.instance_15 = new lib.text_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(108.1,120.2,1.007,1.007,0,0,0,73.8,12.9);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(78).to({_off:false},0).wait(1).to({regX:45.4,x:87.9,y:120.1,alpha:0.2},0).wait(1).to({x:96.3,alpha:0.4},0).wait(1).to({x:104.7,alpha:0.6},0).wait(1).to({x:113.1,alpha:0.8},0).wait(1).to({x:121.5,alpha:1},0).wait(31).to({scaleX:1.06,scaleY:1.06,x:119.8,y:119.2,alpha:0.8},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:118,y:118.3,alpha:0.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,x:116.3,y:117.3,alpha:0.4},0).wait(1).to({scaleX:1.22,scaleY:1.22,x:114.5,y:116.4,alpha:0.2},0).wait(1).to({scaleX:1.28,scaleY:1.28,x:112.8,y:115.4,alpha:0},0).to({_off:true},1).wait(103));

	// phone_clear
	this.instance_16 = new lib.phone_clear();
	this.instance_16.parent = this;
	this.instance_16.setTransform(150.6,176.1,0.223,0.223,0,0,0,287.7,609.9);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(63).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:150.3,y:175.6},0).wait(45).to({scaleX:0.23,scaleY:0.23,x:149,y:174.8,alpha:0.9},0).wait(1).to({scaleX:0.25,scaleY:0.25,x:147.7,y:174,alpha:0.8},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:146.4,y:173.2,alpha:0.7},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:145,y:172.4,alpha:0.6},0).wait(1).to({scaleX:0.28,scaleY:0.28,x:143.7,y:171.5,alpha:0.5},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:142.4,y:170.8,alpha:0.4},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:141.1,y:170,alpha:0.3},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:139.8,y:169.1,alpha:0.2},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:138.5,y:168.3,alpha:0.1},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:137.1,y:167.5,alpha:0},0).to({_off:true},1).wait(103));

	// text_3
	this.instance_17 = new lib.text_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(151.7,118.5,1.139,1.139,0,0,0,115.3,12.8);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(137).to({_off:false},0).wait(1).to({regX:114.4,regY:20.2,scaleX:1.12,scaleY:1.12,x:150.6,y:126.7,alpha:0.167},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150.7,y:126.5,alpha:0.333},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:126.4,alpha:0.5},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:126.2,alpha:0.667},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:126,alpha:0.833},0).wait(1).to({scaleX:1,scaleY:1,y:125.9,alpha:1},0).wait(32).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(42));

	// transition
	this.instance_18 = new lib.transition();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(124).to({_off:false},0).wait(1).to({alpha:0.075},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.45},0).wait(92));

	// bg_clear
	this.instance_19 = new lib.bg_clear_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,100);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(111).to({_off:false},0).wait(1).to({alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:150},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150.1},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:150.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:150.1},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150.1},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:150},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:150.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:150},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:150.1},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:150},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150.1},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:150},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:150.1},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(57));

	// phone
	this.instance_20 = new lib.phone_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(86.2,225,0.223,0.223);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(50).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:150.2,y:345.2},0).wait(1).to({y:329.8},0).wait(1).to({y:314.4},0).wait(1).to({y:298.9},0).wait(1).to({y:283.5},0).wait(1).to({y:268.1},0).wait(1).to({y:252.7},0).wait(1).to({x:150.3,y:237.3},0).wait(1).to({y:221.9},0).wait(1).to({y:206.4},0).wait(1).to({y:191},0).wait(1).to({y:175.6},0).to({_off:true},1).wait(159));

	// Mask_circle (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_34 = new cjs.Graphics().p("AlQMrQkHkHAAl1QAAl0EHkIQEIkHF0AAQF1AAEHEHQEIEIAAF0QAAF1kIEHQkHEIl1AAQl0AAkIkIg");
	var mask_3_graphics_35 = new cjs.Graphics().p("AmZM4QkZkZAAmOQAAmNEZkaQEakZGNAAQGOAAEZEZQEZEaAAGNQAAGOkZEZQkZEZmOAAQmNAAkakZg");
	var mask_3_graphics_36 = new cjs.Graphics().p("AnjNEQkqkqAAmoQAAmmEqksQEskqGmAAQGoAAEqEqQEsEsAAGmQAAGoksEqQkqEsmoAAQmmAAksksg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AosNRQk8k9AAnAQAAm/E8k+QE+k8G/AAQHAAAE9E8QE9E+AAG/QAAHAk9E9Qk9E9nAAAQm/AAk+k9g");
	var mask_3_graphics_38 = new cjs.Graphics().p("Ap1NdQlOlOAAnZQAAnZFOlPQFPlOHZAAQHZAAFOFOQFPFPAAHZQAAHZlPFOQlOFPnZAAQnZAAlPlPg");
	var mask_3_graphics_39 = new cjs.Graphics().p("Aq+NqQlglgAAnzQAAnxFglhQFhlgHxAAQHzAAFgFgQFhFhAAHxQAAHzlhFgQlgFhnzAAQnxAAlhlhg");
	var mask_3_graphics_40 = new cjs.Graphics().p("AsIN9QlxlxAAoMQAAoLFxlzQFzlxILAAQIMAAFxFxQFzFzAAILQAAIMlzFxQlxFzoMAAQoLAAlzlzg");
	var mask_3_graphics_41 = new cjs.Graphics().p("AtROoQmDmDAAolQAAokGDmFQGFmDIkAAQIlAAGDGDQGEGFAAIkQAAIlmEGDQmDGFolAAQokAAmFmFg");
	var mask_3_graphics_42 = new cjs.Graphics().p("AuaPTQmVmVAAo+QAAo9GVmWQGWmVI9AAQI+AAGVGVQGXGWAAI9QAAI+mXGVQmVGWo+AAQo9AAmWmWg");
	var mask_3_graphics_43 = new cjs.Graphics().p("AvjP+QmnmnAApXQAApWGnmoQGomnJWAAQJXAAGnGnQGoGoAAJWQAAJXmoGnQmnGopXAAQpWAAmomog");
	var mask_3_graphics_44 = new cjs.Graphics().p("AwpQpQm5m5AApwQAApvG5m6QG6m5JvAAQJwAAG5G5QG6G6AAJvQAAJwm6G5Qm5G6pwAAQpvAAm6m6g");
	var mask_3_graphics_45 = new cjs.Graphics().p("AxURUQnKnKAAqKQAAqJHKnLQHLnKKJAAQKKAAHKHKQHLHLAAKJQAAKKnLHKQnKHLqKAAQqJAAnLnLg");
	var mask_3_graphics_46 = new cjs.Graphics().p("Ax/R+QncnbAAqjQAAqiHcndQHdncKiAAQKjAAHbHcQHeHdAAKiQAAKjneHbQnbHeqjAAQqiAAndneg");
	var mask_3_graphics_47 = new cjs.Graphics().p("AyqSpQnuntAAq8QAAq7HunvQHvnuK7AAQK8AAHtHuQHwHvAAK7QAAK8nwHtQntHwq8AAQq7AAnvnwg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AzVTUQn/n/AArVQAArUH/oBQIBn/LUAAQLVAAH/H/QIBIBAALUQAALVoBH/Qn/IBrVAAQrUAAoBoBg");
	var mask_3_graphics_49 = new cjs.Graphics().p("A0AT/QoRoRAAruQAArtIRoTQIToRLtAAQLuAAIRIRQITITAALtQAALuoTIRQoRITruAAQrtAAoToTg");
	var mask_3_graphics_50 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_51 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_52 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_53 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_54 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_55 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_60 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_64 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_66 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_69 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_72 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_73 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_74 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_75 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_76 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_77 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_78 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_79 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_80 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_81 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_82 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_83 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_84 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_85 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_86 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_87 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_88 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_89 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_90 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_91 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_92 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_93 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_94 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_95 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_96 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_97 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_98 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_99 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_100 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_101 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_102 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_103 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_104 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_105 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_106 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_107 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_108 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_109 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_110 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_111 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_112 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_113 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_114 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_115 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_116 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_117 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_118 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_119 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_120 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_121 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_122 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_123 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_124 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_125 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_126 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_127 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_128 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_129 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_130 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_131 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_132 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_133 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_134 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_135 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_136 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_137 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_138 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_139 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_140 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_141 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_142 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_143 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_144 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_145 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_146 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_147 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_148 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_149 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_150 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_151 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_152 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_153 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_154 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_155 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_156 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_157 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_158 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_159 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_160 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_161 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_162 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_163 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_164 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_165 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_166 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_167 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_168 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_169 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_170 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_171 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_172 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_173 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_174 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_175 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_176 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_177 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_178 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_179 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_180 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_181 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_182 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_183 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_184 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_185 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_186 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_187 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_188 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_189 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_190 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_191 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_192 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_193 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_194 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_195 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_196 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_197 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_198 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_199 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_200 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_201 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_202 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_203 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_204 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_205 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_206 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_207 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_208 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_209 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_210 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_211 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_212 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_213 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_214 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_215 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_216 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_217 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_218 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_219 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_220 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");
	var mask_3_graphics_221 = new cjs.Graphics().p("A0rUqQojojAAsHQAAsGIjolQIlojMGAAQMHAAIjIjQIlIlAAMGQAAMHolIjQojIlsHAAQsGAAololg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_3_graphics_34,x:120,y:107.5}).wait(1).to({graphics:mask_3_graphics_35,x:123,y:110.5}).wait(1).to({graphics:mask_3_graphics_36,x:126.1,y:113.6}).wait(1).to({graphics:mask_3_graphics_37,x:129.1,y:116.6}).wait(1).to({graphics:mask_3_graphics_38,x:132.1,y:119.6}).wait(1).to({graphics:mask_3_graphics_39,x:135.2,y:122.7}).wait(1).to({graphics:mask_3_graphics_40,x:138.2,y:125}).wait(1).to({graphics:mask_3_graphics_41,x:141.2,y:125}).wait(1).to({graphics:mask_3_graphics_42,x:144.3,y:125}).wait(1).to({graphics:mask_3_graphics_43,x:147.3,y:125}).wait(1).to({graphics:mask_3_graphics_44,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_45,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_46,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_47,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_48,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_49,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_50,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_51,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_52,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_53,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_54,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_55,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_56,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_57,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_58,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_59,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_60,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_61,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_62,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_63,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_64,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_65,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_66,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_67,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_68,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_69,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_70,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_71,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_72,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_73,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_74,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_75,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_76,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_77,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_78,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_79,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_80,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_81,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_82,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_83,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_84,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_85,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_86,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_87,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_88,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_89,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_90,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_91,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_92,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_93,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_94,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_95,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_96,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_97,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_98,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_99,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_100,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_101,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_102,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_103,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_104,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_105,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_106,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_107,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_108,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_109,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_110,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_111,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_112,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_113,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_114,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_115,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_116,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_117,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_118,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_119,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_120,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_121,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_122,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_123,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_124,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_125,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_126,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_127,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_128,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_129,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_130,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_131,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_132,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_133,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_134,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_135,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_136,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_137,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_138,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_139,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_140,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_141,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_142,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_143,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_144,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_145,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_146,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_147,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_148,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_149,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_150,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_151,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_152,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_153,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_154,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_155,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_156,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_157,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_158,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_159,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_160,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_161,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_162,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_163,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_164,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_165,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_166,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_167,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_168,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_169,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_170,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_171,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_172,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_173,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_174,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_175,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_176,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_177,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_178,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_179,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_180,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_181,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_182,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_183,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_184,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_185,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_186,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_187,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_188,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_189,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_190,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_191,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_192,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_193,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_194,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_195,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_196,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_197,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_198,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_199,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_200,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_201,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_202,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_203,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_204,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_205,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_206,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_207,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_208,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_209,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_210,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_211,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_212,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_213,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_214,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_215,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_216,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_217,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_218,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_219,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_220,x:150,y:125}).wait(1).to({graphics:mask_3_graphics_221,x:150,y:125}).wait(1));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,25);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(34).to({_off:false},0).wait(188));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.3,250);
// library properties:
lib.properties = {
	id: '9FA0091970324CFF8975F2E17058979F',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1525882020449", id:"bg"},
		{src:"images/bg_clear.jpg?1525882020449", id:"bg_clear"},
		{src:"images/katespade.jpg?1525882020449", id:"katespade"},
		{src:"images/phone.jpg?1525882020449", id:"phone"},
		{src:"images/phone_clear_pic.jpg?1525882020449", id:"phone_clear_pic"},
		{src:"images/phone_ending.jpg?1525882020449", id:"phone_ending"}
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