import bg from '../images/bg-header-desktop.svg';
import JobList from './job-list';

const Main: React.FC = () => {
    return (
        <>
            <div className="container-bg">
                <div className='container-bg-2' style={{ background: `url(${bg})` }}>

                </div>
            </div>
            <JobList />
        </>
    );
}

export default Main;
