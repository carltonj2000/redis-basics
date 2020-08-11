# Redis : The Basics for beginners

Redis : The Basics for beginners

Information here based on the
[Redis : The Basics for beginners](https://youtu.be/L3zp347cWNw)
video.

The initial config file is taken straight out of the documentation which links
to github. Removed bind and protect in config.

```bash
docker network create redis
docker volume create redis
## Run redis via line below
npm run redis
## Run client via line below
cd client; npm run docker:start
```
