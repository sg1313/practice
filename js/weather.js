function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log("나의 위치", lat, lng);
}

function onGeoError() {
  alert("에러났습니다");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
// getCurrentPosition 은 success와 error를 받는다.
// success 함수-geolocationposition object를 받음
// ★★★localhost:5500/index.html로 접속하기
// live server로 접속하면 주소가 127.0.0.1:5500임. 127.0.0.1은 localhost, 5500은 port
