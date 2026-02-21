import List from "@/slices/List";
import { Content } from "@prismicio/client";

export const Services = ({ lists }: { lists: Content.ListSlice[] }) => {
  return (
    <section data-component="services-section">
      {lists.map((list, index) => {
        return (
          <List
            slice={list}
            key={list.id}
            slices={lists}
            context={undefined}
            index={index}
          />
        );
      })}
    </section>
  );
};
