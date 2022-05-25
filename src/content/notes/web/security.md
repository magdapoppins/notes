# Web dev security checklist

The purpose of web security is to prevent unauthorized access, use, modification and destruction of resources. This is a brief collection of some of the most common topics to consider. The overarching point is "be paranoid enough about data coming from the browser".

## Common threats

### Cross-site scripting

- XSS (cross-site scripting) - the injection of client-side scripts to the browser that can e.g. send authorization cookies to the attacker so that they can get all access that the user has.
- Reflected: content from the browser is passed to the server and returned unmodified - any scripts in the user content will now be ran when the page loads. Example: search params are displayed directly on the site HTML (the attacker might construct a search link with e.g. a script tag `http://catpics.com?q=smol<script src="...">` in it)
- Persistent: a malicious script is stored on the website and displayed unmodified: for example a site contains discussions that can contain and display unmodified HTML (the script is executed whenever the comment including this HTML is displayed).
- Persistent XSS is a very popular attack since the attacker doesn't need to have any direct engagement with the victims
- Best defense: remove or disable any markup that can contain instructions to run code (scripts, links, embeds in HTML). This is called input sanitization and commonly implemented by web frameworks.

### SQL injection

- Any situation where users are able to execute SQL in your database.
- For example if you construct your SQL queries with data from the user: `"SELECT * FROM users WHERE name = '" + username + "';"`
- Defense: make sure user data passed into a query cannot change the nature of a query - escape those characters that have a special meaning in SQL
- Web frameworks often take care of this escaping for you

### Cross-Site Request Forgery

- CSRF is based on using authorization credentials of other users, e.g. sending someone an email with a link that will post a form with the attackers account info on a money-sending site
- Defense: require POST requests to include a user-specific site-generated secret? That would at least protect the attacker for sending the same link to multiple users and instead make them try and find each individual users secret.

### Clickjacking

- malice.com has your site in a hidden iframe and clicks the user assumes are directed at malice.com are actually directed to your site.
- Defense: you can set headers to your site that prevent it from being embedded in a `<iframe>` in this way.

### Denial of Service

- The attacker floods a target site with fake requests so legitimate users cannot reach it anymore
- Defense: have a load balancer or similar service sitting between users and your application that can identify high/suspicious traffic and block it

### Server-side Request Forgery

- Done e.g. via a parameter in the url: the hacker passes in values that will make the server do a request, and possibly return the results
- Happens when the user can in some way impact the shaping of requests that the server does to e.g. it's backend or other services
