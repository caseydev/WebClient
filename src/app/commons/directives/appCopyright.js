import CONFIG from '../../config';

/* @ngInject */
function appCopyright(gettextCatalog, translator) {
    const I18N = translator(() => ({
        label: gettextCatalog.getString('ProtonMail.com - Made globally, hosted in Switzerland.', null, 'copyright')
    }));

    return {
        replace: true,
        template: `<span class="appCopyright-container">${CONFIG.year} ${I18N.label}</span>`
    };
}
export default appCopyright;
