import React from "react";

export type FaqData = {
  label?: string;
  text?: string;
  special?: React.FC;
  isSpecial: boolean;
};

export type FooterData = {
  label?: string;
  links?: LinkData[];
};

export type LinkData = {
  label?: string;
  href: string;
};

export type FeatureData = {
  title: string;
  detail: string;
};
