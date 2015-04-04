(function() {
  $(function() {
    var container;
    container = $('.container');
    return container.imagesLoaded(function() {
      return container.masonry({
        itemSelector: '.item'
      });
    });
  });

}).call(this);
