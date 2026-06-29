import { mdiHeadFlash } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadFlash(props: IconComponentProps) {
  return <Icon path={mdiHeadFlash} {...props} />;
}

export { mdiHeadFlash as path };
