import React from 'react';
function Hello({aa,isSpecial})
{
    return (
        <div>
            {isSpecial && <b>*</b>}
            안녕하세요 {aa}
        </div>
    )
}
export default Hello;