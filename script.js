 const players = [
            { name: "ROHIT SHARMA", role: "Batter", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=ROHIT SHARMA" },
            { name: "SURYA KUMAR YADAV", role: "Batter", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=SURYA KUMAR YADAV" },
            { name: "TILAK VARMA", role: "Batter", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=TILAK VARMA" },
            { name: "RYAN RICKELTON", role: "Wicket-keeper", country: "South Africa", img: "https://placehold.co/300x400/1d418c/f9cd05?text=RYAN RICKELTON" },
            { name: "HARDIK PANDYA", role: "All-rounder", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=HARDIK PANDYA" },
            { name: "DEEPAK CHAHAR", role: "Bowler", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=DEEPAK CHAHAR" },
            { name: "NAMAN DHIR", role: "All-rounder", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=NAMAN DHIR" },
            { name: "JASPRIT BUMRAH", role: "Bowler", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=JASPRIT BUMRAH" },
            { name: "TRENT BOULT", role: "Bowler", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=TRENT BOULT" },
            { name: "KARN SHARMA", role: "Bowler", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=KARN SHARMA" },
            { name: "MICHELL SANTNER", role: "All-rounder", country: "New Zealand", img: "https://placehold.co/300x400/1d418c/f9cd05?text=MICHELL SANTNER" },
            { name: "ASHWANI KUMAR", role: "Bowler", country: "India", img: "https://placehold.co/300x400/1d418c/f9cd05?text=ASHWANI KUMAR" },
        ];

        const schedule = [
            { date: "March 23, Sunday", opponent: "Chennai Super Kings [CSK]", venue: "Chennai", time: "7:30 PM", Win: "CSK", Loss: "MI" },
            { date: "March 29, Saturday", opponent: "Gujrat Titans [GT]", venue: "Ahemdabad", time: "7:30 PM", Win: "GT", Loss: "MI" },
            { date: "March 31, Monday", opponent: "Kolkata Knight Riders [KKR]", venue: "Wankhede", time: "7:30 PM", Win: "MI", Loss: "KKR" },
            { date: "April 4, Friday", opponent: "Lucknow Super Giants [LSG]", venue: "Lucknow", time: "7:30 PM", Win: "LSG", Loss: "MI" },
            { date: "April 7, Monday", opponent: "Royal Challengers Bengaluru [RCB]", venue: "Mumbai", time: "7:30 PM", Win: "RCB", Loss:"MI" },
            { date: "April 13, Sunday", opponent: "Delhi Capitals [DC]", venue: "Delhi", time: "7:30 PM", Win: "MI", Loss: "DC" },
            { date: "April 17, Thursday", opponent: "Sunrisers Hyderabad [SRH]", venue: "Mumbai", time: "7:30 PM", Win: "MI", Loss: "SRH" },
            { date: "April 20, Sunday", opponent: "Chennai Super Kings [CSK]", venue: "Mumbai", time: "7:30 PM", Win: "MI", Loss: "CSK" },
            { date: "April 23, Wednesday ", opponent: "Sunrisers Hyderabad [SRH]", venue: "Hyderabad", time: "7:30 PM", Win: "MI", Loss: "SRH" },
            { date: "April 27, Sunday", opponent: "Lucknow Super Giants [LSG]", venue: "Mumbai", time: "7:30 PM", Win: "MI", Loss: "LSG" },
             { date: "May 1, Thursday", opponent: "Rajasthan Royals [RR]", venue: "Rajisthan", time: "7:30 PM", Win: "MI", Loss: "RR" },
              { date: "May 6, Tuesday", opponent: "Gujrat Titans [GT]", venue: "Mumbai", time: "7:30 PM", Win: "GT", Loss: "MI" },
               { date: "May 21, Wednesday", opponent: "Delhi Capitals [DC]", venue: "Mumbai", time: "7:30 PM", Win: "MI", Loss: "DC" },
                { date: "May 26, Monday", opponent: "Punjab Kings[PBKS]", venue: "Punjab", time: "7:30 PM", Win: "PBKS", Loss: "MI" },
                 { date: "May 30, Friday", opponent: "Gujrat Titans [GT]", venue: "Punjab", time: "7:30 PM", Win: "MI [Q-1]", Loss: "GT [Q-1]" },
                  { date: "June 1, Sunday", opponent: "Punjab Kings[PBKS]", venue: "Ahemdabad", time: "7:30 PM", Win: "PBKS [Q-2]", Loss: "MI [Q-2]" },
        ];
        
        const news = [
            { title: "MI strikes gold with Jonny Bairstow on PlayOff", date: "Aug 17, 2025", summary: "Will Jacks breaks silence after backlash over Jonny Bairstow comments, stating the franchise has found a gem.", image: "https://placehold.co/600x400/1d418c/f9cd05?text=JONNY BAIRSTOW" },
            { title: "Ryan Rickelton clarifies intent on Jonny Bairstow' signing", date: "Aug 17, 2025", summary: "The Batter clarified his remarks were about Jonny Bairstow batting prowess, not his contract details.", image: "https://placehold.co/600x400/1d418c/f9cd05?text=RYAN RICKELTON" },
            { title: "Former MI player slams Aswani Kumar for contract talk", date: "Aug 18, 2025", summary: "Anirudha Srikkanth criticized Ashwani Kumar for publicly discussing a teammate's contract, calling it 'very, very wrong'., on MI playoff match vs PBKS", image: "https://placehold.co/600x400/1d418c/f9cd05?text=Controversy" },
        ];

        const stats = {
            batsmen: [
                { name: "Suryakumar Yadav", runs: 717 },
                { name: "Rohit Sharma", runs: 418 },
                { name: "Ryan Rickelton", runs: 388 },
                { name: "Tilak Varma", runs: 343 },
            ],
            bowlers: [
                { name: "Trent Boult", wickets: 22 },
                { name: "Jasprit Bumrah", wickets: 18 },
                { name: "Hardik Pandya", wickets: 14 },
                { name: "Deepak Chahar and Ashwani Kumar", wickets: 11 },
            ]
        };

        // --- DOM MANIPULATION ---
        document.addEventListener('DOMContentLoaded', () => {
            const teamContainer = document.querySelector('#team .grid');
            const scheduleBody = document.getElementById('schedule-body');
            const newsContainer = document.getElementById('news-container');
            const topBatsmenList = document.getElementById('top-batsmen');
            const topBowlersList = document.getElementById('top-bowlers');
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');

            // Populate Players
            players.forEach(player => {
                const card = document.createElement('div');
                card.className = 'player-card bg-gray-800 rounded-lg shadow-xl overflow-hidden text-center p-6';
                card.innerHTML = `
                    <img src="${player.img}" alt="${player.name}" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-csk-yellow object-cover" onerror="this.onerror=null;this.src='https://placehold.co/300x400/1d418c/f9cd05?text=Player';">
                    <h3 class="text-xl font-bold csk-yellow">${player.name}</h3>
                    <p class="text-gray-400">${player.role}</p>
                    <p class="text-gray-400">${player.country}</p>
                `;
                teamContainer.appendChild(card);
            });

            // Populate Schedule
            schedule.forEach(match => {
                const row = document.createElement('tr');
                row.className = 'border-b border-gray-700 hover:bg-gray-700';
                row.innerHTML = `
                    <td class="p-4">${match.date}</td>
                    <td class="p-4">${match.opponent}</td>
                    <td class="p-4">${match.venue}</td>
                    <td class="p-4 mi-blue font-semibold">${match.time}</td>
                    <td class="p-4">${match.Win}</td>
                    <td class="p-4">${match.Loss}</td>
                `;
                scheduleBody.appendChild(row);
            });
            
            // Populate News
            news.forEach(article => {
                const newsCard = document.createElement('div');
                newsCard.className = 'bg-gray-800 rounded-lg shadow-xl overflow-hidden';
                newsCard.innerHTML = `
                    <img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover" onerror="this.onerror=null;this.src='https://placehold.co/600x400/1d418c/f9cd05?text=News';">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 mi-blue">${article.title}</h3>
                        <p class="text-sm text-gray-400 mb-4">${article.date}</p>
                        <p class="text-gray-300">${article.summary}</p>
                    </div>
                `;
                newsContainer.appendChild(newsCard);
            });

            // Populate Stats
            stats.batsmen.forEach(player => {
                const li = document.createElement('li');
                li.className = 'flex justify-between items-center bg-gray-700 p-3 rounded';
                li.innerHTML = `
                    <span>${player.name}</span>
                    <span class="font-bold mi-blue">${player.runs} Runs</span>
                `;
                topBatsmenList.appendChild(li);
            });

            stats.bowlers.forEach(player => {
                const li = document.createElement('li');
                li.className = 'flex justify-between items-center bg-gray-700 p-3 rounded';
                li.innerHTML = `
                    <span>${player.name}</span>
                    <span class="font-bold mi-blue">${player.wickets} Wickets</span>
                `;
                topBowlersList.appendChild(li);
            });

            // Mobile Menu Toggle
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Smooth Scrolling & Active Nav Link
            const navLinks = document.querySelectorAll('.nav-link, #mobile-menu a');
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80, // Adjust for header height
                            behavior: 'smooth'
                        });
                    }

                    // Active link styling
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                    if(!this.parentElement.classList.contains('bg-csk-blue')) {
                        this.classList.add('active');
                    }

                    // Close mobile menu on click
                    if (mobileMenu.classList.contains('hidden') === false) {
                        mobileMenu.classList.add('hidden');
                    }
                });
            });
        });