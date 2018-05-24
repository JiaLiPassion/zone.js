/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {setShouldCopySymbolProperties, patchOnProperties, patchMethod, bindArguments} from '../common/utils';

Zone.__load_patch('node_util', (global: any, Zone: ZoneType, api: _ZonePrivate) => {
  api.patchOnProperties = patchOnProperties;
  api.patchMethod = patchMethod;
  api.bindArguments = bindArguments;
  setShouldCopySymbolProperties(true);
});
