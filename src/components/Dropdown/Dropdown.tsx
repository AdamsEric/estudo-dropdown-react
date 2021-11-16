import { useState, useEffect, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

import DropdownItem from './DropdownItem/DropdownItem'
import DropdownMenu from './DropdownMenu/DropdownMenu'

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

  .dropdown-toggle {
    cursor: pointer;
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
  <DropdownStyled className={`dropdown ${active ? 'active' : ''}`}>
    <div className='dropdown-toggle'
      id={props.id}
      onClick={() => setActive(!active)}
      style={{ textAlign: 'right' }}>
        Dropdown
      </div>
    {props.children}
  </DropdownStyled>
  )
}

Dropdown.Item = DropdownItem
Dropdown.Menu = DropdownMenu

export default Dropdown