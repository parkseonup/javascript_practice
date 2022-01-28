# 왜 main을 position: fixed로 잡는가? relative는 안되나?

강의와 같이 main의 position을 fixed로 잡으면 body가 container의 영역을 인지하지 못한다. 
main의 position을 relative로 잡으면 body가 포스팅된 container의 영역을 온전히 인지할 수 있을텐데 왜 conor는 이렇게 코드를 짰을까? 의문이 들었다.

conor의 영상을 보아도 이유를 알 수 없어서, conor가 벤치마킹한 두 사이트를 살펴보았다.

- savee.it
- pinterest.com

두 군데 모두 다 포스팅이 되는 contents의 영역을 position: relative 잡았다.

## 결론은 position: relative로 만들어도 괜찮다.
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

로 css를 변경해주면 된다.
