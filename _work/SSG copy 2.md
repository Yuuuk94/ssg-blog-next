---
title: "SSG 정적 블로그 & 포트폴리오"
excerpt: "프론트엔드 개발자로서 학습하며 알게 된 정보를 공유하는 블로그와 개인 프로젝트들을 소개하는 Next.js 기반의 SSG 웹사이트"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2022. 10"
project: "개인 프로젝트"
URL:
  demo: "https://ssg-portfolio.vercel.app/"
  git: "https://github.com/Yuuuk94/ssg-portfolio"
Image:
  url: "/assets/blog/hello-world/cover.jpg"
---

## 소개

프론트엔드 개발자로서 학습하며 알게 된 정보를 공유하는 블로그와 개인 프로젝트들을 소개하는 Next.js 기반의 SSG 웹사이트

## 기능

외부 블로그 RSS 피드 보기 및 더보기 버튼
개인 프로젝트 목록 보기

## 분석 및 이슈

Vercel을 기반으로 github 레파지토리 연동을 통한 CI/CD 구성
Next.js의 getStaticPaths를 통해 다이나믹 라우팅 페이지 구현
SSG, ISR 방식으로 getStaticProps를 활용해 정적 사이트 구현
기존에 운영되던 티스토리 개인 블로그에서 제공된 RSS 피드를 axios를 통해 비동기 연동
Xml2js 라이브러리를 활용하여 xml로 제공된 RSS 피드를 파싱하여 활용

## 프로젝트를 통해 얻은 것

CSR, SSR뿐 아니라 SSG, ISR에 대해 학습하고, SSG가 활용될 수 있는 블로그, 홍보 사이트 등의 사이트를 고민하다 새로운 포트폴리오와 블로깅 사이트를 제작할 수 있었습니다.
지속적으로 업데이트되는 외부 블로그 글을 반영하기에는 SSG의 한계를 느꼈으며, 대신 revalidate 옵션으로 24시간마다 다시 빌드가 되도록 설정하여 ISR을 구현하였습니다.
개인 블로그의 RSS 피드를 발행해 연동함으로써 블로그 PV 20정도 상승하는 부가 효과를 보았습니다.
