import { mdiFirefox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Firefox(props: IconComponentProps) {
  return <Icon path={mdiFirefox} {...props} />;
}

export { mdiFirefox as path };
