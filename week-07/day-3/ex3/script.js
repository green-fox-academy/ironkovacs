
let rdo = document.querySelectorAll('.fav');
let catButton = document.querySelector('#cats');
let signButton = document.querySelector('#signUp');

console.log(rdo);

rdo.forEach(e => {
  e.addEventListener('click', updateRdo);
});
function updateRdo(ev) {
  let rdoValue = ev.target.defaultValue
  if (rdoValue == 'dog' || rdoValue == 'cat'){
    catButton.disabled = false;
  }else{
    catButton.disabled = true;
  }
}
