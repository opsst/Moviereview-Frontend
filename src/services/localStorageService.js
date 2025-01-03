function  setItem(key, value) {
    localStorage.setItem(key, value);
}

function getItem(){
    return localStorage.getItem("ACCESS_TOKEN");
}

function removeItem(){
    localStorage.removeItem("ACCESS_TOKEN");
}

function getRole() {
    if(getItem()) {
        return "user";
    }
    return "guest"
}
export default {
    setItem,
    getItem,
    removeItem,
    getRole
};