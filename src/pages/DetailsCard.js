import React from 'react';

const DetailsCard = ({ data }) => {
    const { price } = data;
    return (
        <div>
            {/* {data.imgUrl} */}
            {price}
        </div>
    );
};

export default DetailsCard;