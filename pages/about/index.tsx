import Layout from "../../components/common/layout";
import { NeoContent } from "../../components/common/styled-component";

const About = () => {
  return (
    <Layout>
      <NeoContent>
        <h2>Shin, Yukyung</h2>
        <p>email yuuuk94@gmail.com</p>
        <p>
          제가 생각하는 프론트엔드 개발은 사용자가 가장 먼저 만나는
          “얼굴”입니다.
          <br />
          JAVASCRIPT와 REACT를 기반으로 작업 중인 프론트엔드 개발자,
          신유경입니다.
          <br />
          사용자와 양방향 소통할 수 있는 인터렉션 기능에 관심이 많습니다.
          사용자의 행동을 유도하는 UI/UX가 어떻게 하면 유의미하게 비즈니스로
          연결될 수 있을지 고민합니다. 실제로 서비스 되는 웹과 앱을 분석하고,
          직접 서비스를 개발해보며 성장해가고 있습니다.
          <br />
          개발뿐만 아니라 기획과 디자인에도 관심이 많고 이해도가 높습니다.
          다양한 분야의 사람들과 소통하기를 좋아합니다.
        </p>
        <img src="/assets/blog/hello-world/cover.jpg" />
      </NeoContent>
    </Layout>
  );
};

export default About;
