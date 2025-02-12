import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid className="py-20 w-full">
        {gridItems?.length > 0 ? (
          gridItems.map((item) => <BentoGridItem key={item.id} {...item} />)
        ) : (
          <p className="text-center text-gray-500">No items available</p>
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
