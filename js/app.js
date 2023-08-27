
function modal_05() {
    Swal.fire({
            html:
                '<div class="video-apk">' +
                '<img class="img-kit" src="https://mauricomputacion.com.ar/images/productos/galerias/22707/1003_213582278.png" alt=""></img>'+
                '</div>' +
                '<div class="pasaword">' +
                '<a  href="https://bit.ly/3JQZJ06"  target="_blank">' +
                '<button  class="bt-msj-descargar" >Descargar App</button></a>' +
                '<img class="qr-apk" src="img/qr-apk.png" alt="">'+
                '</div>'+
                '<h3 class="bm-4">Black Filter</h3>',
            //tamaño
            willOpen: '4',
            Button: '5',
            imageWidth: 300,
            imageHeight: 400,
            //cerrar,
            showCloseButton: true,
            showConfirmButton: false,
            background: '#0e0e0e',
            backdrop: `
            rgba(73, 73, 73, 0.5)
              left top
              no-repeat
            `,
        })
    }