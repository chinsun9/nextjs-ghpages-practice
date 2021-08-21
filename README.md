# nextjs ghpages practice

nextjs로 만든 앱을 깃허브 페이지에 올려보기

## gh-pages

```sh terminal
# gh-pages 설치
yarn add -D gh-pages
```

- gh-pages를 설치한다

```js next.config.js
// next.config.js
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  basePath: "/nextjs-ghpages-practice", // 저장소이름 추가
};
```

- _next.config.js_ 에 자신의 레포명을 `basePath`로 설정한다

```sh terminal
# 빌드, 정적 파일 생성
yarn build
yarn next export

# github pages로 배포
# .nojekyll 생성
1>.nojekyll
yarn gh-pages -t true -d out
```

- 정적 파일을 생성하고 배포한다
- gh-pages는 기본적으로 지킬 기반으로 동작한다
- 그러면 `_`로 시작하는 파일들을 제대로 동작하지 않는다
- 그래서 지킬을 사용하지 않는다는 것을 `.nojekyll`파일을 생성하여 알릴 수 있다
- 여기서 `-t true`옵션은 `.`(dot)으로 시작하는 파일도 포함하여 배포한다는 뜻이다
- 위 옵션을 주어서 `.nojekyll`파일을 포함하여 배포할 수 있다
