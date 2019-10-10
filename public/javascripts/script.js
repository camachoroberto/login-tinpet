document.addEventListener(
  'DOMContentLoaded',
  () => {

    $('.user').on('click', () => {
      $('.user-options').toggleClass('show');
    });

    if ($('div').hasClass('application-pet-list__header')) {
      $('.application-start').css('display', 'none');
    } else {
      $('.application-start').css('display', 'flex');
    }
  },
  false
);
