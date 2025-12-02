function goToReg() {
  window.location.href="/registration.html";
}

// const paraElement = document.querySelector('.js-copy-button').classList('copy').textContent = new Date().getFullYear();


document.querySelector('.js-go-back-button').addEventListener('click', () => {
  window.location.href="/index.html";
});

document.querySelector('.js-submit-button').addEventListener('click', () => {
  alert('Submitted');
})

