/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Junxiang Wei
 * @license   MIT
 */
'use strict';

let gulp = require('gulp');
let browserSync = require('browser-sync');

module.exports = (config) => {
  /**
   * The 'watch' task set up the checks to see if any of the files listed below
   * change, and then to execute the listed tasks when they do.
   */
  gulp.task('demo', () => {
    browserSync.create();

    gulp.watch([config.component.src, config.demo.src, config.component.jspm], [browserSync.reload]);

    browserSync.init({
      'server': {
        'baseDir': [config.demo.src, config.component.jspm, '.']
      }
    });
  });
};
