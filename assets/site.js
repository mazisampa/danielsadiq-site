document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll('form[data-mailto]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const body = [...data.entries()]
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    window.location.href = `mailto:daniel@danielsadiq.com?subject=${encodeURIComponent(
      'Website inquiry from ' + (data.get('name') || 'visitor')
    )}&body=${encodeURIComponent(body)}`;
  });
});

function renderPostRows(target, limit) {
  if (!target || !window.DANIEL_POSTS) return;

  const prefix = target.dataset.pathPrefix || '';
  const posts = [...window.DANIEL_POSTS]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit || window.DANIEL_POSTS.length);

  target.innerHTML = posts.map(post => `
    <a class="post-row" href="${prefix}${post.slug}.html">
      <span class="post-date">${post.displayDate}</span>
      <div>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
      </div>
      <span class="arrow" aria-hidden="true">↗</span>
    </a>
  `).join('');
}

document.querySelectorAll('[data-post-list]').forEach(target => {
  renderPostRows(target, Number(target.dataset.limit) || undefined);
});
