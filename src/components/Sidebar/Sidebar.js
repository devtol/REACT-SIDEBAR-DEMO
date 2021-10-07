import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as s from './Sidebar.styles';


const Sidebar = (props) => {
    const { 
        backgroundImage = '', 
        sidebarHeader = {
            fullName: '',
            shortName: ''
        }, 
        menuItems = [],
        fonts = {
            header: '',
            menu: '',
        }
    } = props;
    //State
    const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0].name);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [header, setHeader] = useState(sidebarHeader.fullName);
    const [subMenuStates, setSubMenuStates] = useState({});

    //Effects

    //Update of header state
    useEffect(() => {
        sidebarOpen ? setTimeout(() => setHeader(sidebarHeader.fullName), 200) : setHeader(sidebarHeader.shortName);
    }, [sidebarOpen, sidebarHeader]);

    //update od sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            console.log(window.innerWidth, sidebarOpen);
            if(window.innerWidth < 1280 && sidebarOpen) setSidebarOpen(false);
            else if(window.innerWidth >= 1280 && !sidebarOpen) setSidebarOpen(true);
        }
        window.addEventListener('resize', updateWindowWidth);

        return () => window.removeEventListener('resize', updateWindowWidth);
    }, [sidebarOpen]);

    // add index of menu items with submenus to state
    useEffect(() => {
        const newSubmenus = {};

        menuItems.forEach((item, index) => {
            const hasSubmenus = !!item.subMenuItems.length;

            if(hasSubmenus) {
                newSubmenus[index] = {};
                newSubmenus[index]['isOpen'] = false;
                newSubmenus[index]['isSelected'] = null;
            }
        });

        setSubMenuStates(newSubmenus);

    }, [menuItems]);

    const handleMenuItemClick = (name, index) => {
        setSelectedMenuItem(name);

        const subMenusCopy = JSON.parse(JSON.stringify(subMenuStates));

        if(subMenuStates.hasOwnProperty(index)) {
            subMenusCopy[index]['isOpen'] = !subMenuStates[index]['isOpen'];
            setSubMenuStates(subMenusCopy);
        } else {    //다른 메뉴 선택시 기존에 선택된 메뉴 초기화
            for(let item in subMenuStates) {    
                //값을 변경해주고
                subMenusCopy[item]['isOpen'] = false;
                subMenusCopy[item]['selected'] = null;
            }
            setSubMenuStates(subMenusCopy); //상태 업데이트
        }
    }

    const handleSubMenuItemClick = (menuItemIndex, subMenuItemIndex) => {
        const subMenusCopy = JSON.parse(JSON.stringify(subMenuStates));

        subMenusCopy[menuItemIndex]['selected'] = subMenuItemIndex;
        setSubMenuStates(subMenusCopy);
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selectedMenuItem === item.name;
        
        const hasSubmenus = !!item.subMenuItems.length;
        const isOpen = subMenuStates[index]?.isOpen;

        const subMenusJSX = item.subMenuItems.map((subMenuItem, subMenuItemIndex) => {
            const isSubMenuItemSelected = subMenuStates[index]?.selected === subMenuItemIndex;
            return (
                <Link to={`${item.to}${subMenuItem.to}`} style={{ textDecoration: 'none' }} key={subMenuItemIndex}>
                    <s.SubmenuItem
                        onClick={() => handleSubMenuItemClick(index, subMenuItemIndex)}
                        selected={isSubMenuItemSelected}
                    >
                        {subMenuItem.name}
                    </s.SubmenuItem>
                </Link>
            )
        })

        return (
            <s.ItemContainer key={index} >
                <Link to={item.to} style={{ textDecoration: 'none' }}>
                    <s.MenuItem 
                        font={fonts.menu}
                        isItemSelected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name, index)}
                        sidebarOpen={sidebarOpen}
                        isOpen={isOpen}
                    >
                        <s.Icon>{item.icon}</s.Icon>
                        <s.Text sidebarOpen={sidebarOpen}>{item.name}
                        {hasSubmenus && sidebarOpen &&(
                            <s.DropdownIcon isItemSelected={isItemSelected} isOpen={isOpen} />
                        )}
                        </s.Text>
                    </s.MenuItem>
                </Link>
                <AnimatePresence>
                    {hasSubmenus && isOpen && (
                        <motion.nav
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .3 }}
                            exit={{ opacity: 0, y: -20 }}
                        >
                            <s.SubmenuItemContainer sidebarOpen={sidebarOpen}>
                                {subMenusJSX}
                            </s.SubmenuItemContainer>  
                        </motion.nav>
                    )}
                </AnimatePresence>
            </s.ItemContainer>
        )
    });

    return (
        <s.SidebarContainer backgroundImage={backgroundImage} sidebarOpen={sidebarOpen}>
            <s.SidebarHeader font={fonts.header}>{header}</s.SidebarHeader>
            <s.MenuItemContainer>{menuItemsJSX}</s.MenuItemContainer>
            <s.TogglerContainer onClick={() => setSidebarOpen(!sidebarOpen)}>
                <s.Toggler />
            </s.TogglerContainer>
        </s.SidebarContainer>
    )
}

export default Sidebar
