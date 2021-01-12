---
title: pythonic한 코드 짜기 - 2. list comprehension, for
date: 2021-01-12 18:01:62
category: python
draft: false
---

## 개요

내가 Python으로 코드를 작성하면서 사용했던 구문이나 keyword들을 python의 주요 내장 기능으로 대체해보려 한다.

```python
import timeit

def timer(function):
  def new_function(*args, **kwargs):
    start_time = timeit.default_timer()
    res = function(*args, **kwargs)
    diff = timeit.default_timer() - start_time

    print('{name} took {time} sec'.format(name=function.__name__, time=diff))
    
    return res
  return new_function
```

만약 성능의 차이가 있을 것으로 생각되는 코드는 [여기](https://gist.github.com/jonathan-kosgei/a0e3fb78d81f9f3a09778ced6eca7161)를 참고하여 작성한 timer decorator로 함수가 얼마나 걸리는지 확인하며 성능을 비교해볼 것이다.

## list comprehension

```python
# for로 list 생성
@timer
def make_list_for(x):
  ll = []
  for aa in range(x):
    ll.append(aa)
  return ll

# list comprehension으로 list 생성
@timer
def make_list(x):
  ll = [x for x in range(x)]
  return ll

make_list(100000)
make_list_for(100000)
```

**실행 결과**
```
make_list took 0.005469713000000001 sec
make_list_for took 0.010103812 sec
```

## for, sum

```python
# for를 사용해 sum 계산
@timer
def sum_list_for(list):
  sum = 0
  for l in list:
    sum += l
  return sum

# sum 함수 사용
@timer
def sum_list_sum(list):
  return sum(list)
```

**실행 결과**
```
sum_list_for took 0.005110203000000001 sec
sum_list_sum took 0.0016137849999999995 sec
```

## zip, enumerate

```python

list_1 = [1, 2, 3, 4, 5, 6]
list_2 = ['a', 'b', 'c', 'd', 'e']

# 평소에 사용하던 for 예시
for ii in range(len(list_1)):
  print(ii, list_1[ii])
  # do action

# python에서 권장하는 예시
for idx, val in enumerate(list_1):
  print(idx, val)
  # do action

# 두개의 list를 순회할 떄

# 권장하지않는 예시
for ii in range(len(list_1)):
  print(list_1[ii], list_2[ii])

# 권장하는 예시 - 하나의 리스트 순회가 끝나면 바로 종료
for l1, l2 in zip(list_1, list_2):
  print(l1, l2)
```

## 결론

- for 대신 list comprehension을 사용하는 것이 더 빠르다
- for 사용할떄는 index로 접근하는 것보다 enumerate, zip을 사용하는 것이 더 깔끔하다
- list의 모든 element를 접근해 값을 구하는 것과 같은 작업은 내장 함수를 이용하는 것이 빠르다(sum, reduce 등)