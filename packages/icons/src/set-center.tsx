import { mdiSetCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetCenter(props: IconComponentProps) {
  return <Icon path={mdiSetCenter} {...props} />;
}

export { mdiSetCenter as path };
