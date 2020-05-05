import React from "react"
import styled from "styled-components"

const MiniLogoWrapper = styled.svg`
  position: relative;
  top: ${(props: TMiniLogoProps) => props.offsetTop};
`

type TMiniLogoProps = {
  offsetTop: string
}

export const MiniLogo = ({ offsetTop }: TMiniLogoProps) => {
  return (
    <MiniLogoWrapper
      width="32"
      height="32"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      offsetTop={offsetTop}
    >
      <path
        d="M26.1176 13.0588C26.1176 20.271 20.271 26.1176 13.0588 26.1176C5.84663 26.1176 0 20.271 0 13.0588C0 5.84663 5.84663 0 13.0588 0C20.271 0 26.1176 5.84663 26.1176 13.0588Z"
        fill="#9DF2D6"
      />
      <path
        d="M7.86719 21.6346H10.98L12.3634 14.9425H13.4257C16.662 14.9425 17.7243 13.589 18.2678 10.832L18.5395 9.50364C19.1077 6.72155 18.0207 4.91695 15.0068 4.91695H11.3505L7.86719 21.6346ZM13.9445 7.39827H14.5621C15.6244 7.39827 15.6738 8.15019 15.4515 9.27806L15.155 10.7318C14.908 11.8346 14.6115 12.386 13.5739 12.386H12.9316L13.9445 7.39827Z"
        fill="#0F0F0F"
      />
    </MiniLogoWrapper>
  )
}
