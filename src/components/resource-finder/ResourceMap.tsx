
const mockResources = [
  { id: 1, name: "Generic Pharmacy", type: "Pharmacy", place: "Village Centre", contact: "9823110001" },
  { id: 2, name: "Jeevan Lab", type: "Lab", place: "Market Road", contact: "9856000023" },
  { id: 3, name: "Ambulance Service", type: "Transport", place: "PHC Campus", contact: "108" },
];

const ResourceMap = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {mockResources.map((r) => (
      <div key={r.id} className="border rounded-lg p-4 shadow bg-white">
        <div className="font-semibold">{r.name}</div>
        <div className="text-sm text-gray-600">{r.type} • {r.place}</div>
        <div className="mt-1 text-xs text-gray-500">Contact: {r.contact}</div>
      </div>
    ))}
  </div>
);
export default ResourceMap;
