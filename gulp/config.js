const dir = {
  src  : './src/assets/',
  dest : './dist/assets/'
}

module.exports = {

  root: {
    src   : './src/',
    dest  : './dist/'
  },

  del: {
    src  : `${dir.src}`,
    dest : `${dir.dest}`
  },

  ejs: {
    src   : `${dir.src}ejs/*.ejs`,// `!${dir.src}ejs/**/_*.ejs`],
    dest  : './dist/',
    watch : `${dir.src}ejs/**/*.ejs`
  },

  sass: {
    src   : `${dir.src}styles/**/*.scss`,
    font  : `${dir.src}styles/_webfonts.css`,
    dest  : `${dir.dest}styles/`,
    watch : `${dir.src}styles/**/*.scss`
  },

  js: {
    src   : `${dir.src}scripts/main.js`,
    dest  : `${dir.dest}scripts/`,
    watch : `${dir.src}scripts/**/*.js`
  },

  image: {
    src   : `${dir.src}images/**/*.+(jpg|jpeg|png|gif|svg)`,
    dest  : `${dir.dest}images/`,
    watch : `${dir.src}images/**/*.+(jpg|jpeg|png|gif|svg)`
  },

  svg: {
    src  : `${dir.src}svgs/*.svg`,
    dest : `${dir.dest}images/svg/`,
    html : `${dir.src}svgs/_template.html`
  },

  favicon: {
    src      : `${dir.src}favicon/master_picture.png`,
    dest     : `${dir.dest}images/favicons/`,
    iconPath : './assets/images/favicons/',
    srcFire  : `${dir.src}ejs/`
//    markupFire : './dist/'
  },

  yakuhanjps: {
    src   : 'node_modules/yakuhanjp/dist/fonts/YakuHanJPs/',
    dest  : `${dir.dest}fonts/YakuHanJPs/`
  }

  // yakuhanjp: {
  //   src   : 'node_modules/yakuhanjp/dist/fonts/YakuHanJP/',
  //   dest  : `${dir.dest}fonts/YakuHanJP/`
  // }

  // copy: {
  //   src   : ['./src/*.+(html|php|css|png)', './src/inc/*.+(html|php)'],
  //   dest  : './dist/',
  //   watch : ['./src/*.+(html|php|css|png)', './src/inc/*.+(html|php)']
  // }

};