import React, { Component } from 'react';
import axios from 'axios';
const DinerContext = React.createContext();
export const DinerConsumer = DinerContext.Consumer;
class DinerProvider extends Component {
  state = { diners: [] }
  componentDidMount() {
    axios.get('/api/diners')
      .then( res => {
        this.setState({ diners: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }
  addDiner = (diner) => {
    axios.post('/api/diners', { diner } )
      .then( res => {
        const { diners } = this.state
        // const diners = this.state.diners 
        this.setState({ diners: [...diners, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }
  updateDiner = (id, diner) => {
    axios.put(`/api/diners/${id}`, { diner })
      .then( res => {
        const diners = this.state.diners.map( d => {
          if (d.id === id) {
            return res.data
          }
          return d
        })
        this.setState({ diners })
      })
      .catch( err => {
        console.log(err)
      })
  }
  deleteDiner = (id) => {
  }
  render() {
    return(
      <DinerContext.Provider value={{
        ...this.state,
        addDiner: this.addDiner,
        updateDiner: this.updateDiner,
      }}>
        { this.props.children }
      </DinerContext.Provider>
    )
  }
}
export default DinerProvider;