import { mdiSubwayVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SubwayVariant(props: IconComponentProps) {
  return <Icon path={mdiSubwayVariant} {...props} />;
}

export { mdiSubwayVariant as path };
