import { mdiEmby } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Emby(props: IconComponentProps) {
  return <Icon path={mdiEmby} {...props} />;
}

export { mdiEmby as path };
