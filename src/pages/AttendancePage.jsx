import styled from "styled-components";
import Body from "../components/Body";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import {useEffect, useState} from "react";
import * as Api from "../utils/api.js";


const LtSvg = ({ width, height, onClick }) => {
  return (
      <svg width={width} height={height} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M8.62854 0.26035C8.97567 0.607482 8.97567 1.1703 8.62854 1.51743L2.14597 8L8.62854 14.4826C8.97567 14.8297 8.97567 15.3925 8.62854 15.7397C8.28141 16.0868 7.71859 16.0868 7.37146 15.7397L0.26035 8.62854C-0.0867832 8.28141 -0.0867832 7.71859 0.26035 7.37146L7.37146 0.26035C7.71859 -0.0867832 8.28141 -0.0867832 8.62854 0.26035Z" fill="#999999" />
      </svg>

  )
}
const GtSvg = ({ width, height, onClick }) => {
  return (
      <svg width={width} height={height} viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <path d="M0.815796 0.26035C0.468663 0.607482 0.468663 1.1703 0.815796 1.51743L7.29837 8L0.815796 14.4826C0.468663 14.8297 0.468663 15.3925 0.815796 15.7397C1.16293 16.0868 1.72574 16.0868 2.07287 15.7397L9.18399 8.62854C9.53112 8.28141 9.53112 7.71859 9.18399 7.37146L2.07287 0.26035C1.72574 -0.0867832 1.16293 -0.0867832 0.815796 0.26035Z" fill="#999999" />
      </svg>


  )
}

const AttendanceTableWrapper = styled.div`
  width: 100%;
  padding: 0 0.6153rem;
  display: flex;
  flex-direction: column;
  row-gap: 0.8205rem;
    h1{
      text-align: left;
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
const AttendanceRow = ({date, status}) => {
  return (
      <tr>
        <td>{date}</td>
        <td>{status}</td>
      </tr>
  )
}

const AttendancePage = () => {

  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    Api.get('attendance-list?date=' + '2024-07-19').then((res)=> {
      setAttendances(res.result)

      const totalRate = rates.totalRate
      const monthRate = res.monthAttendanceRate
      let rateData = {monthRate, totalRate}
      setRates(rateData)

    });
  }, []);


  const [rates, setRates] = useState({
    monthRate: 0,
    totalRate: 0
  });

  useEffect(() => {
  Api.get('/total-attendance-rate').then((res)=> {
    const totalRate = res.result;
    const monthRate = rates.monthRate;
    let rateData = {monthRate, totalRate}
    setRates(rateData)
  })
  }, []);

  function initTotalRate(rate){
    setRates({
      ...rates,
      totalRate: rate
    })
  }
  const [month, setMonth] = useState(7);
  const prevMonth = () => {
    setMonth
  }



  return <>
    <Header title={"출결 조회"}></Header>
    <Body>
      <Card>
        <AttendanceWrapper>
          <div id="attendanceMonth">
            <input type="hidden" value='2024-07-01' name="currentMonth"/>
            <LtSvg width='9' height='16'></LtSvg>
            <span>{month}월</span>
            <GtSvg width='9' height='16'></GtSvg>
          </div>
          <h1>진행률</h1>
          <BasicInfoTable>
            <BasicInfoRow><span>{month}월 출석률</span><span>{rates.monthRate}%</span></BasicInfoRow>
            <BasicInfoRow><span>총 출석률</span><span>{rates.totalRate}%</span></BasicInfoRow>
          </BasicInfoTable>
        </AttendanceWrapper>
      </Card>
      <Card>
        <AttendanceTableWrapper>
          <h1>나의 출결 정보</h1>
          <table>
            <thead>
              <tr>
                <td>일자</td>
                <td>출결 정보</td>
              </tr>
            </thead>
            <tbody>
              {
                attendances.map((attendance, i) => (
                  <AttendanceRow date={attendance.date} status={attendance.status} key={i}></AttendanceRow>
                ))
              }
            </tbody>
          </table>
        </AttendanceTableWrapper>
      </Card>
    </Body>
    <Footer currentPage="attendancePage"></Footer>
  </>;
};


const AttendanceWrapper = styled.div`
  padding: 0 0.6153rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 0.8205rem;

    & > h1{
      font-size: 1.0256rem;
      font-weight: bolder;
      text-align: left;
    }

    #attendanceMonth span{
      font-size: 1rem;
      font-weight: bold;
      color: #505050;
      margin: 0 1.1794rem;
    }
  `;

const BasicInfoTable = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5128rem;
`;
const BasicInfoRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & span{
    font-weight: bold;
  }
`;

export default AttendancePage;
