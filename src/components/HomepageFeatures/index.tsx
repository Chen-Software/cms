import { createElement as h } from "react";
import Heading from "@theme/Heading";

import { css } from "@site/styled-system/css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: "Powered by React",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return h(
    "div",
    { className: css({ basis: "1/3" }) },
    h("div", { className: "text--center" }, h(Svg, { role: "img" })),
    h(
      "div",
      { className: "text--center padding-horiz--md" },
      h(Heading, { as: "h3" }, title),
      h("p", {}, description),
    ),
  );
}

export default function HomepageFeatures(): JSX.Element {
  return h("section", {}, [
    h("div", { className: "container" }, [
      h(
        "div",
        {
          className: css({
            display: "flex",
            flex: "auto",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }),
        },
        FeatureList.map((props, idx) => h(Feature, { key: idx, ...props })),
      ),
    ]),
  ]);
}
