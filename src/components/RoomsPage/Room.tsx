interface RoomProps {
    title: string;
    url: string;
}

export default function Room({ title, url }: RoomProps) {
    return (
        <div className="bg-gray-600 border-1 border-gray-300 w-full p-3">
            <a href={`/room/${url}`} className="font-semibold text-green-400">{title}</a>
        </div>
    );
}