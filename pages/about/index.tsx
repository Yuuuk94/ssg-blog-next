import { NextPage } from "next";
import AnimetionImg from "../../components/common/AnimetionImg";
import Layout from "../../components/common/layout";
import { NeoContent } from "../../components/common/styled-component";

const About: NextPage = () => {
  return (
    <Layout>
      <NeoContent>
        <h2 className="text-lg text-textSub font-semibold">
          프론트엔드 개발자
        </h2>
        <h2 className="mt-1 mb-4 text-3xl font-bold  text-textMain">
          신유경 <span className="text-textSub">Shin, Yukyung</span>
        </h2>
        <p className="mb-16 text-md text-textMain font-semibold">
          <span className="text-textSub">email</span>
          &nbsp;&nbsp;yuuuk94@gmail.com
        </p>
        <AnimetionImg />
        <p className="text-md text-textMain font-bold">
          인터렉션에 푹 빠진 주니어 프론트엔드 개발자, 신유경입니다.
          <br />
          사용자의 행동을 유도하는 UI/UX가 어떻게 하면 유의미한 비즈니스로
          연결될 수 있을지 고민하며 서비스를 개발합니다.
          <br />
          사용자 프로세스와 사용성이 매끄러우면서 완성도 높은 프론트엔드 개발을
          지향합니다.
          <br />
          바닐라 자바스크립트를 기반으로 다양한 프레임워크와 라이브러리를 빠르게
          습득하며 프로젝트에 적용할 수 있습니다.
          <br />
          주도적인 학습과 세미나 및 라이브 강의 등에 참여하며 꾸준한 성장을 위해
          노력하고 있습니다.
          <br />
          기획과 디자인에도 관심이 많고 이해도가 높습니다.
          <br />
          공동 목표 실현을 위해 동료들과 적극적으로 커뮤니케이션합니다.
        </p>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">Experience</p>
          <div className="text-textMain">
            <p className="mb-2 text-xl font-bold">유비케어</p>
            <p className="text-sm">플랫폼 개발팀 / 프론트엔드 엔지니어</p>
            <p className="text-sm">2022. 07 ~ 2022. 09 </p>
            <br />
            <div className="ml-4">
              <p className="font-bold">의사 경영 지원 플랫폼 </p>
              <p className="mb-2 text-sm">2022.08 ~ 2022.09</p>
              <p className="mb-4 text-sm leading-relaxed">
                병원과 의사 경영에 필요한 다양한 서비스를 연결해주는 웹기반
                플랫폼
                <br />
                서비스 Vuetify가 적용된 UI/UX를 디자인에 맞게 커스텀하여
                회원가입 및 다수 서비스 화면 보수
                <br />
                Js와 Iframe으로 제공되는 외부 서비스를 Vue 라이프 사이클에 맞게
                적용하여 자사 플랫폼에 연동
                <br />
                git flow를 도입한 개발 전략에 따라 git과 sourcetree를 활용하여
                팀원들과 협업
                <br />
                개발 테스트시 발견된 이슈를 redmine을 통해 리포팅 및 보수
                <br />
                기획자, 디자이너와 적극적으로 커뮤니케이션하며 인터렉션 구현 및
                UI/UX 개선
                <br />
                Vue, Vuex, Vuetify, CSS, Git, ESLint, Prettier, Zepline, Redmine
              </p>
              <p className="font-bold">플랫폼 개발팀 내 세미나 참여</p>
              <p className="mb-2 text-sm">2022.08 ~ 2022.09</p>
              <p className="mb-4 text-sm leading-relaxed">
                {`팀 내 세미나에서 <사용자 이탈을 방지하는 UX 아이디어>와
              <리팩터링>에 대해 발표`}
              </p>
              <p className="font-bold">고객센터 콜백 접수 서비스</p>
              <p className="mb-2 text-sm">2022.07</p>

              <p className="mb-4 text-sm leading-relaxed">
                입사 후 처음 참여한 프로젝트로 고객으로부터 고객센터 콜백 요청을
                받는 웹뷰 기반 서비스
                <br />
                고객센터의 연결 상태 화면 뷰와 공지사항 및 검색 화면 뷰 구현
                <br />
                Nuxt.js, Vuetify, SCSS, Git, ESLint, Prettier
              </p>
            </div>
          </div>
        </div>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">
            Other Experience
          </p>
          <div className="text-textMain">
            <p className="text-lg font-bold">
              주니어 프론트엔드 개발자 대상 프리온보딩 챌린지
            </p>
            <p className="mb-2 text-sm">주관사 원티드랩 </p>
            <p className="text-sm">2022. 12</p>
            <p className="mb-2 text-sm leading-relaxed">
              Yarn workspace와Yarn Berry를 통해 모노레포 구성 및 배포
              <br />
              Vercel의 turbo를 통한 모노레포 구성 및 배포
              <br />
              Feature flag와 TBD(Trunk Based Development)에 대해 학습
            </p>
            <p className="text-sm">2022. 10</p>
            <p className="mb-2 text-sm leading-relaxed">
              React+TypeScript로 Context API, History API를 활용하여 Routing
              기능 구현 <br />
              CSR, SSR, SSG에 대해 학습
              <br />
              Next.js로 SSG 정적 블로그 구현 및 최적화
            </p>
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
          <p className="mb-2 text-lg font-bold text-textMain">
            React / Vue / Next.js
          </p>
          <p className="mb-2 text-sm text-textMain leading-relaxed">
            CSR, SSR, SSG 구현이 가능합니다.
            <br />
            Redux, Vuex, Apollo Client를 통한 상태 관리가 가능합니다.
          </p>
          <p className="mb-2 text-lg font-bold text-textMain">
            Javascript / TypeScript / jQuery
          </p>
          <p className="mb-2 text-sm text-textMain leading-relaxed">
            ES6+ 문법에 익숙합니다.
            <br />
            AJAX, Fetch API, Axios를 사용한 비동기 통신 및 CORS 에러를 해결할 수
            있습니다.
            <br />
            순수 자바스크립트를 사용해 프로젝트를 개발해본 경험이 있습니다.
            <br />
            기존 프로젝트를 TypeScript로 마이그레이션한 경험이 있습니다.
          </p>
          <p className="mb-2 text-lg font-bold text-textMain">
            HTML / CSS / SCSS
          </p>
          <p className="mb-2 text-sm text-textMain leading-relaxed">
            시멘틱 태그 사용이 가능합니다.
            <br />
            미디어 쿼리 및 flex box를 사용할 수 있습니다.
          </p>
          <p className="mb-2 text-lg font-bold text-textMain">
            PHP / MySQL / Maria DB / Firebase
          </p>
          <p className="mb-2 text-sm text-textMain leading-relaxed">
            CRUD 구현이 가능합니다.
          </p>
          <p className="mb-2 text-lg font-bold text-textMain">
            Git / GitHub / GitLab
          </p>
          <p className="mb-2 text-sm text-textMain leading-relaxed">
            Git Flow 전략에 따른 협업이 가능합니다.
            <br />
            충돌 해결을 할 수 있습니다.
          </p>
          <p className="mb-2 text-lg font-bold text-textMain">
            Zeplin / Adobe XD / Adobe Photoshop / Figma
          </p>
        </div>
      </NeoContent>
    </Layout>
  );
};

export default About;
