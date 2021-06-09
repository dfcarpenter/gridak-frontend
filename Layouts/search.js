
import React from 'react';

class SearchLayout extends Component {

    render() {
        return (
            <div>
                
                <Pagination page={1} totalPages={5}></Pagination>
            </div>
        )
    }
}

export default SearchLayout;