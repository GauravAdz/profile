document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // You can add code here to handle form submission, e.g., sending data to a server.
  // For a simple example, let's just log the form data to the console.
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  console.log("Form Data:", data);
});
