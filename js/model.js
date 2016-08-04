
var pageToken = '';

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
  url = 'https://www.googleapis.com/youtube/v3/search?pageToken='+pageToken;

  $.getJSON(url, params, function(data){
    var resultArray = data.items;
    console.log(resultArray);
    pageToken = data.nextPageToken;
    console.log(pageToken);
    processResultArray(resultArray);
  });
}

function processResultArray(resultArray) {
  $.each(resultArray, function(index,video){
    var thumbnail = video.snippet.thumbnails.high.url;
    var id = video.id.videoId;
    var title = video.snippet.title;
    showImages(thumbnail, id, title);
  });
}

function showImages(thumbnail, id, title){
  $('.results-images').append('<div class = "videoImgContain"<h2>'+title+'</h2><a class="various fancybox" href="https://www.youtube.com/embed/'+id+'?autoplay=1"><p><img src = "' + thumbnail +
   '"></img></p></div>');
}

$('.next-page-buttons').on('click', 'button', function(){
  loadNextFive(pageToken);
})
function loadNextFive(pageToken){
  $('.results-images').slideUp('slow', function(){
    $('.results-images').replaceWith('<div class = "results-images"></div>');
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
}
