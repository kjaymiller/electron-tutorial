$(document).ready(function(){
    var docs=[['jay.html','whoAmI'],
      ['electron.html', 'electron'],
      ['hard.html', 'hard'],
      ['install.html', 'install'],
      ['gotchas.html', 'gotchas']]

    var docIndex = 0;

    function selectID(page, id) {
        $(".text").load(page);
        $(".text").attr('id', id)
        docIndex = docs.indexOf(page);
        return this;
      };

  $("#whoAmI").click(function(){
    selectID('jay.html', 'whoAmI');
  });
  $("#whatIsElectron").click(function(){
      selectID('electron.html', 'whatIsElectron');
  });

  $("#hard").click(function(){
    selectID('hard.html', 'hard');
  });

  $("#install").click(function(){
    selectID('install.html', 'install');
  });

  $("#gotchas").click(function(){
    selectID('gotchas.html', 'gotchas');
  });

  $(document).keydown(function(e) {
    var doc = docs[docIndex];
    if (e.keyCode == 39) { //Right
      selectID(doc[0], doc[1])

     if (docIndex < docs.length - 1){
       docIndex ++;
        }

     else {
      docIndex = 0;
        };

    };

    if (e.keyCode == 37) { //Left
      var doc = docs[docIndex];
      selectID(doc[0], doc[1])

     if (docIndex == 0){
       docIndex = docs.length - 1;
        }
        
     else {
      docIndex --;
        };

      };
    if (e.keyCode == 27) { // esc
      $(".text").text('')
      }
    });
});
