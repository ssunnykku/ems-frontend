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
  const attendanceRate = (course.attendanceDays / course.totalTrainingDays) * 100;
  const statusKr = course.status == -1 ? "수강 취소" : course.status == 0 ? "현재 수강중" : "수료 완료";
  const ProgressWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > span{
      margin-left: 1rem;
      font-weight: bold;
    }
  `;
  return (
    <Card>
      <CourseCardWrapper>
        <CourseTitle>
          <h2 className={course.status == 0 ? "current" : ""}>{statusKr}</h2>
          <h1>{course.number}기 {course.name}</h1>
          <h2>{course.startDate} ~ {course.endDate}</h2>
        </CourseTitle>
        {course.status == 0 ? <ProgressWrapper><ProgressBar val={attendanceRate}></ProgressBar><span>{attendanceRate}%</span></ProgressWrapper> : null}
        <BasicInfoTable>
          <BasicInfoRow><span>구분</span><span>{course.type}</span></BasicInfoRow>
          <BasicInfoRow><span>교육 과목</span><span>{course.subject}</span></BasicInfoRow>
          <BasicInfoRow><span>총 교육일수</span><span>{course.totalTrainingDays}일</span></BasicInfoRow>
          <BasicInfoRow><span>일일 교육시간</span><span>{course.trainingHoursPerDay}시간</span></BasicInfoRow>
          <BasicInfoRow><span>강사명</span><span>{course.professorName}</span></BasicInfoRow>
        </BasicInfoTable>
      </CourseCardWrapper>
    </Card>
  )
}

const ProgressBar = ({height = '1.0256',val }) => {
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
    height: ${height}rem;
    border-radius: ${height}rem;

    div{
      height: 100%;
      width: ${val}%;
      border-radius: ${height}rem;
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

// 샘플 데이터
const courses = [{
  name: "자바 클라우드 개발자 과정",
  number: 277,
  type: "구직자 무료",
  subject: "JAVA",
  totalTrainingDays: 100,
  trainingHoursPerDay: 8,
  professorName: "홍길동",
  startDate: "24.02.28",
  endDate: "24.07.24",
  attendanceDays: 62,
  status: "0"
},{
  name: "자바 클라우드 개발자 과정",
  number: 276,
  type: "재직자 유료",
  subject: "JAVA",
  totalTrainingDays: 30,
  trainingHoursPerDay: 8,
  professorName: "홍길동",
  startDate: "23.02.28",
  endDate: "23.07.24",
  attendanceDays: 25,
  status: 1
}]
const CoursePage = () => {
  return <>
    <Header title="수강 이력"></Header>
    <Body>
      {courses.map(course => (
        <CourseCard course={course}></CourseCard>
      ))
      }
    </Body>
    <Footer currentPage="coursePage"></Footer>
  </>;
};

export default CoursePage;
