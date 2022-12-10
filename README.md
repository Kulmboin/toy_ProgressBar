# toy_ProgressBar

### 바닐라 자바스크립트만을 사용하여 ProgrssBar 만들기

제로베이스 프론트엔드스쿨 과정중 progress bar 만들기를 보고 제작한 간단한 progress bar 입니다.

- div 태그 요소 안 프로그레스바 구현
- div 태그 안에서 가로로 컨텐츠를 넘길시 프로그레스바 왼쪽에서 오른쪽으로 색깔 채워짐

![요소 사이즈와 스크롤](https://media.vlpt.us/images/wiostz98kr/post/dec62e7b-1432-4db2-8154-8539fb0b3689/image.png)

강의에서는 브라우저 전체의 이동을 표현하였지만 tag 안에서 스크롤 기능을 넣은 후에 프로그레스 바를 만들어 보고 싶어서 만들어 보았습니다.

강의에서는 scrollTop 과 scrollHeight 를 사용하여 구현하였지만 가로 이동이기에 scrollLeft를 사용하였습니다.

[참고사이트]
https://ko.javascript.info/size-and-scroll#ref-801
