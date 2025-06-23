#!/bin/sh

host="localhost"
db="tattvaloka"
usr="root"
pwd='Mysql@123'

echo "CREATE DATABASE IF NOT EXISTS $db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" | mysql -uroot -p$pwd

perl insert_author.pl $host $db $usr $pwd
perl insert_feat.pl $host $db $usr $pwd
perl insert_articles.pl $host $db $usr $pwd
perl ocr.pl $host $db $usr $pwd
perl searchtable.pl $host $db $usr $pwd

echo "create fulltext index text_index on searchtable (text);" | mysql -uroot -p$pwd $db
