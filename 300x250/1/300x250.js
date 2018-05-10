(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.bg_1 = function() {
	this.initialize(img.bg_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.bg_ending = function() {
	this.initialize(img.bg_ending);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,200);


(lib.hand = function() {
	this.initialize(img.hand);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.katespade = function() {
	this.initialize(img.katespade);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,201);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,50);


(lib.phone = function() {
	this.initialize(img.phone);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,574,1219);


(lib.phone_ending = function() {
	this.initialize(img.phone_ending);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,394,500);


(lib.slowmo_1 = function() {
	this.initialize(img.slowmo_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,197);


(lib.slowmo_2 = function() {
	this.initialize(img.slowmo_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,197);


(lib.slowmo_3 = function() {
	this.initialize(img.slowmo_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,197);


(lib.slowmo_4 = function() {
	this.initialize(img.slowmo_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,116,197);// helper functions:

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


(lib.text_ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAABQgIAagHAPQggA3hKApIgVgbQBEgjAcgwQALgSAGgXIhmAAIAAggIBtAAQAFgeACgfIhsAAIAAgfID3AAIAAAfIhrAAQgCAcgFAhIB7AAIAAAgIhtAAQAhBQBWAsIgUAbQhZgxgihYg");
	this.shape.setTransform(238.9,13.2,0.851,0.851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgDB7IgTAOQgJgUgWgfIAZgQQASAXAKASQAZgnAAg7IAAiUIBxAAIAADyQAAAggggBIggAAIgJgfIAfACQAJAAAAgNIAAg2IgxAAQgIA+geAogAA5ANIAwAAIAAgsIgwAAgAA5g8IAwAAIAAgsIgwAAgAiJB6QAXgVAQgeIAaANQgRAigWAXgAiFBEIAAgdIATAAIAAh5IgQAAIAAgeIAQAAIAAgfIAfAAIAAAfIAzAAIAAgeIAfAAIAAAeIAOAAIAAAeIgOAAIAAB5IAQAAIAAAdgAhTAnIAzAAIAAgWIgzAAgAhTgKIAzAAIAAgWIgzAAgAhTg8IAzAAIAAgWIgzAAg");
	this.shape_1.setTransform(210,12.7,0.851,0.851);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah+CIIAAgdIB3AAIAAgWIhSAAIAAgbIBSAAIAAgXIhNAAQgQAggQATIgVgZQAYgcASgwIAeAGIgHAQIBBAAIAAgTIAgAAIAAATIBjAAIAAAcIhjAAIAAAXIBYAAIAAAbIhYAAIAAAWIBxAAIAAAdgAhkgUIAAhzIDOAAIAABzgAhDgvICNAAIAAgSIiNAAgAhDhaICNAAIAAgSIiNAAg");
	this.shape_2.setTransform(182.4,12.6,0.851,0.851);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiPB5QAVgoAUgIQAIgVAEgXIgrAAIAAgYQAWgYANgUIgoAAIAAgdIBMAAIAAAZQgNAVgUAYIAkAAIAAAVQgGAggIAYIAHAFQAQAOALAEQAOAGAYAAIA6ABQAbAAA8gCIgIAdIiKgBQgeAAgRgHQgUgHgPgPQgEgDgEAAQgIAAgTAogABMBiIgHgbIAZABQAJAAAAgIIAAhRIh6AAIAABvIgeAAIAAiKIAUAAIAAhcICOAAIAABcIAVAAIAABzQAAAbggAAgAAzgsIAfAAIAAgVIgfAAgAAAgsIAZAAIAAgtIA5AAIAAgTIhSAAgAgBBAIAAhGIBUAAIAABGgAAZAnIAgAAIAAgVIggAAgAiCh6IAVgUQAdAYARAUIgUAVQgTgWgcgXg");
	this.shape_3.setTransform(153.8,12.5,0.851,0.851);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhIByQBIgjABhLIAAgVIgiAAIAAgfICmAAIAAAfIgoAAIAABtQAAAKAHAAIAEAAQAEAAACgDQAEgGAAgjIAeAKQgEAwgGAIQgGAHgRABIgWAAQgOAAgIgJQgHgJgBgPIAAh0IgcAAIAAAVQAABZhQAqgAiPBFIAngMIAAhCIgeAAIAAgeIAeAAIAAg8IgjAAIAAgeIBnAAIAAAeIgjAAIAAA8IAdAAIAAAeIgdAAIAAA3IAjgOIAAAhQgsAUg1ARgAgXhnIAAgfICSAAIAAAfg");
	this.shape_4.setTransform(125.5,13.1,0.851,0.851);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuB3QglAPgzAJIgNgbQArgFAagJQgXgQgRgTIgQAAIAAgZICmAAIAAAVQgUAXgbARQAjAKAhAFIgRAZQgtgJglgPgAAsBZQAWgJAQgNIhMAAQAQANAWAJgAhkCOIAAkcIAdAAIAAA3IAUgHQAJAaAGAbIgXAGQgEgVgIgZIAADfgAgtAdIAAhBICyAAIAABBgABQAHIAaAAIAAgWIgaAAgAAeAHIAaAAIAAgWIgaAAgAgTAHIAZAAIAAgWIgZAAgAiQAAQAJglACguIAXACQAAAwgJAngABdgvIAAhAIhhAAIAABAIgbAAIAAhaICXAAIAABagAAHgvIAAgVIBKAAIAAAVgAAHhOIAAgWIBKAAIAAAWg");
	this.shape_5.setTransform(97.2,12.6,0.851,0.851);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAvB3QgmAPgzAJIgNgbQAsgGAZgIQgXgQgRgTIgPAAIAAgZIClAAIAAAVQgTAXgbARQAiAKAhAFIgRAZQgugJgjgPgAAsBZQAWgJAQgNIhMAAQAPAMAXAKgAhkCOIAAkcIAdAAIAAA3IAUgHQAJAYAGAdIgXAGQgEgXgIgXIAADfgAgtAdIAAhBICzAAIAABBgABQAHIAaAAIAAgWIgaAAgAAfAHIAZAAIAAgWIgZAAgAgTAHIAZAAIAAgWIgZAAgAiQAAQAKgoABgrIAYACQgBAtgJAqgABdgvIAAhAIhhAAIAABAIgbAAIAAhaICXAAIAABagAAHgvIAAgVIBKAAIAAAVgAAHhOIAAgWIBKAAIAAAWg");
	this.shape_6.setTransform(68.8,12.6,0.851,0.851);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhqCQIAAifIgaAdIgLgiQAwg0AXhIIAeAPQgMAkgTAgIAADNgAgJCOIgHgeIAjACQALAAAAgMIAAidIAfAAIAAClQAAAgggAAgABNgJIAdgJQAXA5APA5IgdANQgRhEgVgygAg/BdQAZgsAShAIAcAIQgPA+gZAxgAg/gfQAjg2ANg4IAdAGIgIAcICCAAIAAAVQgIAcgKAcIgfgJQAHgNAIgYIhqAAQgPAkgRAag");
	this.shape_7.setTransform(40.2,12.4,0.851,0.851);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgQB8QAIgFAAgIIAAgMQgOAHgSAHIgOgXIAAAxIgdAAIAAgMIgXAAIAAANIgeAAIAAhuIBSAAIAAA6QApgLAXgQIgzAAIAAgXIAnAAIAAgLIgcAAIAAgVIAcAAIAAgLIgiAAIAAgWIAiAAIAAgLIgeAAIAAgxIBGAAIAAAxIgMAAIAAALIAoAAIAAgLIgNAAIAAgxIBHAAIAAAxIgeAAIAAALIAlAAIAAAWIglAAIAAALIAdAAIAAAVIgdAAIAAALIAqAAIAAAXIheAAQgLANgNAJIAAAeQAYgJAOgHIAGAZQgiAOgiAKgAhqBjIAXAAIAAgpIgXAAgAAaAmIAoAAIAAgLIgoAAgAAaAGIAoAAIAAgLIgoAAgABNg4IAWAAIAAgOIgWAAgAgHg4IAVAAIAAgOIgVAAgAAuBIIAVgKQAKAPALAKQANgIAMgQIAUARQgMAOgOAJQAPAKAWAIIgVAYQgzgYgagxgAiFALIAAgaIBMAAIAAAagAiFggIAAgbIBMAAIAAAbgAiPhOIAAgdIAiAAIgLgbIAfgIQAIAYADALIAcAAIAAAdgAgqhhIAAgaIBHAAIgIgQIAhgGIAHAWIBJAAIAAAag");
	this.shape_8.setTransform(12.2,12.4,0.851,0.851);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_ending, new cjs.Rectangle(0,0,251.1,24.9), null);


(lib.text_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwB/IA2hWQgGACgIAAQghAAgXgXQgYgXAAglQAAgmAagYQAZgYAlAAQAnAAAZAZQAZAYAAAkQAAAkgTAcIhBBogAgdhHQgNANAAASQAAASANANQANAMARAAQASAAAMgMQANgNAAgSQAAgSgNgNQgMgOgSAAQgRAAgNAOg");
	this.shape.setTransform(23.3,11.2,0.81,0.81);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhbBUIAqgiQAVAiAhAAQASAAAKgKQALgKAAgOQAAgOgQgIQgJgFgagJQgjgLgOgJQgWgTAAgfQgBgeAYgUQAYgWAiAAQAdAAAVALQARAIARASIgmAdQgRgYgdAAQgPAAgKAJQgIAHgBAMQAAAOAQAIQAIAFAbAJQAhALAPALQAYATAAAfQAAAggXAWQgYAZgoAAQg4gBgogsg");
	this.shape_1.setTransform(7.5,11.3,0.81,0.81);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATByQBDgcAihDIAZATQgmBJhLAggAhaCNIgGgcIASACQAHAAAAgIIAAglIg0AAIAAhAICFAAIAABAIgyAAIAAAtQAAAagcAAgAhdAxIBLAAIAAgVIhLAAgAiQB7QAQgVALgaIAYALQgNAggPAUgAgcBZIAWgNQAQAaAIAPIgWAPQgIgRgQgagAAeAGQA1gYAjgrIAUAXQgnArg4AcgAiNgGIAAgYIBFAAIgDgPIgyAAIAAhYICJAAIAABYIg5AAIADAPIBEAAIAAAYgAhghBIBQAAIAAgOIhQAAgAhghiIBQAAIAAgNIhQAAgAAYhTQA1gXAhgkIAUAXQgnAmg2AZg");
	this.shape_2.setTransform(180.6,11.9,0.81,0.81);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABqCPIAAgVIg8AAIAAgaIALAAIAAhMIgGAAIAAgYIBYAAIAAAYIgIAAIAABMIAMAAIAAAaIgMAAIAAAVgABSBgIAYAAIAAgMIgYAAgABSBAIAYAAIAAgMIgYAAgABSAgIAYAAIAAgMIgYAAgAAMCPIAAgUQgcAEggADIgGgXIASgCIAAhVIgJAAIAAgYIBaAAIAAAYIgHAAIAAB7gAgLBmIAXgDIAAgNIgXAAgAgLBCIAXAAIAAgNIgXAAgAgLAhIAXAAIAAgNIgXAAgAiACMIgHgeIAUACQAJAAgBgKIAAhJIgbAKIgIgfQASgEARgFIAAg/IgdAAIAAgfIAdAAIAAgvIAfAAIAAAvIAbAAIAAAfIgbAAIAAAzIAZgNIAAAfIgZAMIAABcQAAAfgcAAgABSgIIAAgLIh7AAIAAgYIAYAAIAAhDIgTAAIAAgYICnAAIAAAYIgUAAIAABDIAYAAIAAAYIgYAAIAAALgAAKgrIBIAAIAAgKIhIAAgAAKhIIBIAAIAAgKIhIAAgAAKhkIBIAAIAAgKIhIAAg");
	this.shape_3.setTransform(153.5,11.9,0.81,0.81);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMCRIAAjXIgJAAQgVAvgZAdIgXgbQAmgsAbhQIAgAIIgNAkIB9AAIAAAfIhiAAIAAAqIBWAAIAAAeIhWAAIAAArIBWAAIAAAgIhWAAIAABEgAhoCRIAAihIgbAcIgLghQAwg0AWhGIAfAOQgKAfgUAkIAADPg");
	this.shape_4.setTransform(126.2,11.8,0.81,0.81);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAFB/Qg5AIhSAFIgEgcIA/gFIAAgTIg1AAIAAgaIA1AAIAAgPIg2AAIAAhjIA2AAIAAgNIg8AAIAAgaIA8AAIAAgPQgYACgaAAIgJgZQBMAAA4gNIANAYQgWAHgiADIAAARIA6AAIAAAaIg6AAIAAANIA1AAIAABjIg1AAIAAAPIA0AAIAAAaIg0AAIAAARIA0gGIAAAOQAog1ABhqIAAgKIgbAAIAAgeIAbAAIAAg4IAeAAIAAA4IA9AAQAACVgEAsQgFAiglAAIgegBIgIgcIAhABQAOgBADgTQADgUABiBIgfAAIAAAKQgBCAg3A8gAgvAYIAbAAIAAgRIgbAAgAhkAYIAbAAIAAgRIgbAAgAgvgMIAbAAIAAgRIgbAAgAhkgMIAbAAIAAgRIgbAAg");
	this.shape_5.setTransform(99.1,11.9,0.81,0.81);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAuB3QgmAQgyAIIgNgbQAngEAegKQgYgRgQgSIgQAAIAAgZICmAAIAAAVQgUAXgbARQAdAIAnAHIgRAZQgtgIglgQgAAsBaQAUgKASgNIhMAAQAQAMAWALgAhkCOIAAkdIAdAAIAAA4IAUgGQAJAWAGAeIgXAGQgDgRgJgdIAADfgAgtAdIAAhBICzAAIAABBgABQAHIAaAAIAAgWIgaAAgAAfAHIAZAAIAAgWIgZAAgAgTAHIAZAAIAAgWIgZAAgAiQAAQAKgoABgqIAYABQgCAygIAmgABdguIAAhBIhhAAIAABAIgbAAIAAhZICXAAIAABagAAHgvIAAgVIBKAAIAAAVgAAHhOIAAgWIBKAAIAAAWg");
	this.shape_6.setTransform(72.6,12,0.81,0.81);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiOB7QATg2ACg/IAbADQAAAbgDATQAIAOALAKIAAhYIg2AAIAAgdIAvAAIAAglIgsAAIAAgdIAsAAIAAgnIAfAAIAAAnIAsAAIAAAdIgsAAIAAAlIApAAIAAAdIgiAAIAAAiIAlAAIAAAdIglAAIAAAuIADABQAdAJBfAAQAkAAAbgCIgGAgIgyAAQh4AAgegOQgYgLgQgWQgGAagJAZgAAEBiIAAhkIB7AAIAABkgAAhBGIBCAAIAAgtIhCAAgAgJglQASgNAMgSQAIgLAGgWIgmAAIAAgeICIAAQgBBUgIARQgKAQgVAAIgYgBIgIgdIAZADQAKgBADgJQACgKAAgoIglAAQgFAcgKAVQgNAXgaATg");
	this.shape_7.setTransform(45.5,11.9,0.81,0.81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_2, new cjs.Rectangle(0,0,192.4,23.6), null);


(lib.text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRBqQgIgHAAgKQAAgJAIgHQAFgHALAAQAKAAAGAHQAHAHAAAJQAAAKgHAHQgHAHgJAAQgLAAgFgHgAgTAzIAAgEQABgUAFgLQAHgNAdgZIAEgFQAIgKAAgLQAAgQgJgJQgJgJgPAAQgUAAgIANQgIAKAAAUIgkAAQAAgjAUgTQAUgTAhAAQAfAAASARQATAQAAAcQAAAXgMAPQgEAGgWASQgHAFgFAKQgFAJAAAMIAAAEg");
	this.shape.setTransform(240.8,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiMAQIAAgfIEZAAIAAAfg");
	this.shape_1.setTransform(214.3,14.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgDB7IgTANQgMgWgTgcIAZgQQARAWALATQAZgpAAg5IAAiUIBxAAIAADzQAAAfggAAIggAAIgJggIAfABQAJAAAAgMIAAg2IgyAAQgGA9gfApgAA5ANIAwAAIAAgsIgwAAgAA5g8IAwAAIAAgtIgwAAgAiJB6QAXgVAQgeIAaANQgPAfgYAagAiGBEIAAgeIAUAAIAAh4IgQAAIAAgeIAQAAIAAgfIAfAAIAAAfIAzAAIAAgeIAfAAIAAAeIAOAAIAAAeIgOAAIAAB4IAPAAIAAAegAhTAmIAzAAIAAgVIgzAAgAhTgKIAzAAIAAgWIgzAAgAhTg8IAzAAIAAgWIgzAAg");
	this.shape_2.setTransform(180.5,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah+CIIAAgdIB4AAIAAgWIhSAAIAAgbIBSAAIAAgWIhOAAQgOAdgSAWIgVgaQAagcARgxIAcAHIgGAQIBCAAIAAgSIAfAAIAAASIBjAAIAAAdIhjAAIAAAWIBXAAIAAAbIhXAAIAAAWIBxAAIAAAdgAhjgUIAAhzIDNAAIAABzgAhDgvICNAAIAAgSIiNAAgAhDhaICNAAIAAgSIiNAAg");
	this.shape_3.setTransform(148,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAuCPIgHgfQAVACAOAAQANAAAAgMIAAiYIhDAAIAAgfIBDAAIAAg9IAfAAIAAA9IAZAAIAAAfIgZAAIAACgQAAAhghAAgAiIBrIA9gDIAAgfIgwAAIAAgcIAwAAIAAgZIg4AAIAAgbIAcAAIgIgeIgaAAIAAgfIApAAIAAhIIAdAAIAABIIAPAAIAAhIIAdAAIAABIIAjAAIAAAfIgUAAIgJAeIAaAAIAAAbIg0AAIAAAZIAuAAIAAAcIguAAIAAAdIA2gGIAAAcQgkAHhrAGgAhJgHIAaAAIAKgeIgsAAgAAQgOIAcgJQAQAgANAqIgcAMQgLgqgSgjgAiOh5IAZgIQALAXAHAXIgYAKQgJgZgKgXgAgUhSQAKgTAHgeIAaAHQgIAegLAVg");
	this.shape_4.setTransform(114.3,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABeCLIAAgMIi7AAIAAAMIgeAAIAAjYIBkAAQAGgQADgOIh9AAIAAgfIEWAAIAAAfIh5AAQgEAQgFAOIB0AAIAADYgAA8BhIAiAAIAAiRIgiAAgAgeBhIA8AAIAAgfIg8AAgAhdBhIAhAAIAAiRIghAAgAgeAnIA8AAIAAgeIg8AAgAgegSIA8AAIAAgeIg8AAg");
	this.shape_5.setTransform(81.1,14.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgjCKQgjAAAAgjIAAg7IAhAAIAAA0QAAALAMAAIBAAAQAGAAAEgFQAEgFABgYIAfAKQgEApgKAHQgIAHgTAAgAiOByQATggAIgjIAgAHQgMAugTAggABIA1IAbgQQAcAkASAfIgbATQgRgfgdgngAgWA0IAZgQQATAVANASIgaASQgJgQgWgZgAhbAgIAAhGQgRAfgZAZIgLgeQAigeASgiIguAAIAAgeIAvAAIAAgfIAhAAIAAAfIAkAAIAAAeIgkAAIAAAJQATAMAbAUIgTAcQgRgVgKgLIAABHgAgGAeIAAiiICAAAIAACigAAZACIBCAAIAAgSIhCAAgAAZgqIBCAAIAAgRIhCAAgAAZhVIBCAAIAAgSIhCAAg");
	this.shape_6.setTransform(47.8,14.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgPCJIAAiiQgqAuhAAnIgVgdQBkg3AphQIiEAAIAAggIEMAAIAAAgIhkAAQgKAVgIAMIAAANQBJApA1AxIgXAbQgrgtg8gmIAAChg");
	this.shape_7.setTransform(14.3,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_1, new cjs.Rectangle(0,0,247.9,28.9), null);


(lib.pic_ending = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.slowmo_4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,4.63,4.63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pic_ending, new cjs.Rectangle(0,0,537.1,912.1), null);


(lib.phone_slowmo = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(60));

	// 4
	this.instance = new lib.slowmo_4();
	this.instance.parent = this;
	this.instance.setTransform(17,49,4.63,4.63);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({_off:true},4).wait(12).to({_off:false},0).to({_off:true},4).wait(16).to({_off:false},0).wait(4));

	// 2
	this.instance_1 = new lib.slowmo_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,47,4.63,4.63);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({_off:false},0).to({_off:true},4).wait(12));

	// 3
	this.instance_2 = new lib.slowmo_3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(17,49,4.63,4.63);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},4).wait(8).to({_off:false},0).to({_off:true},4).wait(4));

	// 1
	this.instance_3 = new lib.slowmo_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(17,47,4.63,4.63);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},8).wait(4).to({_off:false},0).to({_off:true},4).wait(12).to({_off:false},0).to({_off:true},4).wait(16).to({_off:false},0).to({_off:true},4).wait(8));

	// mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("EghsBe1QjZgVhig2QiPhPhLhmQhniLgWjjUgAHgDpAAHhhcQgMgCgNgFQgZgJAAgKIAAtmQADgHAHgGQAMgNAPACIAApEQgKAAgIgJQgTgQAAgmIAA39QAAgGAGgHQAMgNAdgEIgExgQAAhFAGhTQAOimAlhIQAeheBZhiQCzjEEngTUAC4gASAgeAAHQQQAEPsAHIBcADQBwALBjAoQE6CBA/FyQAVFeABSiQACJRgEILIAeAZIAANwQgKAUgWANMAACBxgQgCA8gHA7QgXC+hHB0QhMB9iJBPQhrA8h6AXQhTAQjOAGIi9ADMg66AAAIgIAAQhVAAhpgKgEAiwhVvMhGcAACQkAAAhrDcQg2BugDBuMAAACelQAAEgDSB9QBpA+BpAFUBDVAAKADIgAKQCcgIBXgmQBfgqBIhmQA/hXAKiqQACg1gCg3IgDgtMAAEhM+UAAChNNgAGgBSQgLiQgKgvQgYhrhBhcQhLhki0gZQgygHg1AAIgNAAg");
	mask_1.setTransform(286.5,607.9);

	// phone
	this.instance_4 = new lib.phone();
	this.instance_4.parent = this;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,573,1215.8);


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
	this.shape.graphics.f("#594078").s().p("A3dB9IAAj5MAu7AAAIAAD5g");
	this.shape.setTransform(150.6,0.4,1,1,0,0,0,0.4,-12.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.header, new cjs.Rectangle(0,0,300.3,25), null);


(lib.handR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// maskR (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AM3TiQAAgVgngpQg0gzgdgfQhmhsggg+QgOgdhRhMIhzhpQgmgkhXhzQheh7g1hcQgxhRABg6QABgRAEgOIAGgKQAtg5BUA4QAmAaBMBPQA7BAB5BwQAsApBLBLQBQBRAVAaQATAYAigCQASgBAhgHQARgDACgfQABgOgEguQgCghAkgeQAogiBCgJQA2gJAjApIAWAeQANAOAMAAQAYAAAugdIBKgvQAWgLApABQAnACAYgQQAegTA7ADQAdABAXAFIAAMTg");
	mask.setTransform(150,125);

	// Layer_1
	this.instance = new lib.hand();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.handR, new cjs.Rectangle(153.9,140.1,146.1,109.9), null);


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


(lib.bg_ending_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg_ending();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_ending_1, new cjs.Rectangle(0,0,300,200), null);


(lib.bg_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bg_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.bg_1_1, new cjs.Rectangle(0,0,300,200), null);


(lib.phone_ending_pic = function(mode,startPosition,loop) {
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 4
	this.instance = new lib.pic_ending();
	this.instance.parent = this;
	this.instance.setTransform(285.5,505,1,1,0,0,0,268.5,456);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.phone_ending_pic, new cjs.Rectangle(0,0,573,1215.8), null);


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
	this.initialize(mode,startPosition,loop,{});

	// logo
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(239));

	// cta
	this.instance_1 = new lib.cta();
	this.instance_1.parent = this;
	this.instance_1.setTransform(88.7,239.8,1,1,0,0,0,66.1,18.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(199).to({_off:false},0).wait(1).to({y:235.7,alpha:0.2},0).wait(1).to({y:231.6,alpha:0.4},0).wait(1).to({y:227.5,alpha:0.6},0).wait(1).to({y:223.4,alpha:0.8},0).wait(1).to({y:219.3,alpha:1},0).wait(35));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_189 = new cjs.Graphics().p("AoFIGQjWjWgBkwQABkuDWjXQDWjXEvAAQDQAACmBmIAAgBICoAAIAACLQC+DPABEdQAAEwjXDWQjWDXkwgBQkvABjWjXg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(189).to({graphics:mask_graphics_189,x:88.3,y:143.8}).wait(50));

	// phone_ending
	this.instance_2 = new lib.phone_ending_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(89.6,284.6,0.686,0.686,0,0,0,79.5,101.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(192).to({_off:false},0).wait(1).to({regX:78.2,regY:102.5,x:88.6,y:251.2},0).wait(1).to({y:217.2},0).wait(1).to({y:183.2},0).wait(1).to({y:149.2},0).wait(43));

	// circle
	this.instance_3 = new lib.circle();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88.4,143.8,0.397,0.397,0,0,0,73.2,73.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).wait(1).to({scaleX:0.55,scaleY:0.55,x:88.3,alpha:0.25},0).wait(1).to({scaleX:0.7,scaleY:0.7,x:88.4,alpha:0.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,x:88.3,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,x:88.4,alpha:1},0).wait(46));

	// title
	this.instance_4 = new lib.title();
	this.instance_4.parent = this;
	this.instance_4.setTransform(151.7,49.6,1.098,1.098,0,0,0,95.5,11.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(187).to({_off:false},0).wait(1).to({regX:94.1,scaleX:1.07,scaleY:1.07,x:150.2,y:49.5,alpha:0.25},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:49.6,alpha:0.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,x:150.3,alpha:1},0).wait(48));

	// 最高享
	this.instance_5 = new lib.ending_cut_text_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(178.3,113.6,1,1,0,0,0,56.9,29.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(196).to({_off:false},0).wait(1).to({x:184.6,alpha:0.125},0).wait(1).to({x:191,alpha:0.25},0).wait(1).to({x:197.4,alpha:0.375},0).wait(1).to({x:203.8,alpha:0.5},0).wait(1).to({x:210.1,alpha:0.625},0).wait(1).to({x:216.5,alpha:0.75},0).wait(1).to({x:222.9,alpha:0.875},0).wait(1).to({x:229.3,alpha:1},0).wait(35));

	// 再送
	this.instance_6 = new lib.ending_cut_text_2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(155.4,178.8,1,1,0,0,0,29.4,26.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(195).to({_off:false},0).wait(1).to({x:161.3,alpha:0.125},0).wait(1).to({x:167.2,alpha:0.25},0).wait(1).to({x:173,alpha:0.375},0).wait(1).to({x:178.9,alpha:0.5},0).wait(1).to({x:184.8,alpha:0.625},0).wait(1).to({x:190.7,alpha:0.75},0).wait(1).to({x:196.5,alpha:0.875},0).wait(1).to({x:202.4,alpha:1},0).wait(36));

	// Kate Spade
	this.instance_7 = new lib.katespade_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(225.5,193.8,0.487,0.487,0,0,0,60.4,91.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(198).to({_off:false},0).wait(1).to({regX:69.5,regY:100.5,x:233.8,y:198.3,alpha:0.125},0).wait(1).to({x:237.8,alpha:0.25},0).wait(1).to({x:241.8,alpha:0.375},0).wait(1).to({x:245.8,alpha:0.5},0).wait(1).to({x:249.8,alpha:0.625},0).wait(1).to({x:253.8,alpha:0.75},0).wait(1).to({x:257.8,alpha:0.875},0).wait(1).to({x:261.8,y:198.2,alpha:1},0).wait(33));

	// header
	this.instance_8 = new lib.header();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150.2,0,1,1,0,0,0,150.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:12.5,y:12.5},0).wait(180).to({scaleY:1.68,y:21},0).wait(1).to({scaleY:2.36,y:29.5},0).wait(1).to({scaleY:3.04,y:38},0).wait(1).to({scaleY:3.72,y:46.5},0).wait(1).to({scaleY:4.4,y:55},0).wait(1).to({scaleY:5.08,y:63.5},0).wait(53));

	// footer
	this.instance_9 = new lib.footer();
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,250.1,1,1,0,0,0,150,25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:150.2,regY:12.5,x:150.2,y:237.5},0).wait(180).to({scaleY:1.67,y:229.1},0).wait(1).to({scaleY:2.33,y:220.8},0).wait(1).to({scaleY:3,y:212.4},0).wait(1).to({scaleY:3.66,y:204.1},0).wait(1).to({scaleY:4.33,y:195.7},0).wait(1).to({scaleY:4.99,y:187.4},0).wait(53));

	// handR
	this.instance_10 = new lib.handR();
	this.instance_10.parent = this;
	this.instance_10.setTransform(187.3,134.7,0.832,0.832,0,0,0,150.1,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(16).to({_off:false},0).wait(1).to({regX:150,x:184.2,y:131.4,alpha:0.25},0).wait(1).to({x:181.2,y:128.1,alpha:0.5},0).wait(1).to({x:178.2,y:124.9,alpha:0.75},0).wait(1).to({x:175.2,y:121.6,alpha:1},0).wait(1).to({y:128},0).wait(1).to({y:134.3},0).wait(1).to({y:140.7},0).wait(1).to({y:147},0).wait(1).to({y:153.3},0).wait(1).to({y:159.7},0).wait(1).to({y:166},0).wait(1).to({y:172.3},0).wait(1).to({y:178.7},0).wait(1).to({y:185},0).wait(1).to({y:191.4},0).wait(1).to({y:197.7},0).wait(1).to({y:204},0).wait(1).to({y:210.4},0).wait(1).to({y:216.7},0).to({_off:true},1).wait(203));

	// Mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("Aw6DMIAAmXMAh1AAAIAAGXg");
	mask_1.setTransform(156.8,124.6);

	// text_2
	this.instance_11 = new lib.text_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(154.1,82.8,1,1,0,0,0,96.2,11.8);

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(21).to({y:85.6},0).wait(1).to({y:88.4},0).wait(1).to({y:91.2},0).wait(1).to({y:94},0).wait(1).to({y:96.8},0).wait(1).to({y:99.6},0).wait(1).to({y:102.4},0).wait(1).to({y:105.2},0).wait(1).to({y:108},0).wait(1).to({y:110.8},0).wait(1).to({y:113.6},0).wait(1).to({y:116.4},0).wait(1).to({y:119.2},0).wait(1).to({y:122},0).wait(1).to({y:124.8},0).wait(20).to({scaleX:1.03,scaleY:1.03,alpha:0.857},0).wait(1).to({scaleX:1.07,scaleY:1.07,y:124.7,alpha:0.714},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.571},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:154,y:124.8,alpha:0.429},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.286},0).wait(1).to({scaleX:1.2,scaleY:1.2,x:154.1,y:124.7,alpha:0.143},0).wait(1).to({scaleX:1.23,scaleY:1.23,y:124.8,alpha:0},0).to({_off:true},1).wait(177));

	// text_1
	this.instance_12 = new lib.text_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(154.1,123.6,0.859,0.859,0,0,0,124,14.5);
	this.instance_12.alpha = 0;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:123.9,regY:14.4,scaleX:0.85,scaleY:0.85,x:154,y:123.5,alpha:0.25},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,alpha:0.75},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:1},0).wait(17).to({y:126.3},0).wait(1).to({y:129.1},0).wait(1).to({y:131.9},0).wait(1).to({y:134.7},0).wait(1).to({y:137.5},0).wait(1).to({y:140.3},0).wait(1).to({y:143.1},0).wait(1).to({y:145.9},0).wait(1).to({y:148.7},0).wait(1).to({y:151.5},0).wait(1).to({y:154.3},0).wait(1).to({y:157.1},0).wait(1).to({y:159.9},0).wait(1).to({y:162.7},0).wait(1).to({y:165.5},0).to({_off:true},1).wait(203));

	// text_ending
	this.instance_13 = new lib.text_ending();
	this.instance_13.parent = this;
	this.instance_13.setTransform(154.4,127,1.096,1.096,0,0,0,125.3,12.3);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(143).to({_off:false},0).wait(1).to({regX:125.5,regY:12.5,scaleX:1.07,scaleY:1.07,x:154.6,y:127.2,alpha:0.25},0).wait(1).to({scaleX:1.05,scaleY:1.05,alpha:0.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.75},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(37).to({alpha:0.667},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0},0).wait(53));

	// phone_ending
	this.instance_14 = new lib.phone_ending_pic();
	this.instance_14.parent = this;
	this.instance_14.setTransform(152.8,163.2,0.216,0.216,0,0,0,288.8,611.4);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(122).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,scaleX:0.22,scaleY:0.22,x:152.6,y:161.3,alpha:0.917},0).wait(1).to({x:152.9,y:160.2,alpha:0.833},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:153.2,y:159.1,alpha:0.75},0).wait(1).to({x:153.5,y:157.9,alpha:0.667},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:153.8,y:156.8,alpha:0.583},0).wait(1).to({x:154.1,y:155.7,alpha:0.5},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:154.4,y:154.6,alpha:0.417},0).wait(1).to({x:154.6,y:153.4,alpha:0.333},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:154.9,y:152.3,alpha:0.25},0).wait(1).to({x:155.2,y:151.2,alpha:0.167},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:155.5,y:150.1,alpha:0.083},0).wait(1).to({x:155.8,y:148.9,alpha:0},0).to({_off:true},1).wait(104));

	// light
	this.instance_15 = new lib.light();
	this.instance_15.parent = this;
	this.instance_15.setTransform(152.4,163.2,1,1,0,0,0,58.4,119.5);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(62).to({_off:false},0).wait(1).to({alpha:0.68},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(174));

	// phone_slow mo
	this.instance_16 = new lib.phone_slowmo();
	this.instance_16.parent = this;
	this.instance_16.setTransform(90.4,31,0.216,0.216);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(62).to({_off:false},0).to({_off:true},61).wait(116));

	// transition
	this.instance_17 = new lib.transition();
	this.instance_17.parent = this;
	this.instance_17.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(139).to({_off:false},0).wait(1).to({alpha:0.064},0).wait(1).to({alpha:0.129},0).wait(1).to({alpha:0.193},0).wait(1).to({alpha:0.257},0).wait(1).to({alpha:0.321},0).wait(1).to({alpha:0.386},0).wait(1).to({alpha:0.45},0).wait(93));

	// phone
	this.instance_18 = new lib.phone_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(90.4,250.3,0.216,0.216);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(49).to({_off:false},0).wait(1).to({regX:286.5,regY:607.9,x:152.3,y:363.4},0).wait(1).to({y:345.2},0).wait(1).to({y:326.9},0).wait(1).to({y:308.6},0).wait(1).to({y:290.3},0).wait(1).to({y:272.1},0).wait(1).to({y:253.8},0).wait(1).to({y:235.5},0).wait(1).to({y:217.2},0).wait(1).to({y:199},0).wait(1).to({y:180.7},0).wait(1).to({y:162.4},0).to({_off:true},1).wait(177));

	// bg_ending
	this.instance_19 = new lib.bg_ending_1();
	this.instance_19.parent = this;
	this.instance_19.setTransform(150,125,1,1,0,0,0,150,100);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(126).to({_off:false},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.125},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.25},0).wait(1).to({scaleX:1,scaleY:1,x:150.1,alpha:0.375},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150,alpha:0.625},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.75},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.1,alpha:0.875},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:1},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:150},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:150.1},0).wait(1).to({scaleX:1.02,scaleY:1.02},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150},0).wait(1).to({scaleX:1.03,scaleY:1.03},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:150.1},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:150},0).wait(1).to({scaleX:1.04,scaleY:1.04},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:150.1},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:150},0).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:150.1},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:150},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150.1},0).wait(1).to({scaleX:1.07,scaleY:1.07},0).wait(1).to({scaleX:1.07,scaleY:1.07,x:150},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:150.1},0).wait(1).to({scaleX:1.08,scaleY:1.08},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:150.1},0).wait(1).to({scaleX:1.09,scaleY:1.09},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:150},0).wait(1).to({scaleX:1.1,scaleY:1.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:150.1},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:150},0).wait(1).to({scaleX:1.11,scaleY:1.11},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:150.1},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:150},0).wait(1).to({scaleX:1.12,scaleY:1.12},0).wait(1).to({scaleX:1.12,scaleY:1.12,x:150.1},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:150},0).wait(1).to({scaleX:1.13,scaleY:1.13},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150.1},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:150},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:150.1},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:150},0).wait(1).to({scaleX:1.15,scaleY:1.15},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:150.1},0).wait(53));

	// bg_1
	this.instance_20 = new lib.bg_1_1();
	this.instance_20.parent = this;
	this.instance_20.setTransform(150,-75,1,1,0,0,0,150,100);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},0).wait(1).to({y:-61.7,alpha:0.067},0).wait(1).to({y:-48.3,alpha:0.133},0).wait(1).to({y:-35,alpha:0.2},0).wait(1).to({y:-21.7,alpha:0.267},0).wait(1).to({y:-8.3,alpha:0.333},0).wait(1).to({y:5,alpha:0.4},0).wait(1).to({y:18.4,alpha:0.467},0).wait(1).to({y:31.7,alpha:0.533},0).wait(1).to({y:45,alpha:0.6},0).wait(1).to({y:58.4,alpha:0.667},0).wait(1).to({y:71.7,alpha:0.733},0).wait(1).to({y:85,alpha:0.8},0).wait(1).to({y:98.4,alpha:0.867},0).wait(1).to({y:111.7,alpha:0.933},0).wait(1).to({y:125,alpha:1},0).wait(204));

	// bg-purple
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#594078").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(239));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,125,300.3,250);
// library properties:
lib.properties = {
	id: 'F641162E7D404134878EB7A40E102BBB',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg_1.jpg?1525961610783", id:"bg_1"},
		{src:"images/bg_ending.jpg?1525961610783", id:"bg_ending"},
		{src:"images/hand.jpg?1525961610783", id:"hand"},
		{src:"images/katespade.jpg?1525961610783", id:"katespade"},
		{src:"images/logo.jpg?1525961610783", id:"logo"},
		{src:"images/phone.jpg?1525961610783", id:"phone"},
		{src:"images/phone_ending.jpg?1525961610783", id:"phone_ending"},
		{src:"images/slowmo_1.jpg?1525961610783", id:"slowmo_1"},
		{src:"images/slowmo_2.jpg?1525961610783", id:"slowmo_2"},
		{src:"images/slowmo_3.jpg?1525961610783", id:"slowmo_3"},
		{src:"images/slowmo_4.jpg?1525961610783", id:"slowmo_4"}
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
an.compositions['F641162E7D404134878EB7A40E102BBB'] = {
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