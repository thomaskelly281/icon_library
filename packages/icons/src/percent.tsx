import { mdiPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Percent(props: IconComponentProps) {
  return <Icon path={mdiPercent} {...props} />;
}

export { mdiPercent as path };
