import { mdiCarSelect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarSelect(props: IconComponentProps) {
  return <Icon path={mdiCarSelect} {...props} />;
}

export { mdiCarSelect as path };
