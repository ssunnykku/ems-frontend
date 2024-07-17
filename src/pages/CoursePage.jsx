import styled, { keyframes } from "styled-components";
import Body from "../components/Body";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";

const CourseCard = ({ course }) => {
  const CourseCardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.0256rem;
    padding: 0 0.6153rem;
    margin: -0.6153rem 0;
  `;
  const CourseTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.5128rem;
    & > h2{
      width: 100%;
      text-align: left;
      font-size: 0.8205rem;
      font-weight: bold;
      color: #999999;
    }
    & > h2.current{
      color: #5C7CFA;
    }
     & > h1{
      width: 100%;
      text-align: left;
      font-size: 0.9rem;
      font-weight: bold;
     }
  `;
  return (
    <Card>
      <CourseCardWrapper>
        <CourseTitle>
          <h2 className={"current" == "current" ? "current" : ""}>현재 수강중</h2>
          <h1>277기 자바 클라우드 개발자 과정</h1>
          <h2>24.02.27 ~ 24.07.24</h2>
        </CourseTitle>
        {"current" == "current" ? <ProgressBar val="62.5%"></ProgressBar> : <></>}
        <BasicInfoTable>
          <BasicInfoRow><span>구분</span><span>구직자 무료</span></BasicInfoRow>
          <BasicInfoRow><span>교육 과목</span><span>JAVA</span></BasicInfoRow>
          <BasicInfoRow><span>총 교육일수</span><span>100일</span></BasicInfoRow>
          <BasicInfoRow><span>일일 교육시간</span><span>8시간</span></BasicInfoRow>
          <BasicInfoRow><span>강사명</span><span>홍길동</span></BasicInfoRow>
        </BasicInfoTable>
      </CourseCardWrapper>
    </Card>
  )
}

const ProgressBar = ({height = '1.0256rem',val }) => {
  const progress = keyframes`
    0%{
      width: 0%;
    }
    100%{
      width: ${val};
    }
  `;
  const ProgressBarWrapper = styled.div`
    width: 100%;
    border: 0.05128rem solid #999999;
    height: ${height};
    border-radius: ${height};

    div{
      height: 100%;
      width: ${val};
      border-radius: ${height};
      background-color: #5C7CFA;
      animation: ${progress} 2s ease-out;
    }
  `;
  return (
    <ProgressBarWrapper>
      <div id="progressBar"></div>
    </ProgressBarWrapper>
  )
}
const BasicInfoTable = styled.div`
width: 100%;
display: flex;
flex-direction: column;
row-gap: 0.5128rem;
font-size: 0.8205rem;
`;
const BasicInfoRow = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
& span:first-child{
  font-weight: bold;
}`;
const CoursePage = () => {
  return <>
    <Header title="수강 이력"></Header>
    <Body>
      <CourseCard></CourseCard>
    </Body>
    <Footer currentPage="coursePage"></Footer>
  </>;
};

export default CoursePage;
