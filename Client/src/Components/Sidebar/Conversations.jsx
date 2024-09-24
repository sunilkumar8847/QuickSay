import Conversation from "./Conversation";
import useGetConversations from "../../Hooks/useGetConversations";

const Conversations = () => {
	const {loading, conversations} = useGetConversations();

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			{conversations.map(conversation => (
				<Conversation 
					key={conversation._id}
					conversation={conversation}
				/>
			))}

			{loading ? <span className='loading loading-spinner mx-auto'></span> : null}
		</div>
	);
};
export default Conversations;