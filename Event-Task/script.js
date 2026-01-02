const events=[
    {
    name: "Tech Innovators Meetup",
    date: "Jan 15, 2026 · 6:00 PM",
    location: "Karachi",
    description: "A networking meetup for developers, designers, and tech enthusiasts."
  },
  {
    name: "Music & Arts Festival",
    date: "Jan 20, 2026 · 4:00 PM",
    location: "Lahore",
    description: "Enjoy live music performances, art exhibitions, and food stalls."
  },
  {
    name: "Startup Pitch Night",
    date: "Jan 25, 2026 · 5:30 PM",
    location: "Islamabad",
    description: "Watch startups pitch ideas to investors and industry experts."
  },
  {
    name: "Digital Marketing Workshop",
    date: "Feb 02, 2026 · 3:00 PM",
    location: "Online",
    description: "Learn modern digital marketing strategies from professionals."
  }
]

const eventsContainer = document.querySelector("#eventsContainer");
const searchInput = document.querySelector("#searchEvents");

function renderEvents(events){
    eventsContainer.innerHTML="";

    if(events.length ===0){
        eventsContainer.innerHTML= "<p>no events found</p>";
        return;
    }

    events.forEach(event => {
        const eventCard=document.createElement("div");
        eventCard.classList.add("event-card");

        eventCard.innerHTML=`
        <h3>${event.name}</h3>
        <div clas="event-meta-data">
            ${event.date} <br/>
            ${event.location}
        </div>

        <p class="event-description">${event.description}</p>
        <button>Register</button>
        `;

        eventsContainer.appendChild(eventCard);

    });
}
    // this logic for filter search result
searchInput.addEventListener("input",(e)=>{
    const searchText=e.target.value.toLowerCase();

    const filteredEvents=events.filter(event=>
        event.name.toLowerCase().includes(searchText)
    );

    renderEvents(filteredEvents);
})

    // tihs is all events 
renderEvents(events);