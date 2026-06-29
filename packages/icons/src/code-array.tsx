import { mdiCodeArray } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CodeArray(props: IconComponentProps) {
  return <Icon path={mdiCodeArray} {...props} />;
}

export { mdiCodeArray as path };
