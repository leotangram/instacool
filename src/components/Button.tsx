import * as React from 'react'

const style = (block: string) =>
  ({
    backgroundColor: '#00D182',
    border: '0px',
    borderRadius: '5px',
    color: '#fff',
    marginBottom: '10px',
    padding: '10px 15px',
    width: block === 'true' ? '100%' : 'false'
  } as React.CSSProperties)

interface IButtonProps {
  block?: string
}

export default class Button extends React.Component<IButtonProps> {
  public render() {
    const { block = 'false' } = this.props
    return <button {...this.props} style={style(block)} />
  }
}
