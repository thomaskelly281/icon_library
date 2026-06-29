import { mdiPeanut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Peanut(props: IconComponentProps) {
  return <Icon path={mdiPeanut} {...props} />;
}

export { mdiPeanut as path };
