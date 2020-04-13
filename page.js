const getFormData = (formId) => {
  const formValues = [];
  const form = document.getElementById(formId);
  for (let i = 0; i < form.elements.length; i++) {
    const e = form.elements[i];
    formValues.push(JSON.parse(`{"${e.name}": "${e.value}"}`));
  }
  const final = JSON.parse(formValues);
  return final;
};

const estimate = (e) => {
  e.preventDefault();
  const formId = e.target.id;
  const data = getFormData(formId);
  const [RegionName] = data;
  console.log(data, RegionName);
};

estimate();
