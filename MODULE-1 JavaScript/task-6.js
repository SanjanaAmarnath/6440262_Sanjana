// Array to store all events
const communityEvents = [];
communityEvents.push(
    { name: "Workshop on Baking", date: "2025-07-10", category: "Cooking" },
    { name: "Jazz Night", date: "2025-07-12", category: "Music" },
    { name: "Guitar Basics", date: "2025-07-15", category: "Music" },
    { name: "AI for Beginners", date: "2025-08-01", category: "Tech" }
  );
  const musicEvents = communityEvents.filter(event => event.category === "Music");
  console.log("🎵 Music Events:", musicEvents);
  const displayCards = communityEvents.map(event => `📅 ${event.name} on ${event.date} [${event.category}]`);
  console.log("📋 Event Cards:");
  displayCards.forEach(card => console.log(card));
  communityEvents.push({ name: "Drum Circle", date: "2025-07-20", category: "Music" });
  communityEvents.pop();
  communityEvents[0].name = "Advanced Baking Workshop";
      