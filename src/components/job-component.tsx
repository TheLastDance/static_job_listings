
import { IProduct } from "../types/types";
import { IJobList } from "./job-list";

interface IProductItem extends IJobList {
    item: IProduct;
}

const JobComponent: React.FC<IProductItem> = ({ item, addFilter, filtersArr }) => {
    const filters: string[] = [item.role, item.level, ...item.languages, ...item.tools];

    function filter(): boolean {
        if (filtersArr.length > 0) {
            const filter = filtersArr.every(element => filters.includes(element));

            if (filter) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    return (
        <>
            {filter() ? <div className='job-card'>
                <div className="job-card-2">
                    <div className="job-card-logo">
                        <img src={item.logo} alt="" />
                    </div>
                    <div className="job-card-info">
                        <div className="job-card-info-company">
                            <span>{item.company}</span>
                            {item.new ? <span>NEW!</span> : null}
                            {item.featured ? <span>FEATURED</span> : null}
                        </div>
                        <div className="job-card-info-position">
                            {item.position}
                        </div>
                        <div className="job-card-info-date">
                            <span>{item.postedAt}</span>
                            <span>{item.contract}</span>
                            <span>{item.location}</span>
                        </div>
                    </div>
                </div>
                <div className="job-card-filters">
                    {filters.map((item, index) => <span key={index} onClick={() => addFilter(item)}>{item}</span>)}
                </div>
            </div> : null}
        </>
    );
}

export default JobComponent;