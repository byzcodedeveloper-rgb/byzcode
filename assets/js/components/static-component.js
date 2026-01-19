Vue.component('message', {
    data() {
        return {
            message: 'Componente del formulario de contacto',
        }
    },
    template: `
        <div>
            <h1>{{ message }}</h1>
        </div>
    `
});
