###SSG 정적 블로그 & 포트폴리오

개인 프로젝트

2022. 10

Next.js, TypeScript, Tailwind CSS

## 데모보기	:https://ssg-portfolio.vercel.app

## 소개
-	프론트엔드 개발자로서 커리어 소개 및 학습하며 알게 된 정보를 공유하는 블로그를 종합적으로 소개할 개인 사이트가 필요하여 Next.js 기반의 SSG 웹사이트를 제작하였습니다.

## 기능
-	티스토리 블로그 RSS 피드 연동 및 보기
-	블로그 글 목록 더보기 버튼
-	개인 프로젝트 md 파일로 정리하여 목록 및 상세 보기

## 분석 및 이슈
-	Next.js의 getStaticPaths를 통해 다이나믹 라우팅 페이지 구현
-	getStaticProps를 활용해 SSG, ISR 방식으로 정적 사이트 구현
-	기존에 운영되던 티스토리 개인 블로그에서 제공된 RSS 피드를 axios로 비동기 연동 및 CORS 해결
-	Xml2js 라이브러리를 활용하여 xml로 제공된 RSS 피드를 파싱하여 사용
-	Vercel을 기반으로 github 레파지토리 연동을 통한 CI/CD 구성

## 프로젝트를 통해 배운 것
-	Next.js를 통해 SSR뿐만 아니라 SSG, ISR에 대해 경험했습니다. SSG가 활용될 수 있는 블로그, 홍보 사이트 등의 활용 사례를 고민하다 새로운 포트폴리오와 블로깅 사이트를 제작할 수 있었습니다.
-	간헐적으로 업데이트되는 외부 블로그의 RSS 피드를 반영하기에는 SSG의 한계를 느꼈습니다. 대신 revalidate 옵션으로 24시간마다 페이지가 다시 빌드가 되도록 설정하므로써 ISR을 구현하였습니다.
![image](https://user-images.githubusercontent.com/95343748/208450651-c334dbb4-da66-43aa-ab56-e04507ed9c41.png)
