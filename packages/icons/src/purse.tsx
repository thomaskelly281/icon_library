import { mdiPurse } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Purse(props: IconComponentProps) {
  return <Icon path={mdiPurse} {...props} />;
}

export { mdiPurse as path };
