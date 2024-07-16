import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AttendancePage = () => {
  return <>
    <Header title={"출결 조회"}></Header>
    <Body></Body>
    <Footer currentPage="attendancePage"></Footer>
  </>;
};

export default AttendancePage;
