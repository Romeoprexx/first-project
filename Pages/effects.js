let thumbs = document.getElementsByTagName("img");
let preview = document.getElementById("prev");

let url = "https://raw.githubusercontent.com/lukepchr/lukepchr.github.io/master/images/gallery/_1025.jpg";
preview.style.backgroundImage = `url(${url})`;

// add a "click" event listener to each thumbnail

for (let i = 0; i < thumbs.length; i++) {
  console.log(i);
  thumbs[i].addEventListener("click", function() {
    let url = thumbs[i].src;
    console.log(url);
    preview.style.backgroundImage = `url(${url})`;
  });
}
