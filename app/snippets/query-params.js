// BEGIN-SNIPPET query-params
import Route from '@ember/routing/route';
export default Route.extend({
  queryParams: {
    "offset": { "refreshModel": true },
    "limit": { "refreshModel": true }
  }
});
// END-SNIPPET
