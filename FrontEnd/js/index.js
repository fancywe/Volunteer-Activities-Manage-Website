ELEMENT.locale(ELEMENT.lang.en)
new Vue({
    el: '#app',
    data: function() {
        return {
            user: localStorage.getItem("user"),
            role: localStorage.getItem("role"),
        }
    },
    methods:{
        translateRole(role){
            let roleName={
                "Admin": "Admin",
                "Donor": "Donor",
                "Volunteer": "Volunteer"
            }
            return roleName[role]
        },
        exitLogin(){
            localStorage.removeItem("user")
            localStorage.removeItem("Access-Token")
            localStorage.removeItem("role")
        },
        ifShow(role){
            if (role == this.role){
                return true
            }
            else{
                return false
            }
        }
    },
})