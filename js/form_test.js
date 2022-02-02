function checkOnlyOne(element) {
  
  const checkboxes 
      = document.getElementsByName("_optin");
  
  checkboxes.forEach((cb) => {
    cb.checked = false;
  })
  
  element.checked = true;
}