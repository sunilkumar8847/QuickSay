import useConversation from "../../Zustand/useConversation";

const Conversation = ({ conversation }) => {
	const { selectedConversation, setSelectedConversation} = useConversation();

	const isSelected = conversation._id === selectedConversation?._id;

	return (
		<>
			<div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
			${isSelected? "bg-sky-500": ""}`}
			onClick={()=>setSelectedConversation(conversation)}>

				<div className='avatar online'>
					<div className='w-12 rounded-full'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
						/>
					</div>
				</div>


				<p className='font-bold text-gray-200'>{conversation.fullName}</p>

			</div>

			<div className='divider my-0 py-0 h-1' />
		</>
	);
};
export default Conversation;