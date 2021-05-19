$(document).ready(function () {
  //show navbar responsive
  $(document).on('click', '#burger-btn-click', function () {
    $('.navbar-responsive').addClass('is-navbar-active');
    $('#burger-btn-click').addClass('burger-item-hide');
    $('#close-btn-click').addClass('close-item-show');
  });

  //hide navbar responsive
  $(document).on('click', '#close-btn-click', function () {
    $('.navbar-responsive').removeClass('is-navbar-active');
    $('#burger-btn-click').removeClass('burger-item-hide');
    $('#close-btn-click').removeClass('close-item-show');
  })
})