import { Server } from 'miragejs';

// eslint-disable-next-line no-new
new Server({
    routes() {
        this.namespace = '/api';

        this.get('/users', () => [
            { id: '1', name: 'Luke' },
            { id: '2', name: 'Leah' },
            { id: '3', name: 'Anakin' },
        ]);
    },
});
