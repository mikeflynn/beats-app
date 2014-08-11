window.onresize = function(event) {
  document.querySelector('#frame').style.width = window.innerWidth + "px";
  document.querySelector('#frame').style.height = window.innerHeight - 36 + "px";
};

window.onload = function(event) {
  document.querySelector('#backBtn').addEventListener("click", function(e) {
    document.querySelector('#frame').back();
  });

  document.querySelector('#forwardBtn').addEventListener("click", function(e) {
    document.querySelector('#frame').forward();
  });
};