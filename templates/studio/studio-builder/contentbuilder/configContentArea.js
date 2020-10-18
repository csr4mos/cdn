    jQuery(document).ready(function ($) {
        $("#contentarea").contentbuilder({
            snippetFile: 'assets/minimalist-basic/snippets-e-shop.html',
            snippetOpen: false,
            toolbar: 'left',
            iconselect: 'assets/ionicons/selecticon.html',
            snippetCategories: [
                [0,"Padrão"],
                [-1,"Todas"],
                [1,"Menu Principal"],
                [2,"Menu Superior"],
                [3,"Menu Secundário"],
                [4,"Rodapé"],
                [5,"Lojas"],
            ],
            largerImageHandler: 'saveimage-large.php',
            imageselect: 'images.html',
            fileselect: 'files.html',
        });
    });