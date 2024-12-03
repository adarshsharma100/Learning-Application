import React, { useState, useRef } from 'react';
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
import { InputText } from 'primereact/inputtext';
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { StyleClass } from 'primereact/styleclass';

export default function CombinedNav() {
    const [visible, setVisible] = useState(false); // Sidebar visibility state
    const menu = useRef(null); // Menu reference for the profile options
    const btnRef1 = useRef(null); // Sidebar menu animations

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
        },
        {
            label: 'Courses',
            icon: 'pi pi-search',
            items: [
                { label: 'Personal Finance', icon: 'pi pi-wallet' },
                { label: 'Problem Solving', icon: 'pi pi-sitemap' },
                { label: 'Communication and Creativity', icon: 'pi pi-comments' },
                { label: 'Outdoors and Survival Skills', icon: 'pi pi-compass' },
                { label: 'Social Responsibilities', icon: 'pi pi-users' },
                { label: 'Technology', icon: 'pi pi-desktop' },
                { label: 'Career Awareness', icon: 'pi pi-briefcase' },
                { label: 'Environmental Awareness', icon: 'pi pi-leaf' },
                { label: 'Critical Thinking', icon: 'pi pi-brain' },
                { label: 'Health and Awareness', icon: 'pi pi-heart' },
                { label: 'Everyday Science', icon: 'pi pi-flask' },
                { label: 'Cultural Awareness', icon: 'pi pi-globe' },
                { label: 'Digital Literacy', icon: 'pi pi-tablet' },
            ],
        },
        {
            label: 'Progress',
            icon: 'pi pi-chart-line',
        },
    ];

    const profileMenuItems = [
        {
            label: 'Profile',
            icon: 'pi pi-user',
            command: () => console.log('Profile clicked'),
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
            command: () => console.log('Logout clicked'),
        },
    ];

    const start = (
        <img
            alt="logo"
            src="https://primefaces.org/cdn/primereact/images/logo.png"
            height="40"
            className="mr-2"
        />
    );

    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                shape="circle"
                onClick={() => setVisible(true)} // Opens the sidebar
                style={{ cursor: 'pointer' }}
            />
            <Menu model={profileMenuItems} popup ref={menu} />
        </div>
    );

    return (
        <div>
            {/* Menubar */}
            <div className="card">
                <Menubar model={items} start={start} end={end} />
            </div>

            {/* Sidebar */}
            <Sidebar
                visible={visible}
                onHide={() => setVisible(false)}
                position="right" // Open sidebar from the right
                className="surface-section"
            >
                <div className="flex flex-column h-full">
                    <div className="overflow-y-auto p-5">
                        <ul className="list-none p-0">
                            <li>
                                <StyleClass nodeRef={btnRef1} selector="@next" enterFromClassName="hidden" enterActiveClassName="slidedown" leaveToClassName="hidden" leaveActiveClassName="slideup">
                                    <div ref={btnRef1} className="p-ripple p-0 flex align-items-center justify-content-between text-600 cursor-pointer">
                                        <span className="font-medium">Profile</span>
                                        <i className="pi pi-chevron-down"></i>
                                        <Ripple />
                                    </div>
                                </StyleClass>
                                <ul className="list-none p-0 m-0 overflow-hidden">
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-home mr-2"></i>
                                            <span className="font-medium">Dashboard</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                            <i className="pi pi-cog mr-2"></i>
                                            <span className="font-medium">Settings</span>
                                            <Ripple />
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto p-3">
                        <a
                            className="flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
                        >
                            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                            <span className="font-bold">Amy Elsner</span>
                        </a>
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}