import { mdiChiliMild } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChiliMild(props: IconComponentProps) {
  return <Icon path={mdiChiliMild} {...props} />;
}

export { mdiChiliMild as path };
