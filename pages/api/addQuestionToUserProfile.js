import clientPromise from "../../mongodb-config";

export default async function Users(req, res) {
  if (req.method === "POST") {
    const client = await clientPromise;
    const db = client.db("user");
    console.log(req.body.user);
    const questionArrayDetails = await db
      .collection(req.body.user)
      .find({})
      .toArray();
    const newQuestionArray = questionArrayDetails[0].uploaded;
    newQuestionArray.push(req.body.questionId);
    await db
      .collection(req.body.user)
      .updateOne(
        { _id: questionArrayDetails[0]._id },
        { $set: { uploaded: newQuestionArray } }
      );
    res.json({ message: "Succesful", user: true });
  } else {
    res.json({ message: "This request is not allowed", user: false });
  }
}
