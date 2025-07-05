// Database of astronomical events
const astronomicalEvents = {
    "01-01": [
        {
            year: "1925",
            title: "First Appearance of Andromeda Nebula",
            description: "Edwin Hubble's discovery at Mt. Wilson Observatory proved Andromeda was a separate galaxy, not part of our Milky Way.",
            imageAlt: "Hubble's telescope pointing at Andromeda galaxy through observatory dome"
        },
        {
            year: "1801",
            title: "Discovery of Ceres",
            description: "Giuseppe Piazzi discovers Ceres, the largest object in the asteroid belt between Mars and Jupiter.",
            imageAlt: "Telescope view of Ceres asteroid against starry background"
        }
    ],
    "01-02": [
        {
            year: "1959",
            title: "Luna 1 Launch",
            description: "The Soviet Union launches Luna 1, the first spacecraft to reach the vicinity of the Moon.",
            imageAlt: "Luna 1 spacecraft launching into space with fiery boosters"
        }
    ],
    "01-03": [
        {
            year: "2004",
            title: "Spirit Rover Lands on Mars",
            description: "NASA's Spirit rover lands successfully on Mars to begin its mission exploring the Martian surface.",
            imageAlt: "Artist rendition of Spirit rover on Mars surface with dust blowing"
        }
    ],
    "01-04": [
        {
            year: "1903",
            title: "First Photograph of Moon's Far Side",
            description: "First successful photograph taken of the far side of the Moon from lunar orbit.",
            imageAlt: "Grainy black and white photograph of Moon's cratered far side"
        }
    ],
    "01-05": [
        {
            year: "1959",
            title: "Human Eye Observes Solar Wind",
            description: "First direct observation of the solar wind by the USSR's Luna 1 spacecraft.",
            imageAlt: "Illustration of solar wind stream flowing from the Sun"
        }
    ],
    "01-17": [
  {
    year: "2025",
    title: "NASA Begins Mars Sample Return Mission Phase 2",
    description: "NASA's Perseverance rover completes final sample caching as Earth Return Orbiter prepares for launch.",
    imageAlt: "Mars rover caching samples on rocky terrain"
  }
],

"02-10": [
  {
    year: "2025",
    title: "Blue Origin Conducts First Orbital Crew Flight",
    description: "Blue Origin successfully launches its first crewed orbital spaceflight using New Glenn rocket.",
    imageAlt: "New Glenn rocket lifting off with crew onboard"
  }
],

"03-21": [
  {
    year: "2025",
    title: "James Webb Telescope Captures First Images of Exo-Ocean Planet",
    description: "NASA announces detection of water oceans on a distant exoplanet using JWST infrared imaging.",
    imageAlt: "Visualization of water-bearing exoplanet and JWST telescope"
  }
],

"04-14": [
  {
    year: "2025",
    title: "ISRO Launches Upgraded Aditya-L2 Solar Mission",
    description: "India launches its second advanced solar observatory to study solar flares and corona.",
    imageAlt: "Aditya-L2 spacecraft near the Sun"
  }
],

"05-09": [
  {
    year: "2025",
    title: "China Begins Lunar Base Construction Phase 1",
    description: "China lands robotic units on the Moon to begin assembling modules for its long-term lunar base.",
    imageAlt: "Lunar robots placing modules on Moon's surface"
  }
],

"06-20": [
  {
    year: "2025",
    title: "SpaceX Starship Successfully Returns from Mars Simulation",
    description: "SpaceX completes a long-duration closed-loop Mars return simulation with Starship prototype.",
    imageAlt: "Starship landing back on Earth after simulated Mars mission"
  }
],

"07-05": [
  {
    year: "2025",
    title: "Ariane 6 Maiden Launch by ESA",
    description: "The European Space Agency launches Ariane 6, its new heavy-lift rocket, on its maiden flight.",
    imageAlt: "Ariane 6 rocket launching into space"
  },
  {
    year: "2025",
    title: "ISRO Announces Gaganyaan Crew Names",
    description: "ISRO officially unveils the astronauts selected for India’s first human spaceflight mission, Gaganyaan.",
    imageAlt: "ISRO crew announcement with Gaganyaan spacecraft in background"
  }
],

"08-11": [
  {
    year: "2025",
    title: "NASA and ESA Plan Asteroid Defense Collaboration",
    description: "New planetary defense initiative announced for joint asteroid impact simulation in space.",
    imageAlt: "Concept image of asteroid deflection spacecraft"
  }
],

"09-28": [
  {
    year: "2025",
    title: "Virgin Galactic Launches First Commercial Space Hotel Module",
    description: "Virgin deploys the first inflatable space hotel prototype into low Earth orbit.",
    imageAlt: "Space hotel module floating in orbit"
  }
],

"10-18": [
  {
    year: "2025",
    title: "NASA Launches Europa Clipper Mission",
    description: "NASA launches a mission to study Jupiter's moon Europa for signs of life under its icy crust.",
    imageAlt: "Europa Clipper spacecraft flying past Europa"
  }
]

    // Add more dates as needed for demonstration
    // In a production app, this would come from an API or database
    // Using current date for demo:
    [new Date().toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'})]: [
        {
            year: "2023",
            title: "James Webb Telescope Discovery",
            description: "James Webb Space Telescope reveals unprecedented details of galaxy formation in early universe.",
            imageAlt: "JWST image showing dozens of galaxies in deep field view"
        },
        {
            year: "1967",
            title: "Surveyor Program",
            description: "NASA's Surveyor program demonstrates the feasibility of soft landings on the Moon.",
            imageAlt: "Surveyor spacecraft resting on lunar surface with Earth in distance"
        },
        {
            year: "2008",
            title: "MESSENGER Flyby",
            description: "MESSENGER spacecraft performs first flyby of Mercury, returning closest-ever images.",
            imageAlt: "Close-up view of Mercury's cratered surface from MESSENGER"
        }
    ]
};

// DOM elements
const eventsContainer = document.getElementById('events-container');
const todayDateElement = document.getElementById('today-date');
const datePicker = document.getElementById('datePicker');

// Initialize with today's date
function initializeDate() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    todayDateElement.textContent = formattedDate;
    
    // Set date picker to today
    const dateString = today.toISOString().split('T')[0];
    datePicker.value = dateString;
    
    // Load events for today
    loadEventsForDate(today);
}

// Format date to MM-DD key
function getEventKey(date) {
    return date.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit'
    });
}

// Load events for specified date
function loadEventsForDate(date) {
    const eventKey = getEventKey(date);
    // Simulate API loading delay
    eventsContainer.innerHTML = `
        <div class="flex justify-center items-center py-20">
            <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full loading-spinner"></div>
        </div>
    `;
    
    setTimeout(() => {
        const events = astronomicalEvents[eventKey] || [];
        renderEvents(events);
    }, 500);
}

// Render events to the page
function renderEvents(events) {
    if (events.length === 0) {
        eventsContainer.innerHTML = `
            <div class="text-center py-20">
                <h3 class="text-xl text-gray-300 mb-2">No astronomical events found</h3>
                <p class="text-gray-500">Try another date to discover cosmic history</p>
            </div>
        `;
        return;
    }
    
    // Sort events by year (oldest first)
    events.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    
    let eventsHTML = '';
    events.forEach((event, index) => {
        const isEven = index % 2 === 0;
        
        eventsHTML += `
            <div class="event-card rounded-xl p-6 sm:p-8 w-full">
                <div class="flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 sm:gap-8">
                    <div class="w-full md:w-1/3 flex-shrink-0">
                        <div class="relative aspect-video overflow-hidden rounded-lg">
                            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1e60c14-55ab-470f-a69c-b93f36c31e3b.png" alt="${event.imageAlt}" 
                                 class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                        </div>
                    </div>
                    <div class="w-full md:w-2/3">
                        <div class="flex items-center mb-2">
                            <span class="inline-block px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-200 rounded-full text-sm mono">
                                ${event.year}
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold mb-3">${event.title}</h3>
                        <p class="text-gray-300 leading-relaxed">${event.description}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    eventsContainer.innerHTML = eventsHTML;
}

// Event listeners
datePicker.addEventListener('change', function(e) {
    const selectedDate = new Date(e.target.value);
    loadEventsForDate(selectedDate);
});

// Initialize
document.addEventListener('DOMContentLoaded', initializeDate);
