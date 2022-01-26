'use strict';

// 변수 선언
const container = document.querySelector('.container');
let previousScreenSize = window.innerWidth;

// function 선언
function generateMasonryGrid(columns, posts) {
  container.innerHTML = '';

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
    // 의문 : columnWrappers, columnWrappers[`column${i}`] 는 왜 Array가 아니라 Object인가?
    //console.log('wrapper', typeof columnWrappers, columnWrappers);
    //console.log('wrapper[]', typeof columnWrappers[`column${i}`], columnWrappers[`column${i}`]);
    let div = document.createElement('div');
    div.classList.add('column');

    columnPosts.forEach(post => {
      let postDiv = document.createElement('div');
      postDiv.classList.add('post');

      // 여기부터 이해해보기
      let image = document.createElement('img');
      image.src = post.image;
    })
  }
}

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
