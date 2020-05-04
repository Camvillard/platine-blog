import React from "react"

export type TIconProps = {
  width: number
  color: string
  height?: number
}

const IconMusic = (props: TIconProps) => {
  const { width, height, color } = props
  return (
    <svg
      width={width}
      height={height || "auto"}
      viewBox="0 0 68 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.9993 2.12623C33.9993 0.684574 32.5982 -0.331424 31.2368 0.100209L9.9875 6.37549C9.1043 6.65439 8.5 7.47117 8.5 8.40084V25.7605C7.83262 25.6024 7.12406 25.5002 6.375 25.5002C2.85414 25.5002 0 27.4027 0 29.7501C0 32.0975 2.85414 34 6.375 34C9.89586 34 12.75 32.0975 12.75 29.7501V14.2319L29.75 9.25016V21.5105C29.0826 21.3525 28.3741 21.2502 27.625 21.2502C24.1041 21.2502 21.25 23.1527 21.25 25.5002C21.25 27.8476 24.1041 29.7501 27.625 29.7501C31.1459 29.7501 34 27.8476 34 25.5002L33.9993 2.12623V2.12623Z"
        fill={color}
      />
    </svg>
  )
}

export default IconMusic
