import { mdiExcavator } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Excavator(props: IconComponentProps) {
  return <Icon path={mdiExcavator} {...props} />;
}

export { mdiExcavator as path };
