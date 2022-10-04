import PropTypes from 'prop-types'
import css from './statistic.module.css'


export const Statistic = ({data}) => {
    return <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>
  <ul className={css.stat_list}>
        {data.map(n => <li className={css.item} key={n.id} style={{backgroundColor:getRandomHexColor()}}><span className={css.label}>{n.label}</span><span className={css.percentage}>{n.percentage+"%"}</span></li>)}
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
  )
}