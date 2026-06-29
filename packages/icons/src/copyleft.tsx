import { mdiCopyleft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Copyleft(props: IconComponentProps) {
  return <Icon path={mdiCopyleft} {...props} />;
}

export { mdiCopyleft as path };
