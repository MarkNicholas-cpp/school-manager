import MessageTile from "./MessageTile";

const MessagesNotification = () => {
    return <div className="">
        <p className="heading-md font-semibold mb-5">Messages</p>
        <div className="flex flex-col gap-5 overflow-y-scroll scrollbar-hide">
            <MessageTile
                name="Mr. Allen"
                time="7:30 AM"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fuga dolorem minima error quia numquam. At veritatis doloremque voluptate pariatur, tenetur culpa, repellendus magnam accusamus sunt sequi ipsum eaque totam."
                imageUrl="https://media.creativemornings.com/uploads/user/avatar/49419/Bechtel_Profile_Square.jpg"
            />
            <MessageTile
                name="Procratinator"
                time="8:30 AM"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi fuga dolorem minima error quia numquam. At veritatis doloremque voluptate pariatur, tenetur culpa, repellendus magnam accusamus sunt sequi ipsum eaque totam."
                imageUrl="https://cdn-useast1.kapwing.com/static/templates/square-and-background-profile-picture-maker-regular-34cf7bc5.webp"
            />
            
            
        </div>
    </div>;
};

export default MessagesNotification;