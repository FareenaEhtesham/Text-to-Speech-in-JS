
$(function() {
    $('a.speech').on('click',function(e){
    e.preventDefault();


    var text= $('#texthere').val();
    text = encodeURIComponent(text); //This is builtin function of JS
                                    //here we pass text b/c it contain the value which we will be written
                                    //and we want to encode it

    console.log(text);
    var url = "http://translate.google.com/translate_tts?tl=en&q=" + text + "&client=tw-ob";
    
    $('audio').attr('src', url).get(0).play();
    });
    });
    console.log("Heyyy it works");
    var a;
    a=document.URL;