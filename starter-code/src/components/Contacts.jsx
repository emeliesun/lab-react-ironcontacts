import React, { Component } from 'react';
import contacts from '../contacts.json';
import './contacts.css';
import Headlines from './Headlines.jsx';
import Card from './Card';

class Contacts extends Component {
   constructor() {
        super();
        this.removeContact = this.removeContact.bind(this);
   }
  state = {
        contacts: contacts.slice(0, 5),
        random: contacts[Math.floor(Math.random() * contacts.length)],
  };
removeContact(contactsIndex) {
        let contactsCopy = [...this.state.contacts];
        contactsCopy.splice(contactsIndex, 1);
        this.setState({contacts: contactsCopy})
}
  randomContact = () => {
        let randomCopy = [...this.state.contacts];
        randomCopy.push(contacts[Math.floor(Math.random() * contacts.length)]);
        this.setState({ contacts: randomCopy });
  };
sortByName = () => {
        let sortedArr = [...this.state.contacts]
        let newSortedArr = sortedArr.sort(function(a,b) {
            var x = a.name; 
            var y = b.name;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        });
        this.setState({contacts: newSortedArr})
}
sortByPopularity = () => {
        let sortedArr = [...this.state.contacts]
        let newSortedArr = sortedArr.sort(function (a, b) {
            var x = a.popularity;
            var y = b.popularity;
            return ((x < y) ? 1 : ((x > y) ? -1 : 0))
        });
        this.setState({ contacts: newSortedArr })
}
  render() {
    return (
      <table>
        <button onClick={this.randomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
            <thead>
                <Headlines />
            </thead>
            <tbody>
                {this.state.contacts.map((contacts, index) => (
                    <Card
                        // key={index}
                        contactsIndex={index}
                        deleteContact ={this.removeContact}
                        pictureUrl={contacts.pictureUrl}
                        name={contacts.name}
                        popularity={contacts.popularity}
                    />
                ))}
            </tbody>
      </table>
    );
  }
}

export default Contacts;


