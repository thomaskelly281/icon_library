import { mdiSetLeftCenter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetLeftCenter(props: IconComponentProps) {
  return <Icon path={mdiSetLeftCenter} {...props} />;
}

export { mdiSetLeftCenter as path };
