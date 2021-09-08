const {
  checkUserByEmail,
  checkUserByUserName,
  getUser,
  postUser,
} = require("./service");


//signIn
exports.Login = async(request, reply) => {
  const { userName, password } = request.body;
  try {
      const user = await checkUserByUserName(userName);
      if (!user) return reply.status(200).send({ status: 'User does Not exist....'});

      const result = await getUser(userName,password);
      if (!result) return reply.status(200).send({ status: "credentials not match"});
      reply.status(200).send({ status: "credentials match ..", result: result });
  } catch (error) {
      reply.status(500).send({ status: "fail" });
  }
};

// signUp
exports.SignUp = async(req, res) => {
  const { email } = req.body;

  //console.log(req.body);

  try {
      const user = await checkUserByEmail(email);
      if (user) return res.status(200).send('user exit already');
      const userAdded=await postUser(req.body);
      console.log(userAdded);
      return res.status(201).send(userAdded);
  } catch (error) {
      return res.status(500).send({ error });
  }

};
