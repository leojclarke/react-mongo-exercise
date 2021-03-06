export function getCards() {
  return fetch('/cards').then(res => res.json());
}

export function postCards() {
  return fetch('/cards').then(res => res.json());
}

export function postNewCard(event) {
  const card = event.target;
  const tags = card.tags.value.split(',');
  return fetch('/cards', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: card.title.value,
      description: card.description.value,
      tags: tags,
    }),
  }).then(res => res.json());
}

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (err) {
    console.log(err);
  }
}
