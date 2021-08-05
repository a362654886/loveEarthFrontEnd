import * as React from "react";
import { LabelBoxDiv, LabelContext, LabelTitle } from "../cssJs/LabelBoxCss";

interface IProps {
  Title: string;
  Context: string;
}

const LabelBox = ({ Title, Context }: IProps): JSX.Element => {
  return (
    <LabelBoxDiv>
      <LabelTitle>{Title}</LabelTitle>
      <LabelContext>{Context}</LabelContext>
    </LabelBoxDiv>
  );
};

export default LabelBox;
