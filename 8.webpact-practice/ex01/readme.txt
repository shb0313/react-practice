ex01: js 모듈만 번들링하기
1. 설치 패키지
    [ex01]$ npm i -D webpack webpack-cli express

2. 스크랩팅
    "scripts": {
        "start": "node dev-server.js",
        "build": "npx webpack ./src/index.js -o ./public"
    },