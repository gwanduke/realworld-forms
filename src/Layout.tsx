import { css } from "@emotion/css";
import { Link, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div
        className={css`
          position: fixed;
          bottom: 0;
          left: 0;
          font-size: 10px;
          padding: 0;
          margin: 0;
        `}
      >
        <ul>
          <li>
            <Link to="/traveler-insurance">여행자보험 가입 폼</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
