Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  photoTemplate: 'photo',
 
  waitOn: function() { return Meteor.subscribe('social'); }
});

Router.route('/', {name: 'socialList'});
Router.route('/photo',{name:'photo'});