import { mdiWrenchCheck } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchCheck(props: IconComponentProps) {
  return <Icon path={mdiWrenchCheck} {...props} />;
}

export { mdiWrenchCheck as path };
