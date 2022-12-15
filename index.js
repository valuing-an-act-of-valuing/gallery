async function populate() {
  const requestURL = 'index.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const indexJson = await response.text();

  const indexIndex = JSON.parse(indexJson);
  indexHeader(indexIndex);
  indexGallery(indexIndex);
}

function indexHeader(obj) {
  const head = document.querySelector('head');
  const titleIndex = document.createElement('title');
  titleIndex.textContent = obj.title;
  head.appendChild(titleIndex);

  const ogTitle = document.createElement('meta');
  ogTitle.setAttribute("property", "og:title");
  ogTitle.setAttribute("content", obj.title);
  head.appendChild(ogTitle);

  const enter = document.querySelector(".enter");
  enter.textContent = obj.title;

  const titleClass = document.querySelector(".title");
  titleClass.textContent = obj.title;

  const authorIndex = document.createElement( "meta" );
  authorIndex.setAttribute("name", "author");
  authorIndex.setAttribute("content", obj.author);
  head.appendChild(authorIndex);

  const descriptionIndex = document.createElement( "meta" );
  descriptionIndex.setAttribute("name", "description");
  descriptionIndex.setAttribute("content", obj.description);
  head.appendChild(descriptionIndex);

  const ogDescription = document.createElement('meta');
  ogDescription.setAttribute("property", "og:description");
  ogDescription.setAttribute("content", obj.description);
  head.appendChild(ogDescription);

  const description = document.querySelector(".description");
  description.textContent = obj.description;

  const ogSite = document.createElement( "meta" );
  ogSite.setAttribute("property", "og:site_name");
  ogSite.setAttribute("content", location.hostname);
  head.appendChild(ogSite);

  const ogURL = document.createElement( "meta" );
  ogURL.setAttribute("property", "og:url");
  ogURL.setAttribute("content", location.href);
  head.appendChild(ogURL);

  const ogIMG = document.createElement( "meta" );
  ogIMG.setAttribute("property", "og:image");
  ogIMG.setAttribute("content", `${location.href}${obj.src}`);
  head.appendChild(ogIMG);

  const twitterIMG = document.createElement( "meta" );
  twitterIMG.setAttribute("name", "twitter:image");
  twitterIMG.setAttribute("content", `${location.href}${obj.src}`);
  head.appendChild(twitterIMG);

  const coverImage = document.querySelector('#images');
  coverImage.style.backgroundImage = `url(${obj.src})`;
}

function indexGallery(obj) {
  const galleryList = document.querySelector('#value .en_app');
  const itemsGallery = obj.gallery;

  for (const gallery of itemsGallery) {
    const galleryP = document.createElement('p');
    const gallerySpan = document.createElement('span');
    const galleryBR = document.createElement('br');
    const galleryA = document.createElement('a');
    const galleryI = document.createElement('I');

    gallerySpan.textContent = gallery.date;
    galleryA.href = gallery.href;
    galleryA.textContent = gallery.name;
    galleryI.textContent = gallery.text;

    galleryP.appendChild(gallerySpan);
    galleryP.appendChild(galleryBR);
    galleryP.appendChild(galleryA);
    galleryP.appendChild(galleryI);

    galleryList.appendChild(galleryP);
  }
}

populate();
