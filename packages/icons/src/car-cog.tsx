import { mdiCarCog } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarCog(props: IconComponentProps) {
  return <Icon path={mdiCarCog} {...props} />;
}

export { mdiCarCog as path };
