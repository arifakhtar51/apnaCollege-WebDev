// const Todo=require("../models/Todo");

// exports.createTodo=async(req,res)=>{
//     try {
//         // fetch title and desc from req ki body se

//         console.log("yaha tak 1");
//         const {title,description}=req.body;
//         console.log("yaha tak 2");
//         const response=await Todo.create({title,description});
//         console.log("yaha tak 3");
//         // send a json response with sucess flag
//         res.status(200).json(
//             {
//             success:true,
//             data:res,
//             messagae:"Entry created sucessfully"

//         }
//         );
//     } catch (error) {
//         console.log(error);
//         console.error(error);
//         console.log("YHA");
//         res.status(500)
//         .json({
//                 success:false,
//                 data:"Error internal",
//                 messagae:error.messagae,
        
//             }
//         )
//     }
// }


// working fine

const Todo = require("../models/Todo");

exports.createTodo = async (req, res) => {
  try {
    // Fetch title and desc from req.body
    const { title, description } = req.body;

    // Check if title and description are present
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        data: null,
        message: "Title and description are required.",
      });
    }

    // Create a new Todo
    const response = await Todo.create({ title, description });

    // Send a JSON response with success flag
    res.status(201).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: null,
      message: "Internal server error",
    });
  }
};


