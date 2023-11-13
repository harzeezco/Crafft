import React from 'react';

type MapItemsProps = {
  items: {
    id: number;
  }[];
  resourceName: string;
  itemComponent: React.ComponentType;
};

function MapItems({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: MapItemsProps) {
  return (
    <>
      {items.map((item) => (
        <ItemComponent key={item.id} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export default MapItems;
