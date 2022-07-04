function toggle() {
  var myDIV_toggle = document.getElementById("myDIV");
  console.log("toggle");
  myDIV_toggle.classList.toggle("transform-active");

  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  box1.style.visibility = "visible";
  setTimeout(() => {
    box1.style.visibility = "hidden";
    box2.style.visibility = "visible";
    setTimeout(() => {
      box2.style.visibility = "hidden";
      box3.style.visibility = "visible";
      setTimeout(() => {
        box3.style.visibility = "hidden";
      }, 5000);
    }, 5000);
  }, 5000);
}
