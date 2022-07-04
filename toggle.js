function toggle() {
  var myDIV_toggle = document.getElementById("myDIV");
  console.log("toggle");
  myDIV_toggle.classList.toggle("transform-active");

  const box1 = document.getElementById("box1");
  const box2 = document.getElementById("box2");
  const box3 = document.getElementById("box3");
  const box4 = document.getElementById("box4");

  box1.style.visibility = "visible";
  box2.style.visibility = "hidden";
  box3.style.visibility = "hidden";
  box4.style.visibility = "hidden";
  setTimeout(() => {
    box2.style.visibility = "visible";
    setTimeout(() => {
      box3.style.visibility = "visible";
      setTimeout(() => {
        box4.style.visibility = "visible";
      }, 5000);
    }, 5000);
  }, 5000);
}
