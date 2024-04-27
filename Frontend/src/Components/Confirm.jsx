import './Confirm.css';

const Confirm = ({ text, onYesClick, onNoClick }) => {
    const handleNo = () => {
        onNoClick();
    };

    const handleYes = () => {
        onYesClick();
    };

    return (
        <div>
            <div className='confirm'>
                <h4 className='text'>{text}</h4>
                <button className="yesbtn" onClick={handleYes}>Yes</button>
                <button className="nobtn" onClick={handleNo}>NO</button>
            </div>
        </div>
    );
};

export default Confirm;
