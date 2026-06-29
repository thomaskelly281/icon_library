import { mdiEngineOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EngineOff(props: IconComponentProps) {
  return <Icon path={mdiEngineOff} {...props} />;
}

export { mdiEngineOff as path };
