//real
class PopupRequest {
    constructor(targetURL, id, windowAttributes) {
        this.id = id;
        this.targetURL = targetURL;
        this.window = undefined;
        this.windowAttributes = Object.keys(windowAttributes).map((key) => key + "=" + windowAttributes[key]).join(",");
        this.doRequest = (params) => {
            /*code concealed*/
        };
        this.close = () => {
            /*code concealed*/
        };
        this.getWindow = () => {
            /*code concealed*/
        };
    }
}

//proxy
class LoginPopupRequest {
    constructor(id, windowAttributes) {
        this.url = /*code concealed*/
        this.popup = new PopupRequest(this.url, id, windowAttributes);
        this.doRequest = (id, pwd) => {
            /*code concealed*/
        };
        this.close = () => {
            /*code concealed*/
        };
    }
}
    
//proxy
class LogoutPopupRequest {
    constructor(id, windowAttributes) {
        this.url = /*code concealed*/
        this.popup = new PopupRequest(this.url, id, windowAttributes);
        this.doRequest = () => {
            /*code concealed*/
        };
        this.close = () => {
            /*code concealed*/
        };
    }
}

//proxy
class ApplyPopupRequest {
    constructor(id, windowAttributes) {
        this.url = /*code concealed*/
        this.popup = new PopupRequest(this.url, id, windowAttributes);
        this.doRequest = (sbjtid) => {
            /*code concealed*/
        }
        this.close = () => {
            /*code concealed*/
        }
    }
}

CookieManipulation = {
    setCookie : function(bind, name, value, days) {
        let d = new Date;
        d.setTime(d.getTime() + 24*60*60*1000*days);
        bind.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
    },
    clearCookie : function(bind, name) {
        CookieManipulation.setCookie(bind, name, "", -1);
    }
}