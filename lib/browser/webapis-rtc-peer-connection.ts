/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(Zone as any).l('RTCPeerConnection', (global: any, Zone: ZoneType, api: _ZonePrivate) => {
  const RTCPeerConnection = global['RTCPeerConnection'];
  if (!RTCPeerConnection) {
    return;
  }

  const addSymbol = api.symbol('addEventListener');
  const removeSymbol = api.symbol('removeEventListener');

  RTCPeerConnection.prototype.addEventListener = RTCPeerConnection.prototype[addSymbol];
  RTCPeerConnection.prototype.removeEventListener = RTCPeerConnection.prototype[removeSymbol];

  // RTCPeerConnection extends EventTarget, so we must clear the symbol
  // to allow pathc RTCPeerConnection.prototype.addEventListener again
  RTCPeerConnection.prototype[addSymbol] = null;
  RTCPeerConnection.prototype[removeSymbol] = null;

  api.patchEventTarget(global, [RTCPeerConnection.prototype], {useG: false});
});
