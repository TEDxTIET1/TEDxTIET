const speakers = [
  {
    name: "KESHAV SADHNA",
    title: "Actor",
    photo: "speaker files/Keshav bg removed.png",
    bio: "Keshav Sadhna, famed for his role as Karan in College Romance, captivates millions with his authentic acting, infectious energy, and versatility, emerging as a leading face of India’s digital entertainment and Gen-Z storytelling."
  },
  {
    name: "DIKSHANT",
    title: "Singer,Song Writer",
    photo: "speaker files/dikshant 3 bg removed[1].png",
    bio: "Dikshant Jadhav is a rising music star known for his soulful voice and hit song 'Aankhon Se Batana' which has garnered millions of streams and widespread acclaim for its emotional depth."
  },
    {
      name: "MUKTI GAUTAM",
      title: "Digital Creator,Influencer",
      photo: "speaker files/mukti bg removed[1].png",
      bio: "Mukti Gautam is a founder, fitness coach, environmentalist, and YouTube creator with over 2 million subscribers, blending entrepreneurship, content creation, and sustainable living advocacy to inspire positive change."
    },
    {
      name: "HARINI SIVAKUMAR",
      title: "Entrepreneur",
      photo: "speaker files/Harini bg removed[1].png",
      bio: "Harini Sivakumar, a former homemaker, founded Earth Rhythm after seeking safe, non-toxic skincare for her special-needs son. Starting small, she built a Rs 200 crore, plastic-negative clean beauty brand inspiring wellness and sustainability."
    }
 
    
  ];
  
  const grid = document.getElementById('speakersGrid');
  
  speakers.forEach(speaker => {
    const card = document.createElement('div');
    card.className = 'speaker-card';
  
    card.innerHTML = `
      <img src="${speaker.photo}" alt="${speaker.name}" class="speaker-photo" />
      <div class="speaker-name">${speaker.name}</div>
      <div class="speaker-title">${speaker.title}</div>
      <div class="speaker-bio">${speaker.bio}</div>
    `;
  
    card.addEventListener('click', () => {
      // Close all other cards
      document.querySelectorAll('.speaker-card.active').forEach(c => {
        if (c !== card) c.classList.remove('active');
      });
      // Toggle this card
      card.classList.toggle('active');
    });
  
    grid.appendChild(card);
  });
  