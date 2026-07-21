# danielsadiq.com

A fast editorial personal website for Daniel Sadiq, built around his mission, values, writing and advisory work.

## What is included

- Mission-led homepage
- Writing index
- Individual essay pages
- About page
- Work With Me page
- Responsive layout
- Daniel Sadiq visual identity
- SEO titles and descriptions
- Email-based inquiry and subscription flows

## How to publish a new blog post

The homepage and Writing page both read from one file:

`assets/posts.js`

### Step 1: Create the article page

1. In GitHub, open the `writing` folder.
2. Open an existing article such as `life-without-semesters.html`.
3. Copy its contents.
4. Click **Add file → Create new file**.
5. Name it using a simple lowercase slug, for example:

   `leadership-is-a-place.html`

6. Paste the copied article and replace the title, description, date, introduction and article body.
7. Commit the new file to `main`.

### Step 2: Add the post to the site index

1. Open `assets/posts.js`.
2. Click the pencil icon to edit it.
3. Add a new object at the beginning of the list:

```js
{
  slug: "leadership-is-a-place",
  title: "Leadership Is a Place",
  excerpt: "A short description that makes someone want to read the essay.",
  date: "2026-08-01",
  displayDate: "August 1, 2026"
},
```

4. Commit the change to `main`.

The new article will automatically appear:

- at the top of the Writing page
- in the latest-writing section on the homepage when it is among the three newest posts

Vercel should automatically deploy the update after the commit.

## Editing an existing post

Open its HTML file inside the `writing` folder, click the pencil icon, make the edits and commit them. Update `assets/posts.js` only when changing the title, excerpt, URL slug or date shown in the article lists.

## Editing homepage or service copy

- Homepage: `index.html`
- About: `about.html`
- Services and inquiry form: `work-with-me.html`
- Site colors and visual styling: `assets/styles.css`
- Contact email and blog behavior: `assets/site.js`

## Local preview

Run this command in the project folder:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Deployment

The repository is configured as a static site. Vercel needs no framework preset and no build command.

Add these under Vercel Project Settings → Domains:

- `danielsadiq.com`
- `www.danielsadiq.com`

Website inquiries are prepared for `daniel@danielsadiq.com`.
