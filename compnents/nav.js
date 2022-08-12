import Link from 'next/link';
import React from 'react';
import Script from 'next/dist/client/script';


export const Nav = () => {
    return(
        <main className='maindiv'>
            <div className="Chan">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" class="closebtn" onClick={() => closeNav()}>&times;</a>
                    <h1>Nav</h1>
                    <a href='/'>Home</a>
                    <a href="/about">About</a>
                    <a href="/projects">Projects</a>
                    <a href="/src">Code</a>
                    <p>© James M</p>
                </div>

                <a onClick={() => openNav()} className="navbut" id="navbut" href="javascript:void(0)">&#9776;</a>
                <span id="main"></span>
            </div>
            <Script src="../../script.js"></Script>
        </main>
    )
}

