document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.");
      form.reset();
    });
  }
});
