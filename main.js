document.addEventListener('DOMContentLoaded', () => {
    const movieButtons = document.getElementById('movieButtons');
    const movieDetails = document.getElementById('movieDetails');
    const addMovieButton = document.getElementById('addMovieButton');
    const formContainer = document.getElementById('formContainer');
  
    // initial movie data
    let movies = [
      {
        title: "Star Wars: Episode III - Revenge of the Sith",
        genre: "Sci-Fi",
        description: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine.",
        time: "140 min",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B38E9B3419A8AF5BA743C323CF835E7864A0406C310697CC34A072DE7E940FAD/scale?width=1200&aspectRatio=1.78&format=webp"
      },
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        genre: "Fantasy",
        description: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring.",
        time: "178 min",
        image: "https://d1nslcd7m2225b.cloudfront.net/Pictures/1024x536/4/7/7/1252477_fellowship.jpg"
      },
      {
        title: "The Lord of the Rings: The Two Towers",
        genre: "Fantasy",
        description: "While Frodo and Sam edge closer to Mordor, the divided fellowship makes a stand against Sauron's new ally.",
        time: "179 min",
        image: "https://lh3.googleusercontent.com/TmXh176ijUpi55eye0nI5bcAzbaOVVkL3sxlV4WkmXR7B8cMSE-x1ls_Yi6h7d0EDlf2dOstL7Q=w1280-h720"
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        genre: "Fantasy",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam.",
        time: "201 min",
        image: "https://m.media-amazon.com/images/M/MV5BMTc1NDIwMzg3NF5BMl5BanBnXkFtZTcwODE2MTk2Mw@@._V1_.jpg"
      },
      {
        title: "The Dark Knight",
        genre: "Action",
        description: "When the menace known as the Joker emerges from his mysterious past.",
        time: "152 min",
        image: "https://dailycollegian.com/wp-content/uploads/2022/04/dark-knight-1.jpeg"
      },
      {
        title: "Inception",
        genre: "Sci-Fi",
        description: "A thief who steals corporate secrets through use of dream-sharing technology.",
        time: "148 min",
        image: "https://m.media-amazon.com/images/M/MV5BMTQ1ZmIzOTAtNDcwZi00NDVkLWE4NWItYWNhZGY1MmVlZGU0XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL75_UY281_CR0,0,500,281_.jpg"
      },
      {
        title: "Avatar",
        genre: "Sci-Fi",
        description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission.",
        time: "162 min",
        image: "https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png"
      },
      {
        title: "The Departed",
        genre: "Crime",
        description: "An undercover cop and a mole in the police attempt to identify each other.",
        time: "151 min",
        image: "https://m.media-amazon.com/images/M/MV5BMTk3OTE2ODM1NF5BMl5BanBnXkFtZTcwMjc4MzMyNw@@._V1_.jpg"
      },
      {
        title: "Gladiator",
        genre: "Action",
        description: "A former Roman General sets out to exact vengeance against the corrupt emperor.",
        time: "155 min",
        image: "https://www.denofgeek.com/wp-content/uploads/2020/06/Russell-Crowe-as-Maximus-in-Gladiator-20th-Anniversary.jpg?fit=1400%2C916"
      },
      {
        title: "Memento",
        genre: "Mystery",
        description: "A man with short-term memory loss attempts to track down his wife's murderer.",
        time: "113 min",
        image: "https://m.media-amazon.com/images/M/MV5BODEwZTBhMzUtMjYxNS00MTg1LTk5MWUtMDk3MGE1NmMwOTY4XkEyXkFqcGdeQWFybm8@._V1_.jpg"
      },
      {
        title: "No Country for Old Men",
        genre: "Crime",
        description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong.",
        time: "122 min",
        image: "https://cdn.theatlantic.com/thumbor/nUIaEON1DG9o7RBKLbCcO_RcaQs=/0x82:1600x982/1600x900/media/img/mt/2014/09/No_Country/original.jpg"
      },
      {
        title: "The Departed",
        genre: "Crime",
        description: "An undercover cop and a mole in the police attempt to identify each other.",
        time: "151 min",
        image: "https://m.media-amazon.com/images/M/MV5BMTk3OTE2ODM1NF5BMl5BanBnXkFtZTcwMjc4MzMyNw@@._V1_.jpg"
      },
      {
        title: "Kill Bill: Vol. 1",
        genre: "Action",
        description: "A former assassin, known simply as The Bride, wakes from a coma four years after her jealous ex-lover.",
        time: "111 min",
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/MCDKIBI_EC002-H-2023.jpg?w=1296&h=730&crop=1"
      },
      {
        title: "Kill Bill: Vol. 2",
        genre: "Action",
        description: "The Bride continues her quest of vengeance against her former boss and lover Bill.",
        time: "137 min",
        image: "https://images.bauerhosting.com/legacy/empire-tmdb/films/393/images/my0hjfD40HJTPvLk9XyXeLcBjpm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80"
      },
      {
        title: "The Bourne Identity",
        genre: "Action",
        description: "A man is picked up by a fishing boat, bullet-riddled and without memory.",
        time: "119 min",
        image: "https://m.media-amazon.com/images/M/MV5BOTY3MjYzMjc4OF5BMl5BanBnXkFtZTgwNjAwNTA2MjI@._V1_.jpg"
      },
      {
        title: "The Bourne Supremacy",
        genre: "Action",
        description: "When Jason Bourne is framed for a CIA operation gone awry.",
        time: "108 min",
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2019/07/the_bourne_supremacy_still_matt_damon.jpg"
      },
      {
        title: "The Bourne Ultimatum",
        genre: "Action",
        description: "Jason Bourne dodges a ruthless CIA official and his agents.",
        time: "115 min",
        image: "https://facts.net/wp-content/uploads/2023/06/42-facts-about-the-movie-the-bourne-ultimatum-1687496717.jpeg"
      },{
        title: "Planet of the Apes",
        genre: "Sci-Fi",
        description: "In 2029, an Air Force astronaut crash-lands on a mysterious planet where evolved, talking apes dominate a race of primitive humans.",
        time: "119 min",
        image: "https://m.media-amazon.com/images/M/MV5BMjE5MGMzMTctZWI0OS00ZjZhLTg5YjAtOTBhYThlMDRhMTA2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"
      },
      {
        title: "Doctor Sleep",
        genre: "Horror",
        description: "Years following the events of 'The Shining', a now-adult Dan Torrance meets a young girl with similar powers as they fight a cult.",
        time: "152 min",
        image: "https://m.media-amazon.com/images/M/MV5BNjQ4MjAyNGYtNmNiMi00YTVlLTkzN2QtMjgyMmE1MzViYmM2XkEyXkFqcGdeQW1yb3NzZXI@._V1_.jpg"
      },
      {
        title: "Saw",
        genre: "Horror",
        description: "Two strangers awaken in a room with no recollection of how they got there, and soon discover they are pawns in a deadly game.",
        time: "103 min",
        image: "https://media1.popsugar-assets.com/files/thumbor/NZ089W0gVflYNuGmkAZ9vnhUTmE=/fit-in/3000x2000/top/filters:format_auto():extract_cover():upscale()/2023/09/28/928/n/1922283/e755bcc697bf5927_MCDSAXX_LG003.jpg"
      },
      {
        title: "Saw II",
        genre: "Horror",
        description: "A detective and his team must rescue eight people trapped in a factory by the twisted serial killer known as Jigsaw.",
        time: "93 min",
        image: "https://www.fangoria.com/wp-content/uploads/2024/03/saw2.jpeg"
      },
      {
        title: "Saw III",
        genre: "Horror",
        description: "Jigsaw kidnaps a doctor to keep him alive while he watches his new apprentice put an unlucky citizen through a brutal test.",
        time: "108 min",
        image: "https://m.media-amazon.com/images/M/MV5BZTYwY2VmNzktYmU2OC00MjVmLTlhNWItMjYwMzkyMWI2MDg2XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg"
      },
      {
        title: "Saw IV",
        genre: "Horror",
        description: "Despite Jigsaw's death, his games continue as planned, leading law enforcement to a new set of gruesome trials.",
        time: "95 min",
        image: "https://www.alternateending.com/wp-content/uploads/2007/11/tpNQe4Q81OIYg10VsBNoulLDaV.jpg"
      },
      {
        title: "Saw V",
        genre: "Horror",
        description: "Detective Hoffman is seemingly the last person alive to carry on the Jigsaw legacy, but when his secret is threatened, he must go on the hunt to eliminate all loose ends.",
        time: "92 min",
        image: "https://m.media-amazon.com/images/M/MV5BMTM2NjQ0MTQwNF5BMl5BanBnXkFtZTcwMzA2NjAxNQ@@._V1_.jpg"
      },
      {
        title: "Saw VI",
        genre: "Horror",
        description: "Special Agent Strahm is dead, and Detective Hoffman has emerged as the unchallenged successor to Jigsaw's legacy.",
        time: "90 min",
        image: "https://m.media-amazon.com/images/M/MV5BNzU3NjU5NzgwNV5BMl5BanBnXkFtZTcwNTUzMjE5Mg@@._V1_.jpg"
      },
      {
        title: "Saw 3D",
        genre: "Horror",
        description: "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen.",
        time: "90 min",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/Saw-3D-Spoilers-Jigsaw.jpg"
      },
      {
        title: "Saw: Legacy",
        genre: "Horror",
        description: "Bodies are turning up around the city, each having met a uniquely gruesome demise. As the investigation proceeds, evidence points to one suspect: John Kramer, the man known as Jigsaw.",
        time: "92 min",
        image: "https://bloody-disgusting.com/wp-content/uploads/2017/03/saw-legacy-jigsaw.jpg"
      },
      {
        title: "Train to Busan",
        genre: "Horror",
        description: "While a zombie virus breaks out in South Korea, passengers struggle to survive on the train from Seoul to Busan.",
        time: "118 min",
        image: "https://www.indiewire.com/wp-content/uploads/2016/07/fullsizephoto719196-750x400.jpg"
      },
      {
        title: "Psycho",
        genre: "Horror",
        description: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.",
        time: "109 min",
        image: "https://m.media-amazon.com/images/M/MV5BZGQwMDQyZGQtMWI5ZC00ZjgyLWE3Y2MtMjZjZjQ4MDk4ZDNkXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg"
      },
      {
        title: "The Princess and the Frog",
        genre: "Animation",
        description: "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being.",
        time: "97 min",
        image: "https://lumiere-a.akamaihd.net/v1/images/pp_theprincessandthefrog_herobanner_20499_c61da26d.jpeg"
      },
      {
        title: "Terrifier",
        genre: "Horror",
        description: "On Halloween night, Tara Heyes finds herself as the obsession of a sadistic murderer known as Art the Clown.",
        time: "84 min",
        image: "https://www.hollywoodreporter.com/wp-content/uploads/2023/04/TERRIFIER-05-Art-the-Clown-H-2023.jpg?w=1296&h=730&crop=1"
      },
      {
        title: "A Nightmare on Elm Street",
        genre: "Horror",
        description: "The monstrous spirit of a slain janitor seeks revenge by invading the dreams of teenagers whose parents were responsible for his untimely death.",
        time: "91 min",
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-172811-TCDFRNI_EC003_H.jpg?w=1581&h=1054&crop=1"
      },
      {
        title: "Guardians of the Galaxy",
        genre: "Action",
        description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        time: "121 min",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1C0181ED7342217394E5AC940003A8653E3311B6016194749B29A0FE3F238EB/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp"
      },
      {
        title: "Spider-Man: Into the Spider-Verse",
        genre: "Animation",
        description: "Teen Miles Morales becomes Spider-Man of his reality, crossing paths with five counterparts from other dimensions.",
        time: "117 min",
        image: "https://m.media-amazon.com/images/M/MV5BZDY5ODFhZjctZGIxNi00YzBmLThmYzItNDdmZTFmNWUwZWQ1XkEyXkFqcGdeQW1yb3NzZXI@._V1_QL75_UY281_CR8,0,500,281_.jpg"
      },
      {
        title: "Trolls",
        genre: "Animation",
        description: "After the Bergens invade Troll Village, Poppy, the happiest Troll ever born, and the curmudgeonly Branch set off on a journey to rescue her friends.",
        time: "92 min",
        image: "https://m.media-amazon.com/images/M/MV5BYzM5N2ZhN2EtZjZjOC00NmUxLTg4ZDMtMjg1N2QwNTE0MzNkXkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_QL75_UX500_CR0,0,500,281_.jpg"
      },
      {
        title: "Jumanji: Welcome to the Jungle",
        genre: "Action",
        description: "Four teenagers are sucked into a magical video game, and the only way they can escape is to work together to finish the game.",
        time: "119 min",
        image: "https://m.media-amazon.com/images/M/MV5BMjM0NTQ5NjI0N15BMl5BanBnXkFtZTgwNDI4NTY3MjI@._V1_.jpg"
      },
      {
        title: "Star Wars: Episode III - Revenge of the Sith",
        genre: "Sci-Fi",
        description: "Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine.",
        time: "140 min",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B38E9B3419A8AF5BA743C323CF835E7864A0406C310697CC34A072DE7E940FAD/scale?width=1200&aspectRatio=1.78&format=webp"
      },
      {
        title: "Red Notice",
        genre: "Action",
        description: "An Interpol agent tracks the world's most wanted art thief.",
        time: "118 min",
        image: "https://m.media-amazon.com/images/M/MV5BMGQ0OWM3OTQtMDIwNi00ZTIyLThiMjQtZTBkZTUzZWVhNzBmXkEyXkFqcGdeQWFybm8@._V1_.jpg"
      },
      {
        title: "Pineapple Express",
        genre: "Comedy",
        description: "A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealer's boss murder a competitor.",
        time: "111 min",
        image: "https://m.media-amazon.com/images/M/MV5BOTExMGVhN2EtNWZiNS00MmM3LTlmNmItMzFiNmEwM2JjNmQ0XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
      },
      {
        title: "Fallen Angels",
        genre: "Crime",
        description: "A disillusioned hitman searches for love, but his connections with those around him lead him to an unexpected fate.",
        time: "96 min",
        image: "https://assets.mubicdn.net/images/film/391/image-w1280.jpg?1617995748"
      },
      {
        title: "The Piano Teacher",
        genre: "Drama",
        description: "A young man romantically pursues his masochistic piano teacher.",
        time: "131 min",
        image: "https://i2.wp.com/arkbooks.dk/wp-content/uploads/2018/08/article_large.jpg?fit=700%2C406"
      },
      {
        title: "The Machinist",
        genre: "Thriller",
        description: "An industrial worker who hasn't slept in a year begins to doubt his own sanity.",
        time: "101 min",
        image: "https://m.media-amazon.com/images/M/MV5BYWNmMjVmZjEtOGYzYS00OWYwLWI0YjMtYTE4ZDE4ZGQyNDdmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg"
      }
    ];
    displayMovies();
  
    // retrieve movies from local storage if available
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) { 
      movies = JSON.parse(storedMovies);
    } else {
      // save initial movie data to local storage
      localStorage.setItem('movies', JSON.stringify(movies));//converts value to a steing
    }
  
    // renders movies on page load
    renderMovies();
  
//   function to render the movie buttons
    function renderMovies() {
      movieButtons.innerHTML = '';
      movies.slice(0, 50).forEach((movie, index) => {
        const button = document.createElement('button');
      // button.style.backgroundImage = `url(${movie.image})`;
      // button.style.backgroundSize = 'cover';
      // button.style.backgroundPosition = 'center';
      // button.style.width = '100px';
      // button.style.height = '150px';
      // button.style.border = 'none';
        button.innerText = movie.title;
        button.addEventListener('click', () => displayMovieDetails(movie, index));
        const listItem = document.createElement('li');
        listItem.appendChild(button);
        movieButtons.appendChild(listItem);
      });
      if (movies.length > 0) {
        displayMovieDetails(movies[0], 0);//checks to see if our array iscempty 
      }
    }
  
    // function to display movie details, replaces the html content that was in the inner html to the ones showed below
    function displayMovieDetails(movie, index) { //takes two parameters 
      movieDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.image}" alt="${movie.title}">
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Description:</strong> ${movie.description}</p>
        <p><strong>Time:</strong> ${movie.time}</p>
        <button onclick="editMovie(${index})">Edit</button>
      `;
    }
  
    // funct to edit a movie's details
    window.editMovie = function (index) { 
      localStorage.setItem('editIndex', index);//key name & value are being passed so that the key will be added 2 storage
      window.location.href = 'form.html';
    };
  
    // add a new movie to the list
    addMovieButton.addEventListener('click', () => {
      localStorage.removeItem('editIndex');//if no item is associated with given key this method willprove useless
      window.location.href = 'form.html';
    });
  
    // func to display a list of movies in the movie container
    function displayMovies() {
      const movieContainer = document.getElementById('formContainer');
      movieContainer.innerHTML = ''; // clears any existing content
  
      movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
          <h2>${movie.title}</h2>
          <p><strong>Genre:</strong> ${movie.genre}</p>
          <p><strong>Description:</strong> ${movie.description}</p>
          <p><strong>Time:</strong> ${movie.time}</p>
          <img src="${movie.image}" alt="${movie.title} image"> 

        `;
  
        movieContainer.appendChild(movieElement);
      });
    }
  
    // call to display movies
    displayMovies();
  });
  