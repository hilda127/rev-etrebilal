import React from "react";

export default function Logo(props) {
  const { className } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      className={className}
    >
      <path d="M33.25 2C31.31 2 29 3.72 29 11.93c0 4.61 1.24 8.92 1.29 9.1l.26.9.93-.2c.1-.03 2.68-.64 5.47-1.91 2.42-1.1 8.05-4.2 8.05-9.07C45 8.1 43.79 5 40.37 5c-1 0-1.8.36-2.38.74C36.87 4.04 35.13 2 33.25 2zm-21.4 2C8.3 4 6 5.96 6 8.98c0 .98.36 1.76.75 2.33C5.05 12.39 3 14.13 3 16.25c0 1.43.97 4.75 9.94 4.75 5.1 0 8.96-1.25 9.12-1.3l.84-.28-.17-.86c-.04-.22-1.05-5.3-3.75-9.9C18.04 7.03 15.33 4 11.85 4zm8.22 24.06-.83.23c-.28.07-2.75.77-5.34 2.33-3.18 1.92-6.9 5.44-6.9 9.05C7 43.99 9.76 46 11.62 46a4.9 4.9 0 0 0 2.79-.88c.97 1.14 2.73 2.88 4.9 2.88 3.65 0 3.69-6.97 3.69-7.04 0-6.06-2.48-11.86-2.58-12.1l-.35-.8zm16.67.94c-5.24 0-8.63 1-8.78 1.04l-.83.25.13.86c.02.13.52 3.41 1.88 6.62 2.25 5.3 5.34 8.23 8.7 8.23C42.7 46 44 43.16 44 41.48c0-1.1-.38-1.98-.77-2.6 1.44-1 3.77-2.9 3.77-4.9C47 29.92 39.4 29 36.74 29z" />
    </svg>
  );
}
