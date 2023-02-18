import React from 'react';
//import PropTypes from 'prop-types';

import FilterContainer from '../containers/FilterContainer';

const Filteroptions = () => {

    return (
        <div className='filters'>
            {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_DISCONNECT'>
                DISCONNECT
            </FilterContainer>
            <FilterContainer filter='SHOW_CONNECT'>
                CONNECT
            </FilterContainer>
        </div>
    );
};


export default Filteroptions;
