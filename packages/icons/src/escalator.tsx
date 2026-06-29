import { mdiEscalator } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Escalator(props: IconComponentProps) {
  return <Icon path={mdiEscalator} {...props} />;
}

export { mdiEscalator as path };
