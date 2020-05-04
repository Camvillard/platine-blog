import styled from "styled-components"
import { themeBreakpoints } from "../../theme/theme"
import { TBreakpoint } from "../../shared/breakpoints.type"

const { smScreen, mdScreen, lgScreen, hgScreen } = themeBreakpoints

type GridContainerProps = {
  columns: number
  rows?: number
}
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props: GridContainerProps) => props.columns},
    1fr
  );
  grid-template-rows: repeat(
    ${(props: GridContainerProps) => props.rows || ""},
    1fr
  );
  grid-gap: 8px;

  @media (min-width: ${themeBreakpoints.mdScreen}) {
    grid-gap: 16px;
  }

  @media (min-width: ${themeBreakpoints.lgScreen}) {
    grid-gap: 24px;
  }
`

type GridProps = {
  columns: TBreakpoint
  rows?: string
  justify?: string
  align?: string
}
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props: GridProps) => props.columns.default};
  grid-template-rows: ${(props: GridProps) => props.rows};
  justify-items: ${(props: GridProps) => props.justify};
  align-items: ${(props: GridProps) => props.align};
  grid-gap: 8px;

  @media (min-width: ${smScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.sm};
    grid-gap: 12px;
  }
  @media (min-width: ${mdScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.md};
    grid-gap: 24px;
  }
  }
  @media (min-width: ${lgScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.lg};
    grid-gap: 24px;
  }
  @media (min-width: ${hgScreen}) {
    grid-template-columns: ${(props: GridProps) => props.columns.xlg};
    grid-gap: 24px;
  }
`

export interface GridElementProps {
  columns: TBreakpoint
  rows?: string
  margin?: TBreakpoint
  padding?: TBreakpoint
}

export const GridElement = styled.div`
  grid-column: ${(props: GridElementProps) => props.columns.default};
  margin: ${(props: GridElementProps) => props.margin?.default};
  padding: ${(props: GridElementProps) => props.padding?.default};
  @media (min-width: ${smScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.sm};
    margin: ${(props: GridElementProps) => props.margin?.sm};
    padding: ${(props: GridElementProps) => props.padding?.sm};
  }
  @media (min-width: ${mdScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.md};
    margin: ${(props: GridElementProps) => props.margin?.md};
    padding: ${(props: GridElementProps) => props.padding?.md};
  }
  @media (min-width: ${lgScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.lg};
    margin: ${(props: GridElementProps) => props.margin?.lg};
    padding: ${(props: GridElementProps) => props.padding?.lg};
  }
  @media (min-width: ${hgScreen}) {
    grid-column: ${(props: GridElementProps) => props.columns.xlg};
    margin: ${(props: GridElementProps) => props.margin?.xlg};
    padding: ${(props: GridElementProps) => props.padding?.xlg};
  }
`
