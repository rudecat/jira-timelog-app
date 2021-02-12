#!/usr/bin/env bash

sed -i s/BASICTOKEN/${BASICTOKEN}/g /etc/nginx/conf.d/https.conf
sed -i s/JIRA_URL/${JIRA_URL}/g /etc/nginx/conf.d/https.conf

exec nginx -g "daemon off;"