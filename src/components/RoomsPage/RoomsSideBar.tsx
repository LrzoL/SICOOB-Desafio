import Room from "./Room.tsx";

export default function RoomsSideBar() {
    return (
        <aside className="z-1 left-0 mt-25 absolute pt-6 w-60 bg-gray-900 text-gray-100 dark:text-gray-800 h-screen">
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-center text-sm font-semibold tracking-widest uppercase text-white">Your rooms</h2>
			<div className="divide-y dark:divide-gray-300">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
			<Room title="Room 1" url="ola eu sou url" />
		</ul>
	</div>
		</div>
	</nav>
</aside>
    );
}