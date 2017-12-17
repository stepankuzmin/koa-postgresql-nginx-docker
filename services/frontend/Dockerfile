FROM nginx:alpine
LABEL maintainer="Stepan Kuzmin <to.stepan.kuzmin@gmail.com>"

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.5.0
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY nginx.tmpl /etc/nginx/nginx.tmpl

CMD ["dockerize",                                                       \
  "-template", "/etc/nginx/nginx.tmpl:/etc/nginx/conf.d/default.conf",  \
  "nginx", "-g", "daemon off;"                                          \
]