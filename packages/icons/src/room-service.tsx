import { mdiRoomService } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RoomService(props: IconComponentProps) {
  return <Icon path={mdiRoomService} {...props} />;
}

export { mdiRoomService as path };
