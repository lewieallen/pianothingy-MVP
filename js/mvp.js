// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // PIANO THINGY MVP
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


var canvas = $("div.canvas-wrapper canvas")[0];
    // Need to use array notation because jquery select returns an array of one.
var renderer = new Vex.Flow.Renderer(
        canvas,
        Vex.Flow.Renderer.Backends.CANVAS
    );
    // Creates an object with a context property
    // ctx: CanvasRenderingContext2D
        // "This rendering context gives VexFlow a consistent 2D drawing interface,
        // which is modeled on HTML5 Canvas"
var ctx = renderer.getContext()
    // Alternatively renderer.ctx produces the same object.
var stave = new Vex.Flow.Stave(50, 100, 600);
    // Stave(x-pos, y-pos, width);
        // Drawn in the same directions as SVG (top-left to bottom,right)

// Pass the rendering context to the stave object and call draw()
stave.addClef("treble").setContext(ctx).draw();