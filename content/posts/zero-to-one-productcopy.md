---
title: 제품PRD
date: "2026-05-10"
excerpt: 스타트업 초기 제품에서 디자이너가 속도보다 우선해야 할 것.
---

# 주문 플랫폼

## 프로젝트 개요

플랫폼을 구축한다.

![주문 플랫폼 화면](/images/posts/testimg.png)

### 목표

* 주문 과정을 단순화한다.
* 시안 승인 과정을 온라인화한다.
* 재주문을 쉽게 만든다.

## 주요 기능

1. 회원가입 및 로그인
2. 상품 선택
3. 파일 업로드
4. 결제
5. 시안 승인
6. 배송 조회

## 개발 일정

* [x] 요구사항 분석
* [x] 화면 설계
* [ ] 개발 진행
* [ ] 테스트
* [ ] 정식 오픈

> 사용자는 3분 이내에 주문을 완료할 수 있어야 한다.

## 기술 스택

`Next.js`

`Supabase`

`Tailwind CSS`

## 주문 상태

| 상태     | 설명        |
| ------ | --------- |
| 주문접수   | 주문이 생성됨   |
| 파일검수   | 업로드 파일 확인 |
| 시안승인대기 | 고객 승인 필요  |
| 제작중    | 인쇄 진행     |
| 배송중    | 출고 완료     |
| 배송완료   | 고객 수령     |

## API 예시

```javascript
async function createOrder(data) {
  const response = await fetch("/api/orders", {
    method: "POST",
    body: JSON.stringify(data)
  });

  return response.json();
}
```

---

문서 최종 수정일: 2026-05-30


