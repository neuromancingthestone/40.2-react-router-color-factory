import React from 'react';
import { useParams } from 'react-router-dom';
import Color from './Color';

function FilterColor({ colorData }) {
  const { color } = useParams();

  if (color) {
    const curr = colorData.find(
      (c) => c.name.toLowerCase() === color.toLowerCase()
    );

    return <Color color={curr} />;
  }

  return null;
}

export default FilterColor;