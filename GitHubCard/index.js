axios
	.get("https://api.github.com/users/timothyshores")
	.then(res =>
		document.querySelector(".cards").appendChild(cardCreator(res.data))
	)
	.catch(err => console.log(err));

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
	pBio.textContent = `Bio: ${data.bio}`;

	divCard.appendChild(img);
	divCard.appendChild(divInfo);
	divInfo.append(h3Name);
	divInfo.append(pUsername);
	divInfo.append(pLocation);
	divInfo.append(pProfile);
	pProfile.appendChild(aProfile);
	divInfo.append(pFollowers);
	divInfo.append(pFollowing);
	divInfo.append(pBio);

	return divCard;
};

const followersArray = [
	"torvalds",
	"gaearon",
	"yyx990803",
	"dustinmyers",
	"bigknell"
];

for (let follower of followersArray) {
	axios
		.get(`https://api.github.com/users/${follower}`)
		.then(res => document.querySelector(".cards").append(cardCreator(res.data)))
		.catch(err => console.log(err));
}
