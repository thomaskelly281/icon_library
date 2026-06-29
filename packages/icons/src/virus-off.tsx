import { mdiVirusOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VirusOff(props: IconComponentProps) {
  return <Icon path={mdiVirusOff} {...props} />;
}

export { mdiVirusOff as path };
