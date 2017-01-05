var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var fs = require('fs');
var path = require('path');
var webpack = require('gulp-webpack');
//var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
//var imagemin = require('gulp-imagemin');

var webpackConfig = require('./webpack.config');
var __SRC_DIR__ = path.join('.', 'src');
var __DIST_DIR__ = path.join('.', 'dist');
var __DIST_DIR_COM__ = path.join('.', 'dist');
var __VUE_ENTRY_JS = path.join('.', 'src', 'main.js');

gulp.task('watch', function(){
    var vueWatcher =  gulp.watch(path.join(__SRC_DIR__, '**', '*.vue'));
    vueWatcher.on('change', function(e){
        gulp.src(__VUE_ENTRY_JS)
            .pipe(plumber())
            .pipe(webpack(webpackConfig))
            .pipe(gulp.dest(__DIST_DIR__));
    });
});

gulp.task('watchLess', function(){
    var cssWatcher =  gulp.watch(path.join(__SRC_DIR__, '**', '*.less'));
    cssWatcher.on('change', function(e){
        gulp.src(['src/css/*.less'])
            .pipe(concat('build.css'))
            .pipe(plumber())
            .pipe(less())
            .pipe(gulp.dest('dist/css'));
        console.log(new Date()+":css changed");
    });
});

gulp.task('default',['watch','watchLess']);
