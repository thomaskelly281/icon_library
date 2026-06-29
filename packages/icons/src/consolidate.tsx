import { mdiConsolidate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Consolidate(props: IconComponentProps) {
  return <Icon path={mdiConsolidate} {...props} />;
}

export { mdiConsolidate as path };
