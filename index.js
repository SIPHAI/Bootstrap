const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  let ebody = `
    <h1>User Email: </h1>${fname.value}
    <br>
    <h1>Details: </h1>${lname.value}
    `;

  Email.send({
    SecureToken: "996bf2cd-87d4-4895-9a55-c2ab3bac9ec4", //add your token here
    To: "phalsiphai18@gmail.com",
    From: "phalsiphai18@gmail.com",
    Subject: "This is the subject",
    Body: ebody,
  })
});
