
import './App.css';
import contacts from './contacts.json';
import React, {useState} from 'react';


function App() {
  const getFirstFive = contacts.slice(0,5);
  const [initialState, setInitialState] = useState(getFirstFive);

function addRandomContact() {
  const getRandomPosition = Math.floor(Math.random() * contacts.length);
  const getRandom = contacts[getRandomPosition];

  const copy = initialState.slice();
  copy.push(getRandom);
  setInitialState(copy);
}

function sortName() {
  const copy = [...initialState];

  copy.sort((a,b) => a.name.localeCompare(b.name));
  setInitialState(copy);
}

function sortPopularity() {
  const copy = [...initialState];

  copy.sort((a,b) => b.popularity - a.popularity);
  setInitialState(copy);
}

function deleteContact({target}) {
  const copy = [...initialState];
  console.log(target.id);

  copy.filter(contact => contact.id !==target.id)
  setInitialState(copy);


}
   

     return (
       <div>
         <h1>IronContacts</h1>
         <button onClick = {addRandomContact}>Add Random Contact</button>
         <button onClick = {sortName}>Sort by Name</button>
         <button onClick = {sortPopularity}>Sort by Popularity</button>
         <table>
           <thead>
             <tr>
               <th>Picture</th>
               <th>Name</th>
               <th>Popularity</th>
             </tr>
           </thead>
           <tbody>
            {initialState.map((celeb) => {
              return (
                <tr key = {celeb.id}>
                  <td>
                    <img src = {celeb.pictureUrl} alt={celeb.name} className="profilePic"/>
                  </td>
                  <td>
                    {celeb.name}
                  </td>
                  <td>
                    {celeb.popularity}
                  </td>
                  <button onClick = {deleteContact}>Delete Contact</button>
                </tr>
              );
            })} 
           </tbody>
         </table>
       </div>
     )
          }
    
export default App;
