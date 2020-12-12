import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title}</h2>}

            <ul className={s.statList+(title ? (" "+s.withTitle) : "")}>
                {stats.map(({id,label,percentage}) =>
                    (<li key={ id} className={s.item}>
                    <span className={s.label}>{label}</span>
                    <span className={s.percentage}>{percentage}</span>
                </li>)
                 )}
            </ul>
        </section>
    );
 }

Statistics.propType = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}