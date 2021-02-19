import '../../App.css';
import PropTypes from 'prop-types';
import Star from '../Star/Star';

export default function Stars({count}) {
    let starsArr = [];
    let i = 0
    while(i < count) {
        starsArr.push(i)
        i++
    }
    if(5 >= count > 0) {
        return(
            <ul className="card-body-stars u-clearfix">
                {starsArr.map((num) => {
                    return <Star key = {num}/>
                })}
            </ul>

            
        )
    } else {
        return <></>
    }
}
Stars.propTypes = {
    count: PropTypes.number
}