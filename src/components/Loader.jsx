import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import RingLoader from 'react-spinners/RingLoader';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import HashLoader from 'react-spinners/HashLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const spinners = [
  <ClipLoader color={"#45A29E"} loading={true} css={override} size={150} />,
  <RingLoader color={"#45A29E"} loading={true} css={override} size={150} />,
  <ClimbingBoxLoader color={"#45A29E"} loading={true} css={override} size={40} />,
  <HashLoader color={"#45A29E"} loading={true} css={override} size={90} />
];

const LoadingSpinner = () => {
  const randomSpinner = spinners[Math.floor(Math.random() * spinners.length)];

  return (
    <div className="flex items-center justify-center h-screen">
      {randomSpinner}
    </div>
  );
};

export default LoadingSpinner;
