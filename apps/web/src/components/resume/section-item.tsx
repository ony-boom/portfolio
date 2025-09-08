import { ComponentProps, ReactNode } from "react";

export function SectionItem({ children, title, ...props }: SectionItemProps) {
  return (
    <section {...props}>
      <h2 className="border-b py-1 font-sans font-medium">{title}</h2>

      <div className="mt-4">{children}</div>
    </section>
  );
}

export type SectionItemProps = ComponentProps<"section"> & {
  title: string;
  children: ReactNode;
};
