const form = document.getElementById('loginForm');

// Pre-fill username if saved
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('savedUsername');
  if (savedUsername) {
    form.username.value = savedUsername;
  }
});

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = form.username.value;
  const password = form.password.value;

  if (username === 'admin' && password === '1234') {
    localStorage.setItem('savedUsername', username);
    form.classList.remove('success');
    void form.offsetWidth; // trigger reflow
    form.classList.add('success');
    alert('Login successful!');
  } else {
    form.classList.remove('shake');
    void form.offsetWidth; // trigger reflow
    form.classList.add('shake');
    alert('Invalid credentials');
  }
});
