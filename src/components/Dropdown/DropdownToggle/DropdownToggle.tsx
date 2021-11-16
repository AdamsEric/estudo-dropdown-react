import { ReactElement, ReactFragment, useContext } from 'react'
import styled from 'styled-components'

import { DropdownContext } from './../Dropdown'

const DropdownToggleStyled = styled('div')`
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`

interface DropdownToggleProps {
  children?: ReactElement | ReactFragment
}

const DropdownToggle = (props: DropdownToggleProps) => {
  const context = useContext(DropdownContext)

  return (
    <DropdownToggleStyled className='dropdown-toggle'
      id={context.id}
      onClick={() => context.setActive(!context.active)}
      style={{ textAlign: 'right' }}>
      {props.children && (<div>{props.children}</div>)}
      {!props.children && (<div>Sem children</div>)}
    </DropdownToggleStyled>
  )
}

export default DropdownToggle