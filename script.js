$(document).ready(function () {
  $('#bookingForm').on('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your booking! We will contact you soon.');
  });
});
$(document).ready(function () {
  let slides = $(".slide");
  let index = 0;

  function showNextSlide() {
    slides.eq(index).removeClass("active");
    index = (index + 1) % slides.length;
    slides.eq(index).addClass("active");
  }

  setInterval(showNextSlide, 3000); // change every 3 seconds
});
