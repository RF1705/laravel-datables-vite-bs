/**
 * DataTables pdf button.
 *
 * -- Laravel Integration --
 *
 * Button::make('pdf')->text('Export to PDF')
 *
 */
document.addEventListener('DOMContentLoaded', function () {
    $.fn.dataTable.ext.buttons.pdf = {
        name: 'pdf',
        className: 'buttons-pdf btn-primary',
        titleAttr: 'Export as PDF',
        text: '<i class="fas fa-file-pdf"></i>',
        action: function (e, dt, button, config) {
            window.location = _buildUrl(dt, 'pdf');
        }
    };
});
