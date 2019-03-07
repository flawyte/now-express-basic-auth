# now-express-basic-auth

Reproduction of a bug on ZEIT's Now when using basic authentication to serve static files with Express.

Problem happens even if auth is disabled and we're just trying to serve static files.

- Deployment URL (auth enabled) : https://now-basic-auth-express-c4ghv1vt1.now.sh/ (login : `guest` / `guest`)
- Deployment URL (auth disabled) : https://now-basic-auth-express-dtwsi5vsx.now.sh/
