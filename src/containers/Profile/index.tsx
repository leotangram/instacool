import * as React from 'react'
import Button from 'src/components/Button'
import Card from '../../components/Card'
import ProfileImg from '../../components/ProfileImg'

const style = {
  container: {
    padding: '15px'
  } as React.CSSProperties,
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px'
  } as React.CSSProperties
}

export default class Profile extends React.Component {
  public render() {
    return (
      <div style={style.container}>
        <div style={style.row}>
          <ProfileImg />
          <Button>Agregar</Button>
        </div>
        <div style={style.row}>
          <Card><img src="http://placekitten.com/100/100" alt="Imagen"/></Card>
          <Card><img src="http://placekitten.com/100/100" alt="Imagen"/></Card>
          <Card><img src="http://placekitten.com/100/100" alt="Imagen"/></Card>
        </div>
        <div style={style.row}>
          <Card><img src="http://placekitten.com/100/100" alt="Imagen"/></Card>
          <Card><img src="http://placekitten.com/100/100" alt="Imagen"/></Card>
          <Card><img src="http://placekitten.com/100/100" alt="Imagen"/></Card>
        </div>
      </div>
    )
  }
}
