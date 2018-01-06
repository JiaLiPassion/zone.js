/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(Zone as any).l('bluebird', (global: any, Zone: ZoneType, api: _ZonePrivate) => {
  // TODO: @JiaLiPassion, we can automatically patch bluebird
  // if global.Promise = Bluebird, but sometimes in nodejs,
  // global.Promise is not Bluebird, and Bluebird is just be
  // used by other libraries such as sequelize, so I think it is
  // safe to just expose a method to patch Bluebird explicitly
  const BLUEBIRD = 'bluebird';
  (Zone as any)[Zone.__symbol__(BLUEBIRD)] = function patchBluebird(Bluebird: any) {
    Bluebird.setScheduler((fn: Function) => {
      (Zone as any).c.si(BLUEBIRD, fn);
    });
  };
});
