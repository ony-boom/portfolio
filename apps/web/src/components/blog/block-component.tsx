import { type PortableTextReactComponents } from "next-sanity";
import { CodeBlock } from "./code-block";

type CodeComponentPropsValue = {
  code: string;
  filename: string;
  language: string;
};

export const BlockComponent: Partial<PortableTextReactComponents> = {
  types: {
    code: (props) => {
      const value = props.value as CodeComponentPropsValue;
      return <CodeBlock {...value} />;
    },
  },
};
