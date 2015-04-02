#!/bin/sh

host="localhost"
db="tattvaloka"
usr="root"
pwd="mysql"

echo "drop database if exists tattvaloka; create database tattvaloka charset utf8 collate utf8_general_ci;" | /usr/bin/mysql -uroot -pmysql

perl insert_author.pl $host $db $usr $pwd
perl insert_feat.pl $host $db $usr $pwd
perl insert_articles.pl $host $db $usr $pwd


