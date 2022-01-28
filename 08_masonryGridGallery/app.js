// grid 생성 및 post 업로드
"use strict";

// 변수 선언
const container = document.querySelector(".container");
let previousScreenSize = window.innerWidth;

// function 선언
function generateMasonryGrid(columns, posts) {
  // basically clear container
  container.innerHTML = "";

  // store all column arrays which contain the relevant posts
  let columnWrappers = {};

  // create column item array and add this to columnwrapper object
  for (let i = 0; i < columns; i++) {
    columnWrappers[`column${i}`] = [];
  }

  for (let i = 0; i < posts.length; i++) {
    const column = i % columns;
    columnWrappers[`column${column}`].push(posts[i]);
  }
  
  for (let i = 0; i < columns; i++) {
    let columnPosts = columnWrappers[`column${i}`];
    let div = document.createElement("div");
    div.classList.add("column");
    
    columnPosts.forEach(post => {
      let postDiv = document.createElement("div");
      postDiv.classList.add("post");
      let image = document.createElement("img");
      image.src = post.image;
      let hoverDiv = document.createElement('div');
      hoverDiv.classList.add('overlay');
      let title = document.createElement('h3');
      title.innerText = post.title;
      hoverDiv.appendChild(title);

      postDiv.append(image, hoverDiv);
      div.appendChild(postDiv);
    });
    container.appendChild(div);
  }
}

window.addEventListener('resize', () => {
  imageIndex = 0;
  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    generateMasonryGrid(1, posts);
  } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
    generateMasonryGrid(2, posts);
  } else if (window.innerWidth > 1000 && previousScreenSize < 1000) {
    generateMasonryGrid(4, posts);
  }
  previousScreenSize = window.innerWidth;
});

// page load
if (previousScreenSize < 600) {
  generateMasonryGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  generateMasonryGrid(2, posts);
} else {
  generateMasonryGrid(4, posts);
}

