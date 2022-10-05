import css from './FriendList.module.css'
import PropTypes from 'prop-types'
import { FriedListItem } from './friendListItem/friendListItem'

export const FriedList = ({ friends }) => {
    return <ul className={css.friend_list}>{friends.map(friend => <FriedListItem friend={friend}/>)}</ul>
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


