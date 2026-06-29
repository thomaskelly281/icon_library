import { mdiFeather } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Feather(props: IconComponentProps) {
  return <Icon path={mdiFeather} {...props} />;
}

export { mdiFeather as path };
