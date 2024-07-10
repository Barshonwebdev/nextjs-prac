import React from 'react';

const DynamicPage = ({params,searchParams}) => {
    console.log(params);
    console.log(searchParams);
    return (
        <div>
            <p>dynamic id :{params.id}</p>
            <p>product type:{searchParams.category}</p>
        </div>
    );
};

export default DynamicPage;