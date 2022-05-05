function photographerFactory(data) {
  const { name, portrait } = data

  const picture = `./FishEye-Photos/Sample-Photos/All-Photo/${portrait}`

  function getUserCardDOM() {
    const article = document.createElement('article')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    const lien = document.createElement('a')
    const h2 = document.createElement('h2')
    h2.textContent = name
    const contentParagraph = document.createElement('div')
    contentParagraph.setAttribute('class', 'description-photograph')
    const paragraphVille = document.createElement('p')
    article.appendChild(lien)
    lien.appendChild(img)
    lien.appendChild(h2)
    lien.appendChild(contentParagraph)
    contentParagraph.appendChild(paragraphVille)
    return article
  }
  return { name, picture, getUserCardDOM }
}
