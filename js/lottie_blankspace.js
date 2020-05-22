var animationData = bodymovin.loadAnimation({
container: document.getElementById('lottie'),
renderer: 'svg',
loop: true,
autoplay: true,
path: 'js/mocap.json',
name: "animScroll",
}), animScroll, tl;

var animScroll = bodymovin.loadAnimation({animationData: animationData.default})
