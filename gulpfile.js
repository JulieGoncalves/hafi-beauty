var fileinclude = require("gulp-file-include"),
  gulp = require("gulp");

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
