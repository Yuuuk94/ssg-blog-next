---
title: "고궁 PWA - 리팩터링"
project: "개인 프로젝트"
date: "2022. 10 - 2022. 11"
languge: "React, TypeScript, SCSS"
URL:
  demo: "https://gogung-451c2.web.app"
  git: "https://github.com/Yuuuk94/Gogung"
excerpt: "높아져 가는 우리 문화에 대한 관심과 엔데믹으로 다시 활기를 찾을 한국의 고궁과 종묘를 소개하는 PWA 웹/앱"
Image:
  cover: "/assets/work/cover/gogung.png"
  url: ""
Number: "2"
---

## 소개

- 높아져 가는 우리 문화에 대한 관심과 엔데믹으로 다시 활기를 찾을 한국의 고궁과 종묘를 소개하는 PWA 웹/앱 서비스입니다.
- 문화재청에서 제공하는 고궁관련 Open API를 연동하여 사용자가 손쉽게 고궁들을 조회하고 검색하며, 좋아요를 표시할 수 있습니다.

## 기능

- 문화재청 Open data API를 통한 고궁 조회 및 상세보기
- 갤러리, 리스트 타입 보기 및 리스트 정렬
- 비로그인 좋아요 기능
- 고궁 검색 및 랜덤 추천 기능

## 개발 내용

- 기존 React 프로젝트를 React + TypeScript로 마이그레이션
- Axios를 통해 문화재청 Open Data API 비동기 통신 및 CORS 에러 해결
- Promise all를 사용하여 다수의 비동기 통신을 병렬로 처리 및 로딩 속도 향상
  (2571.43 ms → 3.96 ms)
  → react-query를 도입하여 비동기 통신 상태 관리 및 캐싱 도입
- LightHouse를 통한 Web Vitals점검 및 성능 최적화
  (성능 : 91, 접근성: 95, 권장사항: 100, 검색엔진 최적화: 100, PWA: Yes)
- Firebase hosting을 통해 PWA 웹/앱 배포
- Swiper API를 사용하여 메인 슬라이드 배너 구현
- 검색창에 랜덤으로 고궁이 추천되어 자연스럽게 사용자가 호기심을 갖고 접근할 수 있는 흥미로운 UI/UX 구현
- Session storage를 활용해 비로그인 좋아요 기능 구현

## 성장 경험

- React만으로 만든 프로젝트에서 React + TypeScript로 마이그레이션 하면서 이전에 느꼈던 기술 부채를 조금이나마 해소하였습니다. TypeScript를 도입하며 any 타입 사용을 지양하여 타입 추론에 익숙해 지고자 노력하였습니다.
- 지속 가능한 유지 보수와 확장성을 고려하여 관심사에 따른 디렉토리와 컴포넌트를 재구성하였습니다.
- 뷰 로직과 비즈니스 로직을 분리했습니다. 비즈니스 로직은 단순히 분리할 뿐만 아니라 react-query를 사용해 비동기 통신 관리와 캐싱을 도입하였습니다. update가 일어나지 않는 공공 오픈 데이터에 캐싱을 과도한 refetching을 방지하여 성능을 향상할 수 있었습니다.
- 비회원 장바구니에서 힌트를 얻어 Session storage를 사용한 비로그인 좋아요 기능을 구현했습니다. 생명주기는 따로 주지 않았기에 언제든 재접속 시 기존의 좋아요 기록을 다시 볼 수 있습니다.
