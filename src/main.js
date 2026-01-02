
const API = "https://api.tattoocapte.lxdevs.fr";

fetch(API + "/auth/login.php",{
  method:"POST",
  credentials:"include",
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify({ username:"Jaxon", password:"jaxon33" })
}).then(()=>alert("Login OK"));
