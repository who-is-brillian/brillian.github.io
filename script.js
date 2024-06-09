const scriptURL =
  "https://script.google.com/macros/s/AKfycby8QWaxbl1Bwpu9f4oQc8XZDzxNFepjaReRsJvcKkEBXuU6zrRw9tWaedyNBNe1fYIQ/exec";
const form = document.forms["contact-form-portfolio"];

const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // ketika tombol submit di klik
  // tampilkan tombol loading hilangkan tombol kirim
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim
      // hilangkan tombol loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      // tampilkan alert
      myAlert.classList.toggle("hidden");
      // reset form
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
