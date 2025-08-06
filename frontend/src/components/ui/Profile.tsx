import React, { useState } from "react";

const initialProfile = {
  name: "Nancy Scholar",
  email: "nancy.scholar@email.com",
  phone: "123-456-7890",
  institution: "Global University",
};

const Profile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(initialProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setEditMode(true);
    setForm(profile);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(form);
    setEditMode(false);
  };

  return (
    <div className="flex justify-center py-12 px-4">
      <div className="max-w-xl w-full bg-white/90 rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Profile</h2>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-blue-800 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={editMode ? form.name : profile.name}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-blue-800 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={editMode ? form.email : profile.email}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-blue-800 font-medium mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={editMode ? form.phone : profile.phone}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white disabled:bg-gray-100"
            />
          </div>
          <div>
            <label className="block text-blue-800 font-medium mb-1">Institution</label>
            <input
              type="text"
              name="institution"
              value={editMode ? form.institution : profile.institution}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white disabled:bg-gray-100"
            />
          </div>
          <div className="flex gap-2 mt-4">
            {editMode ? (
              <>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-400 transition"
                  onClick={() => setEditMode(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;