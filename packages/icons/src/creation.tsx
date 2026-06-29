import { mdiCreation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Creation(props: IconComponentProps) {
  return <Icon path={mdiCreation} {...props} />;
}

export { mdiCreation as path };
