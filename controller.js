const {
  checkUserByEmail,
  getUser,
  postUser,
} = require("./service");


//signIn
exports.Login = async(request, reply) => {
  const { email, password } = request.body;
  try {
      const user = await checkUserByEmail(email);
      if (!user) return reply.status(200).send('boss sahi email enter karu xD');

      const result = await getUser(email,password);
      if (!result) return reply.status(200).send("credentials not match");
      return reply.status(200).send({ response: result });
  } catch (error) {
      return reply.status(500).send({ message: error });
  }
};


// signUp
exports.SignUp = async(req, res) => {
  const { email } = req.body;
  console.log(req.body);

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
