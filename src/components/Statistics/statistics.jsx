import PropTypes from 'prop-types'
import css from './statistic.module.css'


export const Statistic = ({stats,title}) => {
    return <section className={css.statistics}>
      { title&&<h2 className={css.title}>{title}</h2>}
  <ul className={css.stat_list}>
        {stats.map(param =>
          <li className={css.item} key={param.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{param.label}</span>
            <span className={css.percentage}>{param.percentage + "%"}</span>
          </li>)}
  </ul>
</section>
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


Statistic.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage:PropTypes.number.isRequired,
      
    })
  ),
  title:PropTypes.string
}