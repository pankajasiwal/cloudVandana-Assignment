const form = document.getElementById('surveyForm');
const popup = document.getElementById('popup');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (form.checkVisibility()) {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const DOB = document.getElementById('DOB').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked')[0].value;
    //   console.log(gender);
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const popupContent = `
      <p>first Name: ${firstName}</p>
      <p>last Name: ${lastName}</p>
      <p>DOB: ${DOB}</p>
      <p>country: ${country}</p>
      <p>gender: ${gender}</p>
      <p>profession: ${profession}</p>
      <p>email: ${email}</p>
      <p>mobile: ${mobile}</p>
      `;

    popup.innerHTML = popupContent;
    popup.style.display = 'block';
    form.reset();
  }
});
popup.addEventListener('click', function () {
  popup.style.display = 'none';
});
