import css from '../FriendList.module.css'
import PropTypes from 'prop-types'


export function FriedListItem({ friend }) {
    const {avatar,name,isOnline, id}= friend

return <li className={css.item} key={id}>
  <span className={isOnline?css.status_green:css.status_red}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
}

FriedListItem.propTypes = {
  friend: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      id:PropTypes.number.isRequired,
    })
  )
}