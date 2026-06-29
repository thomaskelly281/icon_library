import { mdiPenguin } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Penguin(props: IconComponentProps) {
  return <Icon path={mdiPenguin} {...props} />;
}

export { mdiPenguin as path };
