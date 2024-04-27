import './ContestLayout.css';
import { useNavigate } from 'react-router-dom';

const ContestLayout = () => {
    const navigate = useNavigate(); // Using useNavigate hook to get the navigate function

    const onViewDetails = () => {
        navigate('/instruction');
    };

    return (
        <div className="contest-layout">
            <div>
                <h4 className="contest-name">ContestName : Take First</h4>
                <h5 className="start-date">StartDate : '2024-04-01'</h5>
                <button className='vbtn' onClick={onViewDetails}>View Details</button>
            </div>
        </div>
    );
}

export default ContestLayout;
