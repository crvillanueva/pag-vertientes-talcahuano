import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li>Cristobal Villanueva Pavez</li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} transform="left-4"/>
                    cristobaljvp@gmail.com
                </li>
                <li>
                    <FontAwesomeIcon icon={faPhone} transform="left-4"/>
                    +56 9 92864526
                </li>
            </ul>
            <br/>
            <ul>
                <li>Mauro Castillo Carmona</li>
                <li>
                    <FontAwesomeIcon icon={faEnvelope} transform="left-4"/>
                    mau.castillo1708@gmail.com
                </li>
                <li><FontAwesomeIcon icon={faPhone} transform="left-4"/>+56 9 93106183</li>
            </ul>
        </footer>
    )
}

export default Footer;

