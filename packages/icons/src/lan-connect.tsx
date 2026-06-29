import { mdiLanConnect } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LanConnect(props: IconComponentProps) {
  return <Icon path={mdiLanConnect} {...props} />;
}

export { mdiLanConnect as path };
