import css from './transactionHistory.module.css'
import PropTypes from 'prop-types'


export const TransactionHistory = ({transactions}) => {
    return <table className={css.transaction_history}>
  <thead>
    <tr>
      <th className={css.column}>Type</th>
      <th className={css.column}>Amount</th>
      <th className={css.column}>Currency</th>
    </tr>
  </thead>
    <tbody>
            {transactions.map(n => <tr className={css.row} key ={n.id}>
      <td className={css.info}>{n.type}</td>
      <td className={css.info}>{n.amount}</td>
      <td className={css.info}>{n.currency}</td>
    </tr> )}
    
  </tbody>
</table>
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency:PropTypes.string.isRequired,
      
    })
  )
}


