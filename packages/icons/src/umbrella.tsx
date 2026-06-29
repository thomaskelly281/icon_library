import { mdiUmbrella } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Umbrella(props: IconComponentProps) {
  return <Icon path={mdiUmbrella} {...props} />;
}

export { mdiUmbrella as path };
