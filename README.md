# React Portfolio and Blog

[www.radubulai.com](https://radubulai.com)

[www.radubulai.com/blog](https://radubulai.com/blog)

## Screenshots

![Radu Alexandru Bulai Portfolio](./README_screenshots/RaduPortfolioBlog01.jpg)

![Radu Alexandru Bulai Blog](./README_screenshots/RaduPortfolioBlog02.jpg)

![Radu Alexandru Bulai Blog Articles](./README_screenshots/RaduPortfolioBlog03.jpg)

![Radu Alexandru Bulai Projects](./README_screenshots/RaduPortfolioBlog04.jpg)

## Credits and Resources used

Tutorials:

- [10h Full React Course 2020 - Fundamentals, Hooks, Context API, React Router, Custom Hooks from freeCodeCamp](https://youtu.be/4UZrsTqkcW4)
- [9h Tutorial focused on React Projects - Complete Course from freeCodeCamp](https://youtu.be/a_7Z7C_JCyo)

Open-Source Resources and Packages:

- [Resume Theme from StartBootstrap.com which I highly modified for my needs](https://startbootstrap.com/theme/resume)
- [Add background image to the first section (Hero Image)](https://codetheweb.blog/fullscreen-image-hero/)
- [Devicon - Icons for programming languages & development tools](https://devicons.github.io/devicon)
- [Font Awesome npm for React](https://fontawesome.com/how-to-use/on-the-web/using-with/react)
- [Implement Smooth Scrolling to Anchor in React](https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react#step-2-%E2%80%94-installing-and-configuring-react-scroll) using [react-scroll-to](https://github.com/ganderzz/react-scroll-to)
- [React Responsive Carousel - Image Slideshow](https://www.npmjs.com/package/react-responsive-carousel)
- [Create a mobile friendly navigation with React blog post from jfelix](https://jfelix.info/blog/create-a-mobile-friendly-navigation-with-react)
- [Easy Dark Mode Switch with React and localStorage](https://aleksandarpopovic.com/Easy-Dark-Mode-Switch-with-React-and-localStorage/)
- [React-Markdown - Markdown component for React](https://github.com/remarkjs/react-markdown)
- [React-Syntax-Highlighter for Markdown](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
- [Remark-gfm plugin for React-Markdown](https://github.com/remarkjs/remark-gfm)
- [React-lazyload package](https://www.npmjs.com/package/react-lazyload)
- [React-meta-tags package](https://www.npmjs.com/package/react-meta-tags)
- [React-gh-pages for deploying React App to GitHub Pages](https://github.com/gitname/react-gh-pages)
- [React-gtm-module for integrating Google Tag Manager in React App](https://www.npmjs.com/package/react-gtm-module)
- [React Single Page App for GitHub Page](https://github.com/rafgraph/spa-github-pages)

Images:

- [MockUPhone - Screenshots device mockups generator](https://mockuphone.com/)
- [Pexels](https://www.pexels.com/) and [Unsplash](https://unsplash.com/) - Free Stock Photos with No Licenses Required

## Project Structure

```
src/
┣ Components/
┃ ┣ Blog/
┃ ┃ ┣ BlogArticle.js
┃ ┃ ┣ BlogCard.js
┃ ┃ ┣ BlogData.js
┃ ┃ ┗ BlogHome.js
┃ ┣ Portfolio/
┃ ┃ ┣ Projects/
┃ ┃ ┃ ┣ ProjectCategories.js
┃ ┃ ┃ ┣ ProjectData.js
┃ ┃ ┃ ┣ ProjectModal.js
┃ ┃ ┃ ┣ ProjectModalContext.js
┃ ┃ ┃ ┗ ProjectsList.js
┃ ┃ ┣ About.js
┃ ┃ ┣ Blog.js
┃ ┃ ┣ Contact.js
┃ ┃ ┣ Education.js
┃ ┃ ┗ Skills.js
┃ ┣ DarkModeToggle.js
┃ ┣ Navbar.js
┃ ┗ NavbarBlog.js
┣ App.js
┣ index.css
┗ index.js
```

## My steps to improve Google SEO (Search Engine Optimization):

- Add these _meta tags_ in your `index.html`:

  ```HTML
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="YOUR NAME/DESCRIPTION | PORTFOLIO/BLOG/etc" />
  <meta name="author" content="YOUR NAME" />

  <meta property="og:title" content="YOUR NAME/DESCRIPTION | PORTFOLIO/BLOG/etc">
  <meta property='og:image' content='//media.example.com/ 1234567.jpg'/>
  <meta property='og:description' content='Description that will show in the preview'/>
  <meta property='og:url' content='//www.example.com/URL of the article'/>

  <title>YourWebsiteTitle in Tab | Portfolio/Blog/etc</title>
  <link rel="icon" type="image/x-icon" href="img/YourFavIcon.ico" />
  ```

- Add `alt` attribute to `<img>` tag. Explain what the picture is
- Use [Optimizilla - Online image optimizer to shrink images to the minimum possible size while keeping the quality](https://imagecompressor.com/)
- Check Site performance with [PageSpeed Insights from Google](https://developers.google.com/speed/pagespeed/insights/)
- Generate [sitemap.xml](https://www.xml-sitemaps.com/) and [robots.txt](https://en.ryte.com/free-tools/robots-txt-generator/)

  - In robots.txt, add `Sitemap: https://[your-website-name].github.io/sitemap.xml`

- Add [Google Tag Manager](https://marketingplatform.google.com/about/tag-manager/) (+ Paste snippets to index.html)
- Add website to [Google Analytics](https://analytics.google.com/analytics/web) (+ Paste snippet to index.html)
- Add website to [Google Search Console](https://search.google.com/search-console/about) (click on `+Add property`) using "URL prefix" method

  - In Google Search Console app, add "[your-website-name].github.io/sitemap.xml" in `sitemap` tab.
  - _Wait 3-4 days_ until "Overview", "Performance" and "Coverage" tabs are fully functional in your Google Search Console
  - (In "Coverage" tab) If your main page appears to be "Excluded", click on it on an then in _"Coverage > Discovered – currently not indexed > Examples"_ click on "Inspect URL" icon. Here you can also perform a "Live Test" to see if your page is loaded successfully
  - Wait 10 to 30 minutes
  - Now your page should appear on Google Search. You can check it by searching on Google: `site:[your-website-name].github.io`

## Find me on Social Networks

**_My portfolio:_** [radubulai.com](https://radualexandrub.github.io/)<br/>
**_My blog:_** [radubulai.com/blog](https://radualexandrub.github.io/blog)

<a href="https://github.com/radualexandrub" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg" alt="radualexandrub" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/radu-alexandru-bulai/" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="radu-alexandru-bulai" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://dev.to/radualexandrub" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/dev-dot-to.svg" alt="radualexandrub" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.hackerrank.com/RaduAlexandruB" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg" alt="RaduAlexandruB" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.flickr.com/photos/radualexandru" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/flickr.svg" alt="RaduAlexandruB" height="28" width="28" /></a>&nbsp;&nbsp;
<a href="https://www.mixcloud.com/radu-alexandru7" target="_blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/mixcloud.svg" alt="RaduAlexandru" height="28" width="28" /></a>&nbsp;&nbsp;

## License

Released under the [MIT license](./LICENSE).
