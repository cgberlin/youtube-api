$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    console.log(searchTerm);
    getRequest(searchTerm);

    });
  });


function getRequest(searchTerm){
  var params = {
    part: 'snippet',
    key: (your API key as a string),
    q: searchTerm
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    console.log(data);
  });
}
