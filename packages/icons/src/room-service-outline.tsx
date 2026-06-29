import { mdiRoomServiceOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RoomServiceOutline(props: IconComponentProps) {
  return <Icon path={mdiRoomServiceOutline} {...props} />;
}

export { mdiRoomServiceOutline as path };
