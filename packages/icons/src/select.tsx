import { mdiSelect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Select(props: IconComponentProps) {
  return <Icon path={mdiSelect} {...props} />;
}

export { mdiSelect as path };
