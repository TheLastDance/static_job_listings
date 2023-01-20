
import { IProduct } from "../types/types";

interface IProductItem {
    item: IProduct;
}

const JobComponent: React.FC<IProductItem> = ({ item }) => {
    const filters: string[] = [item.role, item.level, ...item.languages, ...item.tools];

    return (
        <div className='job-card'>
            <div className="job-card-2">
                <div className="job-card-logo">
                    <img src={item.logo} alt="" />
                </div>
                <div className="job-card-info"></div>
            </div>
            <div className="job-card-filters">
                {filters.map((item, index) => <span key={index}>{item}</span>)}
            </div>
        </div>
    );
}

export default JobComponent;