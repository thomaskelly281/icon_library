import { mdiRodent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Rodent(props: IconComponentProps) {
  return <Icon path={mdiRodent} {...props} />;
}

export { mdiRodent as path };
