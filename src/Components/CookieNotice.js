import React from "react";

import CookieNotice from "react-cookienotice";
import "react-cookienotice/dist/index.css";

const CookieNoticeAlert = () => (
  <CookieNotice
    acceptButtonLabel="Okay"
    cookieTextLabel="This site uses cookies to improve your browsing experience, such as Google Analytics."
  />
);

export default CookieNoticeAlert;
