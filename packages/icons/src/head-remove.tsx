import { mdiHeadRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadRemove(props: IconComponentProps) {
  return <Icon path={mdiHeadRemove} {...props} />;
}

export { mdiHeadRemove as path };
