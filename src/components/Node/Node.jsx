import React, { useContext, useState } from "react";
import './Node.scss';
import {
    INITIAL_COLOR,
    VISITED_COLOR,
    KEYS,
    FIXED_COLOR,
    ITEM_INITIAL,
    ITEM_VISITED,
    ITEM_CLICKED,
    CLICKED_COLOR,
    ITEM_SHORTEST,
    SHORTEST_COLOR,
  } from '../../constants.js';
export default function Node({rowIdx, colIdx}) {
    const [type, setType] = useState(ITEM_INITIAL); 
    const { setItemCache, begin, end, pathFinder, setIsVisualized } = useContext()
    return (<div className="node"></div>);
}