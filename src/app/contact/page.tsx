import dynamic from "next/dynamic";
import React from "react";

const ContactPage = dynamic(() => import("./component"), {
  ssr: false,
});

const ContactPageSS = () => {
  return <ContactPage />;
};

export default ContactPageSS;
