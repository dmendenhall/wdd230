const copyright = document.querySelector("#copyright");
copyright.innerHTML = new Date().getFullYear();

const lastupdate = document.querySelector("#lastupdate")
lastupdate.innerHTML = new Date(document.lastModified).toLocaleDateString("en-US")
