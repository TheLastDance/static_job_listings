import json from '../json/data.json';
import { IProduct } from '../types/types';
import JobComponent from './job-component';

export interface IJobList {
    addFilter: (el: string) => void;
    filtersArr: string[];
}


const JobList: React.FC<IJobList> = ({ addFilter, filtersArr }) => {
    const data: IProduct[] = json;

    return (
        <div className='content'>
            <div className='content_2'>
                {data.map((item, index) => <JobComponent key={index} item={item} addFilter={addFilter} filtersArr={filtersArr} />)}
            </div>
        </div>
    );
}

export default JobList;