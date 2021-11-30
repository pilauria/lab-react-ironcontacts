import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';
import './index.css';

const remainingContacts = [...contacts];
const initAgenda = remainingContacts.splice(0, 5);

function App() {
  const [agenda, setAgenda] = useState(initAgenda);

  const addContact = () => {
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts.splice(randomIndex, 1);
    // const randomCOntact = remainingContacts[randomIndex] // It will also return a random contact, but wont modify the original array
    setAgenda(agenda.concat(randomContact));
    // (OR) setAgenda([...agenda, randomContact]); //
  };

  const sortAlphabetically = () => {
    const sortedList = [...agenda];
    sortedList.sort((a, b) => a.name.localeCompare(b.name));
    setAgenda(sortedList);
  };

  const sortPopularity = () => {
    const sortedList = [...agenda];
    sortedList.sort((a, b) => b.popularity - a.popularity);
    setAgenda(sortedList);
  };

  const deleteContact = contactId => {
    const filteredContact = agenda.filter(contact => contact.id !== contactId);
    setAgenda(filteredContact);
  };

  return (
    <>
      <h1>IronContacts</h1>

      <div className='group-buttons'>
        <button onClick={addContact}>Add contact</button>
        <button onClick={sortAlphabetically}>Sort By Name</button>
        <button onClick={sortPopularity}>Sort By Popularity</button>
      </div>

      <table className='contacts'>
        <thread>
          <tr>
            <th>Picture</th>
            <th className='column-name'>Name</th>
            <th>Popularity</th>
            <th>Oscar Winner?</th>
            <th>Emmy Winner?</th>
          </tr>
        </thread>

        <tbody>
          {agenda.map(contact => {
            return (
              <tr className='tr-container'>
                <td className='picture'>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td className='name'>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🏆'}</td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
