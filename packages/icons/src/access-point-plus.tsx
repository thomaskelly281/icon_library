import { mdiAccessPointPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointPlus(props: IconComponentProps) {
  return <Icon path={mdiAccessPointPlus} {...props} />;
}

export { mdiAccessPointPlus as path };
