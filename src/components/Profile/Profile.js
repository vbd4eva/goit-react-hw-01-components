import PropTypes from 'prop-types';
import s from "./Profile.module.css";

export default function Profile({
    avatar = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
    name, tag, location, stats }) { 
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <div className={s.thumb}>
                    <img
                        src={avatar}
                        alt="Аватар пользователя"
                        className={s.avatar}
                    />
                </div>
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{stats.followers}</span>
                </li>
                <li>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{stats.views}</span>
                </li>
                <li>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
}


Profile.propTypes = {
    name: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    sats: PropTypes.objectOf(PropTypes.number),
}
