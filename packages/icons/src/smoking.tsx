import { mdiSmoking } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Smoking(props: IconComponentProps) {
  return <Icon path={mdiSmoking} {...props} />;
}

export { mdiSmoking as path };
