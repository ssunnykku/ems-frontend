import styled from "styled-components";
import Body from "../components/Body";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FullPageModal from "../components/FullPageModal";
import Loading from "../components/Loading";

/* 학생정보 카드 */
const StudentInfoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & span{
    font-weight: bold;
  }
`;

const StudentInfoTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.8205rem;
`;

const EditBtn = styled.button`
  width: 100%;
  border-radius: 0.7rem;
  padding: 0.5rem;
  margin-top: 1.7435rem;
  font-size: 0.85rem ;
  background-color: #E7E7E7;
`;

/* 출석 입력 카드 */
const Title = styled.h1`
  font-weight: bolder;
  text-align: left;
  width: 100%;
  margin-top: -0.62rem;

`;
const AttendanceCardBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.18rem;

  div{
    margin-bottom: 1.846rem;
    h1{
      font-weight: bolder;
      font-size: 0.8rem; 
      margin-bottom: 0.2rem;

    }
    h2{
      font-size: 0.72rem;
      color: #999999;
    }
  }
  
`;

const TimeTable = ({open, close}) => {
  const TimeTableWrapper = styled.div`
    display: flex;
    column-gap: 1rem;
    height: 2.6667rem;
    
    font-size: 0.8205rem;
  `;
  const TimeColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin: 0;
    div{
      padding: 0 0.48rem;
      margin: 0;
    }
    hr{
      color:#E7E7E7;
    }
  `;
  return <TimeTableWrapper>
    <TimeColumn>
      <div>입실</div>
      <hr/>
      <div>{open}</div>
    </TimeColumn>
    <TimeColumn>
      <div>퇴실</div>
      <hr/>
      <div>{close}</div>
    </TimeColumn>
  </TimeTableWrapper>
}

const BlueBtn = styled.button`
  background-color: #5C7CFA;
  width: 5.128rem;
  height: 1.641rem;
  border-radius: 0.307rem;
  color: white;
  font-size: 0.7194rem;

`;
const Mypage = () => {
  return <>
    <Header title={"마이페이지"}></Header>
    <Body>
      <Card>
        <StudentInfoTable>
          <StudentInfoRow><span>이름</span><span>김선희</span></StudentInfoRow>
          <StudentInfoRow><span>HRD Net ID</span><span>sun</span></StudentInfoRow>
          <StudentInfoRow><span>생년월일</span><span>1993.06.02</span></StudentInfoRow>
          <StudentInfoRow><span>전화번호</span><span>010-1234-5678</span></StudentInfoRow>
        </StudentInfoTable>
        <EditBtn>내 정보 수정하기</EditBtn>
      </Card>
      <Card>
        <Title>출석 입력</Title>
        <AttendanceCardBody>
          <div>
            <h1>자바 클라우드 개발자 과정</h1>
            <h2>24.02.27 ~ 24.07.24</h2>
          </div>
          <TimeTable open={'13:13'} close={'15:15'}></TimeTable>
          <BlueBtn popovertarget='editModal'>입실</BlueBtn>
        </AttendanceCardBody>
      </Card>
    </Body>
    <Footer currentPage="mypage"></Footer>
    <FullPageModal id='editModal'><Loading isComplete></Loading></FullPageModal>
  </>;
};

export default Mypage;
