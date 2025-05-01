import React from 'react';
import { Container, CategoryImage } from './styled';
import { Tooltip } from 'react-tooltip';

export default ({ data, activeCategory, setActiveCategory }) => {
    const handleCategoryClick = () => {
        setActiveCategory(data.id);
    }

    return (
        <>
            <Container 
                active={activeCategory === data.id} 
                onClick={handleCategoryClick}
                data-tooltip-id={`tooltip-${data.id}`}
                data-tooltip-content={data.name}
            >
                <CategoryImage src={data.image} />
            </Container>
            <Tooltip id={`tooltip-${data.id}`} place="top" effect="solid" />
        </>
    );
}