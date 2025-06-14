
const patients = [
  { id: 1, name: "Sita Devi", age: 48, gender: "F", lastVisit: "2024-06-10" },
  { id: 2, name: "Ram Kumar", age: 52, gender: "M", lastVisit: "2024-06-12" },
  { id: 3, name: "Rina Patel", age: 35, gender: "F", lastVisit: "2024-06-08" },
];

const PatientList = () => (
  <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
    <h2 className="text-xl font-bold mb-2">Patients</h2>
    <table className="min-w-full text-left">
      <thead>
        <tr>
          <th className="p-2 border-b">Name</th>
          <th className="p-2 border-b">Age</th>
          <th className="p-2 border-b">Gender</th>
          <th className="p-2 border-b">Last Visit</th>
          <th className="p-2 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((p) => (
          <tr key={p.id} className="hover:bg-gray-50">
            <td className="p-2">{p.name}</td>
            <td className="p-2">{p.age}</td>
            <td className="p-2">{p.gender}</td>
            <td className="p-2">{p.lastVisit}</td>
            <td className="p-2">
              <button className="text-blue-600 hover:underline text-sm">View</button>
              <button className="ml-2 text-green-600 hover:underline text-sm">Book Appt</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
export default PatientList;
