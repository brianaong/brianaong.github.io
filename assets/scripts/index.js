new TypeIt('#home-subtitle-typing', {
  strings: ['an internet sensation.',
   'a musical innovator.',
   'a visual timeline.'],
  speed: 75,
  breakLines: false,
  nextStringDelay: 1250,
  loop: false,
  waitUntilVisible: true
}).go();

var myFullpage = new fullpage('#fullpage', {
  anchors: ['home', 'pre', '14', '15', '16', '17', '18', '19'],
  sectionsColor: ['#FFFFFF', '#779CAD','#D39B96','#DCC79D','#A1B7B0','#AABDDB','#D5B6A3','#AAB5BF'],

  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['home', 'beginnings', '2014', '2015', '2016', '2017', '2018', '2019'],
});

// used to hide header bar if user is on the home page
setInterval(function() {
  let activeId = document.getElementsByClassName("active")[0];

  if (activeId.id == "intro-container") {
    document.getElementById('header').style.display = 'none';
  } else {
    document.getElementById('header').style.display = 'block';
  }
}, 500);

// lightbox from hw9 -- used for more info for each album/year
function unhideLightbox(lightboxID) {
	document.getElementById(lightboxID).classList.remove('hidden');
}

function unhideOverlay(overlayID) {
  document.getElementById(overlayID).classList.remove('hidden');
}

function unhideLightboxPre() {
	unhideLightbox("info-pre");
  unhideOverlay("lightbox-overlay-pre-2013");
}

document.getElementById("img-pre-2013").onclick = unhideLightboxPre;

function unhideLightbox2014() {
	unhideLightbox("info-2014");
  unhideOverlay("lightbox-overlay-2014");
}

document.getElementById("img-2014").onclick = unhideLightbox2014;

function unhideLightbox2015() {
	unhideLightbox("info-2015");
  unhideOverlay("lightbox-overlay-2015");
}

document.getElementById("img-2015").onclick = unhideLightbox2015;

function unhideLightbox2016() {
	unhideLightbox("info-2016");
  unhideOverlay("lightbox-overlay-2016");
}

document.getElementById("img-2016").onclick = unhideLightbox2016;

function unhideLightbox2017() {
	unhideLightbox("info-2017");
  unhideOverlay("lightbox-overlay-2017");
}

document.getElementById("img-2017").onclick = unhideLightbox2017;

function unhideLightbox2018() {
	unhideLightbox("info-2018");
  unhideOverlay("lightbox-overlay-2018");
}

document.getElementById("img-2018").onclick = unhideLightbox2018;

function unhideLightbox2019() {
	unhideLightbox("info-2019");
  unhideOverlay("lightbox-overlay-2019");
}

document.getElementById("img-2019").onclick = unhideLightbox2019;

function closeLightbox(lightboxID) {
	document.getElementById(lightboxID).classList.add("hidden");
}

function closeOverlay(overlayID){
  document.getElementById(overlayID).classList.add('hidden');
}

function closeAllLightboxes() {
	var lightboxElements = document.getElementsByClassName('lightbox');
  var overlayElements = document.getElementsByClassName('lightbox-overlay');

  for (var i = 0; i < lightboxElements.length; i++) {
		var lgtboxID = lightboxElements[i].id;
    var overlayID = overlayElements[i].id;
		closeLightbox(lgtboxID);
    closeOverlay(overlayID);
	}
}

document.getElementById("lightbox-overlay-pre-2013").onclick = closeAllLightboxes;
document.getElementById("lightbox-overlay-2014").onclick = closeAllLightboxes;
document.getElementById("lightbox-overlay-2015").onclick = closeAllLightboxes;
document.getElementById("lightbox-overlay-2016").onclick = closeAllLightboxes;
document.getElementById("lightbox-overlay-2017").onclick = closeAllLightboxes;
document.getElementById("lightbox-overlay-2018").onclick = closeAllLightboxes;
document.getElementById("lightbox-overlay-2019").onclick = closeAllLightboxes;
