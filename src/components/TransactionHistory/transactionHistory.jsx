import css from './transactionHistory.module.css'
import PropTypes from 'prop-types'


export const TransactionHistory = ({items}) => {
    return <table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={css.column}>Type</th>
      <th className={css.column}>Amount</th>
      <th className={css.column}>Currency</th>
    </tr>
  </thead>
    <tbody>
            {items.map(item => <tr className={css.row} key ={item.id}>
      <td className={css.info}>{item.type}</td>
      <td className={css.info}>{item.amount}</td>
      <td className={css.info}>{item.currency}</td>
    </tr> )}
    
  </tbody>
</table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
      
    })
  )
}


