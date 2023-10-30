/* DATA */
const repoIssuesResponse = {
   "total_count": 4,
   "incomplete_results": false,
   "items": [
      {
         "url": "https://api.github.com/repos/facebook/react/issues/285",
         "repository_url": "https://api.github.com/repos/facebook/react",
         "labels_url": "https://api.github.com/repos/facebook/react/issues/285/labels{/name}",
         "comments_url": "https://api.github.com/repos/facebook/react/issues/285/comments",
         "events_url": "https://api.github.com/repos/facebook/react/issues/285/events",
         "html_url": "https://github.com/facebook/react/issues/285",
         "id": 18382292,
         "node_id": "MDU6SXNzdWUxODM4MjI5Mg==",
         "number": 285,
         "title": "Declarative API for installing global DOM event handlers",
         "user": {
            "login": "sophiebits",
            "id": 6820,
            "node_id": "MDQ6VXNlcjY4MjA=",
            "avatar_url": "https://avatars2.githubusercontent.com/u/6820?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/sophiebits",
            "html_url": "https://github.com/sophiebits",
            "followers_url": "https://api.github.com/users/sophiebits/followers",
            "following_url": "https://api.github.com/users/sophiebits/following{/other_user}",
            "gists_url": "https://api.github.com/users/sophiebits/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/sophiebits/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/sophiebits/subscriptions",
            "organizations_url": "https://api.github.com/users/sophiebits/orgs",
            "repos_url": "https://api.github.com/users/sophiebits/repos",
            "events_url": "https://api.github.com/users/sophiebits/events{/privacy}",
            "received_events_url": "https://api.github.com/users/sophiebits/received_events",
            "type": "User",
            "site_admin": false
         },
         "labels": [
            {
               "id": 127893911,
               "node_id": "MDU6TGFiZWwxMjc4OTM5MTE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
               "name": "Component: DOM",
               "color": "fef2c0",
               "default": false,
               "description": null
            },
            {
               "id": 1776420141,
               "node_id": "MDU6TGFiZWwxNzc2NDIwMTQx",
               "url": "https://api.github.com/repos/facebook/react/labels/Partner",
               "name": "Partner",
               "color": "e4bef7",
               "default": false,
               "description": ""
            },
            {
               "id": 1775955521,
               "node_id": "MDU6TGFiZWwxNzc1OTU1NTIx",
               "url": "https://api.github.com/repos/facebook/react/labels/Resolution:%20Backlog",
               "name": "Resolution: Backlog",
               "color": "9dd1e8",
               "default": false,
               "description": ""
            },
            {
               "id": 121709921,
               "node_id": "MDU6TGFiZWwxMjE3MDk5MjE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Feature%20Request",
               "name": "Type: Feature Request",
               "color": "c7def8",
               "default": false,
               "description": null
            }
         ],
         "state": "open",
         "locked": false,
         "assignee": null,
         "assignees": [],
         "milestone": null,
         "comments": 58,
         "created_at": "2013-08-21T21:41:26Z",
         "updated_at": "2020-01-08T23:42:27Z",
         "closed_at": null,
         "author_association": "COLLABORATOR",
         "active_lock_reason": null,
         "body": "#284 reminded me that one thing I've sometimes wanted is to install a handler on window for `keypress` (for keyboard shortcuts) or `scroll`. Right now I can just do `window.addEventListener` in `componentDidMount` but since React is listening already, it would be nice if there were some way for me to intercept those events. (In addition, receiving normalized synthetic events is generally more useful.)\n",
         "performed_via_github_app": null,
         "score": 1.0
      },
      {
         "url": "https://api.github.com/repos/facebook/react/issues/285",
         "repository_url": "https://api.github.com/repos/facebook/react",
         "labels_url": "https://api.github.com/repos/facebook/react/issues/285/labels{/name}",
         "comments_url": "https://api.github.com/repos/facebook/react/issues/285/comments",
         "events_url": "https://api.github.com/repos/facebook/react/issues/285/events",
         "html_url": "https://github.com/facebook/react/issues/285",
         "id": 18382292,
         "node_id": "MDU6SXNzdWUxODM4MjI5Mg==",
         "number": 285,
         "title": "Declarative API for installing global DOM event handlers",
         "user": {
            "login": "sophiebits",
            "id": 6820,
            "node_id": "MDQ6VXNlcjY4MjA=",
            "avatar_url": "https://avatars2.githubusercontent.com/u/6820?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/sophiebits",
            "html_url": "https://github.com/sophiebits",
            "followers_url": "https://api.github.com/users/sophiebits/followers",
            "following_url": "https://api.github.com/users/sophiebits/following{/other_user}",
            "gists_url": "https://api.github.com/users/sophiebits/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/sophiebits/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/sophiebits/subscriptions",
            "organizations_url": "https://api.github.com/users/sophiebits/orgs",
            "repos_url": "https://api.github.com/users/sophiebits/repos",
            "events_url": "https://api.github.com/users/sophiebits/events{/privacy}",
            "received_events_url": "https://api.github.com/users/sophiebits/received_events",
            "type": "User",
            "site_admin": false
         },
         "labels": [
            {
               "id": 127893911,
               "node_id": "MDU6TGFiZWwxMjc4OTM5MTE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
               "name": "Component: DOM",
               "color": "fef2c0",
               "default": false,
               "description": null
            },
            {
               "id": 1776420141,
               "node_id": "MDU6TGFiZWwxNzc2NDIwMTQx",
               "url": "https://api.github.com/repos/facebook/react/labels/Partner",
               "name": "Partner",
               "color": "e4bef7",
               "default": false,
               "description": ""
            },
            {
               "id": 1775955521,
               "node_id": "MDU6TGFiZWwxNzc1OTU1NTIx",
               "url": "https://api.github.com/repos/facebook/react/labels/Resolution:%20Backlog",
               "name": "Resolution: Backlog",
               "color": "9dd1e8",
               "default": false,
               "description": ""
            },
            {
               "id": 121709921,
               "node_id": "MDU6TGFiZWwxMjE3MDk5MjE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Feature%20Request",
               "name": "Type: Feature Request",
               "color": "c7def8",
               "default": false,
               "description": null
            }
         ],
         "state": "closed",
         "locked": false,
         "assignee": null,
         "assignees": [],
         "milestone": null,
         "comments": 58,
         "created_at": "2013-08-21T21:41:26Z",
         "updated_at": "2020-01-08T23:42:27Z",
         "closed_at": null,
         "author_association": "COLLABORATOR",
         "active_lock_reason": null,
         "body": "#284 reminded me that one thing I've sometimes wanted is to install a handler on window for `keypress` (for keyboard shortcuts) or `scroll`. Right now I can just do `window.addEventListener` in `componentDidMount` but since React is listening already, it would be nice if there were some way for me to intercept those events. (In addition, receiving normalized synthetic events is generally more useful.)\n",
         "performed_via_github_app": null,
         "score": 1.0
      },
      {
         "url": "https://api.github.com/repos/facebook/react/issues/1159",
         "repository_url": "https://api.github.com/repos/facebook/react",
         "labels_url": "https://api.github.com/repos/facebook/react/issues/1159/labels{/name}",
         "comments_url": "https://api.github.com/repos/facebook/react/issues/1159/comments",
         "events_url": "https://api.github.com/repos/facebook/react/issues/1159/events",
         "html_url": "https://github.com/facebook/react/issues/1159",
         "id": 28086808,
         "node_id": "MDU6SXNzdWUyODA4NjgwOA==",
         "number": 1159,
         "title": "Provide a way to handle browser-autocompleted form values on controlled components",
         "user": {
            "login": "ericflo",
            "id": 1228,
            "node_id": "MDQ6VXNlcjEyMjg=",
            "avatar_url": "https://avatars0.githubusercontent.com/u/1228?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/ericflo",
            "html_url": "https://github.com/ericflo",
            "followers_url": "https://api.github.com/users/ericflo/followers",
            "following_url": "https://api.github.com/users/ericflo/following{/other_user}",
            "gists_url": "https://api.github.com/users/ericflo/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/ericflo/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/ericflo/subscriptions",
            "organizations_url": "https://api.github.com/users/ericflo/orgs",
            "repos_url": "https://api.github.com/users/ericflo/repos",
            "events_url": "https://api.github.com/users/ericflo/events{/privacy}",
            "received_events_url": "https://api.github.com/users/ericflo/received_events",
            "type": "User",
            "site_admin": false
         },
         "labels": [
            {
               "id": 127893911,
               "node_id": "MDU6TGFiZWwxMjc4OTM5MTE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
               "name": "Component: DOM",
               "color": "fef2c0",
               "default": false,
               "description": null
            },
            {
               "id": 40929151,
               "node_id": "MDU6TGFiZWw0MDkyOTE1MQ==",
               "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
               "name": "Type: Bug",
               "color": "b60205",
               "default": false,
               "description": null
            }
         ],
         "state": "open",
         "locked": false,
         "assignee": null,
         "assignees": [],
         "milestone": null,
         "comments": 79,
         "created_at": "2014-02-22T02:05:11Z",
         "updated_at": "2020-02-12T16:46:02Z",
         "closed_at": null,
         "author_association": "CONTRIBUTOR",
         "active_lock_reason": null,
         "body": "When there's a controlled component for form names that the user has saved in their browser (common with username/password fields), the browser will sometimes render the page with values in those fields without firing onChange events.  If the user submits the form, the component state does not reflect what is showing to the user.\n\nIn experimenting with this, it appears that the data is there on load (tested by logging this.refs.myinput.getDOMNode().value)\n",
         "performed_via_github_app": null,
         "score": 1.0
      },
      {
         "url": "https://api.github.com/repos/facebook/react/issues/1253",
         "repository_url": "https://api.github.com/repos/facebook/react",
         "labels_url": "https://api.github.com/repos/facebook/react/issues/1253/labels{/name}",
         "comments_url": "https://api.github.com/repos/facebook/react/issues/1253/comments",
         "events_url": "https://api.github.com/repos/facebook/react/issues/1253/events",
         "html_url": "https://github.com/facebook/react/issues/1253",
         "id": 29305204,
         "node_id": "MDU6SXNzdWUyOTMwNTIwNA==",
         "number": 1253,
         "title": "iframe contents cause invariant violation",
         "user": {
            "login": "matthewwithanm",
            "id": 126263,
            "node_id": "MDQ6VXNlcjEyNjI2Mw==",
            "avatar_url": "https://avatars0.githubusercontent.com/u/126263?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/matthewwithanm",
            "html_url": "https://github.com/matthewwithanm",
            "followers_url": "https://api.github.com/users/matthewwithanm/followers",
            "following_url": "https://api.github.com/users/matthewwithanm/following{/other_user}",
            "gists_url": "https://api.github.com/users/matthewwithanm/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/matthewwithanm/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/matthewwithanm/subscriptions",
            "organizations_url": "https://api.github.com/users/matthewwithanm/orgs",
            "repos_url": "https://api.github.com/users/matthewwithanm/repos",
            "events_url": "https://api.github.com/users/matthewwithanm/events{/privacy}",
            "received_events_url": "https://api.github.com/users/matthewwithanm/received_events",
            "type": "User",
            "site_admin": false
         },
         "labels": [
            {
               "id": 127893911,
               "node_id": "MDU6TGFiZWwxMjc4OTM5MTE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
               "name": "Component: DOM",
               "color": "fef2c0",
               "default": false,
               "description": null
            },
            {
               "id": 40929151,
               "node_id": "MDU6TGFiZWw0MDkyOTE1MQ==",
               "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Bug",
               "name": "Type: Bug",
               "color": "b60205",
               "default": false,
               "description": null
            }
         ],
         "state": "open",
         "locked": false,
         "assignee": null,
         "assignees": [],
         "milestone": null,
         "comments": 8,
         "created_at": "2014-03-12T21:35:00Z",
         "updated_at": "2017-10-01T22:40:24Z",
         "closed_at": null,
         "author_association": "MEMBER",
         "active_lock_reason": null,
         "body": "When using server rendering, putting an `<img>` in an `<iframe>` seems to invariably cause an invariant violation (it can't find the image).\n\nThis is related to #1252, but not identical. In both cases, the browser isn't aware of the inner elements however, in this case, it's because browsers that support iframes are actually mutating the DOM (by replacing the contents with the document specified in the `src` attribute).\n",
         "performed_via_github_app": null,
         "score": 1.0
      },
      {
         "url": "https://api.github.com/repos/facebook/react/issues/1259",
         "repository_url": "https://api.github.com/repos/facebook/react",
         "labels_url": "https://api.github.com/repos/facebook/react/issues/1259/labels{/name}",
         "comments_url": "https://api.github.com/repos/facebook/react/issues/1259/comments",
         "events_url": "https://api.github.com/repos/facebook/react/issues/1259/events",
         "html_url": "https://github.com/facebook/react/issues/1259",
         "id": 29467710,
         "node_id": "MDU6SXNzdWUyOTQ2NzcxMA==",
         "number": 1259,
         "title": "Stop doing data-*, aria-*, start using dataSet",
         "user": {
            "login": "zpao",
            "id": 8445,
            "node_id": "MDQ6VXNlcjg0NDU=",
            "avatar_url": "https://avatars1.githubusercontent.com/u/8445?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/zpao",
            "html_url": "https://github.com/zpao",
            "followers_url": "https://api.github.com/users/zpao/followers",
            "following_url": "https://api.github.com/users/zpao/following{/other_user}",
            "gists_url": "https://api.github.com/users/zpao/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/zpao/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/zpao/subscriptions",
            "organizations_url": "https://api.github.com/users/zpao/orgs",
            "repos_url": "https://api.github.com/users/zpao/repos",
            "events_url": "https://api.github.com/users/zpao/events{/privacy}",
            "received_events_url": "https://api.github.com/users/zpao/received_events",
            "type": "User",
            "site_admin": false
         },
         "labels": [
            {
               "id": 127893911,
               "node_id": "MDU6TGFiZWwxMjc4OTM5MTE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Component:%20DOM",
               "name": "Component: DOM",
               "color": "fef2c0",
               "default": false,
               "description": null
            },
            {
               "id": 1776420141,
               "node_id": "MDU6TGFiZWwxNzc2NDIwMTQx",
               "url": "https://api.github.com/repos/facebook/react/labels/Partner",
               "name": "Partner",
               "color": "e4bef7",
               "default": false,
               "description": ""
            },
            {
               "id": 1775955521,
               "node_id": "MDU6TGFiZWwxNzc1OTU1NTIx",
               "url": "https://api.github.com/repos/facebook/react/labels/Resolution:%20Backlog",
               "name": "Resolution: Backlog",
               "color": "9dd1e8",
               "default": false,
               "description": ""
            },
            {
               "id": 121709921,
               "node_id": "MDU6TGFiZWwxMjE3MDk5MjE=",
               "url": "https://api.github.com/repos/facebook/react/labels/Type:%20Feature%20Request",
               "name": "Type: Feature Request",
               "color": "c7def8",
               "default": false,
               "description": null
            }
         ],
         "state": "open",
         "locked": false,
         "assignee": null,
         "assignees": [],
         "milestone": null,
         "comments": 27,
         "created_at": "2014-03-14T20:30:18Z",
         "updated_at": "2020-01-08T23:44:58Z",
         "closed_at": null,
         "author_association": "MEMBER",
         "active_lock_reason": null,
         "body": "The DOM already exposes `data-*` as `dataset` but it's doing transformation from hyphenated to camelCase. [From MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.dataset):\n\n```\n<div id=\"user\" data-id=\"1234567890\" data-user=\"johndoe\" data-date-of-birth>John Doe\n</div>\n\nvar el = document.querySelector('#user');\n\n// el.id == 'user'\n// el.dataset.id === '1234567890'\n// el.dataset.user === 'johndoe'\n// el.dataset.dateOfBirth === ''\n\nel.dataset.dateOfBirth = '1960-10-03'; // set the DOB.\n\n// 'someDataAttr' in el.dataset === false\n\nel.dataset.someDataAttr = 'mydata';\n// 'someDataAttr' in el.dataset === true\n```\n\nWe should just start supporting `dataSet` (because camelCase). This will allow a couple things:\n- easier reasoning about data attributes (`Object.keys(this.props.dataSet)`)\n- easier merging (`<div dataSet={merge(this.props.dataSet, {extra: 'value', override: 'value'})} />`)\n- easier (potentially faster?) updates (just modify `node.dataset`)\n\nWe'll want to do the reverse of what the DOM is doing. eg `<div dataSet={{dateOfBirth: 'val', foo: 'bar'}} />` becomes `<div data-date-of-birth=\"val\" data-foo=\"bar\"></div>`.\n\nTo the best of my knowledge, `aria-*` doesn't have a corresponding API, but we should make it work the same way. I think `ariaSet` makes sense.\n",
         "performed_via_github_app": null,
         "score": 1.0
      }
   ]
}

/* REGULAR GROUP BY */
const groupBy = (list, ...keyGetterFns) => {
   const map = new Map();

   for (const item of list) {
      const keys = keyGetterFns.map(fn => fn(item));
      const key = keys.join();
      const value = map.get(key);

      if (!value) map.set(key, [item]);
      else value.push(item);
   }

   return map;
}

/* NESTED MAP GROUP BY */
const setMapValue = (value, item) => {
   if (!value) value = [item];
   else value.push(item);

   return value;
}

const assembleMap = (keyGetterFns, item, map = new Map()) => {
   const [keyFn, ...nextKeyFns] = keyGetterFns;
   const key = keyFn(item);
   const value = map.get(key);

   return map.set(key, nextKeyFns.length
      ? assembleMap(nextKeyFns, item, value)
      : setMapValue(value, item));
}

const nestedMapGroupBy = (list, ...keyGetterFns) => {
   const map = new Map();

   for (const item of list) {
      assembleMap(keyGetterFns, item, map);
   }

   return map;
}

/* BENCHMARKING */
console.time('Access By Join Key')
const res = groupBy(repoIssuesResponse.items, item => item.state, item => new Date(item.created_at).getMonth());
const joinKeyRes = res.get('open,2');
console.timeEnd('Access By Join Key');

console.time('Access Nested Map');
const nestedMapRes = nestedMapGroupBy(repoIssuesResponse.items, item => item.state, item => new Date(item.created_at).getMonth());
const nestedMapDeepRes = nestedMapRes.get('open').get(2);
// console.log(nestedMapRes);
console.timeEnd('Access Nested Map');