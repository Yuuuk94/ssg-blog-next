import Link from "next/link";
import { NeoContent } from "../common/styled-component";
import AnimetionImg from "../../components/common/AnimetionImg";

const MainContent = () => {
  const images = [
    "/assets/icon/galaxy.png",
    "/assets/icon/programming.png",
    "/assets/icon/atom.png",
    "/assets/icon/desk-lamp.png",
    "/assets/icon/code.png",
  ];
  return (
    <>
      <NeoContent>
        <div>

          <AnimetionImg />
          <h2 className="text-lg font-semibold  text-textSub">
            안녕하세요,&nbsp;
            <span className="text-textMain">
              씩씩하고 유연한 프론트엔드 개발자, 신유경
            </span>
            입니다.
            <br />
            <span className="text-textMain">React</span>와&nbsp;
            <span className="text-textMain">Typescript</span>를 기반으로 작업
            중입니다. 사용자와 양방향 소통할 수 있는&nbsp;
            <span className="text-textMain">인터렉션 기능</span>에 관심이
            많습니다. <br />
            사용자의 행동을 유도하는 UI/UX가 어떻게 하면&nbsp;
            <span className="text-textMain">
              유의미하게 비즈니스로 연결될 수 있을지
            </span>
            &nbsp; 고민합니다.
          </h2>
        </div>
      </NeoContent>
      {/* <NeoContent>
        <div className="px-16 py-10">gk</div>
      </NeoContent> */}
    </>
  );
};

export default MainContent;
