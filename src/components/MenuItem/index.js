import React from 'react';
import { LinkArea, LinkIcon } from './styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';

export default ({ icon, link, title }) => {
    const navigate = useNavigate();
    const location = useLocation();

    let isActive = location.pathname === link;
    const handleLinkClick = (e) => {
        e.preventDefault();
        navigate(link);
    }

    return (
        <>
            <LinkArea 
                data-tooltip-id={`tooltip-${link}`} 
                data-tooltip-content={title} 
                active={isActive} 
                href={link} 
                onClick={handleLinkClick}
            >
                <LinkIcon src={icon} />
            </LinkArea>
            <Tooltip id={`tooltip-${link}`} place="top" effect="solid" />
        </>
    );
}