const con = require("../../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../../controllers/controllers");

// const mysql = require('mysql');

//board get
modelExports.board_List_Models = () => {
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM Board;";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("board_List Load Success");

                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        resolve(result);
                        console.log('board_List result = ' + result);
                    }    
                });

            } catch (err) {
                console.error("board_List error", err);
            }
            connection.release();
        })
    })      
};

//board_Detail get
modelExports.board_Detail_Models = () => {
    return new Promise((resolve, reject) => {

        const id = controllers.id;
        console.log("디테일 접속 ID = " + id);
        const sql = `SELECT * FROM Board WHERE board_seq = ?`;
        const sql1 = `SELECT * FROM Comments WHERE board_seq = ?`;
        const sql2 = `UPDATE Board SET board_hits = ? WHERE board_seq = ?`

        con.getConnection((err, connection)=>{
            try {
                if(err) throw err;
                console.log("board_Detail Load Success");

                connection.query(sql, [id], (err, result)=>{
                    if(err) {
                        throw err
                    } 
                    console.log('board_Detail result = ' + result);
                    let tmp = result[0];
                    tmp.board_hits += 1;
                    connection.query(sql2, [result[0].board_hits + 1, id], (err, updResult) => {
                        if (err) throw err;
                        console.log("board_update = " + updResult);
                        connection.query(sql1, [id], (err, comResult) => {
                            if (err) throw err;
                            console.log('board_Detail result = ' + comResult);
                            resolve({"board": tmp, "comments": comResult});
                        });   
                    })
                });

            } catch (err) {
                console.error("board_Detail error", err);
            }
            connection.release();
        });
    });
};

// board insert
modelExports.board_Insert_Models = () => {
    return new Promise((resolve, reject) => {

        const name = controllers.name; 
        const title = controllers.title; 
        const content = controllers.content; 
        const image = 'http://localhost:3000/upload/' + controllers.image;

        const sql = "INSERT INTO Board (board_writer, board_title, board_contents, board_image, regdate, modidate) VALUES (?,?,?,?, now(), now())";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("board_Insert Load Success");

                connection.query(sql, [name, title, content, image], (err, result) => {
                    if (err){
                        throw err;
                    } else {
                        console.log('board_Insert result = ' + result);
                        resolve(result);
                    }
            
                });
            } catch (err) {
                console.error("board_Insert error", err);
            }
            connection.release();
        });
    });
};


//board update
modelExports.board_UpDate_Models = () => {

    const seq = controllers.seq;
    const contents = controllers.contents;
    const image = 'http://localhost:3000/upload/' + controllers.image;

    return new Promise((resolve, reject) => {
        const sql = "UPDATE Board SET board_contents = ?, modidate=now(), board_image = ?, WHERE board_seq = ?";
        try {
            con.getConnection((err, connection) => {
                if (err) throw err;
                console.log("connection success!");
                connection.query(sql, [contents, image, seq], (err, result) => {
                    if (err) throw err;
                    console.log("board_Update success!");
                    resolve(result);
                })
            })
        }
        catch(err) {
            console.error("board_Update error");
        }
        connection.release();
    })
}

//board delete
modelExports.board_Delete_Models = () => {
    
    const id = controllers.id;

    return new Promise ((resolve, reject) => {

        const sql = "DELETE FROM Board WHERE board_seq = ?";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("connection success");
                
                    connection.query(sql, [id], (err, result) => {
                        if (err){
                            throw err;
                        } 
                        console.log("board_Delete result = " + result);
                        resolve("board_Delete success");
                    });
            } catch (err) {
                console.error("board_Delete error", err);
            }
            connection.release();
        });
    });
};