import { mdiStarDavid } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarDavid(props: IconComponentProps) {
  return <Icon path={mdiStarDavid} {...props} />;
}

export { mdiStarDavid as path };
