document.addEventListener("DOMContentLoaded", function() {
  var languageForm = document.getElementById("languageForm");
  var radios = languageForm.elements.language;

  var selectedLanguage = localStorage.getItem("selectedLanguage");
  if (selectedLanguage) {
      Array.from(radios).forEach(function(radio) {
          if (radio.value === selectedLanguage) {
              radio.checked = true;
          }
      });
  }

  languageForm.addEventListener("submit", function(event) {
      event.preventDefault();
      var selectedValue = "";
      Array.from(radios).forEach(function(radio) {
          if (radio.checked) {
              selectedValue = radio.value;
          }
      });

      document.cookie = "selectedLanguage=" + selectedValue + "; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      localStorage.setItem("selectedLanguage", selectedValue);
  });
});
