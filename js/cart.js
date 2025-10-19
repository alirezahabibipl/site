document.getElementById('continue').addEventListener('click', function() {
  window.location.href = 'index.html';
});

document.getElementById('checkout').addEventListener('click', function() {
  alert('🧾 در نسخه آزمایشی، پرداخت فعال نیست.');
});

document.querySelector('.remove').addEventListener('click', function() {
  this.parentElement.parentElement.remove();
  document.querySelector('.total-price').innerText = '۰ تومان';
});
