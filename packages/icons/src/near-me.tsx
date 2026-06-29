import { mdiNearMe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NearMe(props: IconComponentProps) {
  return <Icon path={mdiNearMe} {...props} />;
}

export { mdiNearMe as path };
