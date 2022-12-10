const { log } = console;
const headings = document.querySelectorAll("li > h2");

log(`Number of categories: ${headings.length}`);
for (const el of headings) {
  log(`Category: ${el.textContent}
  Elements: ${el.nextElementSibling.children.length}`);
}
