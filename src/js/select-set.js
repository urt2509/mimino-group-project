function customSelect() {
    const customSelects = document.querySelectorAll('.js-select');

    if (customSelects.length > 0) {
        customSelects.forEach(select => {
            NiceSelect.bind(select, {
                searchable: false, // true
                placeholder: 'select',
                searchtext: '',
                selectedtext: 'geselecteerd'
            });
        })
    }
}
customSelect();