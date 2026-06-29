import { mdiCloud } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cloud(props: IconComponentProps) {
  return <Icon path={mdiCloud} {...props} />;
}

export { mdiCloud as path };
