// For in here
    // function([x]) {
        // create an oscillator
        // map to appropriate frequency 
    // }

var AudioContext = window.AudioContext || window.webkitAudioContext;

function createNote (val, val2) {
    var context = new AudioContext();
    var osc = context.createOscillator();
    var gain = context.createGain();

    osc.type = 'sine';
    osc.frequency.value = val;
    osc.start(0);
    osc.stop(0.5);

    osc.connect(gain);

    gain.gain.value = 1;
    gain.connect(context.destination);

    if(val2) {
        var osc2 = context.createOscillator();

        osc2.frequency.value = val2;
        osc2.connect(gain);
        osc2.start(0);
        osc2.stop(0.5);
    }
    
}



// For in here (piano.js):
    // Notes data (var main, var chopsticks)
    // Listeners for key presses