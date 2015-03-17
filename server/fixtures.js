if (Social.find().count() === 0) {
  Social.insert({
    title: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100001966281260'
  });
  
  Social.insert({
    title: 'Vk',
    url: 'https://vk.com/id122460721'
  });
  
  Social.insert({
	title: 'Номер телефону',
	phone: '+380978615195'
  });

  Social.insert({
    title: 'email',
    mail: 'medjo21@gmail.com'
  })
} 