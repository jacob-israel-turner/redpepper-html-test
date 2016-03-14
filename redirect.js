(function() {
  let secondsPast = 0;
  const secondsToRedirect = 7;
  document.getElementById('timer').textContent = getSecondsToRedirect();

  const interval = setInterval(function () {
    secondsPast++;
    document.getElementById('timer').textContent = getSecondsToRedirect();
    if (getSecondsToRedirect() <= 0) handleRedirect();
  }, 1000)

  function handleRedirect () {
    clearInterval(interval);
    window.location.href = "index.html";
  }

  function getSecondsToRedirect () {
    return secondsToRedirect - secondsPast;
  }
})();
