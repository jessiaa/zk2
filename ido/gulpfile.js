var gulp = require("gulp");
var server = require("gulp-webserver");

gulp.task("server", function() {
    return gulp.src("src")
        .pipe(server({
            port: 9999,
            open: true,
            livereload: true,
            proxies: [{
                source: "/api/data",
                target: "http://169.254.172.115:3000/users/api/data"
            }]
        }))
})