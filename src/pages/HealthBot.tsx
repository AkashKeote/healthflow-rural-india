
const HealthBot = () => (
  <main className="container mx-auto max-w-2xl py-12">
    <h1 className="text-2xl font-bold mb-6">HealthBot – AI FAQ & Triage Assistant</h1>
    <div className="w-full" style={{ minHeight: "600px" }}>
      <iframe
        src="https://chatbot-iv20d0wqo-akash-keotes-projects.vercel.app/"
        title="External Chatbot"
        width="100%"
        height="600"
        className="rounded-lg border"
        allow="clipboard-write"
      ></iframe>
    </div>
  </main>
);

export default HealthBot;

