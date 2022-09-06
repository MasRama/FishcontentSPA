"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../css/app.css");
require("../css/swiper-bundle.css");
const inertia_svelte_1 = require("@inertiajs/inertia-svelte");
(0, inertia_svelte_1.createInertiaApp)({
    resolve: name => require(`./Pages/${name}.svelte`),
    setup({ el, App, props }) {
        new App({ target: el, props });
    },
});
//# sourceMappingURL=app.js.map