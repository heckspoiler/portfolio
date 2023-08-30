// array of objects with project data

const projectArray = [
  {
    projectName: "sinecloud",
    alt: "sinecloud",
    imgUrl: "./assets/images/projects/testimages/sinecloud.jpg",
    videoUrl: "",
    link: "https://sinecloud.digital/",
    description: "Soundcloud clone with my favorite radio stations",
    descriptionLong:
      "Music's got tons of faces, but most of them get buried in the crowd. Thanks to those big-shot music platforms with their fancy algorithms that seem to cozy up to the big labels, so many rad artists and tunes get drowned out. This makes musical diversity sound like some old-school myth for most mainstream listeners. Finding a track that truly vibes differently? Tough gig. Enter sinecloud. This is our little corner of the web for all the sound junkies and synth enthusiasts to geek out and share their beats. We tap into the soundcloud API to fetch the most recent tracks from 5 radio stations (for now) and combine them in a wild mix of genres. We're running on that popular javascript baddie, react, for our front-end scene to make everything smooth and fast like a song by the Cure and got express.js rocking the backstage. With this, we can at least try to escape the numbness of the cultural industry and make Adorno proud. ",
    technologies: `<p>React</p>
    <div class="decor-dot"></div>
    <p>RESTful API</p>
    <div class="decor-dot"></div>
    <p>express.js</p>
    <div class="decor-dot"></div>
    <p>vanilla css</p>
    <div class="decor-dot"></div>
    <a href="https://github.com/heckspoiler/sinecloud/tree/main/sinecloud" target="_blank"><svg class="projects-github" width="101" height="104" viewBox="0 0 101 104" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.7821 80.7219C33.7821 81.1281 33.3137 81.4531 32.7232 81.4531C32.0512 81.5141 31.5829 81.1891 31.5829 80.7219C31.5829 80.3156 32.0512 79.9906 32.6417 79.9906C33.2526 79.9297 33.7821 80.2547 33.7821 80.7219ZM27.4492 79.8078C27.3067 80.2141 27.7139 80.6812 28.3248 80.8031C28.8542 81.0062 29.4651 80.8031 29.5873 80.3969C29.7095 79.9906 29.3226 79.5234 28.7117 79.3406C28.1823 79.1984 27.5917 79.4016 27.4492 79.8078ZM36.4496 79.4625C35.8591 79.6047 35.4518 79.9906 35.5129 80.4578C35.574 80.8641 36.1034 81.1281 36.7143 80.9859C37.3048 80.8437 37.7121 80.4578 37.651 80.0516C37.5899 79.6656 37.0401 79.4016 36.4496 79.4625ZM49.8484 1.625C21.605 1.625 0 23.0141 0 51.1875C0 73.7141 14.2133 92.9906 34.5151 99.775C37.1216 100.242 38.0379 98.6375 38.0379 97.3172C38.0379 96.0578 37.9768 89.1109 37.9768 84.8453C37.9768 84.8453 23.7228 87.8922 20.7294 78.7922C20.7294 78.7922 18.4081 72.8812 15.0685 71.3578C15.0685 71.3578 10.4054 68.1687 15.3944 68.2297C15.3944 68.2297 20.4647 68.6359 23.2544 73.4703C27.7139 81.3109 35.1871 79.0562 38.099 77.7156C38.5673 74.4656 39.8909 72.2109 41.3571 70.8703C29.9742 69.6109 18.4895 67.9656 18.4895 48.425C18.4895 42.8391 20.0371 40.0359 23.2952 36.4609C22.7657 35.1406 21.0349 29.6969 23.8246 22.6687C28.0804 21.3484 37.875 28.1531 37.875 28.1531C41.9476 27.0156 46.3256 26.4266 50.6629 26.4266C55.0002 26.4266 59.3782 27.0156 63.4508 28.1531C63.4508 28.1531 73.2454 21.3281 77.5012 22.6687C80.2909 29.7172 78.5601 35.1406 78.0306 36.4609C81.2887 40.0562 83.2843 42.8594 83.2843 48.425C83.2843 68.0266 71.2905 69.5906 59.9077 70.8703C61.7811 72.475 63.3694 75.5219 63.3694 80.2953C63.3694 87.1406 63.3083 95.6109 63.3083 97.2766C63.3083 98.5969 64.245 100.202 66.8311 99.7344C87.194 92.9906 101 73.7141 101 51.1875C101 23.0141 78.0917 1.625 49.8484 1.625ZM19.7927 71.6828C19.528 71.8859 19.5891 72.3531 19.9353 72.7391C20.2611 73.0641 20.7294 73.2062 20.9942 72.9422C21.2589 72.7391 21.1978 72.2719 20.8516 71.8859C20.5258 71.5609 20.0575 71.4187 19.7927 71.6828ZM17.5935 70.0375C17.451 70.3016 17.6546 70.6266 18.0619 70.8297C18.3877 71.0328 18.795 70.9719 18.9375 70.6875C19.08 70.4234 18.8764 70.0984 18.4692 69.8953C18.0619 69.7734 17.7361 69.8344 17.5935 70.0375ZM24.1911 77.2687C23.8653 77.5328 23.9875 78.1422 24.4558 78.5281C24.9242 78.9953 25.5147 79.0562 25.7794 78.7312C26.0442 78.4672 25.922 77.8578 25.5147 77.4719C25.0667 77.0047 24.4558 76.9437 24.1911 77.2687ZM21.8698 74.2828C21.544 74.4859 21.544 75.0141 21.8698 75.4812C22.1956 75.9484 22.7454 76.1516 23.0101 75.9484C23.3359 75.6844 23.3359 75.1562 23.0101 74.6891C22.725 74.2219 22.1956 74.0187 21.8698 74.2828Z" fill="black"/>
    </svg></a>`,
  },
  {
    projectName: "station daw",
    alt: "station",
    imgUrl: "./assets/images/projects/testimages/station_daw.png",
    videoUrl: "",
    link: "https://64b8fa5eae17a45b2c15a874--papaya-macaron-4ea9a6.netlify.app/",
    description: "Landing page for a DAW",
    descriptionLong:
      "Now that we have already established an application that feeds you with new earfood in the shape of decent tunes, we also need to help musicians that aim for making us happy and delivering us those crispy golden nuggets we're craving for. In comes: Station DAW, a newly founded digital audio workstation delivered straight onto your personal computer, whatever you're using. While we've outsourced the actual development of our new baby to the most competent developers available, we've buckled down and already created the landing page so musicians-in-the-making and established pros can get a first glance at what's to expect. This landing page was built using all Vanilla Ice Ice Baby: HTML, CSS and pure Javascript sometimes are cooler than the latest hype!",
    technologies: `<p>Vanilla Javascript</p>
    <div class="decor-dot"></div>
    <p>HTML</p>
    <div class="decor-dot"></div>
    <p>CSS</p>
    <div class="decor-dot"></div>
    <a href="https://github.com/heckspoiler/station_daw" target="_blank"><svg class="projects-github" width="101" height="104" viewBox="0 0 101 104" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.7821 80.7219C33.7821 81.1281 33.3137 81.4531 32.7232 81.4531C32.0512 81.5141 31.5829 81.1891 31.5829 80.7219C31.5829 80.3156 32.0512 79.9906 32.6417 79.9906C33.2526 79.9297 33.7821 80.2547 33.7821 80.7219ZM27.4492 79.8078C27.3067 80.2141 27.7139 80.6812 28.3248 80.8031C28.8542 81.0062 29.4651 80.8031 29.5873 80.3969C29.7095 79.9906 29.3226 79.5234 28.7117 79.3406C28.1823 79.1984 27.5917 79.4016 27.4492 79.8078ZM36.4496 79.4625C35.8591 79.6047 35.4518 79.9906 35.5129 80.4578C35.574 80.8641 36.1034 81.1281 36.7143 80.9859C37.3048 80.8437 37.7121 80.4578 37.651 80.0516C37.5899 79.6656 37.0401 79.4016 36.4496 79.4625ZM49.8484 1.625C21.605 1.625 0 23.0141 0 51.1875C0 73.7141 14.2133 92.9906 34.5151 99.775C37.1216 100.242 38.0379 98.6375 38.0379 97.3172C38.0379 96.0578 37.9768 89.1109 37.9768 84.8453C37.9768 84.8453 23.7228 87.8922 20.7294 78.7922C20.7294 78.7922 18.4081 72.8812 15.0685 71.3578C15.0685 71.3578 10.4054 68.1687 15.3944 68.2297C15.3944 68.2297 20.4647 68.6359 23.2544 73.4703C27.7139 81.3109 35.1871 79.0562 38.099 77.7156C38.5673 74.4656 39.8909 72.2109 41.3571 70.8703C29.9742 69.6109 18.4895 67.9656 18.4895 48.425C18.4895 42.8391 20.0371 40.0359 23.2952 36.4609C22.7657 35.1406 21.0349 29.6969 23.8246 22.6687C28.0804 21.3484 37.875 28.1531 37.875 28.1531C41.9476 27.0156 46.3256 26.4266 50.6629 26.4266C55.0002 26.4266 59.3782 27.0156 63.4508 28.1531C63.4508 28.1531 73.2454 21.3281 77.5012 22.6687C80.2909 29.7172 78.5601 35.1406 78.0306 36.4609C81.2887 40.0562 83.2843 42.8594 83.2843 48.425C83.2843 68.0266 71.2905 69.5906 59.9077 70.8703C61.7811 72.475 63.3694 75.5219 63.3694 80.2953C63.3694 87.1406 63.3083 95.6109 63.3083 97.2766C63.3083 98.5969 64.245 100.202 66.8311 99.7344C87.194 92.9906 101 73.7141 101 51.1875C101 23.0141 78.0917 1.625 49.8484 1.625ZM19.7927 71.6828C19.528 71.8859 19.5891 72.3531 19.9353 72.7391C20.2611 73.0641 20.7294 73.2062 20.9942 72.9422C21.2589 72.7391 21.1978 72.2719 20.8516 71.8859C20.5258 71.5609 20.0575 71.4187 19.7927 71.6828ZM17.5935 70.0375C17.451 70.3016 17.6546 70.6266 18.0619 70.8297C18.3877 71.0328 18.795 70.9719 18.9375 70.6875C19.08 70.4234 18.8764 70.0984 18.4692 69.8953C18.0619 69.7734 17.7361 69.8344 17.5935 70.0375ZM24.1911 77.2687C23.8653 77.5328 23.9875 78.1422 24.4558 78.5281C24.9242 78.9953 25.5147 79.0562 25.7794 78.7312C26.0442 78.4672 25.922 77.8578 25.5147 77.4719C25.0667 77.0047 24.4558 76.9437 24.1911 77.2687ZM21.8698 74.2828C21.544 74.4859 21.544 75.0141 21.8698 75.4812C22.1956 75.9484 22.7454 76.1516 23.0101 75.9484C23.3359 75.6844 23.3359 75.1562 23.0101 74.6891C22.725 74.2219 22.1956 74.0187 21.8698 74.2828Z" fill="black"/>
    </svg></a>
    `,
  },
  {
    projectName: "chewstreet",
    alt: "chewstreet",
    imgUrl: "./assets/images/projects/testimages/chewstreet.png",
    videoUrl: "",
    link: "https://www.youtube.com/watch?v=8ybW48rKBME",
    description: "A SaaS for Webdev Everything",
    descriptionLong:
      "Now that you're in outer space, you have plenty of time to kill. I mean, it might take you up to seven years to reach your final destination! If you intend to come back to Earth someday (and we hope you will), you should know that, based on what we've seen in the last decade, technological advancements are unlikely to slow down, especially now with AI in the mix. So you might be better off staying in touch with the latest trends and developments. Need resources for that? We've got you covered here, too. Chewstreet offers basic courses in all things web development and design at a very low price, with payment options available either monthly or annually. Considering recent inflation rates, this could be a real steal in 14 years when you finally touch down on Earth again. This project uses Next.js for server-side content rendering and CSS Tailwind to make it visually appealing. For the backend, we use Supabase, and Stripe handles payments and subscriptions. Since I'm using Stripe's test version, I can't go into production mode, but if you want to invite me for an interview, I can bring my laptop and show you the finished project.",
    technologies: `<p>Next.js</p>
    <div class="decor-dot"></div>
    <p>Tailwind CSS</p>
    <div class="decor-dot"></div>
    <p>supabase</p>
    <div class="decor-dot"></div>
    <p>Stripe</p>
    <div class="decor-dot"></div>
    <a href="https://github.com/heckspoiler/chewstreet-1" target="_blank"><svg class="projects-github" width="101" height="104" viewBox="0 0 101 104" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.7821 80.7219C33.7821 81.1281 33.3137 81.4531 32.7232 81.4531C32.0512 81.5141 31.5829 81.1891 31.5829 80.7219C31.5829 80.3156 32.0512 79.9906 32.6417 79.9906C33.2526 79.9297 33.7821 80.2547 33.7821 80.7219ZM27.4492 79.8078C27.3067 80.2141 27.7139 80.6812 28.3248 80.8031C28.8542 81.0062 29.4651 80.8031 29.5873 80.3969C29.7095 79.9906 29.3226 79.5234 28.7117 79.3406C28.1823 79.1984 27.5917 79.4016 27.4492 79.8078ZM36.4496 79.4625C35.8591 79.6047 35.4518 79.9906 35.5129 80.4578C35.574 80.8641 36.1034 81.1281 36.7143 80.9859C37.3048 80.8437 37.7121 80.4578 37.651 80.0516C37.5899 79.6656 37.0401 79.4016 36.4496 79.4625ZM49.8484 1.625C21.605 1.625 0 23.0141 0 51.1875C0 73.7141 14.2133 92.9906 34.5151 99.775C37.1216 100.242 38.0379 98.6375 38.0379 97.3172C38.0379 96.0578 37.9768 89.1109 37.9768 84.8453C37.9768 84.8453 23.7228 87.8922 20.7294 78.7922C20.7294 78.7922 18.4081 72.8812 15.0685 71.3578C15.0685 71.3578 10.4054 68.1687 15.3944 68.2297C15.3944 68.2297 20.4647 68.6359 23.2544 73.4703C27.7139 81.3109 35.1871 79.0562 38.099 77.7156C38.5673 74.4656 39.8909 72.2109 41.3571 70.8703C29.9742 69.6109 18.4895 67.9656 18.4895 48.425C18.4895 42.8391 20.0371 40.0359 23.2952 36.4609C22.7657 35.1406 21.0349 29.6969 23.8246 22.6687C28.0804 21.3484 37.875 28.1531 37.875 28.1531C41.9476 27.0156 46.3256 26.4266 50.6629 26.4266C55.0002 26.4266 59.3782 27.0156 63.4508 28.1531C63.4508 28.1531 73.2454 21.3281 77.5012 22.6687C80.2909 29.7172 78.5601 35.1406 78.0306 36.4609C81.2887 40.0562 83.2843 42.8594 83.2843 48.425C83.2843 68.0266 71.2905 69.5906 59.9077 70.8703C61.7811 72.475 63.3694 75.5219 63.3694 80.2953C63.3694 87.1406 63.3083 95.6109 63.3083 97.2766C63.3083 98.5969 64.245 100.202 66.8311 99.7344C87.194 92.9906 101 73.7141 101 51.1875C101 23.0141 78.0917 1.625 49.8484 1.625ZM19.7927 71.6828C19.528 71.8859 19.5891 72.3531 19.9353 72.7391C20.2611 73.0641 20.7294 73.2062 20.9942 72.9422C21.2589 72.7391 21.1978 72.2719 20.8516 71.8859C20.5258 71.5609 20.0575 71.4187 19.7927 71.6828ZM17.5935 70.0375C17.451 70.3016 17.6546 70.6266 18.0619 70.8297C18.3877 71.0328 18.795 70.9719 18.9375 70.6875C19.08 70.4234 18.8764 70.0984 18.4692 69.8953C18.0619 69.7734 17.7361 69.8344 17.5935 70.0375ZM24.1911 77.2687C23.8653 77.5328 23.9875 78.1422 24.4558 78.5281C24.9242 78.9953 25.5147 79.0562 25.7794 78.7312C26.0442 78.4672 25.922 77.8578 25.5147 77.4719C25.0667 77.0047 24.4558 76.9437 24.1911 77.2687ZM21.8698 74.2828C21.544 74.4859 21.544 75.0141 21.8698 75.4812C22.1956 75.9484 22.7454 76.1516 23.0101 75.9484C23.3359 75.6844 23.3359 75.1562 23.0101 74.6891C22.725 74.2219 22.1956 74.0187 21.8698 74.2828Z" fill="black"/>
    </svg></a>
    `,
  },
  {
    projectName: "space club",
    alt: "spaceclub",
    imgUrl: "./assets/images/projects/testimages/spaceclub.png",
    videoUrl: "",
    link: "https://unique-wisp-345515.netlify.app",
    description: "A homepage for an imaginary space travel company",
    descriptionLong:
      "Music here, music there, music everywhere! Not quite, apparently sound waves don't travel in space - so if you're tired of hearing about music, why not treat yourself with something not many people have done before? Space Club offers space travels to places even further away then Australia, and if you're from Australia, even further away than Switzerland! The space club homepage contains some of the destinations possible, but make sure to quit your job in advance because you're not coming back anytime soon! By the way, it's not advised to get out of your way confirm our statement about sound waves not travelling in space, keep your helmet on at all times please. This website is a frontendmentor.io challenge (intermediate-level) and was crafted with Next.js, using its server-sided rendering for SEO-optimization and TailwindCSS, utilizing a modular design strategy for the Tailwind components.",
    technologies: `<p>React</p>
    <div class="decor-dot"></div>
    <p>Next.js</p>
    <div class="decor-dot"></div>
    <p>Tailwind CSS</p>
    <div class="decor-dot"></div>
    <a href="https://github.com/heckspoiler/space-travel" target="_blank"><svg class="projects-github" width="101" height="104" viewBox="0 0 101 104" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.7821 80.7219C33.7821 81.1281 33.3137 81.4531 32.7232 81.4531C32.0512 81.5141 31.5829 81.1891 31.5829 80.7219C31.5829 80.3156 32.0512 79.9906 32.6417 79.9906C33.2526 79.9297 33.7821 80.2547 33.7821 80.7219ZM27.4492 79.8078C27.3067 80.2141 27.7139 80.6812 28.3248 80.8031C28.8542 81.0062 29.4651 80.8031 29.5873 80.3969C29.7095 79.9906 29.3226 79.5234 28.7117 79.3406C28.1823 79.1984 27.5917 79.4016 27.4492 79.8078ZM36.4496 79.4625C35.8591 79.6047 35.4518 79.9906 35.5129 80.4578C35.574 80.8641 36.1034 81.1281 36.7143 80.9859C37.3048 80.8437 37.7121 80.4578 37.651 80.0516C37.5899 79.6656 37.0401 79.4016 36.4496 79.4625ZM49.8484 1.625C21.605 1.625 0 23.0141 0 51.1875C0 73.7141 14.2133 92.9906 34.5151 99.775C37.1216 100.242 38.0379 98.6375 38.0379 97.3172C38.0379 96.0578 37.9768 89.1109 37.9768 84.8453C37.9768 84.8453 23.7228 87.8922 20.7294 78.7922C20.7294 78.7922 18.4081 72.8812 15.0685 71.3578C15.0685 71.3578 10.4054 68.1687 15.3944 68.2297C15.3944 68.2297 20.4647 68.6359 23.2544 73.4703C27.7139 81.3109 35.1871 79.0562 38.099 77.7156C38.5673 74.4656 39.8909 72.2109 41.3571 70.8703C29.9742 69.6109 18.4895 67.9656 18.4895 48.425C18.4895 42.8391 20.0371 40.0359 23.2952 36.4609C22.7657 35.1406 21.0349 29.6969 23.8246 22.6687C28.0804 21.3484 37.875 28.1531 37.875 28.1531C41.9476 27.0156 46.3256 26.4266 50.6629 26.4266C55.0002 26.4266 59.3782 27.0156 63.4508 28.1531C63.4508 28.1531 73.2454 21.3281 77.5012 22.6687C80.2909 29.7172 78.5601 35.1406 78.0306 36.4609C81.2887 40.0562 83.2843 42.8594 83.2843 48.425C83.2843 68.0266 71.2905 69.5906 59.9077 70.8703C61.7811 72.475 63.3694 75.5219 63.3694 80.2953C63.3694 87.1406 63.3083 95.6109 63.3083 97.2766C63.3083 98.5969 64.245 100.202 66.8311 99.7344C87.194 92.9906 101 73.7141 101 51.1875C101 23.0141 78.0917 1.625 49.8484 1.625ZM19.7927 71.6828C19.528 71.8859 19.5891 72.3531 19.9353 72.7391C20.2611 73.0641 20.7294 73.2062 20.9942 72.9422C21.2589 72.7391 21.1978 72.2719 20.8516 71.8859C20.5258 71.5609 20.0575 71.4187 19.7927 71.6828ZM17.5935 70.0375C17.451 70.3016 17.6546 70.6266 18.0619 70.8297C18.3877 71.0328 18.795 70.9719 18.9375 70.6875C19.08 70.4234 18.8764 70.0984 18.4692 69.8953C18.0619 69.7734 17.7361 69.8344 17.5935 70.0375ZM24.1911 77.2687C23.8653 77.5328 23.9875 78.1422 24.4558 78.5281C24.9242 78.9953 25.5147 79.0562 25.7794 78.7312C26.0442 78.4672 25.922 77.8578 25.5147 77.4719C25.0667 77.0047 24.4558 76.9437 24.1911 77.2687ZM21.8698 74.2828C21.544 74.4859 21.544 75.0141 21.8698 75.4812C22.1956 75.9484 22.7454 76.1516 23.0101 75.9484C23.3359 75.6844 23.3359 75.1562 23.0101 74.6891C22.725 74.2219 22.1956 74.0187 21.8698 74.2828Z" fill="black"/>
    </svg></a>
    `,
  },
  {
    projectName: "milky mood",
    alt: "milkymood",
    imgUrl: "./assets/images/projects/testimages/milkymood.jpg",
    videoUrl: "",
    link: "https://www.youtube.com/watch?v=8ybW48rKBME",
    description:
      "Now that you're in outer space, you have plenty of time to kill. I mean, it might take you up to seven years to reach your final destination! If you intend to come back to Earth someday (and we hope you will), you should know that, based on what we've seen in the last decade, technological advancements are unlikely to slow down, especially now with AI in the mix. So you might be better off staying in touch with the latest trends and developments. Need resources for that? We've got you covered here, too. Chewstreet offers basic courses in all things web development and design at a very low price, with payment options available either monthly or annually. Considering recent inflation rates, this could be a real steal in 14 years when you finally touch down on Earth again. This project uses Next.js for server-side content rendering and CSS Tailwind to make it visually appealing. For the backend, we use Supabase, and Stripe handles payments and subscriptions. Since I'm using Stripe's test version, I can't go into production mode, but if you want to invite me for an interview, I can bring my laptop and show you the finished project.",
    descriptionLong: "milky mood",
    technologies: `<p>React</p>
    <div class="decor-dot"></div>
    <p>CSS</p>
    <div class="decor-dot"></div>
    <p>Tailwind CSS</p>
    <div class="decor-dot"></div>
    <a href="https://github.com/heckspoiler/station_daw" target="_blank"><svg class="projects-github" width="101" height="104" viewBox="0 0 101 104" fill="black" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.7821 80.7219C33.7821 81.1281 33.3137 81.4531 32.7232 81.4531C32.0512 81.5141 31.5829 81.1891 31.5829 80.7219C31.5829 80.3156 32.0512 79.9906 32.6417 79.9906C33.2526 79.9297 33.7821 80.2547 33.7821 80.7219ZM27.4492 79.8078C27.3067 80.2141 27.7139 80.6812 28.3248 80.8031C28.8542 81.0062 29.4651 80.8031 29.5873 80.3969C29.7095 79.9906 29.3226 79.5234 28.7117 79.3406C28.1823 79.1984 27.5917 79.4016 27.4492 79.8078ZM36.4496 79.4625C35.8591 79.6047 35.4518 79.9906 35.5129 80.4578C35.574 80.8641 36.1034 81.1281 36.7143 80.9859C37.3048 80.8437 37.7121 80.4578 37.651 80.0516C37.5899 79.6656 37.0401 79.4016 36.4496 79.4625ZM49.8484 1.625C21.605 1.625 0 23.0141 0 51.1875C0 73.7141 14.2133 92.9906 34.5151 99.775C37.1216 100.242 38.0379 98.6375 38.0379 97.3172C38.0379 96.0578 37.9768 89.1109 37.9768 84.8453C37.9768 84.8453 23.7228 87.8922 20.7294 78.7922C20.7294 78.7922 18.4081 72.8812 15.0685 71.3578C15.0685 71.3578 10.4054 68.1687 15.3944 68.2297C15.3944 68.2297 20.4647 68.6359 23.2544 73.4703C27.7139 81.3109 35.1871 79.0562 38.099 77.7156C38.5673 74.4656 39.8909 72.2109 41.3571 70.8703C29.9742 69.6109 18.4895 67.9656 18.4895 48.425C18.4895 42.8391 20.0371 40.0359 23.2952 36.4609C22.7657 35.1406 21.0349 29.6969 23.8246 22.6687C28.0804 21.3484 37.875 28.1531 37.875 28.1531C41.9476 27.0156 46.3256 26.4266 50.6629 26.4266C55.0002 26.4266 59.3782 27.0156 63.4508 28.1531C63.4508 28.1531 73.2454 21.3281 77.5012 22.6687C80.2909 29.7172 78.5601 35.1406 78.0306 36.4609C81.2887 40.0562 83.2843 42.8594 83.2843 48.425C83.2843 68.0266 71.2905 69.5906 59.9077 70.8703C61.7811 72.475 63.3694 75.5219 63.3694 80.2953C63.3694 87.1406 63.3083 95.6109 63.3083 97.2766C63.3083 98.5969 64.245 100.202 66.8311 99.7344C87.194 92.9906 101 73.7141 101 51.1875C101 23.0141 78.0917 1.625 49.8484 1.625ZM19.7927 71.6828C19.528 71.8859 19.5891 72.3531 19.9353 72.7391C20.2611 73.0641 20.7294 73.2062 20.9942 72.9422C21.2589 72.7391 21.1978 72.2719 20.8516 71.8859C20.5258 71.5609 20.0575 71.4187 19.7927 71.6828ZM17.5935 70.0375C17.451 70.3016 17.6546 70.6266 18.0619 70.8297C18.3877 71.0328 18.795 70.9719 18.9375 70.6875C19.08 70.4234 18.8764 70.0984 18.4692 69.8953C18.0619 69.7734 17.7361 69.8344 17.5935 70.0375ZM24.1911 77.2687C23.8653 77.5328 23.9875 78.1422 24.4558 78.5281C24.9242 78.9953 25.5147 79.0562 25.7794 78.7312C26.0442 78.4672 25.922 77.8578 25.5147 77.4719C25.0667 77.0047 24.4558 76.9437 24.1911 77.2687ZM21.8698 74.2828C21.544 74.4859 21.544 75.0141 21.8698 75.4812C22.1956 75.9484 22.7454 76.1516 23.0101 75.9484C23.3359 75.6844 23.3359 75.1562 23.0101 74.6891C22.725 74.2219 22.1956 74.0187 21.8698 74.2828Z" fill="black"/>
    </svg></a>
    
    `,
  },
];

export default projectArray;
