---
title: "하이애자일"
project: "팀 프로젝트/ 프론트엔드 작업"
date: "2022. 10 – 진행 중"
languge: "Frontend : React, TypeScript, Tailwind, Apollo Client, GraphQL<br/>Backend : Nest, GraphQL, PostgreSQL"
URL:
  demo: "https://hiagile-client.vercel.app/"
  git: "https://github.com/HIAGILE/client"
excerpt: "애자일 방법론을 기반으로 프로젝트 관리를 할 수 있는 프로젝트 메니지먼트 웹 서비스"
Image:
  cover: "/assets/work/cover/hiagile.png"
  url: ""
Number: "1"
---

## 소개

- 스크럼, 짝, EX, 칸반과 같은 다양한 애자일 방법론을 템플릿으로 적용할 수 있는 프로젝트 메니지먼트 웹 서비스입니다.
- 동료를 찾아 친구로 추가하고 프로젝트 멤버로 초대할 수 있습니다. 프로젝트 멤버들에게 일감을 분배하고 진행도를 관리할 수 있습니다. 스케줄러를 통해 프로젝트 별 할 일을 조회할 수 있습니다.
- 전 회사에서 만난 입사 동기와 함께 개발하였습니다.

## 역할

- 유저 프로세스 기획 및 화면 설계
- 프론트엔드 개발 및 배포

## 기능(제가 구현한 기능만 소개합니다)

- 로그인 및 유효성 검사
- 포털 로그인 클라이언트 처리 부분
- 회원가입 및 유효성 검사
- 회원가입 시 이메일 중복 확인
- 애자일 방법론을 적용한 프로젝트 생성
- 프로필 조회 및 수정
- 스케쥴 달력보기 및 필터 기능
- 알림 기능

## 개발 내용(제가 개발한 내용만 소개합니다)

- 로그인 상태를 확인하는 JWT 유무에 따른 접근가능 페이지 라우팅 분리 및 레이아웃 적용
- 카카오, githup 로그인 API 적용
- useForm Hook을 사용하여 로그인, 회원가입 input 태그 관리 및 유효성 검사
- 회원가입 시 이메일 중복체크 기능 개발
- Toast UI Calendar API를 사용해 다양한 캘린더 타입의 스케쥴 보기 및 필터 구현
- Graphql API 통신 및 CORS 에러 해결
- Apllo client로 내 정보 등 전역 상태 관리
- Vercel을 기반으로 github 레파지토리 연동을 통한 CI/CD 구성
- Git flow 전략 도입을 통해 팀원 간의 협업 향상

## 성장 경험

- GraphQL과 Apollo Client를 도입하며 기존에 사용해 보았던 Rest full API와 다른 방식의 API 통신 경험을 하였습니다. 처음에는 팀원이 GraphQL과 Apollo 사용을 적극적으로 주장해서 부담스러움도 있었으나 새로운 라이브러리 사용에 대한 호기심에 수락하였습니다. 새로운 기술을 빠르게 적응하기 위해 팀원과 페어 프로그래밍 방식으로 개발을 진행하며 학습했습니다.
- Apollo Client로 캐싱과 전역 객체 사용을 통한 상태 관리가 용의했습니다. 기존의 redux, react-query 등을 복합적으로 도입해서 구현해야 했던 상태관리를 Apollo Client만으로 구현할 수 있다는 점이 좋았습니다. 또한 GraphQL로 API 통신함에 있어서 원하는 output 데이터를 클라이언트에서 지정해 호출할 수 있는 점이 좋았습니다.
- 레파지토리를 관리하며 서비스 품질 개선을 위해 개발 목표에 맞는 기능이 구현 되었는지 확인하고 서로 피드백을 주고 받으며 보다 완성도 있는 프로젝트를 지향했습니다.
