var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")

video = document.getElementById("player1");

video.autoplay = false;
video.loop = false;
video.load(); });

//document.querySelector("#play").addEventListener("click", function() {
//console.log("Play Video");
//});

// Play
document.getElementById("play").addEventListener("click", function() {
	console.log("Play Video");
	video.load(); // Force loading
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100) + "%"
});

// Pause
document.getElementById("pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow down
document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Speed up
document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Skip ahead
document.getElementById("skip").addEventListener("click", function() {
	console.log("Original location " + video.currentTime);
	if (video.currentTime + 10 >= video.duration) {
		video.currentTime = 0;
	} else {
		video.currentTime += 10;
	}
	console.log("New location " + video.currentTime);
});

// Mute
document.getElementById("mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

// Volume slider
document.getElementById("slider").addEventListener("input", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	document.getElementById("volume").innerHTML = this.value + "%";
});

// Vintage
document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original
document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});



