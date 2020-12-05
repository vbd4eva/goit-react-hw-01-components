import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar = "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg",
    name, isOnline}) => {  
    return (
            <li className={s.item}>
            <span className={s.status}>{isOnline}</span>
                <img className={s.avatar} src={avatar} alt={name} width="48" />
            <p className={s.name}>{name}</p>
            </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;  