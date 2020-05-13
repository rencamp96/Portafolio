var animationData = bodymovin.loadAnimation({
container: document.getElementById('lottie'),
renderer: 'svg',
loop: true,
autoplay: true,
path: 'js/data3.json',
name: "animScroll",
}), animScroll, tl;

var animScroll = bodymovin.loadAnimation({animationData: animationData.default})
