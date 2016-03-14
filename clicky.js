(function() {
  document.getElementById('button').addEventListener('click', handleButtonClick);
  function handleButtonClick (e) {
    const squaresContainer = document.getElementById('squares');
    const newSquare = document.createElement('div');
    newSquare.className = 'square';
    squaresContainer.appendChild(newSquare);
    const squares = squaresContainer.children;
    window.scrollTo(0,document.body.scrollHeight);
    console.log(squares);
  };
})();
