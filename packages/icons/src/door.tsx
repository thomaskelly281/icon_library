import { mdiDoor } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Door(props: IconComponentProps) {
  return <Icon path={mdiDoor} {...props} />;
}

export { mdiDoor as path };
