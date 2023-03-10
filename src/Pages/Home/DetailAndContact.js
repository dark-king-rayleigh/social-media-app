import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import person1 from '../../assets/person1.jpg';
import person2 from '../../assets/person2.jpg';
import person3 from '../../assets/person3.jpg';
import { auth } from '../../firebase';

const CONTACT_DATA = [
  { name: 'Avishek', image: person1 },
  { name: 'Siris', image: person2 },
  // { name: 'Prasanna', image: person1 },
  // { name: 'Sarin', image: person2 },
  // { name: 'Sujan', image: person1 },
  // { name: 'Pradip', image: person2 },
  { name: 'Stella', image: person3 },
];

const DetailAndContact = () => {
  const [user, setUser] = useState(null);

  // setting user if user changes

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  });

  return (
    <div className='col-span-12 lg:col-span-3 flex flex-col gap-y-8'>
      <div className='bg-white flex gap-x-2 rounded-lg py-[5px] px-[14px] items-center'>
        <img
          src={user?.photoURL || person1}
          alt='Profile'
          className='h-9 w-9 rounded-full object-cover'
        />
        <p>{user?.displayName}</p>
      </div>

      <div className='bg-white p-7 rounded-xl'>
        <h4 className='mb-6'>Online Contacts</h4>

        <div className='flex flex-col gap-y-3'>
          {CONTACT_DATA?.map((contact, i) => {
            return (
              <div className='flex items-center gap-x-4' key={i}>
                <img
                  src={contact?.image}
                  alt='Profile'
                  className='h-9 w-9 rounded-full object-cover'
                />
                <p>{contact?.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailAndContact;
