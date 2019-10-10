document.addEventListener(
  'DOMContentLoaded',
  () => {
    $('.user').css('display', 'block');
    $('.user').text($('.user').text()[0].toUpperCase());

    if ($('div').hasClass('application-pet-list__header')) {
      $('.application-start').css('display', 'none');
    } else {
      $('.application-start').css('display', 'flex');
    }
  },
  false
);
