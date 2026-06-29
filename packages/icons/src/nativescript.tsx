import { mdiNativescript } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nativescript(props: IconComponentProps) {
  return <Icon path={mdiNativescript} {...props} />;
}

export { mdiNativescript as path };
