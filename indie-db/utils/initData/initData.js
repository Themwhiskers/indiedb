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
    {
        _id: crypto.randomUUID(),
        name: 'Team Cherry',
        location: 'Adelaide, South Australia',
        image: {
            url: 'https://images.squarespace-cdn.com/content/v1/606d4deb4db8c15ea53b3624/c176e609-2480-47a0-ab31-536b0e423e9b/logo2.png',
            alt: '',
            _id: crypto.randomUUID()
            },
        team:{
            founders: [''],
            devTeam: [''],
            artTeam: [''],
            composer: [''],
        },
        titles:
        [
            {
                _id: crypto.randomUUID(),
                name: 'Hollow Knight',
                boxArt: '',
                trailer: '',
                titleDescription: '',
                releaseDate: '2017',
                platforms: {}
            },
            {
                _id: crypto.randomUUID(),
                name: 'Silk Song',
                boxArt: '',
                trailer: '',
                titleDescription: '',
                releaseDate: 'TBA',
                platforms: {}
            }
            
        ],
        links: {
            steam: '',
            gog: '',
            site: '',
        },
        twitter: ''
    }
    ]
;