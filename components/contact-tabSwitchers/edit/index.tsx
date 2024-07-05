interface UserDataEditProps {
  user_data: any;
}

const UserDataEdit = ({ user_data }: UserDataEditProps) => {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h2 className="text-lg font-bold mb-4">Malumotlarni tahrirlash</h2>
      <div>
        <label className="block mb-2 font-semibold">Ism:</label>
        <input
          type="text"
          value={user_data.name}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mt-4">
        <label className="block mb-2 font-semibold">ID:</label>
        <input
          type="text"
          value={user_data.id}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default UserDataEdit;
