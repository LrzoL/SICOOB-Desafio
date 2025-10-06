import RoomChat from "../components/RoomsPage/RoomChat.tsx";
import RoomsSideBar from "../components/RoomsPage/RoomsSideBar.tsx";

export default function YourRoomsPage() {
	return (
		<div className="min-h-screen flex items-center justify-center" >
			<RoomsSideBar />
			<RoomChat />
		</div>
	);
}
