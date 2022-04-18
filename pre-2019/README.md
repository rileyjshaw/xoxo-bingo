```
doin' bingo at ❌⭕️❌️⭕️! hey look! it's http://bingoxo.club!


HACKING ON IT
-------------

git clone https://github.com/rileyjshaw/xoxo-bingo.git
cd xoxo-bingo/pre-2019
mv old.package.json package.json
mv old.package.lock package.lock
npm i
# hack, hack, hack away!


CONTRIBUTING
------------

cd static
npm i -g gulp && gulp
# do your stuff, then send us a pull request!
# https://help.github.com/articles/creating-a-pull-request/


DEPLOYING
---------

# for future riley, who is forgetful:
brew install heroku
heroku login
# (log in)
heroku git:remote -a xoxo-bingo
heroku config -s >> .env
heroku local web -p 9001
# then some more?
git push heroku master


NOTES
-----

# ImageMagick dither settings:
convert <input_img> -colorspace Gray -ordered-dither o2x2 output.png


LICENSE
-------

public domain, be yourself!
```
