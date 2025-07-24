import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaShareAlt } from 'react-icons/fa';
import styles from '../styles/socialmedia.module.css';
import { BsTwitterX } from "react-icons/bs";

const SocialmediaIcons = () => {
    const [open, setOpen] = useState(false);

    return (
<div className={`${styles.floatingsocials} ${open ? styles.open : ''}`}>

            <button className={styles.mainicon} onClick={() => setOpen(!open)}>
                <FaShareAlt />
            </button>
            <div className={styles.socialicons}>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer"><BsTwitterX /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>

            </div>
        </div>
    );
};

 
 

export default SocialmediaIcons
