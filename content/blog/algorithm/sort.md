---
title: Sort 겉핥기
date: 2021-01-04 12:01:17
category: algorithm
draft: false
---

## Sort

정렬은 n개의 데이터가 입력으로 주어졌을 때, 지정된 기준에 맞게 정렬하여 출력하는 알고리즘이다. 정렬 알고리즘은 꽤 많은 종류가 있는데, 대부분 수행시간은 O(n^2)에서 O(nlogn) 사이다. 

### Selection sort

**수행 과정**

1. 최대 원소를 찾는다.
2. 최대 원소를 맨 오른쪽 원소와 바꾼다.
3. 맨 오른쪽(최대 원소)를 탐색에서 제외한다.
4. 하나의 원소만 남을때까지 1~3의 과정을 반복한다.

```python
def selection_sort(array):
  # 원소가 1개 남을 때까지 반복
  for ii in range(len(array) - 1, 0, -1):
    max_idx = 0
    # 최우측으로 바꾼 횟수만큼 반복에서 제외
    for jj in range(ii - 1):
      # 최대값의 idx 저장
      if array[max_idx] <= array[jj]:
        max_idx = jj
    # 최대값과 마지막 값 바꾸기
    temp = array[ii]
    array[ii] = array[max_idx]
    array[max_idx] = temp
```

**수행 시간**

수행 시간은 반복문이 2개이므로 O(n^2)이라고 할 수도 있지만, 좀 더 정확히 말하면 `(n-1) + (n-2) + (n-3) ... + 1 = O(n^2)`이라고 할 수 있다. 이 경우에는 무조건 고정된 횟수를 반복하기 때문에 worst case와 average case의 수행 시간이 같다.

### Bubble Sort

**수행 과정**

1. i번째 원소와 i+1번째 원소를 비교한다
2. (오름차순일 경우) 더 큰 원소가 뒤쪽으로 가게 교환한다.
3. 맨 오른쪽 원소를 탐색에서 제외한다
4. 2개의 원소가 남을때 까지 1~3의 과정을 반복한다.

```python
def bubble_sort(array):
  for ii in range(len(array) - 1, 1, -1):
    for jj in range(ii - 1):
      if array[jj] >= array[jj + 1]:
        temp = array[jj + 1]
        array[jj + 1] = array[jj]
        array[jj] = temp
```

**수행 시간**
selection sort와 같이 고정된 횟수를 반복한다. worst, average, best case 모두 O(n^2)의 수행 시간을 가진다.

### Insertion Sort

**수행 과정**

1. i번 원소를 복사한다
2. 0 ~ i-1 까지의 원소들 중 i번 원소를 넣을 위치를 찾는다
3. 넣을 위치 ~ i - 1번의 원소를 오른쪽으로 shift한다
4. 넣을 위치에 i번 원소를 삽입한다.
5. 위 과정을 i가 배열의 크기가 될때 까지 반복한다.

```python
def insertion_sort(array):
  for ii in range(1, len(array)):
    for jj in range(ii, 0, -1):
      if array[jj - 1] >= array[jj]:
        temp = array[jj]
        array[jj] = array[jj - 1]
        array[jj - 1] = temp
```
코드가 버블소트와 유사하게 나왔는데, 1~4번 과정을 수행하는 중, shift하는 것의 구현을 bubble sort처럼 좌우를 교환하는 방식으로 구현했기 때문인데, 이렇게되면 아주 구체적으로 말하면 삽입 정렬의 조건에는 맞지 않는다. 그 이유는 다음과 같다

1. bubble sort는 고정된 횟수를 반복하지만 insertion sort는 넣을 위치를 탐색하는 과정 중에 `break`을 사용하여 해당 위치에 집어넣고 탐색을 종료해야 한다.
2. 1번과 같은 이유로 insertion sort는 average case와 worst case의 시간 복잡도 게산이 다르다 
   1. worst case : 1 + 2 + ... (n-1)
   2. average case : 1/2(1 + 2 + ... (n-1))

물론 시간 복잡도는 O(n^2)으로 같지만 이왕 정확한게 좋으니 더 정확하게 짜면 다음과 같다

```python
def insertion_sort(array):
  for ii in range(1, len(array)):
    for jj in range(ii, 0, -1):
      if array[jj]<array[jj-1]:
          temp=array[jj]
          array[jj]=array[jj-1]
          array[jj-1]=temp
      # break 추가
      else:
          break
```

### Merge Sort

분할 정복(divide and conquer) 방법의 하나로 문제를 작은 2개의 문제로 분리하고 해결한 후 결과를 합쳐 문제를 해결하는 전략이다.

**수행 과정**
1. 배열을 길이가 1이 될 때 까지 반으로 계속 나눈다
2. 각각 독립적으로 정렬한다
3. 합친다
4. 2 ~ 3 의 과정을 배열이 모두 합쳐질 떄 까지 반복한다

```python
def merge_sort(array):
  print(array)
  if len(array) > 1:
    mid = len(array) // 2
    left = array[:mid]
    right = array[mid:]

    left = merge_sort(left)
    right = merge_sort(right)
    return merge(left, right)
  else:
    return array

def merge(l, r):
  result = []
  for ii in range(len(l) + len(r)):
    if len(l) == 0 or len(r) == 0:
      result += r
      result += l
      break
    if l[0] >= r[0]:
      result.append(r[0])
      del r[0]
    else:
      result.append(l[0])
      del l[0]
  return result
```

**수행 시간**
병합 정렬은 기존 데이터를 담을 추가 메모리가 필요한 단점이 있지만 수행 시간은 worst case에서도 O(nlogn)을 보장한다는 점에서 굉장히 효율적이라고 할 수 있다.

### Quick Sort

merge sort와 같이 분할 정복 방법에 속하는 알고리즘이다.

**수행 방법**
1. 리스트 안의 한 요소를 pivot 으로 지정한다.
2. pivot보다 작은 원소는 왼쪽, 큰 원소는 오른쪽으로 옮긴다.
3. pivot을 제외한 좌, 우 배열에 1~2번 과정을 반복한다.
4. 더 이상 분할이 되지 않을 때 까지 반복한다.

```python
def quick_sort(array):
  if len(array) <= 1:
    return array
  pivot = array[0]
  left, mid, right = [], [], []
  for el in array:
    if el < pivot:
      left.append(el)
    elif el == pivot:
      mid.append(el)
    else:
      mid.append(el)
  
  return quick_sort(left) + mid + quick_sort(right)
```

```python
def quick_sort(array):
  if len(array) <= 1:
    return array
  
  return quick_sort([x for x in array if x < array[0]])
        + [x for x in array if x == array[0]]
        + [x for x in array if x > array[0]]
```

lambda를 활용하면 위와도 같이 작성할 수 있다.

**수행 시간**

best case에서는 left와 right의 크기가 같을 경우 merge sort와 마찬가지로 O(nlogn)의 복잡도를 가지지만 left, right가 둘 중 하나에 원소들이 몰리게 되면 O(n^2)의 성능을 갖게 된다. 따라서 pivot값을 어떻게 설정하느냐에 따라 성능이 좌우된다.