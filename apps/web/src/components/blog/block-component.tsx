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
      return <CodeBlock {...(props.value as CodeComponentPropsValue)} />;
    },
  },
};
