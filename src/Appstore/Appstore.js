import React, { useState, useRef } from 'react';

const apps = [
    { id: 1, name: "Facebook", category: "social", imgUrl: "https://path/to/facebook/logo.png" },
    { id: 2, name: "Twitter", category: "social", imgUrl: "https://path/to/twitter/logo.png" },
    { id: 3, name: "Instagram", category: "social", imgUrl: "https://path/to/instagram/logo.png" },
    { id: 4, name: "WhatsApp", category: "social", imgUrl: "https://path/to/whatsapp/logo.png" },
    { id: 5, name: "Snapchat", category: "social", imgUrl: "https://path/to/snapchat/logo.png" },
    { id: 6, name: "TikTok", category: "social", imgUrl: "https://path/to/tiktok/logo.png" },
    { id: 7, name: "LinkedIn", category: "social", imgUrl: "https://path/to/linkedin/logo.png" },
    { id: 8, name: "Pinterest", category: "social", imgUrl: "https://path/to/pinterest/logo.png" },
    { id: 9, name: "Reddit", category: "social", imgUrl: "https://path/to/reddit/logo.png" },
    { id: 10, name: "Candy Crush", category: "games", imgUrl: "https://path/to/candycrush/logo.png" },
    { id: 11, name: "Clash of Clans", category: "games", imgUrl: "https://path/to/clashofclans/logo.png" },
    { id: 12, name: "Among Us", category: "games", imgUrl: "https://path/to/amongus/logo.png" },
    { id: 13, name: "Fortnite", category: "games", imgUrl: "https://path/to/fortnite/logo.png" },
    { id: 14, name: "Minecraft", category: "games", imgUrl: "https://path/to/minecraft/logo.png" },
    { id: 15, name: "PUBG Mobile", category: "games", imgUrl: "https://path/to/pubg/logo.png" },
    { id: 16, name: "BBC News", category: "news", imgUrl: "https://path/to/bbcnews/logo.png" },
    { id: 17, name: "CNN", category: "news", imgUrl: "https://path/to/cnn/logo.png" },
    { id: 18, name: "The New York Times", category: "news", imgUrl: "https://path/to/nyt/logo.png" },
    { id: 19, name: "Fox News", category: "news", imgUrl: "https://path/to/foxnews/logo.png" },
    { id: 20, name: "Reuters", category: "news", imgUrl: "https://path/to/reuters/logo.png" },
    { id: 21, name: "BuzzFeed News", category: "news", imgUrl: "https://path/to/buzzfeed/logo.png" },
    { id: 22, name: "Uber Eats", category: "food", imgUrl: "https://path/to/ubereats/logo.png" },
    { id: 23, name: "Grubhub", category: "food", imgUrl: "https://path/to/grubhub/logo.png" },
    { id: 24, name: "DoorDash", category: "food", imgUrl: "https://path/to/doordash/logo.png" },
    { id: 25, name: "Postmates", category: "food", imgUrl: "https://path/to/postmates/logo.png" },
    { id: 26, name: "Instacart", category: "food", imgUrl: "https://path/to/instacart/logo.png" },
    { id: 27, name: "HelloFresh", category: "food", imgUrl: "https://path/to/hellofresh/logo.png" },
];

function Appstore() {
    const [filteredApps, setFilteredApps] = useState(apps);

    const searchInputRef = useRef('');

    const filterApps = () => {
        const searchTerm = searchInputRef.current.value.toLowerCase();
        const filtered = apps.filter(app => app.name.toLowerCase().includes(searchTerm));
        setFilteredApps(filtered);
    };

    const filterByCategory = (category) => {
        const filtered = apps.filter(app => app.category === category);
        setFilteredApps(filtered);
    };

    return (
        <div>
            <h1>App Store</h1>
            <input type="search" ref={searchInputRef} onChange={filterApps} placeholder="Search apps..." />
            <ul className='flex justify-around'>
                <li><button onClick={() => filterByCategory("social")}>Social</button></li>
                <li><button onClick={() => filterByCategory("games")}>Games</button></li>
                <li><button onClick={() => filterByCategory("news")}>News</button></li>
                <li><button onClick={() => filterByCategory("food")}>Food</button></li>
            </ul>
            <div className="grid grid-cols-3 gap-4">
                {filteredApps.map(app => (
                    <div key={app.id} className="p-4 shadow-md rounded-lg bg-white">
                        <img src={app.imgUrl} alt={`${app.name} Logo`} className="w-20 h-20 mb-4" />
                        <h2>{app.name}</h2>
                        <p>{app.category}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Appstore;
