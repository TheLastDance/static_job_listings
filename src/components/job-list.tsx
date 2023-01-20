import json from '../json/data.json';
import { IProduct } from '../types/types';
import JobComponent from './job-component';



const JobList: React.FC = () => {
    const data: IProduct[] = json;
    return (
        <div className='content'>
            <div className='content_2'>
                {data.map((item, index) => <JobComponent key={index} item={item} />)}
            </div>
        </div>
    );
}

export default JobList;