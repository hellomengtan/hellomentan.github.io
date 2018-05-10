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


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,110);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,1219);


(lib.phone_clear_pic = function() {
	this.initialize(img.phone_clear_pic);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,123,254);


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
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// 圖層 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiPBwQA2gNASgRQAQgRAEgcIg2AAIAAivIDRAAIAACvIg5AAIAAAzQAAANAMAAIAlAAQAIAAAEgFQAEgGACgcIAeAKQgEArgKAIQgKAIgSAAIg1AAQgiAAAAgjIAAg7IgjAAQgCApgZAYQgXAYg3ANgAhJAIICRAAIAAgVIiRAAgAhJgpICRAAIAAgWIiRAAgAhJhaICRAAIAAgUIiRAAg");
	this.shape.setTransform(170.9,-6.6,1.123,1.123);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiPB5QAVgoAUgIQAIgWAFgWIgsAAIAAgYQAWgZAOgTIgpAAIAAgdIBMAAIAAAZQgOAXgTAWIAkAAIAAAVQgGAhgJAWIAHAGQAOAOAOAGQAOAGAZAAIA4ABQAcAAA8gDIgIAfIiJgBQgggCgQgGQgUgIgPgQQgDgEgEAAQgJAAgUApgABMBlIgHgZIAaABQAJAAAAgLIAAg1IgyAAIAAAcIAQgCIgFgSIAUgGQAHATAHAgIgVAFIgCgKQgeAGg3AFIgFgbIApgCIAAgeIgsAAIAABTIgdAAIAAhsIBJAAIAAgQIg7AAIAAhrICXAAIAABrIg+AAIAAAQIBMAAIAABUQAAAdgeAAgAA5gzIAhAAIAAgTIghAAgAgDgzIAeAAIAAgTIgeAAgAA5hcIAhAAIAAgSIghAAgAgDhcIAeAAIAAgSIgeAAgAiEh6IAVgUQAcAWATAWIgVAVQgSgXgdgWg");
	this.shape_1.setTransform(135,-7.1,1.123,1.123);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhqCQIAAifIgaAdIgLghQAwg1AXhIIAeAPQgMAkgTAhIAADMgAgJCPIgHgfQATACAQABQALgBAAgMIAAicIAfAAIAACkQAAAggfABgABNgIIAdgKQAWA3AQA8IgdAMQgRhEgVgxgAg/BdQAZgrAShBIAcAIQgPA/gZAxgAg/gfQAig0AOg6IAdAGIgIAcICCAAIAAAVQgJAigJAWIgfgJQAJgQAGgUIhqAAQgOAhgSAcg");
	this.shape_2.setTransform(99.1,-7.3,1.123,1.123);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABYCPIAAgPIhPAAIAAAPIgeAAIAAh6ICMAAIAAB6gAAJBjIBPAAIAAgvIhPAAgAiICPIAAkTIBkAAIAAAZQgOAqgRAqQAdAoACAeQABAZgKAKQgNANgjABIgLgiIARACQANgBADgDQAEgDAAgKQAAgcggglQAUgwALgkIgmAAIAAD1gAgmAAIAAgdIAoAAQgHgcgKgaIgOAAIAAgfIA8AAIgJgXIAggGIAJAdIBAAAIAAAfIgQAAQgIAbgLAbIAtAAIAAAdgAAggdIAeAAQAJgbAIgbIg/AAQALAgAFAWg");
	this.shape_3.setTransform(64.1,-7.3,1.123,1.123);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAzCMIgIgdIAkACQARAAADgTQADgUAAiFIhLAAQgMAcgRAXIgTgaQAdgqALhBIAgADQgEAXgHAZIBeAAQAACigFAmQgEAhgoAAIgigDgAiFCIIAAjiIAeAAQAJgZADgaIAhAEQgGAbgIAUIAvAAIAADZIgfAAIAAgQIguAAIAAAZgAhmBRIAuAAIAAg7IguAAgAhmgGIAuAAIAAg1IguAAgAAEABIAbgPQAfAnAOAaIgaASQgRgfgdglg");
	this.shape_4.setTransform(189.7,36.3,1.123,1.123);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiPBvQA2gLASgSQAQgRADgcIg1AAIAAivIDRAAIAACvIg5AAIAAA0QAAAMAMAAIAkAAQAIAAAFgFQADgFADgdIAeAKQgEArgKAJQgLAHgRAAIg1AAQgiAAAAgjIAAg7IgjAAQgDApgYAYQgXAYg3ANgAhJAIICQAAIAAgWIiQAAgAhJgpICQAAIAAgVIiQAAgAhJhZICQAAIAAgVIiQAAg");
	this.shape_5.setTransform(154.1,37.2,1.123,1.123);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPCJIAAiiQgsAvg+AlIgVgcQBlg4AohPIiEAAIAAggIEMAAIAAAgIhkAAQgGAOgLATIAAANQBJAqA0AwIgXAbQgqgtg8gmIAAChg");
	this.shape_6.setTransform(118.2,37.4,1.123,1.123);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiPBwQB1gtA/iGIhSAAQgdAsgsAhIgWgbQBFg0AZhLIAjAEQgHAYgJARIBoAAIAAAbQgWAzgZAkQAkA9BOAlIgaAfQhJgpgkg8Qg3BFhOAhg");
	this.shape_7.setTransform(82.6,36.4,1.123,1.123);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiOB2QAjgZASgeIgtgjQAMgjAMgwIgdAAIAAggIAkAAIAKg6IAgADIgKA3IAyAAIAAASQgCBIgZA1QAaAUAPAPIgXAaQgNgPgUgRQgXAkghAZgAhjASIAZASQASgpAEgyIgaAAQgIAkgNAlgAAKCNIgJggIAqABQAIAAAAgQIAAhPIhCAAIAAgfIBCAAIAAgiQAXgVAUgbIhkAAIAAggICJAAIAAAgQgVAggbAaIAAAYIA8AAIAAAfIg8AAIAABZQABAlgcAAg");
	this.shape_8.setTransform(47,36.5,1.123,1.123);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhYCEQgnAAAAglIAAh8IDAAAIAAhHIjEAAIAAgeIDkAAIAACDIi/AAIAABRQAAARAVABICOAAQAUAAAEgMQAFgMACgjIAgAKQgGAzgKAPQgJAPggAAg");
	this.shape_9.setTransform(134.9,79.6,1.123,1.123);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABKCQIAAgRIiUAAIAAARIggAAIAAj8IBCAAQAKgSAFgRIAgAFQgFAQgIAOIByAAIAAD8gAhKBgICUAAIAAgoIiUAAgAhKAaICUAAIAAglIiUAAgAhKgpICUAAIAAgkIiUAAg");
	this.shape_10.setTransform(98.1,79.4,1.123,1.123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_3, new cjs.Rectangle(31,-23.5,173.8,119.1), null);


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


(lib.text_1_intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhXCEQgoAAAAglIAAh8IDAAAIAAhGIjEAAIAAggIDkAAIAACEIi/AAIAABRQAAASAWAAICOAAQATAAAFgMQAEgMACgjIAgAKQgFAygLAQQgIAPghAAg");
	this.shape.setTransform(123.5,10.6,0.715,0.715);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABLCQIAAgRIiVAAIAAARIghAAIAAj8IBEAAQAJgRAFgSIAfAFQgDAOgIAQIBwAAIAAD8gAhKBgICVAAIAAgoIiVAAgAhKAaICVAAIAAglIiVAAgAhKgpICVAAIAAgkIiVAAg");
	this.shape_1.setTransform(100,10.4,0.715,0.715);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtAcIAZgNQAEAMAKASQAUgNAPgVIAUAVQgSAWgWAOQATAZAbAQIgSAcQg4gigahLgAgWBrQAJgEAAgHIAAjoICJAAIAACKIhqAAIAABeQAagKASgIIAIAdQgjAOgyANgAASgZIBKAAIAAgbIhKAAgAAShQIBKAAIAAgbIhKAAgAiQBoIAMgDIAAhpIAdAAIAABjIAPgEIAAh6IgsAAIAAhpIBmAAIAABpIgcAAIAAAoIAdAAIAAAdIgdAAIAAAtIAggKIAAAgQg2ARg3AMgAhlg9IAoAAIAAguIgoAAg");
	this.shape_2.setTransform(77.4,10.7,0.715,0.715);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhMB1QA1gNAlgVQgggcgOgkIgTAAIAAgeICnAAIAAAdQgOAmghAdQAjASAqALIgSAdQgwgQglgYQgrAbg6APgAAnBDQAegXANgZIhTAAQALAaAdAWgAiOB/QAdg2AUg2IAeAMQgUA4gaA2gAiRgsIAXgWQAfAXAUAVIgYAWQgQgTgigZgAhCgqQAtgmAPg/IAfAFIgGAWIBhAAQgBBBgIAQQgIAOgbAAIgigBIgKgdIAoABQAKAAAEgEQABgGABgZIhNAAQgUAqgfAbgAiKh1IAXgXQAbATAaAYIgYAXQgSgUgigXg");
	this.shape_3.setTransform(54.6,10.4,0.715,0.715);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiPBwQB1gtA/iGIhSAAQgdAsgsAhIgWgbQBFg0AZhLIAjAEQgHAYgJARIBnAAIAAAbQgVAzgZAkQAkA9BOAlIgaAfQhJgpgjg8Qg4BFhOAhg");
	this.shape_4.setTransform(31.8,10.4,0.715,0.715);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiBBwQBFAAAygPQgMgQgQgQIAcgOQAMANARAVQArgTAbghIhSAAQgmASg4AMIgTgdQBlgJAvgxIAcAPIgQANIBNAAIAAAZQhDBti0AFgAhsgTQAkgCAegIQgMgPgNgMIAcgOQARASALANQApgRAXgfIhQAAQgkAVgwAKIgTgdQBSgPAogqIAcAPIgLALIBRAAIAAAZQgzBaiHAKg");
	this.shape_5.setTransform(9.4,10.3,0.715,0.715);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgSBqQgHgFAAgMQAAgKAHgHQAHgGAKAAQAIAAAIAGQAHAIAAAJQAAAKgHAIQgHAGgJAAQgKAAgHgHgAgTAzIAAgFQAAgRAHgNQAGgNAOgMIASgSQAJgLAAgKQAAgQgJgIQgJgKgQABQgTAAgJAMQgIALAAAUIgjAAQAAgjAUgTQAVgUAhAAQAeAAASAQQATARAAAcQAAAXgLAQQgFAFgWASQgIAHgEAIQgFAKAAAKIAAAFg");
	this.shape_6.setTransform(124,41.9,0.715,0.715);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag6CFIgIggQAWADAaABQAKAAAAgLIAAiMQAogWAsgjIjEAAIAAgfIDxAAIAAAfQgtAog0AiIAACBQAAAjghAAQgVAAgcgCg");
	this.shape_7.setTransform(100.9,42.5,0.715,0.715);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiECQIAAhzIBgAAIAABuIgeAAIAAgMIgkAAIAAARgAhmBhIAkAAIAAgnIgkAAgABfCPIAAgNIhOAAIAAANIgfAAIAAh/IA1AAIAAgoIhAAAIAAgfIBAAAIAAglQgbADgYAAIgJgdQBRAAA5gVIAQAbQgaAKgkAHIAAAoIBGAAIAAAfIhGAAIAAAoIA2AAIAAB/gAARBkIBOAAIAAg3IhOAAgAiBALIAAgcIBaAAIAAAcgAiBggIAAgcIBaAAIAAAcgAiMhMIAAgeIArAAIgNgcIAfgJQAJAXAEAOIAmAAIAAAeg");
	this.shape_8.setTransform(78.3,42,0.715,0.715);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAuCPIgHgfQAVACAOAAQAMAAAAgMIAAiYIhCAAIAAgfIBCAAIAAg9IAgAAIAAA9IAZAAIAAAfIgZAAIAACgQAAAhggAAgAiIBrIA9gDIAAgeIgwAAIAAgdIAwAAIAAgZIg4AAIAAgbIAcAAIgIgeIgaAAIAAgeIApAAIAAhJIAdAAIAABJIAPAAIAAhJIAdAAIAABJIAjAAIAAAeIgUAAIgKAeIAbAAIAAAbIg1AAIAAAZIAvAAIAAAdIgvAAIAAAcIA3gGIAAAcQgkAHhrAGgAhJgHIAaAAIAKgeIgsAAgAAQgOIAcgJQAPAfAOArIgcAMQgMgrgRgigAiOh5IAZgIQALAXAHAXIgZAKQgHgYgLgYgAgUhSQAKgUAHgdIAaAHQgIAegLAVg");
	this.shape_9.setTransform(55.6,42,0.715,0.715);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiNB2QAggYAUgeQgQgOgegVQAPgqAJgrIgcAAIAAgfIAkAAIAKg6IAfADIgKA3IAzAAIAAASQgCBHgZA2QAcAWAMANIgWAaQgPgPgTgRQgVAigjAbgAhkATIAZASQASgoAEg1IgZAAQgLAugLAdgAAJCMIgIgeIApAAQAJAAAAgQIAAhPIhBAAIAAgeIBBAAIAAgjQAWgUAWgcIhlAAIAAggICJAAIAAAgQgXAhgZAZIAAAZIA7AAIAAAeIg7AAIAABZQAAAkgbAAg");
	this.shape_10.setTransform(32.9,42,0.715,0.715);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiOB2QAigZATgdIgugjQANgkAMgxIgcAAIAAgfIAjAAIAKg6IAfADIgKA3IA0AAIAAASQgEBJgYA0QAaAVAOAOIgVAaQgOgOgUgSQgXAkghAZgAhjATIAZASQASgpAEg0IgaAAQgIAlgNAmgAAJCMIgIgeIAqAAQAIAAAAgQIAAhPIhBAAIAAgeIBBAAIAAgjQAZgYATgYIhlAAIAAggICKAAIAAAgQgWAggbAaIAAAZIA8AAIAAAeIg8AAIAABZQAAAkgbAAg");
	this.shape_11.setTransform(10.2,42,0.715,0.715);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1_intro, new cjs.Rectangle(0,0,132.9,52.5), null);


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


(lib.circleR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AnBuDQF1AAEGEHQEIEIAAF0QAAF1kIEHQkGEIl1AAg");
	mask.setTransform(125,243.1);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,30);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleR, new cjs.Rectangle(80,153.1,80,180), null);


(lib.circleL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ai5J8QkIkHAAl1QAAl0EIkIQEGkHF1AAIAAcHQl1AAkGkIg");
	mask.setTransform(35,243);

	// Layer_1
	this.instance = new lib.bg();
	this.instance.parent = this;
	this.instance.setTransform(0,30);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.circleL, new cjs.Rectangle(0,153,80,180), null);


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
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(221));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_172 = new cjs.Graphics().p("AneHeQjGjGAAkYQAAkYDGjGQDHjGEXAAQDAAACaBdIAAAAICaAAIAACAQCxC/AAEIQAAEYjGDGQjHDHkYAAQkXAAjHjHg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(172).to({graphics:mask_graphics_172,x:81.2,y:235.4}).wait(49));

	// phone_ending
	this.instance_1 = new lib.phone_ending_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(82.3,352.9,0.622,0.622,0,0,0,79.5,101.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,x:81.5,y:325.2},0).wait(1).to({y:297},0).wait(1).to({y:268.7},0).wait(1).to({y:240.4},0).wait(42));

	// circle
	this.instance_2 = new lib.circle();
	this.instance_2.parent = this;
	this.instance_2.setTransform(80.9,234,0.124,0.124,0,0,0,73.3,72.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(172).to({_off:false},0).wait(1).to({regX:73.2,regY:73.2,scaleX:0.32,scaleY:0.32,x:80.8,y:234.3},0).wait(1).to({scaleX:0.52,scaleY:0.52,y:234.6},0).wait(1).to({scaleX:0.72,scaleY:0.72,y:234.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:80.7,y:235},0).wait(45));

	// title
	this.instance_3 = new lib.title();
	this.instance_3.parent = this;
	this.instance_3.setTransform(80.7,111.6,1.183,1.183,0,0,0,27.9,27.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(171).to({_off:false},0).wait(1).to({regX:27.7,regY:27.3,scaleX:1.16,scaleY:1.16,x:80.5,y:111.7,alpha:0.25},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.5},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.75},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:1},0).wait(46));

	// 最高享
	this.instance_4 = new lib.ending_cut_text_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(34.9,274.3,1.26,1.26,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(179).to({_off:false},0).wait(1).to({regX:-14.4,regY:64.9,x:23.7,y:355.9,alpha:0.125},0).wait(1).to({x:30.9,alpha:0.25},0).wait(1).to({x:38,alpha:0.375},0).wait(1).to({x:45.2,alpha:0.5},0).wait(1).to({x:52.3,alpha:0.625},0).wait(1).to({x:59.5,alpha:0.75},0).wait(1).to({x:66.6,alpha:0.875},0).wait(1).to({x:73.8,alpha:1},0).wait(34));

	// 再送
	this.instance_5 = new lib.ending_cut_text_2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.5,438.4,1.311,1.311,0,0,0,25.6,26.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(184).to({_off:false},0).wait(1).to({regX:34.5,regY:28.3,x:2.9,y:440.8,alpha:0.125},0).wait(1).to({x:10.6,alpha:0.25},0).wait(1).to({x:18.3,alpha:0.375},0).wait(1).to({x:26,alpha:0.5},0).wait(1).to({x:33.7,alpha:0.625},0).wait(1).to({x:41.4,alpha:0.75},0).wait(1).to({x:49,alpha:0.875},0).wait(1).to({x:56.7,alpha:1},0).wait(29));

	// cta
	this.instance_6 = new lib.cta();
	this.instance_6.parent = this;
	this.instance_6.setTransform(87,551.3,1.084,1.102,0,0,0,66.1,18.9);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(190).to({_off:false},0).wait(1).to({regX:60.1,regY:18.8,x:80.4,y:546.6,alpha:0.2},0).wait(1).to({x:80.3,y:541.9,alpha:0.4},0).wait(1).to({x:80.2,y:537.3,alpha:0.6},0).wait(1).to({x:80.1,y:532.7,alpha:0.8},0).wait(1).to({x:79.9,y:528,alpha:1},0).wait(26));

	// Kate Spade
	this.instance_7 = new lib.katespade_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(130.6,512.2,0.484,0.484,0,0,0,69.7,100.7);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(187).to({_off:false},0).wait(1).to({regX:69.5,regY:100.5,x:130.4,y:504.3,alpha:0.125},0).wait(1).to({y:496.6,alpha:0.25},0).wait(1).to({y:488.9,alpha:0.375},0).wait(1).to({y:481.2,alpha:0.5},0).wait(1).to({y:473.5,alpha:0.625},0).wait(1).to({y:465.7,alpha:0.75},0).wait(1).to({y:458,alpha:0.875},0).wait(1).to({y:450.3,alpha:1},0).wait(26));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(80,0,1,1,0,0,0,80,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:27.5,y:27.5},0).wait(165).to({scaleY:1.75,y:48},0).wait(1).to({scaleY:2.49,y:68.5},0).wait(1).to({scaleY:3.24,y:89},0).wait(1).to({scaleY:3.98,y:109.5},0).wait(1).to({scaleY:4.73,y:130},0).wait(1).to({scaleY:5.47,y:150.5},0).wait(50));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(80,600,1,1,0,0,0,80,30);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:2.5,y:572.5},0).wait(165).to({scaleY:1.74,y:552.1},0).wait(1).to({scaleY:2.49,y:531.6},0).wait(1).to({scaleY:3.23,y:511.2},0).wait(1).to({scaleY:3.97,y:490.8},0).wait(1).to({scaleY:4.71,y:470.4},0).wait(1).to({scaleY:5.46,y:449.9},0).wait(50));

	// text_1
	this.instance_10 = new lib.text_1_intro();
	this.instance_10.parent = this;
	this.instance_10.setTransform(81.3,270.8,1.124,1.124,0,0,0,66.5,26.9);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regY:26.2,scaleX:1.11,scaleY:1.11,y:270,alpha:0.143},0).wait(1).to({scaleX:1.09,scaleY:1.09,alpha:0.286},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.429},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:270.1,alpha:0.571},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.714},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.857},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(28).to({scaleX:1.01,scaleY:1.01,alpha:0.889},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:270,alpha:0.778},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:270.1,alpha:0.667},0).wait(1).to({scaleX:1.06,scaleY:1.06,alpha:0.556},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:270,alpha:0.444},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.333},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.222},0).wait(1).to({scaleX:1.11,scaleY:1.11,alpha:0.111},0).wait(1).to({scaleX:1.12,scaleY:1.12,alpha:0},0).wait(178));

	// Mask_1 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_4 = new cjs.Graphics().p("Ai5X2QkIkHAAl1QAAl1EIkIQEGkGF1AAIAAcHQl1AAkGkIg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AmMVuQjMk4BOltQBOltE5jLQE3jKFsBNIl2bgQlshNjKk5g");
	var mask_1_graphics_6 = new cjs.Graphics().p("Ao6TjQiHlbCYlVQCYlVFciGQFbiEFUCXIrbZsQlViYiElcg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Aq9RdQg7lwDbkuQDbkuFwg6QFvg6EuDbIwhWwQkujbg5lwg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AsOPgQATl0EVj6QEVj5F0ATQF0AUD5EVI04S0Qj6kVAUl0g");
	var mask_1_graphics_9 = new cjs.Graphics().p("AsmNyQBfloFDi6QFDi7FoBhQFnBgC7FDI4WOEQi7lDBilog");
	var mask_1_graphics_10 = new cjs.Graphics().p("AsJMZQColNFjhzQFihzFNCpQFLCpBzFjI6vIsQhzljCqlLg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Aq3LXQDqkiFzgnQFygnEiDrQEhDqAnFzI79C8QgnlzDrkhg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AuBSvQAnlzEijqQEhjrFyAnQFzAnDrEiQDqEhgnFzg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AtuObQBzljFMioQFMiqFiBzQFiB0CqFMQCpFMhzFig");
	var mask_1_graphics_14 = new cjs.Graphics().p("As9KZQC6lDFohfQFnhiFDC7QFDC6BhFpQBgFni7FDg");
	var mask_1_graphics_15 = new cjs.Graphics().p("ArOG1QD6kVF0gTQFzgUEVD5QEVD6AUF1QATFzj5EWg");
	var mask_1_graphics_16 = new cjs.Graphics().p("ApCD4QEtjbFvA7QFwA6DcEtQDbEug7FxQg6FvktDcg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AmgBrQFUiXFbCGQFcCFCYFUQCYFViGFdQiFFblVCYg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AjtAUQFshNE4DLQE5DKBOFtQBNFtjLE5QjLE4ltBOg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AgxgIQF0AAEHEGQEIEIAAF1QAAF1kIEIQkHEGl0ABg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_1_graphics_4,x:35,y:179}).wait(1).to({graphics:mask_1_graphics_5,x:44.3,y:178}).wait(1).to({graphics:mask_1_graphics_6,x:53.2,y:175.1}).wait(1).to({graphics:mask_1_graphics_7,x:61.4,y:170.4}).wait(1).to({graphics:mask_1_graphics_8,x:68.5,y:164.1}).wait(1).to({graphics:mask_1_graphics_9,x:73.9,y:156.5}).wait(1).to({graphics:mask_1_graphics_10,x:77.7,y:147.9}).wait(1).to({graphics:mask_1_graphics_11,x:79.8,y:138.7}).wait(1).to({graphics:mask_1_graphics_12,x:80.3,y:138.7}).wait(1).to({graphics:mask_1_graphics_13,x:82.4,y:147.9}).wait(1).to({graphics:mask_1_graphics_14,x:85.1,y:156.5}).wait(1).to({graphics:mask_1_graphics_15,x:85,y:164.2}).wait(1).to({graphics:mask_1_graphics_16,x:85.1,y:170.5}).wait(1).to({graphics:mask_1_graphics_17,x:85.2,y:175.2}).wait(1).to({graphics:mask_1_graphics_18,x:85.1,y:178.1}).wait(1).to({graphics:mask_1_graphics_19,x:85,y:179.1}).wait(1).to({graphics:null,x:0,y:0}).wait(201));

	// circleR
	this.instance_11 = new lib.circleR();
	this.instance_11.parent = this;
	this.instance_11.setTransform(120,268.1,1,1,0,0,0,120,243.1);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({_off:true},30).wait(187));

	// Mask_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_20 = new cjs.Graphics().p("AgxgJQF0AAEHEGQEIEIAAF1QAAF1kIEHQkHEIl0AAg");
	var mask_2_graphics_21 = new cjs.Graphics().p("AkJbjIGt7UQFrBZDAE/QDBE/hZFqQhZFqlADBQjaCEjtAAQhuAAhygcg");
	var mask_2_graphics_22 = new cjs.Graphics().p("AnUaWIND46QFKCtBvFjQBvFlitFKQiuFKlkBuQiLAsiGAAQjSAAjJhpg");
	var mask_2_graphics_23 = new cjs.Graphics().p("AqGYcISp1EQEXD4AWFzQAXF1j3EXQj4EXl0AWQgfACgfAAQlNAAj/jig");
	var mask_2_graphics_24 = new cjs.Graphics().p("AjUbuQlvhCjTkzIXIv/QDUEzhDFuQhDFvkzDUQjpChkKAAQhVAAhZgRg");
	var mask_2_graphics_25 = new cjs.Graphics().p("AmPatQlUiYiEldIaSp+QCEFciZFUQiZFUldCEQihA+ieAAQi5AAi3hTg");
	var mask_2_graphics_26 = new cjs.Graphics().p("AotY+QkmjlgtlzIb6jZQAtFzjmEkQjmEmlyAtQg9AIg5AAQkrAAj1jBg");
	var mask_2_graphics_27 = new cjs.Graphics().p("Ahob3QlygtjlklQjnklAtlzIb6DZQgtFzklDlQj2DBkrAAQg5AAg9gIg");
	var mask_2_graphics_28 = new cjs.Graphics().p("AkgbCQlciEiZlUQiZlTCEldIaSJ+QiEFdlTCYQi3BTi5AAQifAAiig+g");
	var mask_2_graphics_29 = new cjs.Graphics().p("AmuZeQkzjUhCluQhElvDUkzIXIP/QjUEzluBDQhYAQhVAAQkLAAjpihg");
	var mask_2_graphics_30 = new cjs.Graphics().p("ABib9Ql0gXj3kXQj4kXAYl0QAVl0EYj4ISoVEQkADjlNAAQgeAAgfgCg");
	var mask_2_graphics_31 = new cjs.Graphics().p("AgYbVQllhvitlLQitlKBvlkQBvlkFKitINDY6QjJBqjTAAQiHAAiJgrg");
	var mask_2_graphics_32 = new cjs.Graphics().p("Ah5Z8Qk/jBhalqQhZlrDCk+QDAk/FphaIGvbUQhzAchuAAQjuAAjZiDg");
	var mask_2_graphics_33 = new cjs.Graphics().p("Ai5X3QkIkIAAl1QAAl1EIkHQEGkHF1AAIAAcHQl1AAkGkHg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_2_graphics_20,x:85,y:179}).wait(1).to({graphics:mask_2_graphics_21,x:85.1,y:179.1}).wait(1).to({graphics:mask_2_graphics_22,x:85.1,y:179.1}).wait(1).to({graphics:mask_2_graphics_23,x:85,y:179}).wait(1).to({graphics:mask_2_graphics_24,x:85.1,y:179.1}).wait(1).to({graphics:mask_2_graphics_25,x:83.1,y:179.2}).wait(1).to({graphics:mask_2_graphics_26,x:80.4,y:179.1}).wait(1).to({graphics:mask_2_graphics_27,x:79.6,y:179.1}).wait(1).to({graphics:mask_2_graphics_28,x:76.9,y:179.2}).wait(1).to({graphics:mask_2_graphics_29,x:71.9,y:179.1}).wait(1).to({graphics:mask_2_graphics_30,x:64.8,y:179.1}).wait(1).to({graphics:mask_2_graphics_31,x:55.7,y:179.2}).wait(1).to({graphics:mask_2_graphics_32,x:45.6,y:179.1}).wait(1).to({graphics:mask_2_graphics_33,x:34.9,y:179}).wait(188));

	// circleL
	this.instance_12 = new lib.circleL();
	this.instance_12.parent = this;
	this.instance_12.setTransform(40,295,1,1,0,0,0,40,270);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(20).to({_off:false},0).to({_off:true},14).wait(187));

	// light
	this.instance_13 = new lib.light();
	this.instance_13.parent = this;
	this.instance_13.setTransform(84.1,300.5,1.053,1.053,0,0,0,58.5,119.4);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(63).to({_off:false},0).wait(1).to({regX:58.4,regY:119.5,x:83.9,y:300.6,alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(155));

	// text2_2
	this.instance_14 = new lib.text_2_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(146,344.8,0.936,0.936,0,0,0,59.1,13.5);
	this.instance_14.alpha = 0;
	this.instance_14.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(83).to({_off:false},0).wait(1).to({regY:12.6,x:136.2,y:343.9,alpha:0.2},0).wait(1).to({x:126.3,alpha:0.4},0).wait(1).to({x:116.5,alpha:0.6},0).wait(1).to({x:106.7,alpha:0.8},0).wait(1).to({x:96.9,alpha:1},0).wait(1).to({x:96.3},0).wait(1).to({x:95.8},0).wait(1).to({x:95.3},0).wait(1).to({x:94.7},0).wait(1).to({x:94.2},0).wait(1).to({x:93.7},0).wait(1).to({x:93.1},0).wait(1).to({x:92.6},0).wait(1).to({x:92.1},0).wait(1).to({x:91.5},0).wait(1).to({x:91},0).wait(1).to({x:90.5},0).wait(1).to({x:89.9},0).wait(1).to({x:89.4},0).wait(1).to({x:88.9},0).wait(1).to({x:88.3},0).wait(1).to({x:87.8},0).wait(1).to({x:87.3},0).wait(1).to({x:86.7},0).wait(1).to({x:86.2},0).wait(1).to({x:85.7},0).wait(1).to({x:85.1},0).wait(1).to({x:84.6},0).wait(1).to({x:84.1},0).wait(1).to({x:83.6},0).wait(1).to({scaleX:1,scaleY:1,y:343.8,alpha:0.8},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,y:343.7,alpha:0.4},0).wait(1).to({scaleX:1.2,scaleY:1.2,alpha:0.2},0).wait(1).to({scaleX:1.26,scaleY:1.26,y:343.6,alpha:0},0).to({_off:true},1).wait(102));

	// text_2
	this.instance_15 = new lib.text_2();
	this.instance_15.parent = this;
	this.instance_15.setTransform(26.8,310,0.943,0.943,0,0,0,43.5,13.2);
	this.instance_15.alpha = 0;
	this.instance_15.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,10);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(78).to({_off:false},0).wait(1).to({regX:45.4,regY:12.9,x:36.2,y:309.6,alpha:0.2},0).wait(1).to({x:43.7,alpha:0.4},0).wait(1).to({x:51.2,alpha:0.6},0).wait(1).to({x:58.8,alpha:0.8},0).wait(1).to({x:66.3,alpha:1},0).wait(1).to({x:66.9},0).wait(1).to({x:67.5},0).wait(1).to({x:68},0).wait(1).to({x:68.6},0).wait(1).to({x:69.2},0).wait(1).to({x:69.7},0).wait(1).to({x:70.3},0).wait(1).to({x:70.9},0).wait(1).to({x:71.4},0).wait(1).to({x:72},0).wait(1).to({x:72.6},0).wait(1).to({x:73.1},0).wait(1).to({x:73.7},0).wait(1).to({x:74.3},0).wait(1).to({x:74.8},0).wait(1).to({x:75.4},0).wait(1).to({x:76},0).wait(1).to({x:76.5},0).wait(1).to({x:77.1},0).wait(1).to({x:77.7},0).wait(1).to({x:78.2},0).wait(1).to({x:78.8},0).wait(1).to({x:79.4},0).wait(1).to({x:79.9},0).wait(1).to({x:80.5},0).wait(1).to({x:81.1},0).wait(1).to({x:81.6},0).wait(1).to({x:82.2},0).wait(1).to({x:82.8},0).wait(1).to({x:83.3},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:83.5,alpha:0.8},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:83.6,alpha:0.6},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:83.7,alpha:0.4},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:83.9,alpha:0.2},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:84,alpha:0},0).to({_off:true},1).wait(102));

	// phone_clear
	this.instance_16 = new lib.phone_clear();
	this.instance_16.parent = this;
	this.instance_16.setTransform(83.8,300,0.227,0.227,0,0,0,287.8,609.8);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(63).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:83.5,y:299.5},0).wait(45).to({scaleX:0.23,scaleY:0.23,alpha:0.9},0).wait(1).to({scaleX:0.23,scaleY:0.23,alpha:0.8},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.7},0).wait(1).to({scaleX:0.24,scaleY:0.24,alpha:0.6},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.5},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.4},0).wait(1).to({scaleX:0.25,scaleY:0.25,alpha:0.3},0).wait(1).to({scaleX:0.26,scaleY:0.26,alpha:0.2},0).wait(1).to({scaleX:0.26,scaleY:0.26,x:83.4,alpha:0.1},0).wait(1).to({scaleX:0.27,scaleY:0.27,alpha:0},0).to({_off:true},1).wait(102));

	// text_3
	this.instance_17 = new lib.text_3();
	this.instance_17.parent = this;
	this.instance_17.setTransform(77.6,304.2,0.856,0.84,0,0,0,112.9,13.1);
	this.instance_17.alpha = 0;
	this.instance_17.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(137).to({_off:false},0).wait(1).to({regX:117.8,regY:36,scaleX:0.84,scaleY:0.82,x:81.7,y:323,alpha:0.167},0).wait(1).to({scaleX:0.82,scaleY:0.81,x:81.6,y:322.6,alpha:0.333},0).wait(1).to({scaleX:0.8,scaleY:0.79,x:81.5,y:322.3,alpha:0.5},0).wait(1).to({scaleX:0.79,scaleY:0.77,x:81.4,y:321.8,alpha:0.667},0).wait(1).to({scaleX:0.77,scaleY:0.75,y:321.5,alpha:0.833},0).wait(1).to({scaleX:0.75,scaleY:0.74,x:81.3,y:321.1,alpha:1},0).wait(32).to({alpha:0.8},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.2},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(41));

	// transition
	this.instance_18 = new lib.transition();
	this.instance_18.parent = this;
	this.instance_18.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(124).to({_off:false},0).wait(1).to({regX:80,regY:300,x:80,y:300,alpha:0.075},0).wait(1).to({alpha:0.15},0).wait(1).to({alpha:0.225},0).wait(1).to({alpha:0.3},0).wait(1).to({alpha:0.375},0).wait(1).to({alpha:0.45},0).wait(91));

	// bg_clear
	this.instance_19 = new lib.bg_clear_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(81.4,300.8,1,1,0,0,0,81.4,245.8);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(111).to({_off:false},0).wait(1).to({regX:80,regY:245,x:80,y:300,alpha:0.143},0).wait(1).to({alpha:0.286},0).wait(1).to({alpha:0.429},0).wait(1).to({alpha:0.571},0).wait(1).to({alpha:0.714},0).wait(1).to({alpha:0.857},0).wait(1).to({alpha:1},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.01,scaleY:1.01},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:299.9},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:79.9},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:300},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.08,scaleY:1.08,y:299.9},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:79.8},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15,y:299.8},0).wait(1).to({scaleX:1.16,scaleY:1.16,y:299.9},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.16,scaleY:1.16},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).wait(1).to({scaleX:1.17,scaleY:1.17,y:299.8},0).wait(56));

	// phone
	this.instance_20 = new lib.phone_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(15,545,0.227,0.227);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(50).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:80.3,y:650.9,alpha:0.083},0).wait(1).to({x:80.6,y:618.9,alpha:0.167},0).wait(1).to({x:80.9,y:587,alpha:0.25},0).wait(1).to({x:81.2,y:555,alpha:0.333},0).wait(1).to({x:81.5,y:523.1,alpha:0.417},0).wait(1).to({x:81.8,y:491.1,alpha:0.5},0).wait(1).to({x:82.1,y:459.2,alpha:0.583},0).wait(1).to({x:82.4,y:427.2,alpha:0.667},0).wait(1).to({x:82.7,y:395.3,alpha:0.75},0).wait(1).to({x:83,y:363.3,alpha:0.833},0).wait(1).to({x:83.3,y:331.4,alpha:0.917},0).wait(1).to({x:83.6,y:299.4,alpha:1},0).to({_off:true},1).wait(158));

	// Mask_circle (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_34 = new cjs.Graphics().p("Ap8X2QkHkHAAl1QAAl1EHkIQEIkGF0AAQF1AAEHEGQEIEIAAF1QAAF1kIEHQkHEIl1AAQl0AAkIkIg");
	var mask_3_graphics_35 = new cjs.Graphics().p("ArcYSQkvkvAAmtQAAmtEvkwQEwkuGsAAQGtAAEvEuQEwEwAAGtQAAGtkwEvQkvEwmtAAQmsAAkwkwg");
	var mask_3_graphics_36 = new cjs.Graphics().p("As8YuQlWlWAAnmQAAnlFWlXQFYlWHkAAQHlAAFXFWQFXFXAAHlQAAHmlXFWQlXFYnlAAQnkAAlYlYg");
	var mask_3_graphics_37 = new cjs.Graphics().p("AucZKQl+l+AAoeQAAodF+l/QF/l+IdAAQIeAAF+F+QF/F/AAIdQAAIel/F+Ql+GAoeAAQodAAl/mAg");
	var mask_3_graphics_38 = new cjs.Graphics().p("Av8ZmQmmmlAApWQAApWGmmmQGnmmJVAAQJWAAGmGmQGnGmAAJWQAAJWmnGlQmmGnpWAAQpVAAmnmng");
	var mask_3_graphics_39 = new cjs.Graphics().p("AxcaCQnNnNAAqOQAAqNHNnPQHPnOKNAAQKOAAHNHOQHPHPAAKNQAAKOnPHNQnNHPqOAAQqNAAnPnPg");
	var mask_3_graphics_40 = new cjs.Graphics().p("Ay8aeQn1n1AArGQAArFH1n3QH3n1LFAAQLGAAH1H1QH3H3AALFQAALGn3H1Qn1H3rGAAQrFAAn3n3g");
	var mask_3_graphics_41 = new cjs.Graphics().p("A0ca6QodocAAr/QAAr9IdofQIeodL+AAQL/AAIcIdQIfIfAAL9QAAL/ofIcQocIfr/AAQr+AAoeofg");
	var mask_3_graphics_42 = new cjs.Graphics().p("A18bWQpEpEAAs3QAAs2JEpGQJGpEM2AAQM3AAJEJEQJGJGAAM2QAAM3pGJEQpEJHs3AAQs2AApGpHg");
	var mask_3_graphics_43 = new cjs.Graphics().p("A3cbyQpsprAAtwQAAtuJspuQJupsNuAAQNvAAJsJsQJuJuAANuQAANwpuJrQpsJvtvAAQtuAApupvg");
	var mask_3_graphics_44 = new cjs.Graphics().p("A48cOQqUqTAAunQAAunKUqWQKWqTOmAAQOnAAKUKTQKWKWAAOnQAAOnqWKTQqUKWunAAQumAAqWqWg");
	var mask_3_graphics_45 = new cjs.Graphics().p("A6ccqQq7q7AAvfQAAvfK7q+QK9q7PfAAQPgAAK7K7QK9K+AAPfQAAPfq9K7Qq7K+vgAAQvfAAq9q+g");
	var mask_3_graphics_46 = new cjs.Graphics().p("A78dGQrjriAAwYQAAwXLjrlQLlrjQXAAQQYAALjLjQLlLlAAQXQAAQYrlLiQrjLmwYAAQwXAArlrmg");
	var mask_3_graphics_47 = new cjs.Graphics().p("A9cdjQsLsLAAxQQAAxPMLsNQMNsLRPAAQRQAAMKMLQMOMNAARPQAARQsOMLQsKMNxQAAQxPAAsNsNg");
	var mask_3_graphics_48 = new cjs.Graphics().p("A+8e6QsysyAAyIQAAyHMys1QM1sySHAAQSIAAMyMyQM1M1AASHQAASIs1MyQsyM1yIAAQyHAAs1s1g");
	var mask_3_graphics_49 = new cjs.Graphics().p("EggcAgaQtataAAzAQAAy/NatdQNdtaS/AAQTAAANaNaQNdNdAAS/QAATAtdNaQtaNdzAAAQy/AAtdtdg");
	var mask_3_graphics_50 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_51 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_52 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_53 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_55 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_56 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_57 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_58 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_59 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_60 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_61 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_62 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_63 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_64 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_65 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_66 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_67 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_68 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_69 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_70 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_71 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_72 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_73 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_74 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_75 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_76 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_77 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_78 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_79 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_80 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_81 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_82 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_83 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_84 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_85 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_86 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_87 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_88 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_89 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_90 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_91 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_92 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_93 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_94 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_95 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_96 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_97 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_98 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_99 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_100 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_101 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_102 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_103 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_104 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_105 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_106 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_107 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_108 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_109 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_110 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_111 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_112 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_113 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_114 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_115 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_116 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_117 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_118 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_119 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_120 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_121 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_122 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_123 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_124 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_125 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_126 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_127 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_128 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_129 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_130 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_131 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_132 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_133 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_134 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_135 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_136 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_137 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_138 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_139 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_140 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_141 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_142 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_143 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_144 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_145 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_146 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_147 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_148 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_149 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_150 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_151 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_152 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_153 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_154 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_155 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_156 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_157 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_158 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_159 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_160 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_161 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_162 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_163 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_164 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_165 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_166 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_167 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_168 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_169 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_170 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_171 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_172 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_173 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_174 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_175 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_176 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_177 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_178 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_179 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_180 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_181 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_182 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_183 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_184 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_185 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_186 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_187 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_188 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_189 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_190 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_191 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_192 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_193 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_194 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_195 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_196 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_197 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_198 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_199 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_200 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_201 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_202 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_203 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_204 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_205 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_206 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_207 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_208 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_209 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_210 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_211 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_212 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_213 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_214 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_215 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_216 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_217 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_218 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_219 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");
	var mask_3_graphics_220 = new cjs.Graphics().p("Egh8Ah6QuCuBAAz5QAAz4OCuEQOEuCT4AAQT5AAOBOCQOFOEAAT4QAAT5uFOBQuBOFz5AAQz4AAuEuFg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_3_graphics_34,x:80,y:179}).wait(1).to({graphics:mask_3_graphics_35,x:80,y:185.8}).wait(1).to({graphics:mask_3_graphics_36,x:80,y:192.6}).wait(1).to({graphics:mask_3_graphics_37,x:80,y:199.4}).wait(1).to({graphics:mask_3_graphics_38,x:80,y:206.1}).wait(1).to({graphics:mask_3_graphics_39,x:80,y:212.9}).wait(1).to({graphics:mask_3_graphics_40,x:80,y:219.7}).wait(1).to({graphics:mask_3_graphics_41,x:80,y:226.5}).wait(1).to({graphics:mask_3_graphics_42,x:80,y:233.3}).wait(1).to({graphics:mask_3_graphics_43,x:80,y:240.1}).wait(1).to({graphics:mask_3_graphics_44,x:80,y:246.8}).wait(1).to({graphics:mask_3_graphics_45,x:80,y:253.6}).wait(1).to({graphics:mask_3_graphics_46,x:80,y:260.4}).wait(1).to({graphics:mask_3_graphics_47,x:80,y:267.2}).wait(1).to({graphics:mask_3_graphics_48,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_49,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_50,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_51,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_52,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_53,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_54,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_55,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_56,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_57,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_58,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_59,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_60,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_61,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_62,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_63,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_64,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_65,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_66,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_67,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_68,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_69,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_70,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_71,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_72,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_73,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_74,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_75,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_76,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_77,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_78,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_79,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_80,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_81,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_82,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_83,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_84,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_85,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_86,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_87,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_88,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_89,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_90,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_91,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_92,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_93,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_94,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_95,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_96,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_97,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_98,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_99,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_100,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_101,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_102,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_103,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_104,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_105,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_106,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_107,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_108,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_109,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_110,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_111,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_112,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_113,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_114,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_115,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_116,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_117,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_118,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_119,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_120,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_121,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_122,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_123,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_124,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_125,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_126,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_127,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_128,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_129,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_130,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_131,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_132,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_133,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_134,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_135,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_136,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_137,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_138,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_139,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_140,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_141,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_142,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_143,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_144,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_145,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_146,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_147,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_148,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_149,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_150,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_151,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_152,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_153,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_154,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_155,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_156,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_157,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_158,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_159,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_160,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_161,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_162,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_163,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_164,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_165,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_166,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_167,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_168,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_169,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_170,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_171,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_172,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_173,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_174,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_175,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_176,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_177,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_178,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_179,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_180,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_181,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_182,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_183,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_184,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_185,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_186,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_187,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_188,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_189,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_190,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_191,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_192,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_193,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_194,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_195,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_196,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_197,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_198,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_199,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_200,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_201,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_202,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_203,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_204,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_205,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_206,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_207,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_208,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_209,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_210,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_211,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_212,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_213,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_214,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_215,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_216,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_217,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_218,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_219,x:80,y:268}).wait(1).to({graphics:mask_3_graphics_220,x:80,y:268}).wait(1));

	// bg
	this.instance_21 = new lib.bg();
	this.instance_21.parent = this;
	this.instance_21.setTransform(0,55);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(34).to({_off:false},0).wait(187));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(221));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,300,160,600);
// library properties:
lib.properties = {
	id: '9FA0091970324CFF8975F2E17058979F',
	width: 160,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1525961193917", id:"bg"},
		{src:"images/bg_clear.jpg?1525961193917", id:"bg_clear"},
		{src:"images/katespade.jpg?1525961193917", id:"katespade"},
		{src:"images/logo.jpg?1525961193917", id:"logo"},
		{src:"images/phone.jpg?1525961193917", id:"phone"},
		{src:"images/phone_clear_pic.jpg?1525961193917", id:"phone_clear_pic"},
		{src:"images/phone_ending.jpg?1525961193917", id:"phone_ending"}
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