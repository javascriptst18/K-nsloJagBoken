module.exports = {
    "extends": ["airbnb",
    "plugin:prettier/recommended",
    "prettier/react",
    "airbnb-base"
],
    "plugins": [
        "prettier"
      ],
    "rules":{
        "prettier/prettier": "error",
        "linebreak-style":"off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }

};