document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      "entry.2005620554": formData.get("name"),
      "entry.1045781291": formData.get("email"),
      "entry.1065046570": formData.get("subject"),
      "entry.839337160": formData.get("message"),
    };

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSf00ddyHERDIZAWGWCPpOmLNc6aG0ABhSxPprIy1xfpH4Mlyw/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data),
      }
    )
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message.");
      });
  });
