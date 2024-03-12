import { NextPage } from "next";
import AnimetionImg from "../../components/common/AnimetionImg";
import Layout from "../../components/common/layout";
import { NeoContent } from "../../components/common/styled-component";

const About: NextPage = () => {
  const skills = [
    "React / Vue / Next.js",
    "Javascript / TypeScript / jQuery",
    "HTML / CSS / SCSS",
    "PHP / MySQL / Maria DB / Firebase",
    "Git / GitHub / GitLab",
    "Zeplin / Adobe XD / Adobe Photoshop / Figma",
  ];
  return (
    <Layout>
      <NeoContent>
        <h2 className="text-lg text-textSub font-semibold">
          인터렉티브 프론트엔드 개발자
        </h2>
        <h2 className="mt-1 mb-4 text-3xl font-bold  text-textMain">
          신유경 <span className="text-textSub">Shin, Yukyung</span>
        </h2>
        <p className="mb-16 text-md text-textMain font-semibold">
          yuuuk94@gmail.com
        </p>
        <AnimetionImg />
        <p className="text-md text-textMain font-bold">
          인터렉티브 서비스를 지향하는 프론트엔드 개발자로서 사용자 행동을
          유도하는 UI/UX 가 어떻게 하면 유의미한 비즈니스로 연결될 수 있을지
          고민합니다.
          <br />
          유저 프로세스와 사용성이 매끄러우면서 완성도 높은 서비스 개발을 목표로
          합니다.
          <br />
          <br />
          자바스크립트와 타입스크립트를 기반으로 다양한 프레임워크와
          라이브러리를 빠르게 습득하여 프로젝트에 적용할 수 있습니다.
          <br />
          주도적인 학습과 세미나, 라이브 강의 등에 참여하며 꾸준한 성장을 위해
          노력하고 있습니다.
          <br />
          기획과 디자인에도 관심이 많고 이해도가 높습니다. 공동 목표 실현을 위해
          동료들과 적극적으로 커뮤니케이션합니다.
        </p>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">
            Work Experience
          </p>
          <div className="text-textMain">
            <p className="mb-2 text-xl font-bold">아이오앤코코리아</p>
            <p className="text-sm">예스비팀 웹 프론트엔드 개발 담당 매니저</p>
            <p className="text-sm">2023. 01 ~ 2024. 02</p>
            <br />
            <p className="text-sm">
              - 글로벌 유통, 무역 스타트업(시리즈 B, 개발 담당 2 명)
              <br />
              <br />- K 브랜드 글로벌 B2B 플랫폼 예스비 프론트엔드 개발 담당
              <br />
              <br />- 웹 서비스 PWA 전환 및 앱 출시, 백오피스 대시보드, 회원
              주문 시스템, 컨텐츠 관리 기능, 백오피스 ERP 고도화, 자동견적 발행
              및 판매가 관리 기능, 상품 진열 관리 기능 개발 프로젝트 수행
              <br />
              <br />
              - 지속적인 검색엔진 최적화 및 성능 개선을 통해 입사 대비 MAU 350%
              증가, 월간 검색 유입 1012% 증가, 주간 검색 유입 1346% 증가, 최종
              렌더링 완료 시간(TTI) 4.2s 단축, 라이트하우스 성능 점수 59 점
              상승, 바이어 유입 극대화를 통한 직간접적 매출 상승 기여
              <br />
              <br />- Next.js, React, Redux toolkit, SCSS, CSS-in-JS(styled
              components, emotion), Git, github, ESLint, Prettier, Figma,
              Jenkins, Azure VM
            </p>
            <br />
          </div>
        </div>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">
            Other Experience
          </p>
          <div className="text-textMain">
            <p className="text-lg font-bold">오픈소스 기여</p>
            <p className="text-sm">
              2023. 11, 채널톡 오픈 소스에 타입 추가 요청
            </p>
          </div>
          <br />
          <div className="text-textMain">
            <p className="text-lg font-bold">원티드랩 주관 프리온보딩 챌린지</p>
            <p className="mb-2 text-sm">
              주니어 웹(프론트엔드/백엔드) 개발자 대상 직무 교육
            </p>
            <p className="text-sm">2024. 03, Scaling 을 고려한 아키텍처(AWS)</p>
            <p className="text-sm">2023. 10, JWT 로그인 구현</p>
            <p className="text-sm">2023. 06, 컴포넌트 설계와 스토리북</p>
            <p className="text-sm">2023. 05, 모노레포와 yarn berry</p>
            <p className="text-sm">2022. 10, SSR, SSG, Next.js</p>
          </div>
          <br />
          <div className="text-textMain">
            <p className="text-lg font-bold">
              [NCS]프론트엔드 개발 양성과정 수료
            </p>
            <p className="text-sm">그린 컴퓨터 아카데미</p>
            <p className="mb-2 text-sm">2021. 11 ~ 2022. 04</p>
            <p className="mb-2 text-sm leading-relaxed">
              React, jQuery 등의 라이브러리와 프레임워크 활용한 화면 및 동적
              기능 구현
              <br />
              Axios, Ajax, Fetch API를 통한 비동기 처리 및 외부 API 적용
              <br />
              My SQL, Firebase, PHP 등을 활용한 데이터베이스 구성 및 CRUD 구현
            </p>
          </div>
        </div>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">Skills</p>
          {skills.map((skill) => (
            <p className="mb-2 text-lg font-bold text-textMain">{skill}</p>
          ))}
        </div>
      </NeoContent>
    </Layout>
  );
};

export default About;
