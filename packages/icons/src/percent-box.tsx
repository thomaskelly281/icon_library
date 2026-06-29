import { mdiPercentBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PercentBox(props: IconComponentProps) {
  return <Icon path={mdiPercentBox} {...props} />;
}

export { mdiPercentBox as path };
