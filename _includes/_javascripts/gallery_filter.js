var tags = [];
function addTags(tag){
  if( tags.indexOf(tag) == -1 ) tags.push(tag);
}
$('figure').each(function(){
  this.className.split(' ').forEach(addTags)
});

// clean up
tags.splice(tags.indexOf('third'),1);
tags.splice(tags.indexOf(''),1);

tags.forEach(function(tag){
  var tagText = document.createTextNode(tag);
  var tagNode = document.createElement('li')
  tagNode.appendChild(tagText);
  $('#gallery-filters').append( tagNode );
});

// when clicked, show only designs with those tags
$('#gallery-filters').on('click', 'li', function(){
  var activeTag = $(this).text();
  $('figure').hide();
  $('.'+activeTag).show();
})
$('#remove-filters').on('click', function(){ $('figure').show(); });
