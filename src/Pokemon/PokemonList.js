import { Component } from 'react';
import PokeItem from './PokeItem';
import './PokeList.scss';

export default class PokeList extends Component {

  render() {
    const characters = this.props.characters;

    return (
      <div>
        <ul className="PokeList">
          {characters.map(character => (
            <PokeItem key={character.Name}
              character={character} />
          ))}
        </ul>
      </div>
    );
  }

}