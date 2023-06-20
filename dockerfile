

FROM nginx

ENV BASE=true

COPY ./dist /usr/share/nginx/html/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./coding-time.cn_bundle.crt /etc/nginx/coding-time.cn_bundle.crt
COPY ./coding-time.cn_bundle.pem /etc/nginx/coding-time.cn_bundle.pem
COPY ./coding-time.cn.key /etc/nginx/coding-time.cn.key
COPY ./coding-time.cn.csr /etc/nginx/coding-time.cn.csr