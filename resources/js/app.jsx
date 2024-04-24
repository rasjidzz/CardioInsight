import React from 'react'
import {createRoot} from 'react-dom/client' //here
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'

createInertiaApp({
    resolve: (name) => resolvePageComponent(`./layout/${name}.jsx`,import.meta.glob('./**/*.jsx')),
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />) //and here
    },
})
