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
        <p className="text-md text-textMain font-light">
          제가 생각하는{" "}
          <span className="font-bold">
            프론트엔드 개발은 사용자가 가장 먼저 만나는 “얼굴”
          </span>
          입니다.
          <br />
          사용자와 양방향 소통할 수 있는{" "}
          <span className="font-bold">인터렉션 기능</span>에 관심이 많습니다.
          <br />
          <span className="font-bold">사용자의 행동을 유도하는 UI/UX</span>가
          어떻게 하면{" "}
          <span className="font-bold">
            유의미한 비즈니스로 연결되어 가치 창출
          </span>
          할 수 있을지 고민 합니다.
          <br />
          <span className="font-bold">실제 서비스를 분석</span>
          하고, 다양한{" "}
          <span className="font-bold">
            프레임워크와 라이브러리를 시도
          </span>하며 <span className="font-bold">꾸준한 성장을 위해 노력</span>
          하고 있습니다.
          <br />
          개발뿐만 아니라 <span className="font-bold">기획과 디자인</span>에도
          관심이 많고 이해도가 높습니다.
          <br />
          동료들과의{" "}
          <span className="font-bold">목표를 위한 효율적인 커뮤니케이션</span>을
          지향합니다.
        </p>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">Experience</p>
          <div className="text-textMain">
            <p className="mb-2 text-lg font-bold">유비케어</p>
            <p className="text-sm">플랫폼 개발팀 / 프론트엔드 엔지니어</p>
            <p className="text-sm">2022. 07 ~ 2022. 09 </p>
            <br />
            <p className="mb-2 font-bold">
              - 의사 경영 지원 플랫폼{" "}
              <span className="font-light">2022.08 ~ 2022.09</span>
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              병원과 의사 경영에 필요한 다양한 서비스를 연결해주는 웹 기반
              플랫폼 서비스
              <br /> Vuetify가 적용된 UI/UX를 디자인에 맞게 커스텀하여 회원가입
              및 다수 서비스 화면 구현
              <br />
              Js와 iframe으로 연동되는 외부 서비스를 Vue에 맞게 적용하여 자사
              플랫폼에 연동
              <br />뷰 로직과 비즈니스 로직의 분리를 고민하며, 구현된 서비스
              웹사이트 보수
              <br /> git flow를 도입한 개발 전략에 따라 git과 sourcetree를
              활용하여 팀원들과 협업
              <br /> 기획자, 디자이너와 적극적으로 커뮤니케이션하며, 인터렉션
              구현 및 UI/UX 개선
              <br />
              Vue, Vuetify, CSS, Git, ESLint, Prettier, Zepline, Redmine
            </p>
            <p className="mb-2 font-bold">
              - 플랫폼 개발팀 내 세미나 참여{" "}
              <span className="font-light">2022.08 ~ 2022.09</span>
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              팀 내 세미나에서 "사용자 이탈을 방지하는 UX 아이디어"와
              "리팩터링"에 대해 발표
            </p>
            <p className="mb-2 font-bold">
              - 고객센터 콜백 접수 서비스{" "}
              <span className="font-light">2022.07</span>
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              입사 후 처음 참여한 고객센터로부터 콜백 요청하는 웹 기반 서비스
              <br />
              고객센터의 연결 상태 화면 뷰와 공지사항 및 검색 화면 뷰 구현
              <br />
              Nuxt.js, Vuetify, SCSS, Git, ESLint, Prettier
            </p>
          </div>
          <p></p>
        </div>
      </NeoContent>
      <NeoContent>
        <div>
          <p className="pb-4 text-lg text-textSub font-semibold">
            Other Experience
          </p>
          <div className="text-textMain">
            <p className="mb-2 text-lg font-bold">
              주니어 프론트엔드 개발자 대상 프리온보딩 챌린지
            </p>
            <p className="text-sm">주관사 원티드랩 </p>
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
            <p className="mb-2 text-lg font-bold">
              [NCS]프론트엔드 개발 양성과정 수료
            </p>
            <p className="text-sm">그린 컴퓨터 아카데미</p>
            <p className="text-sm">2021. 11 ~ 2022. 04</p>
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
          <p className="mb-2 text-sm text-textMain leading-relaxed">
            React / Vue / TypeScript / Next.js
            <br />
            HTML / CSS / SCSS / JavaScript / jQuery
            <br />
            MySQL / Maria DB / Firebase / PHP
            <br />
            Git / GitHub
            <br />
            Zeplin / XD / Adobe Photoshop
          </p>
        </div>
      </NeoContent>
    </Layout>
  );
};

export default About;
