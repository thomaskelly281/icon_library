import { mdiMenuLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuLeft(props: IconComponentProps) {
  return <Icon path={mdiMenuLeft} {...props} />;
}

export { mdiMenuLeft as path };
