import sAlert from "sweetalert2";

export const myAlert = async (res, type = "normal", title) => {
  if (type == "normal") {
    if (res) {
      sAlert.fire({
        position: "center",
        icon: "success",
        title: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      // toggleModal();
    } else {
      sAlert.fire({
        position: "center",
        icon: "error",
        title: "Failed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  if (type == "question") {
    let status;
    await sAlert
      .fire({
        title: title,
        icon: "question",
        iconHtml: "?",
        confirmButtonText: "confirm",
        cancelButtonText: "Cancel",
        showCancelButton: true,
        showCloseButton: true,
      })
      .then((data) => (status = data.isConfirmed));

    return status;
  }
  return;
};
