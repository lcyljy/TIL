# 14장 전역변수의 문제점

전역변수의 무분별한 사용은 위험.
전역변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역변수를 사용해야함.
전역변수의 문제점과 전역변수의 사용을 억제할 수 있는 방법 찾기.

## 14.1 변수의 생명주기

### 14.1.1 지역변수의 생명주기

변수는 선언에 의해 생성되고 할당을 통해 값을 갖는다. 그리고 언젠가 소멸한다. 즉, 변수는 생물과 유사하게 생성되고 소멸되는 생명주기가 있다. 변수에 생명주기가 없다면 한 번 선언된 변수는 프로그램을 종료하지 않는 한 영원히 메모리 공간을 점유하게 된다
<< // gabage ?

변수는 자신이 선언된 위치에서 생성되고 소멸한다. 전역 변수의 생명 주기는 애플리케이션의 생명주기와 같다. 하지만 함수 내부에서 선언된 지역변수는 함수가 호출되면 생성되고 함수가 종료되면 소멸한다.

4.4절 "변수 선언의 실행 시점과 변수 호이스팅" 에서 살펴본바와 같이 변수 선언은 선언문이 어디에 있든 상관 없이 가장 먼저 실행
즉, **변수 선언은** 코드가 한 줄 씩 순차적으로 실행되는 시점인 런타임에 실행되는 것이 아닌, **런타임 이전단계**에서 **자바스크립트 엔진에 의해 먼저 실행**

**지역변수의 생명주기는 함수의 생명주기와 일치.**

함수 몸체 내부에서 선언된 지역변수의 생명 주기는 함수의 생명 주기와 대부분 일치하지만 지역 변수가 함수보다 오래 생존하는 경우도 있다. 변수는 하나의 값을 저장하기 위해 확보한 메모리 공간 자체 또는 그 메모리 공간을 식별하기 위해 붙인 이름이다. 따라서 변수의 생명 주기는 메모리 공간이 확보된 시점부터 메모리공간이 해제되어 가용 메모리 풀에 반환되는 시점까지다.
함수 내부에서 선언된 지역변수는 함수가 생성한 스코프에 등록된다. 함수가 생성한 스코프는 렉시컬 환경이라 부르는 물리적인 실체가 있따고 했다. (13장.3절 스코프체인 참고) 따라서 변수는 자신이 등록된 스코프가 소멸(메모리 해제)될 때까지 유효하다. 할당된 메모릭 공간은 더 이상 그 누구도 참조하지 않을 때 가비지 콜렉터에 의해 해제되어 가용 메모리 풀에 반환된다. 즉 누군가가 메모리공간을 참조하고 있으면 해제되지 않고 확보된 생태로 남아있게 된다. 이는 스코프도 마찬가지다. 누군가 스코프를 참조하고 있으면 스코프는 소멸하지 않고 생존하게된다.
일반적으로 함수가 종료하면 함수가 생성한 스코프도 소멸한다. 하지만 누군가가 스코프를 참조하고 있따면 스코프는 해제되지 않고 생존하게 된다.

<!-- 24장 클로저 참조 -->

**호이스팅은 스코프를 단위로 동작한다.** 전역 변수의 호이스팅은 전역 변수의 선언이 전역 스코프의 선두로 끌어 올려진 것 처럼 동작한다. 따라서 전역 변수는 전역 전체에서 유효하다. 지역 변수의 호이스팅은 지역 변수의 선언이 지역 스코프의 선두로 끌어 올려진 것처럼 동작한다. 따라서 지역 변수는 함수 전체에서 유효하다. 즉, **호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것 처럼 동작하는 자바스크립트 고유의 특징을 말한다.**

### 14.1.2 전역변수의 생명주기

함수와 달리 전역 코드는 명시적인 호출 없이 실행된다. 다시말해, 전역 코드는 함수 호출과 같이 전역코드를 실행하는 특별한 진입점이 없고 코드가 로드되자마자 곧바로 해석되고 실행된다. 함수는 함수 몸체의 마지막 문 또는 반환문이 실행되면 종료한다. 하지만 전역코드에는 반환문을 사용할 수 없으므로 마지막 문이 실행되어 더 이상 실행할 문이 ㅇ벗을 때 종료한다.
var 키워드로 선언한 전역변수는 전역 객체의 프로퍼티가 된다. 이는 전역변수의 생명주기가 전역 객체의 생명주기와 일치한다는 것을 말한다.

> 전역 객체
> 전역 객체는 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다도 먼저 생성되는 특수한 객체다. 전역객체는 클라이언트 사이드 환경(브라우저)에서는 window, 서버사이드환경에서는 global 객체를 의미한다. 환경에 따라 전역 객체를 가리키는 다양한 식별자(window, self, this, frames, global)가 존재햇으나, ES11에서 globalTHis로 통일 되었다.
> 전역객체는 표준 빌트인 객체(Object, String, Number, Function, Array...)와 환경에 따른 호스트 객체, 그리고 var 키워드로 선언한 전역변수와 전역 함수를 프로퍼티로 갖는다.
>
> <!-- 21장 빌트인객체 참조  -->
>
> 브라우저 환경에서 전역객체는 window이므로 브라우저 환경에서 var 키워드로 선언한 전역변수는 전역 객체 window의 프로퍼티이다. 전역 객체 window는 웹페이지를 닫기 전까지 유효하다. 따라서 ㅍ브라우저 환경에서 var 키워드로 선언한 전역변수는 웹페이지를 닫을 때까지 유효하다. 즉, **var키워드로 선언한 전역변수의 생명주기는 전역 객체의 생명 주기와 일치한다.**

<hr/>

## 14.2 전역 변수의 문제점

1. 암묵적 결합
   > 모든 코드가 전역변수를 참조하고 변경할 수 있다. 변수의 유효범위가 크면 클수록 코드의 가독성은 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.
2. 긴 생명 주기
   > 전역변수는 생명주기가 길기 때문에 메모리 리소스도 오랜 기간 소비한다. 또한 전역 변수의 상태를 변경할 수 있는 시간도 길고 기회도 많다.
   > 더욱이 var 키워드는 변수의 중복 선언을 허용하므로 생명 주기가 긴 전역 변수는 변수의 이름이 중복될 가능성이 있다. 변수 이름이 중복되면 의도치 않은 재할당이 이뤄진다.
   >
   > 지역변수는 전역변수보다 생명 주기가 훨씬 잛다. 크지 않은 함수의 지역 변수는 생존 시간이 극히 짧고, 따라서 지역 변수의 상태를 변경할 수 있는 시간도 짧고 기회도 적다. 이는 전역변수보다 상태변경에의한 오류가 발생할 확률이 적다는 것을 의미한다. 또한 메모리 리소스도 짧은 기간만 소비한다.
3. 스코프 체인 상에서 종점에 존재
   > 변수를 검색할 때 전역변수가 가장 마지막에 검색된다는 것을 말한다. 즉 전역 변수의 검색 속도가 가장 느리다.
4. 네임스페이스 오염
   > 자바스크립트의 가장 큰 문제점 중 하나는 파일이 분리되어 있다 해도 하나의 전역 스코프를 공유한다는 것이다. 따라서 다른 파일 내에서 동일한 이름으로 명명된 전역변수나 전역함수가 같은 스코프 내에 존재할 경우 예상치못한 결과를 가져올 수 있다.

- QUESTION? 여기서 다른 파일에서 하나의 전역 스코프를 공유한다는 것이, import export 등으로 각각의 파일들에 영향을 미치고 있을 때 전역변수가 서로에게 영향을 미친다는 것을 말하는 것인지?

## 14.3 전역 변수의 사용을 억제하는 방법

변수의 스코프는 좁을 수록 좋기에 무분별한 전역 변수의 남발은 억제해야 한다.

### 14.3.1 즉시 실행 함수

함수 정의 와 동시에 호출되는 즉시 실행함수는 단 한번만 호출된다. 모든 코드를 즉시 실행함수로 감싸면 모든 변수는 실행 함수의 지역변수가 된다. 이러한 특성을 이용해 전역변수의 사용을 제한 할 수 있다.

```javascript
(function () {
  var foo = 10; // 즉시 실행 함수의 지역변수
  // ...
})();

console.log(foo); // ReferenceError: foo is not defined
```

### 14.3.2 네임스페이스 객체

전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법.

- QUESTION? 해당 방법이 정확히 어떻게 이뤄지는지 부가적으로 설명해줄 수 이는 사람 있으면 도와주시면 좋겠습니다 ㅠㅠ

### 14.3.3 모듈 패턴

모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행함수로 감싸 하나의 모듈을 만든다. 모듈 패턴은 자바스크립트의 강력한 기능인 클로저를 기반으로 동작한다. 보듈 패턴의 특징은 전역변수의 억제는 물론 캡슐화까지 구현할 수 있다는 것이다.
모듈 패턴을 이해하려면 클로저를 먼저 이해해야 하므로 지금은 클로저라는 기능을 통해 전역변수를 억제할 수 있다는 것에 주목.

- 캡슐화는 객체의 상태를 나타내는 프로퍼티와 프로퍼티를 참조하고 조작할 수 있는 동작인 메서드를 하나로 묶는 것을 말한다. 캡슐화는 객체의 특정 프로퍼티나 메서드를 감출 목적으로 사용하기도 하는데 이를 정보은닉이라고 한다.

대부분의 객체지향 프로그래밍 언어는 클래스를 구성하는 멤버에 대해 public, private, protected등의 접근 제한자를 사용해 공개 범위를 한정할 수 있다. public으로 선언된 데이터 도는 메서드는 외부에서 접근이 가능하지만 private로 선언된 경우는 외부에서 접근할 수 없고 내부에서만 사용된다. BUT, 자바스크립트는 public, private, proteceted 등의 접근 제한자를 제공하지 않는다. 모듈 패턴은 전역 네임스페이스의 오염을 막는 기능은 물론 한정적이기는 하지만 정보은닉을 구현하기 위해 사용한다.

- QUESTION? P.207 외부로 노출하고 싶지 않은 변수나 함수는 반환하는 객체에 추가하지 않으면 외부에서 접근할 수 없는 프라이빗 멤버가 된다.

### 14.3.4 es6 모듈

- ES6모듈을 사용하면 더는 전역변수를 사용할 수 없다. ES6모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다. 따라서 모듈내에서 VAR키워드로 선언한 변수는 더는 전역변수가 아니며 WINDOW 객체의 프로퍼티도 아니다. 모던 브라우저에서는 ES6 모듈을 사용할 수 있다. script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다. 모듈의 파일 확장자는 mjs를 권장한다.

# 15장 let, const 키워드와 블록 레벨 스코프

ES5까지는 변수를 선언할 수 있는 유일한 방법 : var 키워드 사용

## 15.1 var 키워드로 선언한 변수의 문제점

### 15.1.1 변수 중복선언 허용

> ```javascript
> var x = 1;
> console.log(x); // 1
> var x = 100;
> console.log(x); // 100
> ```

### 15.1.2 함수 레벨 스코프

var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다. 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역변수가 된다.

> ex. if문이라 for문 내에서 선언한 변수도 전역변수가된다.

### 15.1.3 변수 호이스팅

var 키워드로 변수를 선언하면 변수 호이스팅에 의해 변수 선언문이 스코프의 선두로 끌어올려진 것처럼 동작한다. 즉, 변수 호이싀팅에 의해 var키워드로 선언한 변수는 변수 선언문 이전에 참조할 수 있다. 단 할당문 이전에 변수를 참조함녀 언제나 undefined를 반환한다.
이러한 변수 선언문 이전에 변수를 참조하는 것은 변수 호이스팅에 의해 에러를 발생시키지는 않지만 프로그램의 흐름상 맞지 않을 뿐더러 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남긴다.

## 15.2 let 키워드

### 15.2.1 변수 중복선언 금지

### 15.2.2 블록 레벨 스코프

> > let 키워드로 선언한 변수는 모든 코드블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

### 15.2.3 변수 호이스팅

var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 ㅇ호이스팅이 발생하지 않는 것처럼 동작한다.
let 키워드로 선언한 변수는 "선언단계"와 "초기화 단계"가 분리되어 진행된다. 즉, 런타임 이전에 자바스크립트 엔진에 의해 암묵적으로 선언 단계가 먼저 실행되지만 초기화 단계는 변수 선언문에 도달했을 때 실행된다.
만약 초기화 단계가 실행되기 이전에 변수에 접근하려고 하면 참조 에러가 발생한다. let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계 시작 지점(변수 선언문)까지 변수를 참조할 수 없다. 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대라 부른다.

### 15.2.4 전역 객체와 let

var 키워드로 선언한 전역변수와 전역함수, 그리고 선언하지 않은 변수에 값을 할당한 암묵적 전역은 전역객체 window의 프로퍼티가 된다. 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있다.
let 키워드로 선언한 전역변수는 전역 객체의 프로퍼티가 아니다. 즉 window.foo와 같이 접근할 수 없다. let 전역 변수는 보이지 않는 개념적인 블록(전역 렉시컬 환경의 선언적 환경 레코드?)내에 존재하게 된다.

## 15.3 const 키워드

const 키워드는 상수를 선언하기 위해 사용한다.

### 15.3.1 선언과 초기화

const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다.

### 15.3.2 재할당 금지

### 15.3.3 상수

- 일반적으로 상수의 이름은 대문자로 선언해 상수임을 명확히 나타낸다. 여러 단어로 이뤄진 경우에는 언더스코어( \_ )로 구분해서 스네이크 케이스로 표현하는 것이 일반적이다.

### 15.3.4 const 키워드와 객체

const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다. 하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다. 변경 불가능한 값인 원시 값은 재할당 없이 변경(교체)할 수 있는 방법이 없지만 변경가능한 값인 객체는 재할당 없이도 직접 변겨잉 가능하다. 즉. const키워드는 재할당을 그밎할 뿐 "불변"을 의미하지는 않는다.

## 15.4 var vs. let vs. const

es6을 사용한다면 var 키워드는 사용하지 않는다.
재할당이 필요한 경우에 한정해 let 키워드를 사용, 변수의 스코프는 최대한 좁게 만든다.
변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요없는 상수 ) 원시 값과 객체에는 const 키워드를 사용한다. cosnt 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.

14장 및 15장 요약
전역변수의 문제점 및 let const키워드와 블록 레벨 스코프
변수는 선언에 의해 생성되고 할당을 통해 값을 갖고 언젠가 소멸한다. 변수에 생명주기가 없다면 한번 선언된 변수는 프로그램을 종료하지 않는 한 영원히 메모리공간을 점유하게 된다. 즉, 변수에 생명주기를 설정하지 않는다면 해당 프로그램이 계속해서 켜져있으면 메모리 공간의 점유를 지속적으로 하므로 다른 프로그램을 돌리는데 지장을 가져오게 된다. 변수는 자신이 등록된 스코프가 소멸(메모리 해제)될 때까지 유효하며, 할당된 메모리 공간은 더 이상 그 누구도 참조하지 않을 때 가비지 콜렉터에 의해 해제되어 가용 메모리 풀에 반환된다.
이 때 전역변수의 경우 전역 전체에서 유효한데. 이러한 전역변수로 인해 해당 스코프를 참조하고 있는 기간동안 메모리를 점유하므로 사용을 자제해야 하는 것.
문제점 요약.

1. 코드의 가독성 낮춤, 상태 변경될 가능성 높아짐( 암묵적 결합 )
2. 메모리 리소스를 오랫동안 소비 ( 긴 생명주기)
3. 검색속도가 가장 느림 (스코프 체인 상에서 종점에 존재)
4. 네임스페이스 오염

전역변수를 사용억제방법

1. 즉시실행함수
2. 네임스페이스 객체
3. 모듈 패턴
4. es6 모듈

.... \* 전역변수를 사용하면 위와 같이 4가지 이유로 안좋다. 그런데 let과 const를 사용하는 es6모듈에서는 전역 변수를 사용할 수 없다. 즉, 기존의 레거시가 존재하는 프로그램을 읽거나 수정 혹은 리모델링하는 경우에는 해당 개념에 대한 이해가 필요하지만 새로운 es6모듈에서는 해당 값을 고려할 필요가 없다(?)
es6에서는 var를 사용하지 않고 let 과 const를 사용하는데 let은 재할당이 가능한 변수고 const는 재할당이 불가능한 변수(단, 변수에 객체를 할당한 경우 값을 변경할 수 있다.)다. 변수 선언시 재할당의 여부를 알기 쉽지는 않지만 재할당되는 경우가 생각보다 적으므로 가급적 const를 사용하여 변수를 선언하는 것이 좋다.
