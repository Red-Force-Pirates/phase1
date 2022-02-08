const session = require("express-session");
const models = require("../models/models");

// // Profile
// exports.getProfile_Controllers = (req, res) => {
//     models.mypage.getProfile().then( (result) => {
//         console.log("Profile : ", result);
//         console.log("Type : ", typeof(result));
//         res.send(result);
//     });
// };

// exports.getLogin_Controllers = (req, res) => {
//     models.mypage.getLogin().then( (result) => {
//         console.log("Profile : ", result);
//         console.log("Type : ", typeof(result));
//         res.send(result);
//     });
// };

// exports.putProfile_Controllers = (req, res) => {

//     exports.name = req.body.name;
//     exports.profile = req.body.profile;
//     exports.favorite = req.body.favorite;

//     models.mypage.putProfile().then( (result) => {
//         console.log("Profile put : ", result);
//         console.log("Profile put type: ", typeof(result));
//         res.send(result);
//     });
// };


// //========================================= 로그인, 회원가입

// // 로그인 GET
// exports.getLogin = (req, res) => {
//     models.logreg.getLoginDB()
//     // 임시로 값을 넣어 주었다.
//     res.send({data: 'login get 성공'})
// }

// // 로그인 POST
// exports.postLogin = (req, res) => {
//     // 입력받은 id,pw를 Login_models에서 사용가능
//     exports.userId = req.query.user_id
//     exports.userPw = req.query.user_pw

//     models.logreg.postLoginDB().then((result) => {
//         res.send(result);
//     })
// }

// // 회원가입 GET
// exports.getRegister = (req, res) => {
//     models.logreg.getRegisterDB()
//     // 임시로 값을 넣어 주었다.
//     res.send({data: 'register get 성공'})
// }

// // 회언가입 POST
// exports.postRegister = (req, res) => {
//     // 입력받은 id,pw를 Login_models에서 사용가능
//     exports.userId = req.query.user_id
//     exports.userPw = req.query.user_pw
//     exports.userName = req.query.user_name
//     exports.userEmail = req.query.user_email

//     models.logreg.postRegisterDB().then((result) => {
//         res.send(result)
//     })
// }

//=========================================

// Board List
exports.board_List_Controllers = (req, res) => {
  models.board.board_List_Models().then((result) => {
      res.send(result);
  });
};

// Board Detail
exports.board_Detail_Controllers = (req, res) => {

  // exports.id = req.body.id;
  exports.id = req.params.id;
  console.log("Controllers req.params.id = " + req.params.id)

  models.board.board_Detail_Models().then((result) => {
      res.send(result);
  });
};

// Board Insert
exports.board_Insert_Controllers = (req, res) => {

  exports.name = req.body.name;
  exports.title = req.body.title;
  exports.content = req.body.content;
  exports.image = req.file.filename;

  models.board.board_Insert_Models().then((result) => {
    // res.redirect('/board');
    res.send(result);
  });
};

// Board Update
exports.board_Update_Controllers = (req, res) => {

  exports.seq = req.body.seq;
  exports.content = req.body.content;
  exports.image = req.file.filename;
  models.board.board_Update_Models().then((result) => {
    res.send(result);
  });
};

// Board Delete
exports.board_Delete_Controllers = (req, res) => {
  
  exports.id = req.params.id;

  models.board.board_Delete_Models().then((result) => {
    res.send(result);
  });
};

// Comment Get
exports.comment_List_Controllers = (req, res) => {
  models.comment.comment_List_Models().then((result) => {
    res.send(result);
  });
}

// Comment Like
exports.comment_Like_Controllers = (req, res) => {
  exports.cSeq = req.params.cSeq
  exports.cLike = req.params.cLike
  models.comment.comment_Like_Models().then((result) => {
    res.send(result);
  });
}

// Comment Post
exports.comment_Insert_Controllers = (req, res) => {

  exports.seq = req.body.seq;
  exports.writer = req.body.writer;
  exports.contents = req.body.contents;

  models.comment.comment_Insert_Models().then((result) => {
    // res.redirect('/board');
    res.send(result);
  });
};

// Comment Update
exports.comment_Update_Controllers = (req, res) => {
  exports.cSeq = req.params.cSeq;
  exports.contents = req.params.contents;

  models.comment.comment_Update_Models().then((result) => {
    res.send(result);
  });
}

// Comment Delete
exports.comment_Delete_Controllers = (req, res) => {
  exports.id = req.body.id;

  models.comment.comment_Delete_Controllers().then((result) => {
    res.send(result);
  });
}