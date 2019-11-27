module.exports = {
  "moduleFileExtensions": ["js",
    "jsx",
    "json",
    "vue"],
  "transform": {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$":
      "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  "transformIgnorePatterns": ["node_modules/(?!vue-awesome|vue-form-generator|idle-vue)"],
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1",
    // "\\.(css)$": "<rootDir>/node_modules/-modules"
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules",
    "api-client": "<rootDir>/src/api/server"
  },
  "snapshotSerializers": ["jest-serializer-vue"],
  "testMatch": ["**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"],
  "testURL": "http://localhost/",
  "collectCoverageFrom": ["src/*/**.vue",
    "src/**.{scss,sass}",
    "!src/**/Login_1.vue",
    "!src/components/functional/CustomerOnboarding.vue",
    "!src/components/common/Home.vue",
    "!src/framework/schemaforms/uicomponents/*.vue",
    "src/themes/**.{js,jsx}",
    "!**/node_modules/**",
    "!src/store/**"]
};
