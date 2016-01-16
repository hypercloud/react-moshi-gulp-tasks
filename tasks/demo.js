/**
 * @author    Junxiang Wei {@link http://www.nodeunify.com}
 * @copyright Copyright (c) 2016, Junxiang Wei
 * @license   MIT
 */
'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';

let initTask = ( config) => {
  /**
   * The 'watch' task set up the checks to see if any of the files listed below
   * change, and then to execute the listed tasks when they do.
   */
  gulp.task('watch', () => {
    browserSync.create();

    gulp.watch([config.component.src, config.component.jspm, config.demo.src], [browserSync.reload]);

    browserSync.init({
      'server': {
        'baseDir': [config.demo.src, config.component.jspm]
      }
    });
  });
};

export default initTask;
