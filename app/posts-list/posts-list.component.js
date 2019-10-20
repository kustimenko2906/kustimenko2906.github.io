angular.
    module('postsApp').
    component('postsList', {
        templateUrl: 'app/posts-list/posts-list.html',
        controller: function PostsListController($http) {
            const self = this;
            self.addNewPost = addNewPost;
            self.removePost = removePost;
            self.getAllPosts = getAllPosts;
            self.posts = [];
            self.newPostItem = {};

            self.$onInit = () => {
                getAllPosts().then(res => {
                    self.posts = res.data;
                });
            };

            function addNewPost(post) {
                self.newPostItem = {
                    title: post.title,
                    body: post.body,
                    userId: post.userId,
                    id: self.posts.length + 1
                };
                console.log(self.newPostItem);
                self.posts.push(self.newPostItem);
            }

            function removePost(postId) {
                self.posts.splice(postId, 1);
            }

            function getAllPosts() {
                return $http.get('https://jsonplaceholder.typicode.com/posts');
            }
        }
    });