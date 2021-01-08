---
title: Pythonic한 코드 짜기 - 1. 개요
date: 2021-01-08 09:01:29
category: Python
draft: false
---

## Pythonic한 코드란 무엇일까?

말 그대로 파이썬다운 코드라는 의미이다. python에 내장된 고유 기능들을 최대한 응용하여 간결하고 효율적인 코드를 작성하는 것을 말한다.

어떤 언어로 작성된 코드이건 항상 올바른 결과를 내고, 읽기 편하고 수정하기 쉽다면 좋은 코드라고 생각한다. pythonic하게 코드를 작성하는 것은 python을 사용하면서 좋은 코드로 가는 방향을 가이드해준다고 생각하면 좋을 것 같다.

## Pythonic한 코드를 작성해야 하는 이유 

```python
# not pythonic
numbers = []
for ii in range(10):
  numbers.append(10)

# pythonic
numbers = [x for x in range(10)]
```

위의 예시는 0~9의 수를 담은 numbers 배열을 생성하는 예시이다. `not pythonic`한 코드에서는 numbers 리스트를 초기화한 후 `append`를 사용해 수를 집어넣었다. 반면 `pythonic`한 코드에서는 list comprehension을 사용해 배열을 생성했다. 위쪽에서 반복문을 사용한 예시는 여러 언어에서 사용할 수 있는 방법이라 익숙하지만, 아래 코드는 *한줄에 읽힌다*는 느낌을 받을 수 있다.

## Pythonic한 코드를 작성하는 방법

[PEP8](https://pep8.org/)이라는 Python 프로그래머들이 정해놓은 Python의 코드 스타일이 있는데, 이를 준수하며 코드를 작성하면 여러 사람이 읽고 유지보수 하기 쉬운 코드를 작성할 수 있다. 물론 이 규칙을 무조건 준수해야하는 것은 아니지만, 일정 수준 이상의 가독성과 일관성을 유지하는 데에 도움이 된다. `pip` package로 pep8을 설치하면 내 코드가 pep8 규정에 맞는지 확인할 수도 있다.

```
# pep8 설치
$ pip install pep8

# pep 규정 벗어나는 Line 검사하기
$ pep8 <source code>
```

또한 Python에 내장된 기능을 최대한 활용하면서 코드를 작성하는 것이 더 효율적이라는 결과를 발표한 [프레젠테이션](https://archive.pycon.kr/2018/program/46)이 있다. 

위처럼 pythonic한 코드를 짜려면 시간이 조금 덜리더라도 [여기](https://python-guide-kr.readthedocs.io/ko/latest/writing/style.html)와 같은 사이트에서 지속적으로 대체 가능한 기능을 알아보며 적용하는 것이 좋을 것이다. 아마 한번에 완벽하게는 되지 않겠지만 꾸준히 알아가다 보면 점점 좋은 코드를 향해 갈 수 있을 것이다.

### 참고

[파이썬을 여행하는 히치하이커를 위한 안내서](https://python-guide-kr.readthedocs.io/ko/latest/)

[PEP8](https://www.python.org/dev/peps/pep-0008/#string-quotes)

[안주은 님의 PYCON 발표](https://archive.pycon.kr/2018/program/46)
