import { mdiVanUtility } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function VanUtility(props: IconComponentProps) {
  return <Icon path={mdiVanUtility} {...props} />;
}

export { mdiVanUtility as path };
