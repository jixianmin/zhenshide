import Accordion from "./Accordion2";
import { accordionData } from "../datas/bootstrap";

const Bootstrap = () => {
  return (
    <>
      <h1>부트스트랩</h1>
      <br />
      <Accordion data={accordionData} />
    </>
  );
};

export default Bootstrap;
