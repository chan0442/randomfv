$(document).ready(function(){

    var text;
    var author;

    function getNewQuote(){
        $.ajax({
            url:'http://api.forismatic.com/api/1.0/',
            jsonp:'jsonp',
            dataType:'jsonp',
            data:{
                method:'getQuote',
                lang:'en',
                format:'jsonp'
            },
            success:function(response){
                console.log(response.quoteAuthor)
                text=response.quoteText;
                $('#text').text(response.quoteText);
                if(response.quoteAuthor){
                    $('#author').text('said by '+response.quoteAuthor);
                }else{
                    $('#author').text('-unkown');
                }
            }
        });
    }

    getNewQuote();

    $('.new-quote').on('click',function(e){
        e.preventDefault();
        getNewQuote();
    });

    $('.tweet-quote').on('click', function(e){
        e.preventDefault();
        window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent(text));
    });
    
});
