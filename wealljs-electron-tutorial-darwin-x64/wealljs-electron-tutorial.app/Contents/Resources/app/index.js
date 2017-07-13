const {shell} = require('electron')

$(document).ready(function(){
    $('.text').load('start.html');
    var docs=[['jay.html','whoAmI'],
      ['electron.html', 'electron'],
      ['install.html', 'install'],
      ['challenge.html', 'challenge'],
      ['gotchas.html', 'gotchas']]

    var docIndex = -1;

    function incrementDocs() {

    if (docIndex < docs.length - 1){
      docIndex ++;
        }

    else {
     docIndex = 0;
       };
       return this;
     };

     function decrementDocs() {
       if (docIndex <= 0){
         docIndex = docs.length - 1;
          }

       else {
        docIndex --;
          };

        return this;
     };

    function selectID(doc) {
        $(".text").load(doc[0]);
        $(".text").attr('id', doc[1]);
        docIndex = docs.indexOf(doc);
        return this;
      };

  $("#whoAmI").click(function(){
    selectID(docs[0]);
  });
  $("#whatIsElectron").click(function(){
      selectID(docs[1]);
  });

  $("#install").click(function(){
    selectID(docs[2]);
  });
  $("#challenge").click(function(){
    selectID(docs[3]);
  });

  $("#gotchas").click(function(){
    selectID(docs[4]);
  });

  $(document).keydown(function(e) {

    if (e.keyCode == 39 || e.keyCode == 13) { //Right or Enter
      incrementDocs();
      console.log('Doc Length is ' + docs.length);
      console.log('Doc Index is ' + docIndex);
      selectID(docs[docIndex]);

    };

    if (e.keyCode == 37) { //Left
      decrementDocs();
      selectID(docs[docIndex]);

      };
    if (e.keyCode == 27) { // esc
      $('.text').load('start.html');
      docIndex=-1
      }
    });
    $('.text').on('click', '.challenge li', function () {
      $( this ).toggleClass('strike');
    });
});
