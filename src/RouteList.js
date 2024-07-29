import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ColorList from './ColorList';
import FilterColor from './FilterColor';
import AddColor from './AddColor';

function RouteList({colors, addNewColor}) {

  return (
    <Routes>
      <Route path="/colors" element={<ColorList colorData={colors}/>} />
      <Route path="/colors/:color" element={<FilterColor colorData={colors} />} />
      <Route path="/colors/addcolor" element={<AddColor addNewColor={addNewColor}/>} />
      <Route path="/*" element={<Navigate to="/colors" />} />
    </Routes>
  );
}

export default RouteList;

