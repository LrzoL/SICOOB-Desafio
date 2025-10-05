import Room from "./Room.tsx";

export default function RoomsSideBar() {
    return (
        <aside className="z-4 left-0 mt-25 absolute pt-6 w-60 bg-gray-900 text-gray-100 dark:text-gray-800 h-screen">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-center text-sm font-semibold tracking-widest uppercase text-white">Your rooms</h2>
			<div className="flex flex-col space-y-1 text-gray-200">
				<Room 
				title="Sala de aula do professor tal" 
				url=""
				/>
			</div>
		</div>
	</nav>
</aside>
    );
}
