import { mdiMessageBookmark } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MessageBookmark(props: IconComponentProps) {
  return <Icon path={mdiMessageBookmark} {...props} />;
}

export { mdiMessageBookmark as path };
