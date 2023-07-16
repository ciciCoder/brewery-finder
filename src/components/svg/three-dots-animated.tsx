'use client'

import { cx } from 'class-variance-authority'

type ThreeDotsAnimatedProps = {
  circleProps?: JSX.IntrinsicElements['circle']
} & JSX.IntrinsicElements['svg']
export default function ThreeDotsAnimated({
  circleProps,
  ...attrs
}: ThreeDotsAnimatedProps) {
  return (
    <svg
      version="1.1"
      id="L5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 84 100"
      enable-background="new 0 0 0 0"
      xmlSpace="preserve"
      width="100"
      height="100"
      {...attrs}
    >
      <circle
        className="animate-updown-threepoints fill-inherit"
        stroke="none"
        cx="21"
        cy="50"
        r="6"
        style={
          {
            '--updown-threepoints-offset': '15px',
            animationDelay: '0.1s',
          } as React.CSSProperties
        }
      ></circle>
      <circle
        className="animate-updown-threepoints fill-inherit"
        stroke="none"
        cx="42"
        cy="50"
        r="6"
        style={
          {
            '--updown-threepoints-offset': '10px',
            animationDelay: '0.2s',
          } as React.CSSProperties
        }
      ></circle>
      <circle
        className="animate-updown-threepoints fill-inherit"
        stroke="none"
        cx="63"
        cy="50"
        r="6"
        style={
          {
            '--updown-threepoints-offset': '5px',
            animationDelay: '0.3s',
          } as React.CSSProperties
        }
      ></circle>
    </svg>
  )
}
