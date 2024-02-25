import React from "react";

// All Types for data
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

export type ContactData = {
  label: string;
  text: string;
};

export type ReviewData = {
  name: string;
  content: string;
  src?: string;
  position: string;
};
