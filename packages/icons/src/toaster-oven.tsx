import { mdiToasterOven } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ToasterOven(props: IconComponentProps) {
  return <Icon path={mdiToasterOven} {...props} />;
}

export { mdiToasterOven as path };
