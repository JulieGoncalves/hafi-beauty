var fileinclude = require("gulp-file-include"),
  gulp = require("gulp");

gulp.task("index", function () {
  gulp
    .src(["./pages/index.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("galerie", function () {
  gulp
    .src(["./pages/galerie.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("conseils_beaute", function () {
  gulp
    .src(["./pages/conseils_beaute.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("produits", function () {
  gulp
    .src(["./pages/produits.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("test", function () {
  gulp
    .src(["./pages/test.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});

gulp.task("main", function () {
  gulp
    .src(["./pages/main.html"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./"));
});
