export const cardData = 
    [{
        _id: crypto.randomUUID(),
        name: 'Super Giant Games',
        location: 'San Francisco, California',
        image: {
            url: 'https://www.rengenmarketing.com/wp-content/uploads/2021/02/supergiantgames.jpg',
            alt: 'Super Giant Games',
            _id: crypto.randomUUID()
            },
        team:{
            founders: ['Amir Rao', 'Gavin Simon'],
            devTeam: ['Christopher Jurney', 'Gavin Simon', 'Andrew Wang'],
            artTeam: ['Jen Zee'],
            composer: ['Darren Korb'],
        },
        titles:
        [
            {
                _id: crypto.randomUUID(),
                name: 'Bastion',
                boxArt: '',
                trailer: '',
                titleDescription: '',
                releaseDate: '2011',
                platforms: {}
            },
            {
                _id: crypto.randomUUID(),
                name: 'Transistor',
                boxArt: '',
                trailer: '',
                titleDescription: '',
                releaseDate: '2014',
                platforms: {}
            },
            {
                _id: crypto.randomUUID(),
                name: 'Pyre',
                boxArt: '',
                trailer: '',
                titleDescription: '',
                releaseDate: '2017',
                platforms: {}
            },
            {
                _id: crypto.randomUUID(),
                name: 'Hades',
                boxArt: '',
                trailer: '',
                titleDescription: '',
                releaseDate: '2020',
                platforms: {}
            }
        ],
        links: {
            steam: 'https://store.steampowered.com/developer/supergiantgames',
            gog: 'https://www.gog.com/en/games?developers=supergiant-games',
            site: 'https://www.supergiantgames.com/',
        },
        twitter: ''
    },
    ]
;