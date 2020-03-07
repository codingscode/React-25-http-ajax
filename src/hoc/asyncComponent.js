import React, {Component} from 'react'

const asyncComponent = (importarComponent) => {
   return class extends Component {
      state = {
         componente: null
      }

      componentDidMount() {
         importarComponent()
            .then(cmp => {
               this.setState({componente: cmp.default})
            })
      } 

      render() {
          const C = this.state.componente

          return C ? <C {...this.props} /> : null
      }
   }

}

export default asyncComponent