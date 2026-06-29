import { mdiLavaLamp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LavaLamp(props: IconComponentProps) {
  return <Icon path={mdiLavaLamp} {...props} />;
}

export { mdiLavaLamp as path };
