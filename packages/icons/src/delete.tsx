import { mdiDelete } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Delete(props: IconComponentProps) {
  return <Icon path={mdiDelete} {...props} />;
}

export { mdiDelete as path };
