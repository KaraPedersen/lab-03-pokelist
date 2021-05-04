import React, { Component } from 'react';
import './PokeItem.scss';

class VillagerItem extends Component {

  render() {
    const { villager } = this.props;

    return (
      <li className="VillagerItem">
        <h2>{villager.name}</h2>
        <p className="japanese-name">{villager.japaneseName}</p>

        <p className="speech-bubble">{villager.phrase}</p>

        <img
          src={villager.image}
          alt={villager.name}
        />

      </li>
    );
  }

}

export default VillagerItem;