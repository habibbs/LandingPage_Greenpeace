const handleGetFormData = () => {
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let city = document.getElementById("city").value;
   let zipCode = document.getElementById("zip-code").value;
   let status = checkboxIsChecked();

   return {
      name,
      email,
      city,
      zipCode,
      status,
   };
};

function isNumber(input) {
   return !isNaN(input);
}

function checkboxIsChecked() {
   return document.getElementById("status").checked;
}

function validateFormData(data) {
   if(
      data != null && isNumber(data.zipCode) && checkboxIsChecked()
   ) {
      return true;
   } else {
      return false;
   }
}

function submit() {
   const data = handleGetFormData();

   if (validateFormData(data)) {
      document.getElementById("warning").innerText="";
   } else {
      document.getElementById("warning").innerText="Periksa form anda sekali lagi";
   }
}

const formregistrasi = document.getElementById("formRegis");
formregistrasi.addEventListener("submit", submit);