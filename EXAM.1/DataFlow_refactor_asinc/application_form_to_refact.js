document.addEventListener("DOMContentLoaded", function (event) {
  
  let hearChecklist = document.querySelectorAll('.hear_list');
  let techDragList = document.querySelectorAll('.tech_list');
  let otherCheckbox = document.querySelector('input[id="other"]');
  let otherText = document.querySelector('input[id="otherValue"]');

  const getTechList = () => {
    let techlist = '';
    techDragList.forEach(e => {
      techlist += `${e.textContent}, `
    });
    return techlist.slice(0, -2);
  }
  const getHearList = () => {
    let hearList = '';
    hearChecklist.forEach(e => {
      if (e.checked) { hearList += `${e.name}, ` }
    });
    if (document.querySelector('#other').checked) { hearList += `${document.querySelector('#otherValue').value}  ` }
    return hearList.slice(0, -2);
  }
  const changeDomElements = () => {
    let domElements = getDomElements()
    domElements.otherText.style.visibility = 'hidden'
    domElements.otherCheckbox.addEventListener('change', (element) => {
      domElements.otherCheckbox.visibility = otherCheckbox.checked ? 'visible' : 'hidden'
      domElements.otherCheckbox.value = otherCheckbox.checked ? '' : null
    })
  }
  const updateList = () => {
    let sort_list = $('#sotrable_list'),
      updatePosition = () => {
        $('#applicant_application_additional_attributes_technology_pref').val(getTechList())
      };
    sort_list.sortable({
      placeholder: 'ui-state-highlight',
      update: updatePosition
    });
    let updateCheckList = () => { document.querySelector('#applicant_application_additional_attributes_hear_about').value = getHearList() };
    hearChecklist.forEach(e => {
      e.addEventListener('change', (event) => { updateCheckList() });
    });
  }


});

window.onload = changeDomElements()