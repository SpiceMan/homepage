
class User {
    username = null;
    logged = false;
    roles = [];

    constructor(username, roles) {
        this.username = username;
        this.roles = roles;
    }

    setLogged(logged) {
        this.logged = logged;
    }
    isLogged() {
        return this.logged;
    }

    isAdmin() {
        let is_admin = false;
        this.roles.forEach( r => { if( r === "admin") { is_admin = true; } } );

        return is_admin;
    }
}

export default User;