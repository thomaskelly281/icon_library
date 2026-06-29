import { mdiPolymer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Polymer(props: IconComponentProps) {
  return <Icon path={mdiPolymer} {...props} />;
}

export { mdiPolymer as path };
