import { mdiResponsive } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Responsive(props: IconComponentProps) {
  return <Icon path={mdiResponsive} {...props} />;
}

export { mdiResponsive as path };
