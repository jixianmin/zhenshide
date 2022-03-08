import React, { useRef } from "react";

const Ref = () => {
  const fileE1 = useRef(null);
  const handleUpload = () => {
    fileE1.current.click();
  };
  return (
    <div>
      <input type="file" style={{ display: "none" }} ref={fileE1} />
      <button onClick={handleUpload}>파일 업로드</button>
    </div>
  );
};

export default Ref;
//파일 업로드 버튼 누르면 input type file이 클릭돼서 파일 선택창 나오도록
