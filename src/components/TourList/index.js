import React, { Component } from 'react'
import './TourList.scss'
import Tour from '../Tour/Tour'
import {tourData} from '../tourData'

export default class TourList extends Component {
  state = {
    tours: tourData
  }

  deleteTour = (id) => {
    const tours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: tours
    })
  }
  render() {
    const {tours} = this.state;
    return (
      <section className='tourlist'>
        {tours && tours.map((tour) => (
          <Tour tour={tour} key={tour.id} deleteTour={this.deleteTour}/>
        ))}
      </section>
    )
  }
}
