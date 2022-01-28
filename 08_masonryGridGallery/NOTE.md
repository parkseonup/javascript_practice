# Q1. 왜 main을 position: fixed로 잡는가? relative는 안되나?

강의와 같이 main의 position을 fixed로 잡으면 body가 container의 영역을 인지하지 못한다.  
main의 position을 relative로 잡으면 body가 포스팅된 container의 영역을 온전히 인지할 수 있을텐데 왜 conor는 이렇게 코드를 짰을까? 의문이 들었다.

conor의 영상을 보아도 이유를 알 수 없어서, conor가 벤치마킹한 두 사이트를 살펴보았다.

- savee.it
- pinterest.com

두 군데 모두 다 포스팅이 되는 contents의 영역을 position: relative 잡았다.<br/><br/>


## A. 결론은 position: relative로 만들어도 괜찮다.  

그저 conor의 취향이 position: fixed 였던걸로.

conor의 코드에서 main을 position: relative로 바꿨을 때 정상 작동하게 하려면,

```
html,
body {
  overflow: visible;
}

main {
  position: relative;
  overflow: visible;
}
```

로 css를 변경해주면 된다.<br/><br/>


# Q2. 콘솔에 columnWrappers[column${i}]의 type을 부르면 왜 Array가 아닌 Object로 출력되는가?

columnWrappers[column${i}]을 처음 선언해줄 때

    columnWrappers[column${i}] = [];

즉, Array로 선언해주었기 때문에 콘솔창에 type을 출력하면 Array로 표시될 줄 알았는데 결과값은 Object였다. 

Array와 Object에 대한 개념 정리가 모호하게 되어있던 탓에 이러한 오해가 생긴 것이다. Array와 Object의 개념을 다시 정리해보자.<br/><br/>


# Q3. resize시 window.innerWidth 값과 resize 전에 선언했던 previousScreenSize 값에 사이즈 차이가 왜 생기는가?


# Q4. resize event의 기준점을 왜 window.innerWidth와 previousScreenSize 두 가지 모두로 삼는가?  