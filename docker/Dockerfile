FROM nginx

# username:password base64 encoded
ENV BASICTOKEN=dXNlcm5hbWU6cGFzc3dvcmQ= \
    JIRA_URL=jira.atlassian.com

COPY conf /etc/nginx/conf.d
COPY html /usr/share/nginx/html
COPY ssl /etc/nginx
COPY run.sh /etc/nginx

CMD ["/etc/nginx/run.sh"]