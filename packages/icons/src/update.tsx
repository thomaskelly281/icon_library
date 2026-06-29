import { mdiUpdate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Update(props: IconComponentProps) {
  return <Icon path={mdiUpdate} {...props} />;
}

export { mdiUpdate as path };
