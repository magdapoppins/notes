# Cross-Origin Resource Sharing and Why Origin Matters

Web contents origin is defined at the first load of the page in the browser and consists of the scheme or protocol, hostname and port of the URL used to access it.

Example:

- https://my-cat-site.com and http://my-cat-site.com DO NOT have the same origin (different scheme).
- http://my-cat-site.com/cats/1 and http://my-cat-site.com/owners/1 DO have the same origin (file path doesn't matter).
- http://blog.my-cat-site.com and http://my-cat-site.com DO NOT have the same origin (different hostnames).
- http://blog.my-cat-site.com:8080 and http://my-cat-site.com DO NOT have the same origin (different ports, default 80 contra 8080).

## Same-Origin Policy

By default browsers follow a same-origin policy, where for example fetch requests from the same origin that the application was loaded from unless the response from the other origins includes the right CORS headers.

Example of allowed CORS:

1. https://my-cat-site.com sends a GET /catfood to https://my-snack-site.com.
2. If https://my-snack-site.com has a CORS policy that allows requests from https://my-cat-site.com, send a response

Example of no CORS:

1. https://my-cat-site.com sends a GET /catfood to https://my-snack-site.com.
2. The CORS policy of https://my-snack-site.com doesn't allow requests from this origin - don't respond.

## Why is CORS Dangerous?

### Fould Play with Cookies!

When you are authorized on a site, for example logged into https://my-cat-site.com, your browser will probably have some kind of login cookie for the site that allows you to communicate with it. If you would then go to e.g. https://sinister-evil.com and that site were to make a request to https://my-cat-site.com, the authorization cookies would be in place and they could read your draft blog post about your cats newest tricks! Not good!

### Network Access Trickery

Another case of danger might be if you'd be inside a private network (allowed to access internal resources) and https://sinister-evil.com would send a request to a https://testing.my-cat-site.com.
