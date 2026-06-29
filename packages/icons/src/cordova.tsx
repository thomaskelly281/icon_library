import { mdiCordova } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cordova(props: IconComponentProps) {
  return <Icon path={mdiCordova} {...props} />;
}

export { mdiCordova as path };
