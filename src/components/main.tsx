import { useState } from 'react';
import bg from '../images/bg-header-desktop.svg';
import JobList from './job-list';
import removeIcon from '../images/icon-remove.svg';

const Main: React.FC = () => {

    const [filtersArr, setFiltersArr] = useState<string[]>([]);

    function addFilter(el: string): void {
        if (!filtersArr.includes(el)) {
            setFiltersArr([...filtersArr, el]);
        }
    }

    function deleteFilter(el: string): void {
        const index = filtersArr.indexOf(el);
        setFiltersArr(filtersArr.slice(0, index).concat(filtersArr.slice(index + 1, filtersArr.length)));
    }

    console.log(filtersArr);


    return (
        <>
            <div className="container-bg">
                <div className='container-bg-2' style={{ background: `url(${bg})` }}>
                </div>
            </div>
            {filtersArr.length > 0 ? <div className='filter'>
                <div className='filter-2'>
                    <div className='filter-3'>
                        {filtersArr.map((item, index) => <div className='search-filters' key={index}>
                            <span>{item}</span>
                            <span onClick={() => deleteFilter(item)}>
                                <img src={removeIcon} alt="removeIcon" />
                            </span>
                        </div>)}
                    </div>
                </div>
            </div> : null}
            <JobList addFilter={addFilter} filtersArr={filtersArr} />
        </>
    );
}

export default Main;
