import React, { useState, useEffect } from 'react';
import AdminHome from '../pages/Admin/AdminHome';
import UserHome from '../pages/User/UserHome';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  // const [userType, setUserType] = useState('');
  // const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const fetchUserTypeAndDetails = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/get-user-and-type', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         credentials: 'include',
  //       });
  
  //       if (response.ok) {
  //         const data = await response.json();
  //         setUserType(data.userType);
  //         setCurrentUser(data.currentUser);
  //       } else {
  //         console.error('Failed to fetch user type and current user');
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user type and current user:', error);
  //     }
  //   };
  
  //   fetchUserTypeAndDetails();
  // }, []);
    
  return (
    <div>
      <Header />
      <AdminHome />
      <UserHome />
      {/* Conditionally render AdminHome or UserHome based on user type */}
    {/* {userType === 'admin' && currentUser && <AdminHome user={currentUser} />}
    {userType !== 'admin' && currentUser && <UserHome user={currentUser} />} */}

      <div>Home Page</div>

      <Footer />
    </div>
  );
}

export default Home;
