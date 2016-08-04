$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    $('.results-images').replaceWith('<div class = "results-images"></div>')
    var searchTerm = $('#query').val();
    console.log(searchTerm);
    getRequest(searchTerm);

    });
  });


function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: 'AIzaSyCopYLZUaCqeMPYr-BixFT9ZHQHBLNRbno',
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    var resultArray = data.items;
    console.log(resultArray);
    processResultArray(resultArray);
  });
}

function processResultArray(resultArray) {
  $.each(resultArray, function(index,video){
    var thumbnail = video.snippet.thumbnails.high.url;
    showImages(thumbnail);
  });
}

function showImages(thumbnail){
  $('.results-images').append('<p><img src = "' + thumbnail + '"></img></p>');
}
