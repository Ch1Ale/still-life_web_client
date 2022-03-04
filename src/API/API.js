const baseURL = "/api";

async function sendNewMood(value){
    const url = "/mood";

    return new Promise((resolve, reject) => {
        fetch(baseURL+ url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {mood:value} ),
        }).then((response) => {
            if(response.ok){
                resolve(null);
            }else{
                response.json()
                .then( (obj) => {reject (obj);} )
                .catch( (err) => {reject({ error: [{param: "Application", msg: "Cannot parse server response"}] }) }); // something else
            }
        }).catch( (err) => {reject({ error: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

async function sendNewSeason(value){
    const url = "/season";

    return new Promise((resolve, reject) => {
        fetch(baseURL+ url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify( {season:value} ),
        }).then((response) => {
            if(response.ok){
                resolve(null);
            }else{
                response.json()
                .then( (obj) => {reject (obj);} )
                .catch( (err) => {reject({ error: [{param: "Application", msg: "Cannot parse server response"}] }) }); // something else
            }
        }).catch( (err) => {reject({ error: [{ param: "Server", msg: "Cannot communicate" }] }) }); // connection errors
    });
}

const API = {sendNewMood, sendNewSeason}

export default API;
