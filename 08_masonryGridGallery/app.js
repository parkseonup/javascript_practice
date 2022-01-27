"use strict";

// 변수 선언
const container = document.querySelector(".container");
let previousScreenSize = window.innerWidth;

// function 선언
function generateMasonryGrid(columns, posts) {
  container.innerHTML = "";

  let columnWrappers = {};
  for (let i = 0; i < columns; i++) {
    // 각각의 column 내용을 각 배열로 나눔
    columnWrappers[`column${i}`] = [];
  }
  for (let i = 0; i < posts.length; i++) {
    // posts를 각 컬럼에 순서대로 분배해서 담기
    const column = i % columns; // % 연산자 : 나눈 나머지값을 구함
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

console.log('let', previousScreenSize, window.innerWidth);

window.addEventListener('resize', () => {
  // 의문1 : resize시 window.innerWidth와 previousScreenSize 간의 차이가 왜 생기는가?
  // 의문2 : resize point를 왜 window.innerWidth와 previousScreenSize 사이즈 두개를 기준으로 하는가?
  imageIndex = 0;
  console.log('0resize', previousScreenSize, window.innerWidth);
  if (window.innerWidth < 600 && previousScreenSize >= 600) {
    console.log('1resize', previousScreenSize, window.innerWidth);
    generateMasonryGrid(1, posts);
  } else if (window.innerWidth >= 600 && window.innerWidth < 1000 && (previousScreenSize < 600 || previousScreenSize >= 1000)) {
    console.log('2resize', previousScreenSize, window.innerWidth);
    generateMasonryGrid(2, posts);
  } else if (window.innerWidth > 1000 && previousScreenSize < 1000) {
    console.log('4resize', previousScreenSize, window.innerWidth);
    generateMasonryGrid(4, posts);
  }
  previousScreenSize = window.innerWidth;
  console.log('reset', previousScreenSize, window.innerWidth);
});

// function 호출
if (previousScreenSize < 600) {
  // 화면 크기 : 600 미만 === column: 1로 포스팅
  generateMasonryGrid(1, posts);
} else if (previousScreenSize >= 600 && previousScreenSize < 1000) {
  // 화면 크기 : 600 이상 1000 미만 === column: 1로 포스팅
  generateMasonryGrid(2, posts);
} else {
  // 화면 크기 : 1000 이상 === column: 4로 포스팅
  generateMasonryGrid(4, posts);
}

