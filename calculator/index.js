document.addEventListener('DOMContentLoaded', function () {
  let string = '';
  let keys = document.querySelectorAll('.key');
  // console.log(Array.from(keys));
  keys.forEach((key) => {
    key.addEventListener('click', (e) => {
      // console.log(e.target.innerHTML);
      if (e.target.innerHTML == '=') {
        let result = eval(string);
        // console.log(result);
        document.getElementById('input').value = result;
        string = result;
      } else if (e.target.innerHTML == 'AC') {
        string = ' ';
        document.getElementById('input').value = string;
      } else {
        string += e.target.innerHTML;
        document.getElementById('input').value = string;
      }
    });
  });
});
