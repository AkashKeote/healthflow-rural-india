
const queue = [
  { id: 1, name: "Sita Devi", status: "Waiting" },
  { id: 2, name: "Rina Patel", status: "Called" },
];

const QueueStatus = () => (
  <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 className="text-lg font-bold mb-4">Today's Queue</h2>
    <ul className="divide-y">
      {queue.map((item) => (
        <li key={item.id} className="flex justify-between py-3">
          <span>{item.name}</span>
          <span className={`px-3 py-1 rounded-full text-xs ${
            item.status === "Called"
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}>
            {item.status}
          </span>
        </li>
      ))}
    </ul>
  </div>
);
export default QueueStatus;
