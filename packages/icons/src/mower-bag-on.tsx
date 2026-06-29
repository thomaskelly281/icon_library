import { mdiMowerBagOn } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MowerBagOn(props: IconComponentProps) {
  return <Icon path={mdiMowerBagOn} {...props} />;
}

export { mdiMowerBagOn as path };
