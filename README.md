# by-sjlee

이상정의 포트폴리오 & 블로그

---

## 개발 서버

### 서버 켜기
```bash
npm run dev
```
→ http://localhost:3000 에서 확인

### 서버 끄기
터미널에서 `Ctrl + C`

---

## 블로그 글 쓰기

### 1. 마크다운 파일 생성
`content/posts/` 폴더에 `.md` 파일을 추가한다.

```
content/posts/글-제목-슬러그.md
```

### 2. 프론트매터 작성
파일 상단에 아래 형식으로 정보를 입력한다.

```markdown
---
status: open
title: 글 제목
date: "2026-06-01"
excerpt: 글 요약 한 줄
---

본문 내용을 여기에 작성한다.
```

**status 옵션**
- `open` — 글 목록에 공개됨
- `draft` — 목록에서 숨겨짐 (URL 직접 접근은 가능)

### 3. 마크다운 문법

```markdown
# 제목 1
## 제목 2
### 제목 3

일반 본문 텍스트

**굵게**
*기울임*

- 순서 없는 목록
- 항목

1. 순서 있는 목록
2. 항목

> 인용문

`인라인 코드`

---  (구분선)
```

### 4. 이미지 삽입
이미지 파일을 `public/images/posts/` 폴더에 넣고 아래처럼 사용한다.

```markdown
![이미지 설명](/images/posts/파일명.png)
```

---

## 배포

GitHub에 push하면 Vercel이 자동으로 배포한다.

```bash
git add -A
git commit -m "커밋 메시지"
git push
```

→ https://blog-sjlee.vercel.app 에 자동 반영
