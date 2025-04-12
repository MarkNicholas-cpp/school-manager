type MessageTileProps = {
    name: string;
    time: string;
    message: string;
    imageUrl?: string; // optional, fallback avatar if not provided
  };
  
  const MessageTile = ({ name, time, message, imageUrl }: MessageTileProps) => {
    return (
      <div className="flex gap-4 overflow-hidden">
        <div className="profile-face w-[40px] aspect-square bg-[var(--color-grey)] rounded-full overflow-hidden self-baseline">
          <img
            src={
              imageUrl ||
              "https://www.gravatar.com/avatar/?d=mp" // fallback image
            }
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="messaged-user-name paragraph-md">{name}</div>
            <div className="text-[var(--color-grey)] text-caption-small">
              {time}
            </div>
          </div>
          <div className="text-ellipsis text-caption-small text-[var(--color-grey)]">
            {message}
          </div>
        </div>
      </div>
    );
  };
  
  export default MessageTile;
  