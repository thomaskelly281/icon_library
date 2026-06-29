import { mdiStarRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function StarRemove(props: IconComponentProps) {
  return <Icon path={mdiStarRemove} {...props} />;
}

export { mdiStarRemove as path };
