
class Alert {

    static danger(msg){
    return `<p class ="alert alert-danger d-flex justify-content-between">${ msg }<button  data-bs-dismiss="alert" class ="btn-close"></button></p>`
    }
    static success(msg){
    return `<p class ="alert alert-success d-flex justify-content-between">${ msg }<button  data-bs-dismiss="alert" class ="btn-close"></button></p>`
    }
    static warning(msg){
    return `<p class ="alert alert-warning d-flex justify-content-between">${ msg }<button  data-bs-dismiss="alert" class ="btn-close"></button></p>`
    }
}
export default Alert;