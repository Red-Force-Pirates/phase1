const con = require("../utils/db");
const modelExports = (module.exports = {});
const controllers = require("../controllers/controllers");

// const mysql = require('mysql');

//comment get
modelExports.comment_List_Models = () => {
    return new Promise((resolve, reject) => {

        const sql = "SELECT * FROM Comments;";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("comment_List Load Success");

                connection.query(sql, (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        resolve(result);
                        console.log('comment_List result = ' + result);
                    }    
                });

            } catch (err) {
                console.error("board_List error", err);
            }
            connection.release();
        })
    })      
};

//comment post
modelExports.comment_Insert_Models = () => {
    const seq = controllers.seq;
    const writer = controllers.writer;
    const contents = controllers.contents;

    return new Promise((resolve, reject) => {

        const sql = "INSERT INTO Comments (board_seq, comment_writer, comment_contents, regdate, comment_like) VALUES (?,?,?,now(),0);";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("comment_Insert Load Success");

                connection.query(sql, [seq, writer, contents], (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        console.log('comment_Insert result = ' + result);
                        resolve(result);
                    }    
                });

            } catch (err) {
                console.error("comment_Insert error", err);
            }
            connection.release();
        })
    })      
};

//comment update
modelExports.comment_Update_Models = () => {
    
    const cSeq = controllers.cSeq;
    const contents = controllers.contents;
    
    return new Promise((resolve, reject) => {

        const sql = `UPDATE Comments SET comment_contents = ?, modidate = now() WHERE comment_seq = ?;`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("comment_Update Load Success");

                connection.query(sql, [contents, cSeq ], (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        console.log('comment_Update result = ' + result);
                        resolve(result);
                    }    
                });

            } catch (err) {
                console.error("comment_Update error", err);
            }
            connection.release();
        })
    })      
}

//comment like
modelExports.comment_Like_Models = () => {

    const cLike = controllers.cLike;
    const cSeq = controllers.cSeq;
    return new Promise((resolve, reject) => {

        const sql = `UPDATE Comments SET comment_like = ? WHERE comment_seq = ?`;

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("comment_Like Load Success");

                connection.query(sql, [cLike, cSeq], (err, result)=>{
                    if(err) {
                        throw err
                    } else {
                        console.log('comment_Like result = ' + result);
                        resolve(result);
                    }    
                });

            } catch (err) {
                console.error("comment_Like error", err);
            }
            connection.release();
        })
    })      
}

//comment delete
modelExports.comment_Delete_Models = () => {
    
    const id = controllers.id;

    return new Promise ((resolve, reject) => {

        const sql = "DELETE FROM Comments WHERE board_seq = ?";

        con.getConnection((err, connection) => {
            try {
                if (err) throw err;
                console.log("connection success");
                
                    connection.query(sql, [id], (err, result) => {
                        if (err){
                            throw err;
                        } 
                        console.log("comment_Delete result = " + result);
                        resolve("comment_Delete success");
                    });
            } catch (err) {
                console.error("comment_Delete error", err);
            }
            connection.release();
        });
    });
};