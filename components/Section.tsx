import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

const Section = ({ title, children }: Props) => {
  return<div className="section" >
    <h3> {title} </h3>
    {children}
  </div>;
};

export default Section;