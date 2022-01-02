const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
    return gulp.src('assets/sass/main.scss').pipe(sass()).pipe(gulp.dest('assets/css'));
});

gulp.task('watch', () => {
    gulp.watch('assets/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'))