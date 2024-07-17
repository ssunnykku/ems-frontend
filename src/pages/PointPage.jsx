import styled from "styled-components";
import Body from "../components/Body";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Palette from "../styles/Palette";

const PointPage = () => {
  const CourseWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -0.6153rem;
    margin-bottom: -1.2307rem;
    row-gap: 0.5rem;
    & > select{
      box-sizing: border-box;
      width: 3.589rem;
      height: 1.5384rem;
      font-size: 0.6153rem;
      padding-left: 0.1rem;
      border: 0.01rem solid rgba(0,0,0, 0.2);
      border-radius: 10%;
    }
    & > h1{
      font-size: 1.0256rem;
      font-weight: bold;
    }
    & > h2{
      color: ${Palette.TextSecondary};
      font-size: 0.8205rem;
      font-weight: 500;
    }
  `;
  const PointWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.8205rem;

    & > h1{
      margin-top: -0.6153rem;
      font-weight: bold;
      font-size: 1.0256rem;
    }

    & > table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.8205rem;
      overflow-y: scroll;
      
      thead td{
        background-color: #E7E7E7;
        border:none;
        padding: 0.5128rem 0;
        font-weight: bold;
      }

      & td{
        max-width: 5.3rem;
        padding: 0.5128rem 0;
      }


      & tr {
        border-bottom: 0.0512rem solid #E7E7E7;
      }
      tfoot tr{
        border-top: 0.1024rem solid #E7E7E7;
        border-bottom: 0.1024rem solid #E7E7E7;

        td{
          font-weight: bold;
        }
      }
    }
    `;

  const PointRow = ({ date, category, point }) => {
    return (
      <tr>
        <td>{date}</td>
        <td>{category}</td>
        <td>{point}</td>
      </tr>
    )
  }
  return <>
    <Header title={"포인트 조회"}></Header>
    <Body>
      <Card align="flex-start">
        <CourseWrapper>
          <select id="myCourseNumberSelect">
            <option value='5'>277기</option>
          </select>
          <h1>자바 클라우드 개발자 과정</h1>
          <h2>24.02.27 ~ 24.07.24</h2>
        </CourseWrapper>
      </Card>
      <Card>
        <PointWrapper>
          <h1>포인트 적립내역</h1>
          <table>
            <thead>
              <tr>
                <td>적립일</td>
                <td>항목</td>
                <td>포인트</td>
              </tr>
            </thead>
            <tbody>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
              <PointRow date='24.06.12' category='시험치기 응시' point='10'></PointRow>
              <PointRow date='24.06.14' category='자격증 합격' point='5'></PointRow>
            </tbody>
            <tfoot>
              <tr>
                <td>총 적립액</td>
                <td></td>
                <td>80</td>
              </tr>
            </tfoot>
          </table>
        </PointWrapper>
      </Card>
    </Body>
    <Footer currentPage="pointPage"></Footer>
  </>;
};

export default PointPage;
