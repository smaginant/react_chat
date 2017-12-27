module Api
  class MessagesController < ApplicationController #:nodoc:
    def index
      render json: {
        messages: [{
          username: 'Kevin Hsu',
          content: 'Hello World!',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }, {
          username: 'Alice Chen',
          content: 'Love it! :heart:',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }, {
          username: 'Kevin Hsu',
          content: 'Check out my Github at https://github.com/WigoHunter',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }, {
          username: 'KevHs',
          content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
          img: 'http://i.imgur.com/ARbQZix.jpg'
        }, {
          username: 'Kevin Hsu',
          content: 'So',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }, {
          username: 'Kevin Hsu',
          content: 'Chilltime is going to be an app for you to view videos with friends',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }, {
          username: 'Kevin Hsu',
          content: 'You can sign-up now to try out our private beta!',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }, {
          username: 'Alice Chen',
          content: 'Definitely! Sounds great!',
          img: 'http://i.imgur.com/Tj5DGiO.jpg'
        }]
      }
    end
  end
end
