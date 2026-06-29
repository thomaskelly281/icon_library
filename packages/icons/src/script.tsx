import { mdiScript } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Script(props: IconComponentProps) {
  return <Icon path={mdiScript} {...props} />;
}

export { mdiScript as path };
