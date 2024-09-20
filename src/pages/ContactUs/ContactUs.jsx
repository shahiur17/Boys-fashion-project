import React, { useState } from "react";

const ContactUs = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "Md. Shahinur Rahman",
      job: "Desktop Support Technician",
      company: "Zemlak, Daniel and Leannon",
      country: "Bangladesh",
      favoriteColor: "Purple",
      contact: "+8801781699159",
      address: "Dimla,nilphamari",
      img: "https://i.ibb.co.com/mNzC9rc/Whats-App-Image-2024-09-20-at-15-07-19-07404285.jpg",
    },
    {
      id: 2,
      name: "Md. Nowsad",
      job: "Tax Accountant",
      company: "Carroll Group",
      country: "Bangladesh",
      favoriteColor: "Black",
      contact: "+8801303454376",
      address: "456 Wall St, Beijing, China",
      img: "https://i.ibb.co.com/fCK4YrK/Whats-App-Image-2024-09-20-at-15-07-19-875a146c.jpg",
    },
    {
      id: 3,
      name: "Marjy Ferencz",
      job: "Office Assistant I",
      company: "Rowe-Schoen",
      country: "Russia",
      favoriteColor: "Crimson",
      contact: "555-789-1234",
      address: "789 Elm St, Moscow, Russia",
      img: "https://img.daisyui.com/images/profile/demo/4@94.webp",
    },
    {
      id: 4,
      name: "Yancy Tear",
      job: "Community Outreach Specialist",
      company: "Wyman-Ledner",
      country: "Brazil",
      favoriteColor: "Indigo",
      contact: "321-654-9870",
      address: "101 Pine St, Rio de Janeiro, Brazil",
      img: "https://img.daisyui.com/images/profile/demo/5@94.webp",
    },
    {
      id: 5,
      name: "Kiyoko Hara",
      job: "Software Engineer",
      company: "Tanaka & Co.",
      country: "Japan",
      favoriteColor: "Blue",
      contact: "111-222-3333",
      address: "202 Sakura St, Tokyo, Japan",
      img: "https://img.daisyui.com/images/profile/demo/6@94.webp",
    },
  ];

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table bg-white text-black">
          {/* head */}
          <thead>
            <tr className="font-bold">
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.img} alt={`${user.name}'s avatar`} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.country}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.company}
                  <br />
                  <span className="badge badge-ghost badge-sm">{user.job}</span>
                </td>
                <td>{user.favoriteColor}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => setSelectedUser(user)}
                  >
                    details
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box">
            <h2 className="text-lg font-bold">{selectedUser.name}</h2>
            <p>Job Title: {selectedUser.job}</p>
            <p>Contact: {selectedUser.contact}</p>
            <p>Address: {selectedUser.address}</p>
            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedUser(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
