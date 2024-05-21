import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col'>
			<SearchInput />
            <hr className="opacity-50 mt-6"/>
			<Conversations />
			<LogoutButton />
		</div>
	);
};
export default Sidebar;