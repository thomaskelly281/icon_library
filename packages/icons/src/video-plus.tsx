import { mdiVideoPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VideoPlus(props: IconComponentProps) {
  return <Icon path={mdiVideoPlus} {...props} />;
}

export { mdiVideoPlus as path };
