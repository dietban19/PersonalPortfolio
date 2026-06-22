const projects = [
  {
    id: 1,
    name: 'Travel Planner',
    description:
      'A collaborative travel planning app for creating trips, organizing itineraries, and keeping plans in sync across the team.',
    skills: [
      'React',
      'Node.js',
      'Firebase',
      'MongoDB',
      'Google Maps API',
      'Tailwind CSS',
    ],
    image: 'images/travel4.png',
    link: '',
    featured: true,
    year: '2026',
    article: {
      role: 'Full Stack Developer',
      timeline: 'In progress',
      team: 'Solo project',
      heroImage:
        'https://placehold.co/1400x700/d0dff0/3a7bd5?text=Travel+Planner+—+Hero',
      intro:
        'Travel Planner started as a way to replace the usual mix of spreadsheets, shared notes, and group chats that goes into organizing a trip. I wanted one place where people could plan together, keep the details organized, and move through the trip without losing track of the itinerary.',
      sections: [
        {
          type: 'heading',
          content: 'The Problem',
        },
        {
          type: 'paragraph',
          content:
            'Group travel planning is messy because the information usually lives in too many places at once. Trip ideas end up in chats, schedules get split across notes, and important details are easy to lose. This project focuses on keeping the experience simple while still supporting collaborative planning, trip organization, and messaging.',
        },
        {
          type: 'image',
          src: 'https://placehold.co/1200x600/eef2f8/5a8fc4?text=Wireframes+%26+Early+Sketches',
          caption: 'Early wireframes for the trip overview and itinerary flow.',
        },
        {
          type: 'heading',
          content: 'Design',
        },
        {
          type: 'paragraph',
          content:
            'The design is intentionally clean and lightweight, with a focus on readability and quick scanning. The interface uses a neutral palette with blue accents to keep attention on the trip data, and the layout is being shaped to stay clear on both desktop and mobile.',
        },
        {
          type: 'paragraph',
          content:
            'I am still refining the mobile experience, so that part of the project is not fully finished yet. The current focus is on improving spacing, touch targets, and card layouts so the same information stays usable on smaller screens without feeling cramped.',
        },
        {
          type: 'image-pair',
          images: [
            {
              src: 'https://placehold.co/700x480/dce8f5/4a80c4?text=Dashboard+View',
              caption: 'Trip dashboard with upcoming and saved trips.',
            },
            {
              src: 'https://placehold.co/700x480/dce8f5/4a80c4?text=Itinerary+Builder',
              caption: 'Trip detail view with day groupings and activities.',
            },
          ],
        },
        {
          type: 'heading',
          content: 'Tech Stack',
        },
        {
          type: 'paragraph',
          content:
            'The frontend is built with React and Tailwind CSS. The backend is a Node.js and Express API that powers trip data, user profiles, and external integrations, while Firebase is used for authentication and real-time chat-related features. The app also uses MongoDB for the main data model and Firestore for the cached and collaborative pieces that need live updates.',
        },
        {
          type: 'stack',
          items: [
            {
              label: 'Frontend',
              tech: 'React, Tailwind CSS, Vite',
              detail:
                'Component-based UI with reusable trip, chat, and detail views. The current work is still tightening the responsive layout for mobile screens.',
            },
            {
              label: 'Backend',
              tech: 'Node.js, Express',
              detail:
                'REST API for trips, profiles, uploads, and external data such as weather, prayer times, geocoding, and place details.',
            },
            {
              label: 'Database',
              tech: 'MongoDB, Firestore',
              detail:
                'MongoDB stores the main app data while Firestore is used for collaborative chat and cached place data.',
            },
            {
              label: 'Auth & Chat',
              tech: 'Firebase Authentication, Firestore',
              detail:
                'Firebase handles sign-in and user session flow, and Firestore powers the live DM and trip chat experience.',
            },
            {
              label: 'Maps & APIs',
              tech: 'Google Maps API, Weather, Prayer, Geocoding',
              detail:
                'Used for place search, place images, weather, prayer times, and location lookup inside the trip detail screens.',
            },
          ],
        },
        {
          type: 'heading',
          content: 'Key Features',
        },
        {
          type: 'feature-list',
          items: [
            {
              title: 'Trip planning and sharing',
              description:
                'Users can create trips, add days and activities, and share trips with other people using the current join flow.',
            },
            {
              title: 'Trip detail organization',
              description:
                'Each trip keeps track of days, activities, budget details, and progress so the plan stays in one place.',
            },
            {
              title: 'Direct messages and trip chat',
              description:
                'The app supports both DMs and trip-based chat so travelers can coordinate without leaving the project.',
            },
            {
              title: 'Place and destination data',
              description:
                'Destination data is enriched with place search, cached images, weather, prayer times, and geocoding through backend services.',
            },
            {
              title: 'Profile and auth flow',
              description:
                'Firebase authentication and profile setup keep the user flow connected from sign-up through trip participation.',
            },
          ],
        },
        {
          type: 'image',
          src: 'https://placehold.co/1200x560/e0ebf8/4a7ec4?text=Mobile+View+%E2%80%94+Itinerary+Detail',
          caption:
            'Mobile view of the itinerary detail screen, still being refined.',
        },
        {
          type: 'heading',
          content: 'What I Learned',
        },
        {
          type: 'paragraph',
          content:
            'Building a collaborative travel app has taught me how much coordination happens behind a simple interface. Keeping auth, trips, chat, and cached place data in sync pushed me to think more carefully about data ownership, state updates, and where each piece of information should live.',
        },
        {
          type: 'paragraph',
          content:
            'On the design side, the biggest lesson so far has been that a travel app has to stay simple even when the data gets more complex. I am still working through the mobile version, and that is where I am learning the most about spacing, hierarchy, and how to keep the interface readable on smaller screens.',
        },
      ],
    },
  },
  {
    id: 2,
    name: 'VR Operational Preparedness Simulator',
    description:
      'A mixed-reality training simulator for oil and gas operations that combines VR scenarios with a custom-built physical control panel. The project was built for immersive, hands-on operational training and earned a Bronze Medal out of 26 teams at the Multidisciplinary Capstone Competition.',
    skills: [
      'VR',
      'ESP32',
      'C/C++',
      'Hardware',
      'Firmware',
      'Circuit Design',
      'Soldering',
      'Wiring',
    ],
    image: 'images/capstone.png',
    link: '',
    featured: true,
    year: '2026',
  },
  {
    id: 3,
    name: 'BraVRy',
    description:
      'Built a VR-based exposure therapy platform designed to support individuals managing anxiety through immersive, controlled virtual environments. The project earned 2nd place at NatHacks 2023, Canada’s largest neurotechnology hackathon.',
    skills: ['Python', 'React', 'Firebase', 'Node.js', 'SASS'],
    image: 'images/bravry.jpg',
    link: '',
    featured: true,
    year: '2023',
  },
];

export default projects;
