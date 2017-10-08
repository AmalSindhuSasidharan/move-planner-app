
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var streetstring=$("#street").val();
    var citystring=$("#city").val();
    var address=streetstring+","+citystring;
    $greeting.text("It seems you choose to live at "+address);

    var streetviewUrl="http://maps.googleapis.com/maps/api/streetview?size=600x300&location="+address;
    $body.append('<img src="'+streetviewUrl+'" class="bgimg">');

    return false;
};

$('#form-container').submit(loadData);
