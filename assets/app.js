$(document).ready(function(){
    var ignorarSound;
    var siSound;
    var noSound;
    var nopeSound;
    var sapbeSound;
    var jueputaSound
    soundManager.setup({
      url: 'bower_components/SoundManager2/swf/',
      onready: function() {
        ignorarSound = soundManager.createSound({
          id: 'sound1',
          url: 'assets/Sounds/ignorar.mp3'
        });
        siSound = soundManager.createSound({
          id: 'sound2',
          url: 'assets/Sounds/si.mp3'
        });
        noSound = soundManager.createSound({
          id: 'sound3',
          url: 'assets/Sounds/no.mp3'
        });
        nopeSound = soundManager.createSound({
          id: 'sound4',
          url: 'assets/Sounds/nope.mp3'
        });
        sapbeSound = soundManager.createSound({
          id: 'sound5',
          url: 'assets/Sounds/sapbe.mp3'
        });
        jueputaSound = soundManager.createSound({
          id: 'sound6',
          url: 'assets/Sounds/jueputa.mp3'
        });
      },
      ontimeout: function() {
          alert('error');
        // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
      }
    });
    
    var emotions = [];
    var c;
    c = $('#ignorar');
    var ignorar = {componente: c, name: 'ignorar', sound: ignorarSound};
    c = $('#si');
    var si = {componente: c, name: 'si', sound: siSound};
    c = $('#no');
    var no = {componente: c, name: 'no', sound: noSound};
    c = $('#nope');
    var nope = {componente: c, name: 'nope', sound: nopeSound};
    c = $('#sapbe');
    var sapbe = {componente: c, name: 'sapbe', sound: sapbeSound};
    c = $('#jueputa');
    var jueputa = {componente: c, name: 'jueputa', sound: jueputaSound};
    
    emotions.push(ignorar);
    emotions.push(si);
    emotions.push(no);
    emotions.push(nope);
    emotions.push(sapbe);
    emotions.push(jueputa);
    
    emotions.forEach(function(emotion){
        emotion.componente.click(function(){
                emotion.sound.play();                
        });
    });
    
});