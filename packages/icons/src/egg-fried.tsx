import { mdiEggFried } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EggFried(props: IconComponentProps) {
  return <Icon path={mdiEggFried} {...props} />;
}

export { mdiEggFried as path };
