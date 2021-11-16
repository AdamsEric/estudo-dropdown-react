import { useState, useEffect, ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

import DropdownItem from './DropdownItem/DropdownItem'

const DropdownStyled = styled('div') `
  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-toggle {
    cursor: pointer;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  &.active .dropdown-menu {
    display: block;
  }
`

interface IDropdownProps {
  id: string,
  children: ReactElement | ReactFragment
}

const Dropdown = (props: IDropdownProps) => {
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    setActive(false)
  }, [])

  useEffect(() => {
    window.onclick = function(event) {
      if (event && event.target) {
        const target = (event.target as Element)
        if (!target.matches(`#${props.id}`)) {
          setActive(false)
        }
      }
    }
  }, [props.id])

  return (
  <DropdownStyled className={`dropdown ${active ? 'active' : ''}`}>
    <>
      <div
        id={props.id}
        onClick={() => setActive(!active)}
        className='dropdown-toggle'
        style={{ textAlign: 'right' }}>
          Dropdown
        </div>
      <div className="dropdown-menu">
        {props.children}
      </div>
    </>
  </DropdownStyled>
  )
}

Dropdown.Item = DropdownItem

export default Dropdown