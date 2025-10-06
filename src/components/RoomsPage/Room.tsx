import { useAppContext } from "../../AppContext";

interface AppContextType {
    setChatUrl: (url: string) => void;
    setChatTitle: (title: string) => void;
}

interface RoomProps {
    title: string;
    url: string;
}

export default function Room({ title, url }: RoomProps) {
    const { setChatUrl, setChatTitle } = useAppContext() as AppContextType;

    return (
        <li>
                <button rel="noopener noreferrer" onClick={() => {
                    setChatUrl(`/chat/${url}`);
                    setChatTitle(title);
                }} className="text-gray-300 flex items-center p-2 space-x-3 hover:bg-gray-700 border-t-1 border-b-1 border-gray-300/50 w-full cursor-pointer">
                    {title}
                </button>
            </li>
    );
}