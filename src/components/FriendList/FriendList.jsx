import css from './FriendList.module.css'
import PropTypes from 'prop-types'


export const FriedList = ({ friends }) => {
    return <ul className={css.friend_list}>{friends.map(n => <li className={css.item} key={n.id}><div className={n.isOnline?css.status_green:css.status_red}></div><img className={css.avatar} src={n.avatar} alt="user avatar" /><p className={css.name}>{n.name}</p></li>)}</ul>
}


FriedList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      id:PropTypes.number.isRequired,
    })
  )
}


