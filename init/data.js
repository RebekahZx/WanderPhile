// // const sampleListings = [
// //   {
// //     title: "Cozy Beachfront Cottage",
// //     description:
// //       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1500,
// //     location: "Malibu",
// //     country: "United States",
// //   },
// //   {
// //     title: "Modern Loft in Downtown",
// //     description:
// //       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1200,
// //     location: "New York City",
// //     country: "United States",
// //   },
// //   {
// //     title: "Mountain Retreat",
// //     description:
// //       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1000,
// //     location: "Aspen",
// //     country: "United States",
// //   },
// //   {
// //     title: "Historic Villa in Tuscany",
// //     description:
// //       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 2500,
// //     location: "Florence",
// //     country: "Italy",
// //   },
// //   {
// //     title: "Secluded Treehouse Getaway",
// //     description:
// //       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 800,
// //     location: "Portland",
// //     country: "United States",
// //   },
// //   {
// //     title: "Beachfront Paradise",
// //     description:
// //       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 2000,
// //     location: "Cancun",
// //     country: "Mexico",
// //   },
// //   {
// //     title: "Rustic Cabin by the Lake",
// //     description:
// //       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 900,
// //     location: "Lake Tahoe",
// //     country: "United States",
// //   },
// //   {
// //     title: "Luxury Penthouse with City Views",
// //     description:
// //       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 3500,
// //     location: "Los Angeles",
// //     country: "United States",
// //   },
// //   {
// //     title: "Ski-In/Ski-Out Chalet",
// //     description:
// //       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 3000,
// //     location: "Verbier",
// //     country: "Switzerland",
// //   },
// //   {
// //     title: "Safari Lodge in the Serengeti",
// //     description:
// //       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 4000,
// //     location: "Serengeti National Park",
// //     country: "Tanzania",
// //   },
// //   {
// //     title: "Historic Canal House",
// //     description:
// //       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1800,
// //     location: "Amsterdam",
// //     country: "Netherlands",
// //   },
// //   {
// //     title: "Private Island Retreat",
// //     description:
// //       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 10000,
// //     location: "Fiji",
// //     country: "Fiji",
// //   },
// //   {
// //     title: "Charming Cottage in the Cotswolds",
// //     description:
// //       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1200,
// //     location: "Cotswolds",
// //     country: "United Kingdom",
// //   },
// //   {
// //     title: "Historic Brownstone in Boston",
// //     description:
// //       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 2200,
// //     location: "Boston",
// //     country: "United States",
// //   },
// //   {
// //     title: "Beachfront Bungalow in Bali",
// //     description:
// //       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1800,
// //     location: "Bali",
// //     country: "Indonesia",
// //   },
// //   {
// //     title: "Mountain View Cabin in Banff",
// //     description:
// //       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1500,
// //     location: "Banff",
// //     country: "Canada",
// //   },
// //   {
// //     title: "Art Deco Apartment in Miami",
// //     description:
// //       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1600,
// //     location: "Miami",
// //     country: "United States",
// //   },
// //   {
// //     title: "Tropical Villa in Phuket",
// //     description:
// //       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 3000,
// //     location: "Phuket",
// //     country: "Thailand",
// //   },
// //   {
// //     title: "Historic Castle in Scotland",
// //     description:
// //       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 4000,
// //     location: "Scottish Highlands",
// //     country: "United Kingdom",
// //   },
// //   {
// //     title: "Desert Oasis in Dubai",
// //     description:
// //       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 5000,
// //     location: "Dubai",
// //     country: "United Arab Emirates",
// //   },
// //   {
// //     title: "Rustic Log Cabin in Montana",
// //     description:
// //       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1100,
// //     location: "Montana",
// //     country: "United States",
// //   },
// //   {
// //     title: "Beachfront Villa in Greece",
// //     description:
// //       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 2500,
// //     location: "Mykonos",
// //     country: "Greece",
// //   },
// //   {
// //     title: "Eco-Friendly Treehouse Retreat",
// //     description:
// //       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 750,
// //     location: "Costa Rica",
// //     country: "Costa Rica",
// //   },
// //   {
// //     title: "Historic Cottage in Charleston",
// //     description:
// //       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1600,
// //     location: "Charleston",
// //     country: "United States",
// //   },
// //   {
// //     title: "Modern Apartment in Tokyo",
// //     description:
// //       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 2000,
// //     location: "Tokyo",
// //     country: "Japan",
// //   },
// //   {
// //     title: "Lakefront Cabin in New Hampshire",
// //     description:
// //       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1200,
// //     location: "New Hampshire",
// //     country: "United States",
// //   },
// //   {
// //     title: "Luxury Villa in the Maldives",
// //     description:
// //       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 6000,
// //     location: "Maldives",
// //     country: "Maldives",
// //   },
// //   {
// //     title: "Ski Chalet in Aspen",
// //     description:
// //       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 4000,
// //     location: "Aspen",
// //     country: "United States",
// //   },
// //   {
// //     title: "Secluded Beach House in Costa Rica",
// //     description:
// //       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
// //     image: {
// //       filename: "listingimage",
// //       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
// //     },
// //     price: 1800,
// //     location: "Costa Rica",
// //     country: "Costa Rica",
// //   },
// // ];

// // module.exports = { data: sampleListings };

// const sampleListings = [
//   {
//     title: "Rice – Kharif 2026",
//     description: "Area: 44,500 ha | Production: 112,000 tonnes | Yield: 2,517 kg/ha",
//     image: {
//       filename: "rice",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/rice_adwdhq.jpg",
//     },
//     price: 2517,
//     location: "Ludhiana",
//     country: "Punjab",
//     geometry: { type: "Point", coordinates: [75.8577, 30.9000] },
//   },
//   {
//     title: "Wheat – Rabi 2026",
//     description: "Area: 38,200 ha | Production: 98,000 tonnes | Yield: 2,565 kg/ha",
//     image: {
//       filename: "wheat",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/wheat_ukrgut.jpg",
//     },
//     price: 2565,
//     location: "Meerut",
//     country: "Uttar Pradesh",
//     geometry: { type: "Point", coordinates: [77.7064, 28.9845] },
//   },
//   {
//     title: "Maize – Kharif 2026",
//     description: "Area: 21,400 ha | Production: 46,200 tonnes | Yield: 2,159 kg/ha",
//     image: {
//       filename: "maize",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/maize_kw9coj.jpg",
//     },
//     price: 2159,
//     location: "Belagavi",
//     country: "Karnataka",
//     geometry: { type: "Point", coordinates: [74.5147, 15.8497] },
//   },
//   {
//     title: "Sugarcane – Annual 2026",
//     description: "Area: 51,000 ha | Production: 385,000 tonnes | Yield: 7,549 kg/ha",
//     image: {
//       filename: "sugarcane",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512443/sugarcane_ualhfc.jpg",
//     },
//     price: 7549,
//     location: "Kolhapur",
//     country: "Maharashtra",
//     geometry: { type: "Point", coordinates: [74.2433, 16.7050] },
//   },
//   {
//     title: "Cotton – Kharif 2026",
//     description: "Area: 29,800 ha | Production: 52,400 tonnes | Yield: 1,758 kg/ha",
//     image: {
//       filename: "cotton",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512440/cotton_agvg1o.jpg",
//     },
//     price: 1758,
//     location: "Nagpur",
//     country: "Maharashtra",
//     geometry: { type: "Point", coordinates: [79.0882, 21.1458] },
//   },
//   {
//     title: "Groundnut – Kharif 2026",
//     description: "Area: 18,600 ha | Production: 31,200 tonnes | Yield: 1,677 kg/ha",
//     image: {
//       filename: "groundnut",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/groundnut_rxtrqf.jpg",
//     },
//     price: 1677,
//     location: "Rajkot",
//     country: "Gujarat",
//     geometry: { type: "Point", coordinates: [70.8022, 22.3039] },
//   },
//   {
//     title: "Soybean – Kharif 2026",
//     description: "Area: 34,700 ha | Production: 62,000 tonnes | Yield: 1,786 kg/ha",
//     image: {
//       filename: "soybean",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/soybean_ywrc2g.jpg",
//     },
//     price: 1786,
//     location: "Indore",
//     country: "Madhya Pradesh",
//     geometry: { type: "Point", coordinates: [75.8577, 22.7196] },
//   },
//   {
//     title: "Bajra – Kharif 2026",
//     description: "Area: 19,200 ha | Production: 28,500 tonnes | Yield: 1,484 kg/ha",
//     image: {
//       filename: "bajra",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512440/Bajra_dkf46k.jpg",
//     },
//     price: 1484,
//     location: "Jodhpur",
//     country: "Rajasthan",
//     geometry: { type: "Point", coordinates: [73.0243, 26.2389] },
//   },
//   {
//     title: "Chickpea – Rabi 2026",
//     description: "Area: 22,100 ha | Production: 36,700 tonnes | Yield: 1,661 kg/ha",
//     image: {
//       filename: "chickpea",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512440/chickpea_rnezeg.jpg",
//     },
//     price: 1661,
//     location: "Sehore",
//     country: "Madhya Pradesh",
//     geometry: { type: "Point", coordinates: [77.0846, 23.2006] },
//   },
//   {
//     title: "Mustard – Rabi 2026",
//     description: "Area: 14,300 ha | Production: 24,900 tonnes | Yield: 1,741 kg/ha",
//     image: {
//       filename: "mustard",
//       url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512440/mustard_h3jlau.jpg",
//     },
//     price: 1741,
//     location: "Alwar",
//     country: "Rajasthan",
//     geometry: { type: "Point", coordinates: [76.6225, 27.5530] },
//   },
// ];




// module.exports = { data: sampleListings };


const sampleListings = [
  

 
 
  {
    title: "Barley – Rabi 2025–26",
    description: "Area: 6.08 lakh ha | Production: 19.19 lakh tonnes | Yield: 3159 kg/ha",
    image: { filename: "barley", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628661/barley_ladews.jpg" },
    price: 3159,
    location: "Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] },
  },
  {
    title: "Jowar – Kharif 2025–26",
    description: "Area: 13.00 lakh ha | Production: 15.21 lakh tonnes | Yield: 1170 kg/ha",
    image: { filename: "jowar", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628667/jowar_aqckva.jpg" },
    price: 1170,
    location: "Maharashtra",
    country: "India",
    geometry: { type: "Point", coordinates: [75.9064, 17.6599] },
  },
  
 


  /* ================= PULSES ================= */

  {
    title: "Tur – Kharif 2025–26",
    description: "Area: 40.58 lakh ha | Production: 35.97 lakh tonnes | Yield: 887 kg/ha",
    image: { filename: "tur", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628662/tor_yqswq9.jpg" },
    price: 887,
    location: "Maharashtra",
    country: "India",
    geometry: { type: "Point", coordinates: [76.5604, 18.4088] },
  },
  {
    title: "Gram – Rabi 2025–26",
    description: "Area: 91.22 lakh ha | Production: 111.14 lakh tonnes | Yield: 1218 kg/ha",
    image: { filename: "gram", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628662/gram_rabi_q0yjlu.jpg" },
    price: 1218,
    location: "Madhya Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [77.4126, 23.2599] },
  },
  {
    title: "Urad – Kharif 2025–26",
    description: "Area: 19.33 lakh ha | Production: 12.05 lakh tonnes | Yield: 623 kg/ha",
    image: { filename: "urad", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628662/urad_gzdq8g.jpg" },
    price: 623,
    location: "Maharashtra",
    country: "India",
    geometry: { type: "Point", coordinates: [77.0020, 20.7002] },
  },
  {
    title: "Moong – Kharif 2025–26",
    description: "Area: 34.12 lakh ha | Production: 17.20 lakh tonnes | Yield: 504 kg/ha",
    image: { filename: "moong", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628664/moong_zvyc0b.jpg" },
    price: 504,
    location: "Rajasthan",
    country: "India",
    geometry: { type: "Point", coordinates: [73.3119, 28.0229] },
  },
  {
    title: "Lentil – Rabi 2025–26",
    description: "Area: 16.99 lakh ha | Production: 16.54 lakh tonnes | Yield: 973 kg/ha",
    image: { filename: "lentil", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628664/lentil_ijadhg.jpg" },
    price: 973,
    location: "Uttar Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [80.9462, 26.8467] },
  },
  {
    title: "Other Pulses – Total 2025–26",
    description: "Area: 15.32 lakh ha | Production: 8.90 lakh tonnes | Yield: 581 kg/ha",
    image: { filename: "pulses", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628665/other_pulses_mquf0e.jpg" },
    price: 581,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },
  {
    title: "Total Pulses – Kharif 2025–26",
    description: "Area: 109.35 lakh ha | Production: 74.13 lakh tonnes | Yield: 678 kg/ha",
    image: { filename: "total-pulses", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628662/totoal_pulses_wpbs86.jpg" },
    price: 678,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },
  

    /* ================= OILSEEDS ================= */

  {
    title: "Groundnut – Kharif 2025–26",
    description: "Area: 47.21 lakh ha | Production: 110.93 lakh tonnes | Yield: 2350 kg/ha",
    image: { filename: "groundnut", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/groundnut_rxtrqf.jpg" },
    price: 2350,
    location: "Gujarat",
    country: "India",
    geometry: { type: "Point", coordinates: [70.8022, 22.3039] },
  },
  {
    title: "Groundnut – Total 2025–26",
    description: "Area: 47.21 lakh ha | Production: 110.93 lakh tonnes | Yield: 2350 kg/ha",
    image: { filename: "groundnut", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628662/groundnut_cequcy.jpg" },
    price: 2350,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },

  {
    title: "Soybean – Kharif 2025–26",
    description: "Area: 123.53 lakh ha | Production: 142.66 lakh tonnes | Yield: 1155 kg/ha",
    image: { filename: "soybean", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628666/soybean_npz7qk.jpg" },
    price: 1155,
    location: "Madhya Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [75.8577, 22.7196] },
  },
  {
    title: "Soybean – Total 2025–26",
    description: "Area: 123.53 lakh ha | Production: 142.66 lakh tonnes | Yield: 1155 kg/ha",
    image: { filename: "soybean", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767512441/soybean_ywrc2g.jpg" },
    price: 1155,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },

  {
    title: "Sunflower – Kharif 2025–26",
    description: "Area: 0.69 lakh ha | Production: 0.64 lakh tonnes | Yield: 929 kg/ha",
    image: { filename: "sunflower", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628666/sunflower_other_vz9jgj.jpg" },
    price: 929,
    location: "Karnataka",
    country: "India",
    geometry: { type: "Point", coordinates: [76.6394, 12.2958] },
  },
  {
    title: "Sunflower – Total 2025–26",
    description: "Area: 0.69 lakh ha | Production: 0.64 lakh tonnes | Yield: 929 kg/ha",
    image: { filename: "sunflower", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628667/sunflower_lrf63g.jpg" },
    price: 929,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },

  
  {
    title: "Rapeseed & Mustard – Total 2025–26",
    description: "Area: 86.57 lakh ha | Production: 126.67 lakh tonnes | Yield: 1463 kg/ha",
    image: { filename: "mustard", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628665/rapeseed_other_vyyumt.jpg" },
    price: 1463,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },

  {
    title: "Total Oil Seeds – Kharif 2025–26",
    description: "Area: 191.10 lakh ha | Production: 275.63 lakh tonnes | Yield: 1442 kg/ha",
    image: { filename: "oilseeds", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767629380/oil_seed_jyargf.jpg" },
    price: 1442,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },
  {
    title: "Total Oil Seeds – Total 2025–26",
    description: "Area: 191.10 lakh ha | Production: 275.63 lakh tonnes | Yield: 1442 kg/ha",
    image: { filename: "oilseeds", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767629380/oil_seed_jyargf.jpg" },
    price: 1442,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },


   /* ================= COMMERCIAL CROPS ================= */

  

  

  {
    title: "Jute – Kharif 2025–26",
    description: "Area: 5.17 lakh ha | Production: 80.36 lakh tonnes | Yield: 2798 kg/ha",
    image: { filename: "jute", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628667/jute_swkoxk.jpg" },
    price: 2798,
    location: "West Bengal",
    country: "India",
    geometry: { type: "Point", coordinates: [88.3639, 22.5726] },
  },
  {
    title: "Jute & Mesta – Total 2025–26",
    description: "Area: 5.46 lakh ha | Production: 83.45 lakh tonnes | Yield: 2749 kg/ha",
    image: { filename: "jute", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628667/jute_swkoxk.jpg" },
    price: 2749,
    location: "India",
    country: "India",
    geometry: { type: "Point", coordinates: [78.9629, 20.5937] },
  },

  {
    title: "Tobacco – Kharif 2025–26",
    description: "Area: 4.91 lakh ha | Production: 10.37 lakh tonnes | Yield: 2110 kg/ha",
    image: { filename: "tobacco", url: "https://res.cloudinary.com/dv0ciglwr/image/upload/v1767628666/tobaco_vkqrhn.jpg" },
    price: 2110,
    location: "Andhra Pradesh",
    country: "India",
    geometry: { type: "Point", coordinates: [79.73999, 15.9129] },
  },


  
];

module.exports = { data: sampleListings };