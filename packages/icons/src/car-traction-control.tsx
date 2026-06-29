import { mdiCarTractionControl } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarTractionControl(props: IconComponentProps) {
  return <Icon path={mdiCarTractionControl} {...props} />;
}

export { mdiCarTractionControl as path };
