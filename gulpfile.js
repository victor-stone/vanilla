var gulp   = require('gulp');
var babel  = require('gulp-babel');

gulp.task( 'default', () => {
  return gulp.src(['./index.js','./lib/**/*.js','./unicorns/**/*.js'], {base: './'})
          .pipe(babel())
          .pipe(gulp.dest('./dist'));
});

