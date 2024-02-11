import React from "react";

export type FaqData = {
  label?: string;
  text?: string;
  special?: React.FC;
  isSpecial: boolean;
};
