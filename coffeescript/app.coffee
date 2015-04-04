$ ->
  container = $('.container')
  container.imagesLoaded ->
    container.masonry
      itemSelector: '.item'
