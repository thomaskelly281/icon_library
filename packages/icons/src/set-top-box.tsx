import { mdiSetTopBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetTopBox(props: IconComponentProps) {
  return <Icon path={mdiSetTopBox} {...props} />;
}

export { mdiSetTopBox as path };
