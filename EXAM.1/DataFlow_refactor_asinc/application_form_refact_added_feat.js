const domElements = () => {
  return {
    hearList: document.querySelectorAll('.hear_list'),
    hearField: document.querySelector('#applicant_application_additional_attributes_hear_about'),
    otherCheckbox: document.querySelector('input#other'),
    otherText: document.querySelector('input#otherValue'),
    techField: document.querySelector('#applicant_application_additional_attributes_technology_pref'),
    techList: document.querySelectorAll('.tech_list'),
    techSortable: $('#sortable_list'),
    policyChechbox: document.querySelector('.private_policy_chechbox'),
    newsletterChechbox: document.querySelector('.newsletter_chechbox'),
    newsletterField: document.querySelector('#applicant_application_additional_attributes_newsletter'),
    submitButton: document.querySelector('#applicant_submit_action')
  }
}

const getLists = () => {
  let hear = [];
  let tech = [];

  document.querySelectorAll('.tech_list').forEach(e => {
    tech.push(e.textContent);
  });

  domElements().hearList.forEach(e => {
    if (e.checked) { hear.push(e.name) }
  });
  hear.push(domElements().otherText.value)

  return {
    hear: hear,
    tech: tech
  }
}

const updateLists = () => {
  domElements().hearField.value = getLists().hear;
  domElements().techField.value = getLists().tech;
}
const jQueryDragSort = () => {
  domElements().techSortable.sortable({
    placeholder: "ui-state-highlight",
    update: () => { updateLists() }
  });
  domElements().techSortable.disableSelection();
}

document.addEventListener("turbolinks:load", () => {
  domElements().otherText.style.visibility = 'hidden';
  jQueryDragSort();
  getLists();
  updateLists();
  domElements().submitButton.disabled = true;
  domElements().newsletterChechbox.checked = true;

  domElements().hearList.forEach(e => {
    addEventListener('change', (event) => { updateLists() }
    );
  })

  domElements().otherText.addEventListener('focusout', (event) => { updateLists() })
  domElements().otherCheckbox.addEventListener('change', () => {
    domElements().otherText.style.visibility = domElements().otherCheckbox.checked ? 'visible' : 'hidden';
    domElements().otherText.value = domElements().otherCheckbox.checked ? '' : null;
  });


  domElements().policyChechbox.addEventListener('change', () => {
    domElements().submitButton.disabled = !(domElements().policyChechbox.checked);
  });

  domElements().newsletterChechbox.addEventListener('change', () => {
    domElements().newsletterField.value = domElements().newsletterChechbox.checked;
  });
})
