import styled from "@emotion/styled"

export const SidebarContainer = styled.div`
    width: ${p => p.sidebarOpen ? '20%': '1%'};
    max-width: 280px;
    min-width: 80px;
    background-color: #90d5ec;
    background-image: linear-gradient(
            315deg, 
            rgba(252, 82, 150, 0.8) 0%,
            rgba(246, 112, 98, 0.8) 74%
        ),
        url(${p => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #fff;
    position: relative;
    transition: .2s ease-in all;
`

export const SidebarHeader = styled.h3`
    padding: 20px 0;
    text-align: center;
    margin-bottom: 10px;
    letter-spacing: 6px;
    font-family: ${p => p.font};
`

export const MenuItemContainer = styled.div``

export const ItemContainer = styled.div``

//Menu Item
export const MenuItem = styled.div`
    ${p => !p.sidebarOpen && `
        justify-content: center;
        ${p.isItemSelected && 'background-color: rgba(0, 0, 0, 0.6); transition: .2s ease-in all;'};
    `};
    justify-content: left;
    padding: 6px 20px;
    font-weight: 600;
    color: ${p => p.isItemSelected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'};
    font-family: ${p => p.font};
    white-space: nowrap;
    display: flex;
    align-items: center;
    position: relative;
    transition: .2s ease-in all;    

    &:hover {
        color: rgba(255, 255, 255);
        transition: .1s ease-in all;
        cursor: pointer;
    };

    &:after {
        content: '';
        display: ${p => p.sidebarOpen && p.isItemSelected && p.isOpen ? 'none':'block'};
    }
`

export const Icon = styled.div`
    margin-top: 6px;
    margin-left: 10px;
`

export const Text = styled.p`
    ${p => p.sidebarOpen ? `
        visibility: visible;
        opacity: 1;
        transition: .1s all;
    `:`
        visibility: hidden;
        opacity: 0;
    `};
    margin-left: 20px;
`
//Submenu Item
export const SubmenuItemContainer = styled.div`
    font-size: 14px;
    ${p => p.sidebarOpen && 'padding-left: 15%;'};
    ${p => !p.sidebarOpen && 'margin-left: 12px;'}
`

export const SubmenuItem = styled.p`
    color: ${p => p.selected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)' };
    ${p => p.selected && 'font-weight: bold; letter-spacing: 1px;'}
    transition: .2s;
    &:hover {
        color: rgba(255, 255, 255);
        cursor: pointer;
    }
`

//Dropdown Icon
export const DropdownIcon = styled.span`
    position: absolute;
    top: ${p => p.isOpen ? '24px' : '20px'};
    right: 36px;
    border: 1px solid ${p => p.isItemSelected ? 'rgba(255, 255, 255)' : 'rgba(19, 15, 64)'};
    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: ${p => p.isOpen ? 'rotate(-135deg);': 'rotate(45deg);'};
    transition: .2s;
    &:hover {
        color: rgba(255, 255, 255);
        transition: .1s ease-in all;
        cursor: pointer;
    };
`

//Toggler
export const TogglerContainer = styled.div`
    position: absolute;
    width: 30%;
    bottom: 10%;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const Toggler = styled.div`
    height: 40px;
    cursor: pointer;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        top: .25em;
        width: 100%;
        height: .1em;
        background: #fff;
        box-shadow:
            0 .75em 0 0 #fff,
            0 1.5em 0 0 #fff;
    }
`