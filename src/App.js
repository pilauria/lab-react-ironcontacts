import './App.css';
import contacts from './contacts.json';
import { useState } from 'react';

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

  return (
    <>
      <h1>IronContacts</h1>
      <button onClick={addContact}>Add contact</button>
      <table>
        <thread>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Oscar Winner?</th>
            <th>Emmy Winner?</th>
          </tr>
        </thread>
        <tbody>
          {agenda.map(contact => {
            return (
              <tr>
                <td>
                  <img
                    src={contact.pictureUrl}
                    alt={contact.name}
                    width='100px'
                    height='150px'
                  />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar && '🏆'}</td>
                <td>{contact.wonEmmy && '🏆'}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default App;
