import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Link } from 'react-router-dom'

const styles = {
  buttonProfile: {
    float: 'right'
  } as React.CSSProperties,
  link: {
    color: '#555',
    textDecoration: 'none'
  } as React.CSSProperties,
  navBar: {
    borderBottom: 'solid 1px #aaa',
    padding: '10px 15px'
  } as React.CSSProperties
}

export default class Navbar extends React.Component {
  public render() {
    return (
      <div style={styles.navBar}>
        <Link style={styles.link} to="/app/newsfeed">
          <FontAwesomeIcon icon={faNewspaper} />
          Instacool
        </Link>
        <div style={styles.buttonProfile}>
          <Link style={styles.link} to="/app/profile">
            <FontAwesomeIcon icon={faUser} />
            Perfil
          </Link>
        </div>
      </div>
    )
  }
}
