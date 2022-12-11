const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const $imgUrl = [];
const $imgAlt = [];
const $ul = document.querySelector("ul");

for (const img of images) {
	$imgUrl.push(img.url);
	$imgAlt.push(img.alt);
}


const $imgWithAttributes = images.map(
	(img, index) =>
		`<li><img src = "${$imgUrl[index]}" alt = "${$imgAlt[index]}" class="my__image"> </li> `
);
$ul.insertAdjacentHTML("afterbegin", $imgWithAttributes);

const $childrenUl = $ul.children;

for (const $child of $childrenUl) {
	$child.style.display = "inline-block";
	
}

const $images = document.querySelectorAll("img");


for (const image of $images) {
	image.style.display = "flex";
	image.style.flexDirection = "row";
	image.style.width = "300px";	
	
}