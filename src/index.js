import React from "react";
import classNames from "./Sample.module.scss";

const Skeleton = ({ colors, width, height, center, circle, count, margin, classes }) => {
  const background = colors ? colors.background || '#f0f0f0' : '#f0f0f0';
  const pulse = colors ? colors.pulse || '#f8f8f8' : '#f8f8f8';
  const styleObj = {
    display: 'inherit',
    height: `${height ? `${height}px` : '100%'}`,
    width: `${width ? `${width}px` : '100%'}`,
    background: `linear-gradient(-90deg, ${background} 0%, ${pulse} 50%, ${background} 100%) `,
    backgroundSize: '400% 400%',
    borderRadius: `${circle ? '100%' : '5px'}`,
    margin: `${center ? 'auto' : 0}`
  }
  let element = null;
  if (count > 0) {
    element = [...Array(count).keys()].map((_, key) => <span key={key} style={{ ...styleObj, marginBottom: `${margin}px` }} className={`react-skeleton ${classes}`}></span>)
  } else {
    element = <span className={`${classNames.reactSkeleton} ${classes}`} style={styleObj} />
  }
  return element;
}

export default Skeleton;