import { mdiWebBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebBox(props: IconComponentProps) {
  return <Icon path={mdiWebBox} {...props} />;
}

export { mdiWebBox as path };
