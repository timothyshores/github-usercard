// Grab the data from your own GitHub profile
const card = document.querySelector(".cards");

axios
	.get("https://api.github.com/users/timothyshores")
	.then(res => card.appendChild(cardCreator(res.data)))
	.catch(err => console.log(err));

// Function that takes res.data from a GitHub profile axios GET request and returns an HTML card
const cardCreator = data => {
	const divCard = document.createElement("div");
	divCard.classList.add("card");

	const img = document.createElement("img");
	img.src = data.avatar_url;

	const divInfo = document.createElement("div");
	divInfo.classList.add("card-info");

	const h3Name = document.createElement("h3");
	h3Name.classList.add("name");
	h3Name.textContent = data.name;

	const pUsername = document.createElement("p");
	pUsername.classList.add("username");
	pUsername.textContent = data.login;

	const pLocation = document.createElement("p");
	pLocation.textContent = `Location: ${data.location}`;

	const pProfile = document.createElement("p");
	pProfile.textContent = `Profile: `;

	const aProfile = document.createElement("a");
	aProfile.href = data.html_url;
	aProfile.textContent = data.html_url;

	const pFollowers = document.createElement("p");
	pFollowers.textContent = `Followers: ${data.followers}`;

	const pFollowing = document.createElement("p");
	pFollowing.textContent = `Following: ${data.following}`;

	const pBio = document.createElement("p");

	data.bio == null
		? (pBio.textContent = "")
		: (pBio.textContent = `Bio: ${data.bio}`);

	const divInfoTop = [h3Name, pUsername, pLocation, pProfile];
	const divInfoBottom = [pFollowers, pFollowing, pBio];

	divCard.appendChild(img);
	divCard.appendChild(divInfo);
	divInfoTop.map(element => divInfo.append(element));
	pProfile.appendChild(aProfile);
	divInfoBottom.map(element => divInfo.append(element));

	return divCard;
};

const followersArray = [
	"torvalds",
	"gaearon",
	"yyx990803",
	"dustinmyers",
	"bigknell"
];

followersArray.map(follower =>
	axios
		.get(`https://api.github.com/users/${follower}`)
		.then(res => card.append(cardCreator(res.data)))
		.catch(err => console.log(err))
);
