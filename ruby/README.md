# ruby

## Homebrew
MACOS 包管理工具
[Homebrew](https://brew.sh/)
````
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
````

## cakebrew
Homebrew 管理工具
[cakebrew](https://www.cakebrew.com/)
安装gnupg2


## rvm
ruby 管理工具
[rvm](https://rvm.io/)
````
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
````
````
\curl -sSL https://get.rvm.io | bash -s stable
````
````
rvm list
````
````
rvm list known
````
````
rvm install 2.4 
````
````
rvm install 2.4 
````
````
rvm use 2.4 
````
````
rvm use --default 2.4 
````
````
rvm use system
````
````
gem sources --remove https://rubygems.org/
````
````
gem sources -a https://ruby.taobao.org/
````
````
gem sources -l
````
````
gem update
````
