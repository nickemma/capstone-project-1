const menu = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');

  navbar.classList.toggle('active');
});

window.onscroll = () => {
  menu.classList.remove('fa-times');

  navbar.classList.remove('active');
};

// ========== Dynamic js part ===========
const speakers = [
  {
    name: 'David Spilbierg',
    title: 'Recognized developer of the most inteligent IA of the MIT',
    description:
      'Spilbierg is a genius. Before graduating from university, his investigation around AI behaviour was already published in Science journal, changing the way we had seen AI for long and ever, resulting in a whole bunch of new researching',
    image: 'assets/images/professor-1.jpg',
  },
  {
    name: 'Emilia Titor',
    title: 'Tech leader of CC Bootcamp Summer Foundation',
    description:
      'Our tech leader has had the dream of providing developing skills to the entire world ever since she graduated from Hardvar. Delighted by the wonders of programming, and looking forward to a better future, she founded the CC Bootcamp Summer in 2015',
    image: 'assets/images/professor-2.jpg',
  },
  {
    name: 'Ranchoddas Shamalad Chanchad',
    title:
      'Berkman Professor of Institute of High Advanced Meaningful Development',
    description:
      'Chanchad lectures go around making programs that have a meaningful impact in human lifes, creating solutions for the most important problems',
    image: 'assets/images/professor-3.jpg',
  },
  {
    name: 'Camilo Torres',
    title: 'Recognized developer of the most inteligent IA of the MIT',
    description:
      'Camilo is a Software Engineer who has worked in a new, Industry 4.0, Tech university. His main objective is to create a new learning structure that his students can use to get the most of today is most advanced technology, looking to Revolutionate the entire world',
    image: 'assets/images/professor-4.jpg',
  },
  {
    name: 'Serana Titor',
    title: 'Developer in charge of the Google API project for 2022',
    description:
      'The Google API project is one of the most advanced software developed, providing a set of tools that will change the way software is made. Any of that would be possible without the guide of Serana Titor',
    image: 'assets/images/professor-5.jpg',
  },
  {
    name: 'Hashimoto Kurasiki',
    title:
      'Berkman Professor of Tokyo Institute of Technology for the past 5 years',
    description:
      'Kurasiki is a young researcher recognized among the highest scientific community as "The Einstein of Software", and the youngest professor of the most advanced institute of tech in Japan',
    image: 'assets/images/professor-6.jpg',
  },
];

for (let i = 0; i < speakers.length; i += 1) {
  const data = document.createElement('div');
  data.classList.add('card');
  data.innerHTML = `
                <div class="professor-container">
                <div class="image-container">
                <img src="${speakers[i].image}" alt=" " /> 
                </div>
                <span class="box"></span>
                </div>
                <div class="card-info">
                    <h3>
                    ${speakers[i].name}
                    </h3>
                    <h4>
                    ${speakers[i].title}
                    </h4>
                    <hr class="line-dark" />
                    <p>
                    ${speakers[i].description}
                    </p>
                </div>
    `;

  document.querySelector('.grid-container').appendChild(data);
}
