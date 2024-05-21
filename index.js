const btn = document.getElementById("btn");
const link = document.getElementById("link");

btn.addEventListener("click", function () {
  const url = link.value.replace("/edit#gid=", "/export?format=xlsx&gid=");
  window.open(url, "_blank").focus();
});
