var canvas = $('.canvas-wrapper-2 canvas')[0],
    renderer = new Vex.Flow.Renderer(canvas, Vex.Flow.Renderer.Backends.CANVAS),
    ctx = renderer.getContext(),
    notesBar1,
    notesBar2,
    staveWidth = 300;

// Stave 1
var staveBar1 = new Vex.Flow.Stave(10, -10, staveWidth);
//  staveBar1 = new Vex.Flow.Stave(x, y, width);
staveBar1.setBegBarType(2);
// setBegBarType(Vex.Flow.Barline.type.REPEAT_BEGIN);
    // DOUBLE = 2
    // END = 3
    // REPEAT_BEGIN = 4 
    // REPEAT_END = 5
    // REPEAT_BOTH = 6 
    // NONE = 7
staveBar1.setEndBarType(7);

notesBar1 = [
        // quarter Cm
    new Vex.Flow.StaveNote({
        keys: ["c/4", "eb/4", "g/4"],
        duration: "q"
    })
    .addAccidental(1, new Vex.Flow.Accidental("b")),
        // quarter A
    new Vex.Flow.StaveNote({
        keys: ["b/4"],
        duration: "qr"
    }),
        // quarter rest
    new Vex.Flow.StaveNote({
        keys: ["c/4", "e/4", "g/4"],
        duration: "q"
            // NOTES this is a quarter rest
                // it is given a glyph sub-property 
                // position: "b/4"
                // rest: true
                // stem: false (others will be true)
    }),
        // quarter C
    new Vex.Flow.StaveNote({
        keys: ["b/4"],
        duration: "qr"
    })
];
notesBar2 = notesBar1;

var staveBar2 = new Vex.Flow.Stave(staveBar1.width + staveBar1.x, staveBar1.y, staveWidth);

staveBar1.addClef("treble").setContext(ctx).draw();
staveBar2.setContext(ctx).draw();

Vex.Flow.Formatter.FormatAndDraw(ctx, staveBar1, notesBar1);
Vex.Flow.Formatter.FormatAndDraw(ctx, staveBar2, notesBar2);