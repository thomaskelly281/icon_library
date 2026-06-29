import { mdiAmpersand } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ampersand(props: IconComponentProps) {
  return <Icon path={mdiAmpersand} {...props} />;
}

export { mdiAmpersand as path };
