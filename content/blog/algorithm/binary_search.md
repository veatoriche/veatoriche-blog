---
title: 이분 탐색 겉핥기
date: 2021-01-07 07:01:34
category: aws cloud practitioner
draft: false
---

## 이분 탐색

이분 탐색은 정렬 되어 있는 배열에서 특정 데이터를 찾는 기법 중 하나이다. 순차 탐색이 처음부터 끝까지 모든 데이터를 체크하는 것과 다르게 탐색 범위를 반씩 줄여나가면서 데이터를 찾는 탐색 방법이다.

한 예로 `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]` 이라는 정렬된 데이터 셋에서 x를 찾는 과정을 순차 탐색과 이분 탐색의 비교를 보자

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 순차 탐색으로 x의 index 찾기
def sequential(x):
  for idx in range(len(numbers)):
    if numbers[idx] == x:
      return idx

# 이분 탐색으로 x의 index 찾기, 재귀 함수로 구현
def binary_recursive(start, end, x):
  mid = (start + end) // 2
  if numbers[mid] == x:
    return mid
  st, ed = (start, mid) if x < numbers[mid] else (mid, end)
  return binary_recursive(st, ed, x)

# 이분 탐색으로 x의 index 찾기, 반복문으로 구현
def binary_loop(x):
  start = 0
  end = len(numbers) - 1

  while start <= end:
    mid = (start + end) // 2
    if numbers[mid] == x:
      return mid
    start, end = (start, mid) if x < numbers[mid] else (mid, end)

#7이라는 data의 index 출력
print(sequential(7))
print(binary_recursive(0, 9, 7))
print(binary_loop(7))

# 출력 결과
# 6
# 6
```

### 수행 시간

순차 탐색의 경우, 모든 element를 확인해야 하기 떄문에 O(N)의 시간 복잡도를 갖는다.

이분 탐색의 수행 시간을 계산해보면, 이분 탐색을 k번 진행하면 (1/2)^K * N의 자료 수를 갖게 된다. k번 진행했을 때 자료의 갯수가 1, 즉 탐색에 성공했을 경우 N * (1/2)^K = 1 이므로 K = log_2(N) 이라고 할 수 있다. K가 시행 횟수이므로 수행 시간은 O(logN)에 비례한다고 할 수 있다.