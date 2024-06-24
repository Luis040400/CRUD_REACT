import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export function show_alerta(mensaje, icono, foco = "") {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: mensaje,
    icon: icono,
  });
}

export function show_alert_confirmacion(
  msgConfirm,
  msgAccept,
  textConfirm,
  textAccept,
  iconConfirm,
  iconAccept,
  callback,
  foco = ""
) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: msgConfirm,
    text: textConfirm,
    icon: iconConfirm,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
  }).then((result) => {
    if (result.isConfirmed) {
      callback(); // Ejecuta la función callback pasada como argumento
      MySwal.fire({
        title: textAccept,
        text: msgAccept,
        icon: iconAccept,
      });
    }
  });
}