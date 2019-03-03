import * as React from 'react'

const style = {
  img: {
    borderRadius: '100%'
  } as React.CSSProperties
}

export default class ProfileImg extends React.Component {
  public render() {
    return (
      <div>
        <img
          style={style.img}
          src="http://placekitten.com/100/100"
          alt="Imagen"
        />
      </div>
    )
  }
}
