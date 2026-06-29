import { mdiKeyStar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KeyStar(props: IconComponentProps) {
  return <Icon path={mdiKeyStar} {...props} />;
}

export { mdiKeyStar as path };
