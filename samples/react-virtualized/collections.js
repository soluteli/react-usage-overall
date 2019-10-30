import React from 'react';
import ReactDOM from 'react-dom';
import { Collection } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once

const Gap = 10
const Gutter = 200

const w = 150

// Collection data as an array of objects
const list = [
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  'Brian Vaughn',
  // And so on...
];

function cellRenderer ({ index, key, style }) {
  const styleObj = {
    ...style,
    border: '1px solid pink'
  }
  return (
    <div
      key={key}
      style={styleObj}
    >
      {list[index]}
    </div>
  )
}

function cellSizeAndPositionGetter ({ index }) {
  const datum = list[index]

  return {
    height: Gutter,
    width: w,
    x: 10,
    y: Gutter * index + Gap * (index + 1)
  }
}

export default () => (
  <Collection
    cellCount={list.length}
    cellRenderer={cellRenderer}
    cellSizeAndPositionGetter={cellSizeAndPositionGetter}
    height={300}
    width={300}
  />
)
