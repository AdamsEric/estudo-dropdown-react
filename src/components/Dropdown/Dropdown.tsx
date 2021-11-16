import { useState, useEffect, createContext, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

import DropdownItem from './DropdownItem/DropdownItem'
import DropdownMenu from './DropdownMenu/DropdownMenu'
import DropdownToggle from './DropdownToggle/DropdownToggle'

interface IDropdownContext {
  id?: string,
  active: boolean,
  setActive: Function
}

export const DropdownContext = createContext<IDropdownContext>({
  id: undefined,
  active: false,
  setActive: () => {}
})

const DropdownStyled = styled('div') `
  .dropdown {
    position: relative;
    display: inline-block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  &.active .dropdown-menu {
    display: block;
  }
`

interface IDropdownProps {
  // Id do dropdown. Deve ser um identificador único
  id: string,
  children: ReactElement | ReactFragment
}

const Dropdown = (props: IDropdownProps) => {
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    const onClick = (event: any) => {
      if (event && event.target) {
        const target = (event.target as Element)
        if (!target.matches(`#${props.id}`)) {
          setActive(false)
        }
      } else {
        setActive(false)
      }
    }

    if (active) {
      window.addEventListener('click', onClick)
    }

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [props.id, active])

  useEffect(() => {
    
  }, [props.id])

  return (
  <DropdownContext.Provider value={{id: props.id, active, setActive}}>
    <DropdownStyled className={`dropdown ${active ? 'active' : ''}`}>
      {props.children}
    </DropdownStyled>
  </DropdownContext.Provider>
  )
}

Dropdown.Toggle = DropdownToggle
Dropdown.Menu = DropdownMenu
Dropdown.Item = DropdownItem

export default Dropdown