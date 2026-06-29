import { mdiSubwayAlertVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SubwayAlertVariant(props: IconComponentProps) {
  return <Icon path={mdiSubwayAlertVariant} {...props} />;
}

export { mdiSubwayAlertVariant as path };
