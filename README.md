# Angular Jazar
## Simple service for getting posts from jazar.org 
###Installation
	bower install angular-jazar --save
###Methods:
#### Jazar.getAll()
Returns $promise with all the posts.
	>success:{status:'ok',posts:Array}
#### Jazar.getPage(page)
Return $promise with 10 posts from given page(1,2,3...).
    >success:{status:'ok'
    posts:Array}
#### Jazar.getPost(postId)
Returns $promise with a post from given id
    >success:{status:'ok'
    post:Object}

##- - WORK IN PROGRESS - - 
## DEVELOPERS
	git clone https://github.com/oierbravo/angular-jazar.git
	npm install