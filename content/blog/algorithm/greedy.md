---
title: Greedy algorithm 겉핥기
date: 2021-01-05 11:01:07
category: algorithm
draft: false
---

## Greedy algorithm이란?

Greedy Algorithm은 매 순간마다 최적인 답을 선택해 나가며 최적해를 도출하는 알고리즘이다. 순간마다 택하는 선택은 그 상황에서 최적이지만 이를 지속적으로 수집하며 전체적인 해를 만들어도 이것이 최적해라는 보장은 없다. 따라서 greedy algorithm을 적용할 때에는 지역적으로 최적이면서 전역적으로 최적인 문제에 적용해야 한다.

지역적으로 최적이면서 전역적으로 최적인 문제란 무엇일까? 그리디 알고리즘이 잘 동작하는 경우의 문제는 한번의 선택이 다음 선택과 전혀 무관한 **탐욕 선택 속성**, 매 순간의 최적해가 문제 전체의 최적해여야 한다는 **최적 부분 구조** 라는 특성을 가진다. 

위의 두가지 특성을 갖지 않더라도 어느정도의 해답을 알려준다. 따라서 문제 풀이의 가능성을 보거나 적당한 근사값을 찾을 때에 사용할 수 있으며 계산 속도가 빠르기 때문에 실용적으로 사용할 수 있다.

### Greedy algorithm의 대표적인 문제
내 경험상으로는 최단 경로를 구하는 [Dijkstra Algorithm을 사용하는 문제](https://programmers.co.kr/learn/courses/30/lessons/42861)가 예시로 많이 등장했다.

위 문제는 모든 섬을 연결하는 선택지 중 가장 작은 해는 무엇인지 출력하는 문제로, dijkstra algorithm을 이용하여 쉽게 해결할 수 있었다.

```python
def solution(n, costs):
    answer = 0
    # visit 경로를 저장하기 위한 table 생성 후 cost순으로 정렬
    cycle_table = [x for x in range(n)]
    costs.sort(key=lambda cost: cost[2])
    
    for cc in costs:
      # 이미 연결되어있는 경우 continue
      if get_boss(cycle_table, cc[0]) == get_boss(cycle_table, cc[1]):
        continue
      # 연결 표시를 남기고 cost를 더함
      set_union(cycle_table, cc[0], cc[1])
      answer += cc[2]

    return answer

# b에 a의 boss를 연결하여 둘이 연결되어있다는 표시를 table에 저장
def set_union(table, a, b):
  origin = table[b]
  table[b] = get_boss(table, a)

  # table을 순회하며 boss를 업데이트
  for kk in range(len(table)):
    if table[kk] == origin:
        table[kk] = table[b]
    
# 연결된 node를 따라가며 어디에 연결되어있는지 반환
def get_boss(table, a):
  if table[a] == a:
    return a
  else:
    table[a] = get_boss(table, table[a])
    return table[a]
```

위의 코드에서는 `cost` 순으로 정렬하여 낮을 cost를 순차적으로 선택하는 동시에 cycle이 생기는 path는 `continue`로 제외함으로서 dijkstra algorithm을 구현한 예시이다.
