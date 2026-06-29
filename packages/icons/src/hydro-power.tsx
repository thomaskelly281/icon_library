import { mdiHydroPower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HydroPower(props: IconComponentProps) {
  return <Icon path={mdiHydroPower} {...props} />;
}

export { mdiHydroPower as path };
