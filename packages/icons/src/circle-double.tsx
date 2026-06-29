import { mdiCircleDouble } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CircleDouble(props: IconComponentProps) {
  return <Icon path={mdiCircleDouble} {...props} />;
}

export { mdiCircleDouble as path };
