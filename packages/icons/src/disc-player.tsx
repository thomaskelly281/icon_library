import { mdiDiscPlayer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DiscPlayer(props: IconComponentProps) {
  return <Icon path={mdiDiscPlayer} {...props} />;
}

export { mdiDiscPlayer as path };
