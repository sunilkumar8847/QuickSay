import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;    //it's same as (const id = req.params.id
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: {$all: [senderId, receiverId]}
        });

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }
        
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        // await conversation.save();
        // await newMessage.save(); //These awaits will be executed one by one so they will take twice the time

        await Promise.all([conversation.save(), newMessage.save()]);    //Executes parallely
        
        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in messsage controller: ", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
};

export const getMessge = async (req, res) => {
    try {
        const {id: userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]}
        }).populate("messages");    //not referance bot actual message

        if(!conversation) return res.status(200).json([]);

        const message = conversation.messages;

        res.status(200).json(message);
        
    } catch (error) {
        console.log("Error in messsage controller: ", error.message);
        res.status(500).json({error: "Internal Server error"});
    }
}


