import config from '~/config';

// Pages
import Home from "~/pages/Home";
import GetTicket1 from "~/pages/Ticket/GetTicket1";
import GetTicket2 from "~/pages/Ticket/GetTicket2";
import GetTicket3 from "~/pages/Ticket/GetTicket3";
import GetTicket4 from "~/pages/Ticket/GetTicket4";
import Cinema from '~/pages/Cinema';

import Register from "~/pages/Register";


// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.getTicket, component: GetTicket1, layout: 'getTicketLayout' },
    { path: config.routes.getTicket2, component: GetTicket2, layout: 'getTicketLayout' },
    { path: config.routes.getTicket3, component: GetTicket3, layout: 'getTicketLayout' },
    { path: config.routes.getTicket4, component: GetTicket4, layout: 'getTicketLayout' },
    { path: config.routes.register, component: Register, layout: 'registerLayout' },
    { path: config.routes.cinema, component: Cinema, layout: 'cinemaLayout' },

];

const privateRoutes = [];

export { publicRoutes, privateRoutes };