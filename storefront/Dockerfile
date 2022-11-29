# syntax = docker/dockerfile:1.4
FROM node:16-slim
ARG USER_ID
ARG GROUP_ID
WORKDIR /app
RUN <<eot bash -e
  # Update internal user of wordpress service to dev user & group idss
  groupmod --gid ${USER_ID} node
  usermod --gid ${GROUP_ID} node
  usermod --uid ${GROUP_ID} node

  chown -R node:node /app /home/node
eot
USER node

EXPOSE 3000
CMD ["npm", "run", "dev"]
