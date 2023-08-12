'use client';
import { useState } from 'react';
import Link from 'next/link'
import '../css/hamburger.css';

const HamburgerMenu = () => {
    const [open, setOpen] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);

    const handleClick = () => {
        if (!open) {
            document.getElementById('one')?.classList.add('translate-y-3', 'rotate-45', 'group-active:translate-y-0', 'group-active:rotate-0')
            document.getElementById('one')?.classList.remove('translate-y-0', 'rotate-0', 'group-active:translate-y-3', 'group-active:rotate-45')
            document.getElementById('two')?.classList.add('scale-x-0', 'group-active:scale-x-100')
            document.getElementById('two')?.classList.remove('scale-x-100', 'group-active:scale-x-0')
            document.getElementById('three')?.classList.add('-translate-y-3', '-rotate-45', 'group-active:translate-y-0', 'group-active:rotate-0')
            document.getElementById('three')?.classList.remove('translate-y-0', 'rotate-0', 'group-active:-translate-y-3', 'group-active:-rotate-45')
        } else {
            document.getElementById('one')?.classList.add('translate-y-0', 'rotate-0', 'group-active:translate-y-3', 'group-active:rotate-45')
            document.getElementById('one')?.classList.remove('translate-y-3', 'rotate-45', 'group-active:translate-y-0', 'group-active:rotate-0')
            document.getElementById('two')?.classList.add('scale-x-100', 'group-active:scale-x-0')
            document.getElementById('two')?.classList.remove('scale-x-0', 'group-active:scale-x-100')
            document.getElementById('three')?.classList.add('translate-y-0', 'rotate-0', 'group-active:-translate-y-3', 'group-active:-rotate-45')
            document.getElementById('three')?.classList.remove('-translate-y-3', '-rotate-45', 'group-active:translate-y-0', 'group-active:rotate-0')
        }

        setOpen(curr => !curr);
        if (menuVisible) {
            setTimeout(() => setMenuVisible(false), 500)
        } else {
            setMenuVisible(true)
        }
    }

    return (
        <div id="wrapper" className={`px-1 absolute top-4 w-48 rounded-t-md transition duration-500 ${open ? 'bg-white drop-shadow-lg' : 'bg-inherit'}`}>
            <div id="hamburger" className="group w-min" onClick={handleClick}>
                <div id="one" className="item transition duration-150 group-active:translate-y-3 group-active:rotate-45" />
                <div id="two" className="item transition duration-150 group-active:scale-x-0" />
                <div id="three" className="item transition duration-150 group-active:-translate-y-3 group-active:-rotate-45" />
            </div>
            <ul className={`absolute left-0 bg-white w-48 rounded-b-md transition-opacity duration-500 group-active:opacity-100 ${open ? 'opacity-100 visible' : 'opacity-0'} ${!menuVisible && 'invisible'}`}>
                <li className="p-2"><Link href="/">Home</Link></li>
                <li className="p-2"><Link href="/gallery">Prints</Link></li>
                <li className="p-2"><Link href="/gallery">Originals</Link></li>
                <li className="p-2"><Link href="/vision">About Amethyst</Link></li>
                <li className="p-2"><Link href="/vision">Contact</Link></li>
            </ul>
        </div>
    )
}

export default HamburgerMenu
