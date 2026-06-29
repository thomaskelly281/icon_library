import { mdiHeadPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HeadPlus(props: IconComponentProps) {
  return <Icon path={mdiHeadPlus} {...props} />;
}

export { mdiHeadPlus as path };
