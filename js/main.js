$(document).ready(function () {
  let tabsItem = $('.tabs-item');

  tabsItem.on('click', function (event) {
    event.preventDefault();
    let activeContent = $(this).attr('href');
    $('.vivble').toggleClass('vivble');
    $(activeContent).toggleClass('vivble');
    $('.tabs-item-active').toggleClass('tabs-item-active');
    $(this).toggleClass('tabs-item-active');
  })

});
