import useAuthStore from "../hooks/useAuthStore";

const Profile = ({ src }: { src?: string }) => {
    const { user } = useAuthStore()
    return <div className="flex gap-2 ml-4">
        <div className="flex flex-col">
            <span className="paragraph-sm font-black">{user?.name}</span>
            <span className="text-caption text-grey">{user?.role}</span>
        </div>
        <div className="profile-circle w-[40px] aspect-square bg-primary text-white rounded-full">
            {src ? <img src={src} className="w-full h-full" alt="Avathar Image" /> :
                <span className="heading-md font-black flex items-center justify-center h-full">{user?.name[0]}</span>
            }
        </div>
    </div>
}

export default Profile;