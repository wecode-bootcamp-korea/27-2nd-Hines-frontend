import React from 'react';
import styled from 'styled-components';

function ReviewPageMoveBtnList({ createBtnNum, updateOffset }) {
  return (
    <>
      {[...Array(createBtnNum)].map((n, index) => {
        return (
          <ReviewPageMoveBtn key={index} onClick={() => updateOffset(index)}>
            {index + 1}
          </ReviewPageMoveBtn>
        );
      })}

      {/* {reviewBtnCount.map((reviewBtn, index) => {
        return (
          <ReviewPageMoveBtn key={index} onClick={() => updateOffset(index)} />
        );
      })} */}
    </>
  );
}

const ReviewPageMoveBtn = styled.button`
  margin: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

export default ReviewPageMoveBtnList;
