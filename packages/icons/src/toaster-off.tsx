import { mdiToasterOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToasterOff(props: IconComponentProps) {
  return <Icon path={mdiToasterOff} {...props} />;
}

export { mdiToasterOff as path };
